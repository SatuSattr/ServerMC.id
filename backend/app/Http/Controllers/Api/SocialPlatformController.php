<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Responses\ApiResponse;
use App\Models\SocialPlatform;

class SocialPlatformController extends Controller
{
    public function index()
    {
        return ApiResponse::success(SocialPlatform::orderBy('name')->get());
    }
}
