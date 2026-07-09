<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    use HasFactory, HasUuids;

    public $timestamps = false;

    protected $fillable = [
        'server_id', 'voter_name', 'fingerprint', 'ip_address', 'verified', 'verified_at',
    ];

    protected function casts(): array
    {
        return [
            'verified' => 'boolean',
            'verified_at' => 'datetime',
            'created_at' => 'datetime',
        ];
    }

    public function server()
    {
        return $this->belongsTo(Server::class);
    }

    public function scopeForServer($query, string $serverId)
    {
        return $query->where('server_id', $serverId);
    }

    public function scopeRecentByIgn($query, string $serverId, string $voterName)
    {
        return $query->forServer($serverId)
            ->where('voter_name', $voterName)
            ->where('created_at', '>=', now()->subDay());
    }
}
