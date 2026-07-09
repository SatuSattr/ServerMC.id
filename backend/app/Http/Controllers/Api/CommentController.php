<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Responses\ApiResponse;
use App\Models\Server;
use Illuminate\Http\JsonResponse;

class CommentController extends Controller
{
    public function index(string $serverId): JsonResponse
    {
        $server = Server::find($serverId);
        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        $comments = $server->comments()
            ->with('user:id,username')
            ->latest()
            ->paginate(20);

        return ApiResponse::success($comments);
    }

    public function store(StoreCommentRequest $request, string $serverId): JsonResponse
    {
        $server = Server::find($serverId);
        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        $comment = $server->comments()->create([
            'user_id' => auth()->id(),
            'content' => $request->validated()['content'],
        ]);

        $comment->load('user:id,username');

        return ApiResponse::success($comment, 201);
    }
}
