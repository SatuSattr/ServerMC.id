<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VerificationCode extends Model
{
    protected $fillable = [
        'email', 'code', 'expires_at', 'used_at',
    ];

    protected function casts(): array
    {
        return [
            'expires_at' => 'datetime',
            'used_at' => 'datetime',
        ];
    }

    public function scopeValid($query, string $email, string $code)
    {
        return $query->where('email', $email)
            ->where('code', $code)
            ->whereNull('used_at')
            ->where('expires_at', '>', now());
    }
}
