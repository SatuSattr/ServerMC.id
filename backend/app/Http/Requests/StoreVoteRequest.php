<?php

namespace App\Http\Requests;

use App\Rules\Turnstile;
use Illuminate\Foundation\Http\FormRequest;

class StoreVoteRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'server_id' => ['required', 'string', 'exists:servers,id'],
            'voter_name' => ['required', 'string', 'min:3', 'max:16', 'regex:/^[a-zA-Z0-9_]+$/'],
            'fingerprint' => ['required', 'string', 'max:255'],
            'turnstile' => ['required', 'string', new Turnstile],
        ];
    }
}
