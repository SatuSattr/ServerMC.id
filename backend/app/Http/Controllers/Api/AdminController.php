<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Responses\ApiResponse;
use App\Models\Server;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function servers(): JsonResponse
    {
        if (!auth()->user()->isAdmin()) {
            return ApiResponse::forbidden();
        }

        return ApiResponse::success(
            Server::with(['owner:id,username', 'tags', 'stats'])
                ->withCount('votes')
                ->latest()
                ->paginate(20)
        );
    }

    public function updateServer(Request $request, string $id): JsonResponse
    {
        if (!auth()->user()->isAdmin()) {
            return ApiResponse::forbidden();
        }

        $server = Server::find($id);
        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        $validated = $request->validate([
            'status' => ['required', 'string', 'in:pending,approved,rejected,banned'],
            'status_note' => ['nullable', 'string', 'max:500'],
        ]);

        $server->update($validated);

        return ApiResponse::success($server);
    }

    public function users(): JsonResponse
    {
        if (!auth()->user()->isAdmin()) {
            return ApiResponse::forbidden();
        }

        return ApiResponse::success(
            User::withCount('servers')->latest()->paginate(20)
        );
    }

    public function updateUser(Request $request, string $id): JsonResponse
    {
        if (!auth()->user()->isAdmin()) {
            return ApiResponse::forbidden();
        }

        $user = User::find($id);
        if (!$user) {
            return ApiResponse::notFound('User not found');
        }

        $validated = $request->validate([
            'role' => ['required', 'string', 'in:user,admin'],
        ]);

        $user->update($validated);

        return ApiResponse::success($user);
    }

    public function createTag(Request $request): JsonResponse
    {
        if (!auth()->user()->isAdmin()) {
            return ApiResponse::forbidden();
        }

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:50', 'unique:tags,name'],
            'slug' => ['required', 'string', 'max:50', 'unique:tags,slug'],
        ]);

        $tag = Tag::create($validated);

        return ApiResponse::success($tag, 201);
    }

    public function destroyTag(string $id): JsonResponse
    {
        if (!auth()->user()->isAdmin()) {
            return ApiResponse::forbidden();
        }

        $tag = Tag::find($id);
        if (!$tag) {
            return ApiResponse::notFound('Tag not found');
        }

        $tag->delete();

        return ApiResponse::success(null, 204);
    }
}
