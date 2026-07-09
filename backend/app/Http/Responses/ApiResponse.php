<?php

namespace App\Http\Responses;

use Illuminate\Http\JsonResponse;

class ApiResponse
{
    public static function success(mixed $data = null, int $code = 200): JsonResponse
    {
        return response()->json([
            'data' => $data,
            'error' => null,
        ], $code);
    }

    public static function error(string $code, string $message, int $httpCode = 400): JsonResponse
    {
        return response()->json([
            'data' => null,
            'error' => [
                'code' => $code,
                'message' => $message,
            ],
        ], $httpCode);
    }

    public static function unauthorized(string $message = 'Invalid credentials'): JsonResponse
    {
        return static::error('UNAUTHORIZED', $message, 401);
    }

    public static function forbidden(string $message = 'Forbidden'): JsonResponse
    {
        return static::error('FORBIDDEN', $message, 403);
    }

    public static function notFound(string $message = 'Resource not found'): JsonResponse
    {
        return static::error('NOT_FOUND', $message, 404);
    }

    public static function validationError(string $message = 'Validation failed'): JsonResponse
    {
        return static::error('VALIDATION_ERROR', $message, 422);
    }
}
