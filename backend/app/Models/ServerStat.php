<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServerStat extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'server_id', 'players_online', 'players_max', 'ping_ms',
    ];

    protected function casts(): array
    {
        return [
            'players_online' => 'integer',
            'players_max' => 'integer',
            'ping_ms' => 'integer',
            'updated_at' => 'datetime',
        ];
    }

    public function server()
    {
        return $this->belongsTo(Server::class);
    }
}
