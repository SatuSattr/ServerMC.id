<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TagSeeder extends Seeder
{
    public function run(): void
    {
        $tags = [
            'Survival', 'Skyblock', 'Minigames', 'Creative', 'SMP', 'PvP', 'Economy',
            'Roleplay', 'Faction', 'Vanilla', 'Modded', 'Cross-Play', 'Earth',
            'OneBlock', 'Parkour', 'Prison', 'KitPvP', 'BedWars', 'SkyWars',
            'HungerGames', 'Lifesteal', 'Anarchy', 'Hardcore', 'Casual',
        ];

        foreach ($tags as $tag) {
            Tag::create([
                'name' => $tag,
                'slug' => Str::slug($tag),
            ]);
        }
    }
}
