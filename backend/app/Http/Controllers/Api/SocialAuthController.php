<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Responses\ApiResponse;
use App\Services\SocialAuthService;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    public function __construct(
        private readonly SocialAuthService $socialAuthService
    ) {}

    public function redirect(string $provider)
    {
        if ($provider !== 'discord') {
            return ApiResponse::error('INVALID_PROVIDER', 'Provider not supported', 400);
        }

        $url = Socialite::driver($provider)
            ->stateless()
            ->redirect()
            ->getTargetUrl();

        return ApiResponse::success(['redirect_url' => $url]);
    }

    public function callback(string $provider)
    {
        if ($provider !== 'discord') {
            return ApiResponse::error('INVALID_PROVIDER', 'Provider not supported', 400);
        }

        try {
            $socialUser = Socialite::driver($provider)->stateless()->user();
            return $this->socialAuthService->handleCallback($provider, $socialUser);
        } catch (\Exception $e) {
            return ApiResponse::error('OAUTH_FAILED', 'Authentication failed: ' . $e->getMessage(), 400);
        }
    }
}
