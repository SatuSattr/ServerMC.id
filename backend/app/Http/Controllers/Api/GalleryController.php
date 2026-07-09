<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGalleryRequest;
use App\Http\Responses\ApiResponse;
use App\Models\Gallery;
use App\Models\Server;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    public function index(string $serverId): JsonResponse
    {
        $server = Server::find($serverId);
        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        return ApiResponse::success(
            $server->gallery()->orderBy('sort_order')->get()
        );
    }

    public function store(StoreGalleryRequest $request, string $serverId): JsonResponse
    {
        $server = Server::find($serverId);
        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        if ($server->owner_id !== auth()->id()) {
            return ApiResponse::forbidden();
        }

        $path = $request->file('image')->store("servers/{$server->id}/gallery", 'public');

        $gallery = $server->gallery()->create([
            'url' => Storage::url($path),
            'caption' => $request->input('caption', ''),
            'sort_order' => $server->gallery()->max('sort_order') + 1,
        ]);

        return ApiResponse::success($gallery, 201);
    }

    public function destroy(string $serverId, string $galleryId): JsonResponse
    {
        $server = Server::find($serverId);
        if (!$server) {
            return ApiResponse::notFound('Server not found');
        }

        $image = Gallery::where('server_id', $serverId)->find($galleryId);
        if (!$image) {
            return ApiResponse::notFound('Image not found');
        }

        if ($server->owner_id !== auth()->id()) {
            return ApiResponse::forbidden();
        }

        Storage::disk('public')->delete(str_replace('/storage/', '', $image->url));
        $image->delete();

        return ApiResponse::success(null, 204);
    }
}
