<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['string', 'max:100'],
            'java_ip' => ['string', 'max:255'],
            'java_port' => ['integer', 'min:1', 'max:65535'],
            'bedrock_ip' => ['nullable', 'string', 'max:255'],
            'bedrock_port' => ['nullable', 'integer', 'min:1', 'max:65535'],
            'supported_versions' => ['string', 'max:50'],
            'server_location' => ['string', 'max:100'],
            'launch_year' => ['nullable', 'integer', 'min:2009', 'max:2026'],
            'contact_name' => ['nullable', 'string', 'max:100'],
            'contact_method' => ['nullable', 'string', 'max:255'],
            'description_short' => ['string', 'max:200'],
            'description_markdown' => ['string'],
            'tags' => ['array', 'max:10'],
            'tags.*' => ['integer', 'exists:tags,id'],
            'socials' => ['array'],
            'socials.*.platform_id' => ['integer', 'exists:social_platforms,id'],
            'socials.*.url' => ['string', 'url', 'max:500'],
            'socials.*.label' => ['string', 'max:100'],
        ];
    }
}
