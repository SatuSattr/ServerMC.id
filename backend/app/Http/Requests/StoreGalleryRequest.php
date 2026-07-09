<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGalleryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'image' => ['required', 'image', 'mimes:png,jpeg,webp', 'max:10240', 'dimensions:min_width=800,min_height=450'],
            'caption' => ['string', 'max:200'],
        ];
    }
}
