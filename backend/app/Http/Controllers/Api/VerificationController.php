<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SendVerificationRequest;
use App\Services\VerificationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
    public function __construct(
        private readonly VerificationService $verificationService
    ) {}

    public function sendCode(SendVerificationRequest $request): JsonResponse
    {
        return $this->verificationService->sendCode($request->input('email'));
    }

    public function verifyCode(Request $request): JsonResponse
    {
        $request->validate([
            'email' => ['required', 'email'],
            'code' => ['required', 'string', 'size:6'],
        ]);

        return $this->verificationService->verifyCode(
            $request->input('email'),
            $request->input('code')
        );
    }
}
