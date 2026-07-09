<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class ServerSocial extends Model
{
    use HasUuids;

    protected $fillable = [
        'server_id', 'platform_id', 'url', 'label', 'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'sort_order' => 'integer',
        ];
    }

    public function server()
    {
        return $this->belongsTo(Server::class);
    }

    public function platform()
    {
        return $this->belongsTo(SocialPlatform::class, 'platform_id');
    }
}
