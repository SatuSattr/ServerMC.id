<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasUuids;

    protected $table = 'gallery';

    protected $fillable = [
        'server_id', 'url', 'caption', 'sort_order',
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
}
