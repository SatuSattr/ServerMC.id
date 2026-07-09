<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreServerRequest;
use App\Http\Requests\UpdateServerRequest;
use App\Http\Responses\ApiResponse;
use App\Models\Server;
use App\Services\ServerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ServerController extends Controller
{
    public function __construct(
        private readonly ServerService $serverService
    ) {}

    public function index(Request $request): JsonResponse
    {
        return $this->serverService->list($request->only(['tag', 'search', 'sort', 'per_page', 'cursor']));
    }

    public function show(string $slug): JsonResponse
    {
        return $this->serverService->show($slug);
    }

    public function store(StoreServerRequest $request): JsonResponse
    {
        return $this->serverService->store(
            $request->validated(),
            $request->input('tags'),
            $request->input('socials'),
            $request->allFiles()
        );
    }

    public function update(UpdateServerRequest $request, string $id): JsonResponse
    {
        $server = Server::find($id);
        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        if ($server->owner_id !== auth()->id() && !auth()->user()->isAdmin()) {
            return ApiResponse::forbidden('You do not own this server');
        }

        return $this->serverService->update(
            $server,
            $request->validated(),
            $request->input('tags'),
            $request->input('socials')
        );
    }

    public function destroy(string $id): JsonResponse
    {
        $server = Server::find($id);
        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        if ($server->owner_id !== auth()->id() && !auth()->user()->isAdmin()) {
            return ApiResponse::forbidden('You do not own this server');
        }

        return $this->serverService->destroy($server);
    }
}
