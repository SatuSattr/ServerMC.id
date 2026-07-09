<?php

namespace App\Services;

use App\Http\Responses\ApiResponse;
use App\Mail\VerificationCodeMail;
use App\Models\VerificationCode;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;

class VerificationService
{
    public function sendCode(string $email): JsonResponse
    {
        $recent = VerificationCode::where('email', $email)
            ->whereNull('used_at')
            ->where('expires_at', '>', now())
            ->latest()
            ->first();

        if ($recent) {
            return ApiResponse::error('CODE_ALREADY_SENT', 'Kode verifikasi sudah dikirim. Coba lagi dalam beberapa menit.', 429);
        }

        $code = str_pad((string) random_int(0, 999999), 6, '0', STR_PAD_LEFT);

        VerificationCode::create([
            'email' => $email,
            'code' => $code,
            'expires_at' => now()->addMinutes(10),
        ]);

        Mail::to($email)->send(new VerificationCodeMail($code));

        return ApiResponse::success(['message' => 'Kode verifikasi telah dikirim ke email.']);
    }

    public function verifyCode(string $email, string $code): JsonResponse
    {
        $record = VerificationCode::valid($email, $code)->latest()->first();

        if (!$record) {
            return ApiResponse::error('INVALID_CODE', 'Kode verifikasi tidak valid atau sudah kedaluwarsa.', 400);
        }

        $record->update(['used_at' => now()]);

        return ApiResponse::success(['message' => 'Email berhasil diverifikasi.']);
    }
}
