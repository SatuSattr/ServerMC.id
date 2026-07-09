<?php

namespace App\Models;

use App\Enums\BannerType;
use App\Enums\ServerStatus;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Server extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'owner_id', 'name', 'slug', 'java_ip', 'java_port',
        'bedrock_ip', 'bedrock_port', 'supported_versions',
        'server_location', 'launch_year', 'submitted_at',
        'contact_name', 'contact_method',
        'description_short', 'description_markdown',
        'logo_url', 'banner_card_url', 'banner_card_type',
        'banner_detail_url', 'banner_detail_type',
        'status', 'status_note', 'plugin_key',
    ];

    protected function casts(): array
    {
        return [
            'java_port' => 'integer',
            'bedrock_port' => 'integer',
            'launch_year' => 'integer',
            'submitted_at' => 'datetime',
            'banner_card_type' => BannerType::class,
            'banner_detail_type' => BannerType::class,
            'status' => ServerStatus::class,
        ];
    }

    protected static function booted(): void
    {
        static::creating(function (Server $server) {
            $server->slug = $server->slug ?: Str::slug($server->name);
            $server->plugin_key = (string) Str::uuid();
        });
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'server_tags');
    }

    public function socials()
    {
        return $this->hasMany(ServerSocial::class);
    }

    public function stats()
    {
        return $this->hasOne(ServerStat::class);
    }

    public function votes()
    {
        return $this->hasMany(Vote::class);
    }

    public function gallery()
    {
        return $this->hasMany(Gallery::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
