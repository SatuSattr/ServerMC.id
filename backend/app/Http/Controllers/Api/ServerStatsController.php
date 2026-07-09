<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateServerStatsRequest;
use App\Http\Responses\ApiResponse;
use App\Models\Server;
use Illuminate\Http\JsonResponse;

class ServerStatsController extends Controller
{
    public function update(UpdateServerStatsRequest $request, string $id): JsonResponse
    {
        $server = Server::find($id);
        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        $server->stats()->updateOrCreate(
            ['server_id' => $server->id],
            $request->validated()
        );

        return ApiResponse::success($server->stats);
    }
}
