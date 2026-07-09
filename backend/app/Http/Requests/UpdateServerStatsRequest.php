<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServerStatsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'players_online' => ['required', 'integer', 'min:0'],
            'players_max' => ['required', 'integer', 'min:0'],
            'ping_ms' => ['required', 'integer', 'min:0'],
        ];
    }
}
