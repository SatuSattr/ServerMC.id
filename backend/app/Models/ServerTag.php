<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServerTag extends Model
{
    public $timestamps = false;

    protected $fillable = ['server_id', 'tag_id'];
}
