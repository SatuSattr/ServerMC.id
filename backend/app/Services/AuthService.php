<?php

namespace App\Services;

use App\Http\Responses\ApiResponse;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function register(array $data): JsonResponse
    {
        $user = User::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => $data['password'],
        ]);

        return ApiResponse::success([
            'user' => $user->only(['id', 'username', 'email', 'role']),
        ], 201);
    }

    public function login(array $data): JsonResponse
    {
        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return ApiResponse::unauthorized('Invalid email or password');
        }

        return ApiResponse::success([
            'user' => $user->only(['id', 'username', 'email', 'role']),
        ]);
    }

    public function logout(): JsonResponse
    {
        return ApiResponse::success(null);
    }
}
