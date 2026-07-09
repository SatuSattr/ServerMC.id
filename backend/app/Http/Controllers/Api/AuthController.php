<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function __construct(
        private readonly AuthService $authService
    ) {}

    public function register(RegisterRequest $request): JsonResponse
    {
        return $this->authService->register($request->validated());
    }

    public function login(LoginRequest $request): JsonResponse
    {
        return $this->authService->login($request->validated());
    }

    public function logout(): JsonResponse
    {
        return $this->authService->logout();
    }
}
