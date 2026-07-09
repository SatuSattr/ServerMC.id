<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\ServerController;
use App\Http\Controllers\Api\ServerStatsController;
use App\Http\Controllers\Api\SocialAuthController;
use App\Http\Controllers\Api\SocialPlatformController;
use App\Http\Controllers\Api\TagController;
use App\Http\Controllers\Api\VerificationController;
use App\Http\Controllers\Api\VoteController;
use Illuminate\Support\Facades\Route;

// Verification (email 6-digit code)
Route::post('/auth/send-code', [VerificationController::class, 'sendCode'])->middleware('throttle:3,10');
Route::post('/auth/verify-code', [VerificationController::class, 'verifyCode']);

// Auth
Route::post('/register', [AuthController::class, 'register'])->middleware('throttle:3,10');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Social Auth (Discord OAuth)
Route::prefix('auth')->group(function () {
    Route::get('/{provider}/redirect', [SocialAuthController::class, 'redirect']);
    Route::get('/{provider}/callback', [SocialAuthController::class, 'callback']);
});

// Servers (public)
Route::get('/servers', [ServerController::class, 'index']);
Route::get('/servers/{slug}', [ServerController::class, 'show']);
Route::post('/servers', [ServerController::class, 'store'])->middleware('auth:sanctum');
Route::put('/servers/{id}', [ServerController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/servers/{id}', [ServerController::class, 'destroy'])->middleware('auth:sanctum');

// Voting
Route::post('/vote', [VoteController::class, 'store']);
Route::get('/vote/{slug}/status', [VoteController::class, 'status']);
Route::get('/vote/{slug}/leaderboard', [VoteController::class, 'leaderboard']);
Route::post('/vote/{id}/verify', [VoteController::class, 'verify']);

// Comments
Route::get('/servers/{serverId}/comments', [CommentController::class, 'index']);
Route::post('/servers/{serverId}/comments', [CommentController::class, 'store'])->middleware('auth:sanctum');

// Gallery
Route::get('/servers/{serverId}/gallery', [GalleryController::class, 'index']);
Route::post('/servers/{serverId}/gallery', [GalleryController::class, 'store'])->middleware('auth:sanctum');
Route::delete('/servers/{serverId}/gallery/{galleryId}', [GalleryController::class, 'destroy'])->middleware('auth:sanctum');

// Plugin (auth via API key)
Route::patch('/servers/{id}/stats', [ServerStatsController::class, 'update'])
    ->middleware('plugin.auth');

// Reference data
Route::get('/tags', [TagController::class, 'index']);
Route::get('/social-platforms', [SocialPlatformController::class, 'index']);

// Admin (auth:sanctum + admin check in controller)
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::get('/servers', [AdminController::class, 'servers']);
    Route::patch('/servers/{id}', [AdminController::class, 'updateServer']);
    Route::get('/users', [AdminController::class, 'users']);
    Route::patch('/users/{id}', [AdminController::class, 'updateUser']);
    Route::post('/tags', [AdminController::class, 'createTag']);
    Route::delete('/tags/{id}', [AdminController::class, 'destroyTag']);
});
