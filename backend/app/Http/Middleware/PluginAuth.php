<?php

namespace App\Http\Middleware;

use App\Http\Responses\ApiResponse;
use App\Models\Server;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PluginAuth
{
    public function handle(Request $request, Closure $next): Response
    {
        $apiKey = $request->bearerToken();

        if (!$apiKey) {
            return ApiResponse::unauthorized('Missing API key');
        }

        $server = Server::where('plugin_key', $apiKey)->first();

        if (!$server) {
            return ApiResponse::unauthorized('Invalid API key');
        }

        $request->merge(['authenticated_server' => $server]);

        return $next($request);
    }
}
