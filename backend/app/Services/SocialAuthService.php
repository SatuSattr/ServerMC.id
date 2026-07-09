<?php

namespace App\Services;

use App\Http\Responses\ApiResponse;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Socialite\Contracts\User as SocialUser;

class SocialAuthService
{
    public function handleCallback(string $provider, SocialUser $socialUser): JsonResponse
    {
        $user = User::where('oauth_id', $socialUser->getId())
            ->where('oauth_provider', $provider)
            ->first();

        if (!$user) {
            $existingUser = User::where('email', $socialUser->getEmail())->first();
            if ($existingUser) {
                $existingUser->update([
                    'oauth_id' => $socialUser->getId(),
                    'oauth_provider' => $provider,
                    'oauth_token' => $socialUser->token,
                    'oauth_refresh_token' => $socialUser->refreshToken,
                ]);
                $user = $existingUser;
            } else {
                $user = User::create([
                    'username' => $socialUser->getNickname() ?? explode('@', $socialUser->getEmail())[0],
                    'email' => $socialUser->getEmail(),
                    'password' => bcrypt(Str::random(32)),
                    'oauth_id' => $socialUser->getId(),
                    'oauth_provider' => $provider,
                    'oauth_token' => $socialUser->token,
                    'oauth_refresh_token' => $socialUser->refreshToken,
                ]);
            }
        } else {
            $user->update([
                'oauth_token' => $socialUser->token,
                'oauth_refresh_token' => $socialUser->refreshToken,
            ]);
        }

        Auth::login($user);

        return ApiResponse::success([
            'user' => $user->only(['id', 'username', 'email', 'role']),
        ]);
    }
}
