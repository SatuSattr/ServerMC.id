<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVoteRequest;
use App\Services\VoteService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VoteController extends Controller
{
    public function __construct(
        private readonly VoteService $voteService
    ) {}

    public function store(StoreVoteRequest $request): JsonResponse
    {
        return $this->voteService->store($request->validated(), $request->ip());
    }

    public function status(string $slug): JsonResponse
    {
        return $this->voteService->status($slug);
    }

    public function leaderboard(string $slug, Request $request): JsonResponse
    {
        return $this->voteService->leaderboard($slug, $request->query('period', 'all'));
    }

    public function verify(string $id): JsonResponse
    {
        return $this->voteService->verify($id);
    }
}
