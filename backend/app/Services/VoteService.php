<?php

namespace App\Services;

use App\Enums\ServerStatus;
use App\Http\Responses\ApiResponse;
use App\Models\Server;
use App\Models\Vote;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

class VoteService
{
    public function store(array $data, string $ip): JsonResponse
    {
        $server = Server::with('owner')->find($data['server_id']);
        if (!$server || $server->status !== ServerStatus::Approved) {
            return ApiResponse::notFound('Server not found');
        }

        if (auth()->check() && auth()->id() === $server->owner_id) {
            return ApiResponse::error('SELF_VOTE', 'You cannot vote on your own server', 403);
        }

        $recentVote = Vote::recentByIgn($server->id, $data['voter_name'])->exists();
        if ($recentVote) {
            return ApiResponse::error('VOTE_COOLDOWN', 'This player already voted in the last 24 hours', 429);
        }

        $ipVoteCount = Vote::where('ip_address', $ip)
            ->where('created_at', '>=', now()->subHour())
            ->count();
        if ($ipVoteCount >= 5) {
            return ApiResponse::error('IP_LIMIT', 'Too many votes from this IP address', 429);
        }

        $vote = Vote::create([
            'server_id' => $server->id,
            'voter_name' => $data['voter_name'],
            'fingerprint' => $data['fingerprint'] ?? null,
            'ip_address' => $ip,
            'verified' => false,
        ]);

        return ApiResponse::success($vote->load('server:id,name,slug'), 201);
    }

    public function status(string $slug): JsonResponse
    {
        $server = Server::where('slug', $slug)->first();
        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        $totalVotes = $server->votes()->count();
        $todayVotes = $server->votes()->whereDate('created_at', today())->count();

        return ApiResponse::success([
            'total' => $totalVotes,
            'today' => $todayVotes,
            'can_vote' => true,
        ]);
    }

    public function leaderboard(string $slug, string $period = 'all'): JsonResponse
    {
        $server = Server::where('slug', $slug)->first();
        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        $query = $server->votes();

        if ($period === 'monthly') {
            $query->where('created_at', '>=', now()->startOfMonth());
        } elseif ($period === 'weekly') {
            $query->where('created_at', '>=', now()->startOfWeek());
        }

        $topVoters = $query->selectRaw('voter_name, COUNT(*) as total')
            ->groupBy('voter_name')
            ->orderByDesc('total')
            ->limit(50)
            ->get();

        return ApiResponse::success($topVoters);
    }

    public function verify(string $voteId): JsonResponse
    {
        $vote = Vote::find($voteId);
        if (!$vote) {
            return ApiResponse::notFound('Vote not found');
        }

        $vote->update([
            'verified' => true,
            'verified_at' => now(),
        ]);

        return ApiResponse::success($vote);
    }
}
