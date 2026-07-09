<?php

namespace App\Services;

use App\Http\Responses\ApiResponse;
use App\Models\Server;
use App\Models\ServerStat;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ServerService
{
    public function list(array $filters = []): JsonResponse
    {
        $query = Server::with(['tags', 'stats', 'owner'])
            ->where('status', 'approved');

        if (!empty($filters['tag'])) {
            $query->whereHas('tags', fn($q) => $q->where('slug', $filters['tag']));
        }

        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                $q->where('name', 'ilike', "%{$search}%")
                  ->orWhere('description_short', 'ilike', "%{$search}%");
            });
        }

        $sort = $filters['sort'] ?? 'votes';
        $query->when($sort === 'votes', fn($q) => $q->withCount('votes')->orderBy('votes_count', 'desc'))
              ->when($sort === 'players', fn($q) => $q->orderByDesc(
                  ServerStat::select('players_online')->whereColumn('server_id', 'servers.id')
              ))
              ->when($sort === 'newest', fn($q) => $q->orderBy('submitted_at', 'desc'));

        $servers = $query->cursorPaginate($filters['per_page'] ?? 20);

        return ApiResponse::success($servers);
    }

    public function show(string $slug): JsonResponse
    {
        $server = Server::with([
            'tags', 'socials.platform', 'stats', 'owner',
            'gallery' => fn($q) => $q->orderBy('sort_order'),
        ])->where('slug', $slug)->first();

        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        $server->loadCount('votes');

        return ApiResponse::success($server);
    }

    public function store(array $data, ?array $tags, ?array $socials, ?array $files): JsonResponse
    {
        $server = Server::create([
            'owner_id' => auth()->id(),
            'name' => $data['name'],
            'slug' => Str::slug($data['name']),
            'java_ip' => $data['java_ip'],
            'java_port' => $data['java_port'] ?? 25565,
            'bedrock_ip' => $data['bedrock_ip'] ?? null,
            'bedrock_port' => $data['bedrock_port'] ?? null,
            'supported_versions' => $data['supported_versions'] ?? '',
            'server_location' => $data['server_location'] ?? '',
            'launch_year' => $data['launch_year'] ?? null,
            'contact_name' => $data['contact_name'] ?? null,
            'contact_method' => $data['contact_method'] ?? null,
            'description_short' => $data['description_short'] ?? '',
            'description_markdown' => $data['description_markdown'] ?? '',
        ]);

        if ($tags) {
            $server->tags()->sync($tags);
        }

        if ($socials) {
            foreach ($socials as $i => $social) {
                $server->socials()->create([
                    'platform_id' => $social['platform_id'],
                    'url' => $social['url'],
                    'label' => $social['label'] ?? '',
                    'sort_order' => $i,
                ]);
            }
        }

        if ($files) {
            if (isset($files['logo'])) {
                $path = $files['logo']->store("servers/{$server->id}", 'public');
                $server->update(['logo_url' => Storage::url($path)]);
            }
            if (isset($files['banner_card'])) {
                $path = $files['banner_card']->store("servers/{$server->id}", 'public');
                $ext = $files['banner_card']->extension();
                $server->update([
                    'banner_card_url' => Storage::url($path),
                    'banner_card_type' => in_array($ext, ['mp4', 'webm']) ? 'video' : 'image',
                ]);
            }
            if (isset($files['banner_detail'])) {
                $path = $files['banner_detail']->store("servers/{$server->id}", 'public');
                $ext = $files['banner_detail']->extension();
                $server->update([
                    'banner_detail_url' => Storage::url($path),
                    'banner_detail_type' => in_array($ext, ['mp4', 'webm']) ? 'video' : 'image',
                ]);
            }
        }

        return ApiResponse::success($server->load(['tags', 'socials.platform']), 201);
    }

    public function update(Server $server, array $data, ?array $tags, ?array $socials): JsonResponse
    {
        $server->update($data);

        if ($tags !== null) {
            $server->tags()->sync($tags);
        }

        if ($socials !== null) {
            $server->socials()->delete();
            foreach ($socials as $i => $social) {
                $server->socials()->create([
                    'platform_id' => $social['platform_id'],
                    'url' => $social['url'],
                    'label' => $social['label'] ?? '',
                    'sort_order' => $i,
                ]);
            }
        }

        return ApiResponse::success($server->fresh(['tags', 'socials.platform']));
    }

    public function destroy(Server $server): JsonResponse
    {
        $server->delete();
        return ApiResponse::success(null, 204);
    }
}
