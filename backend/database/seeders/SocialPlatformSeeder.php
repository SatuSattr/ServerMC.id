<?php

namespace Database\Seeders;

use App\Models\SocialPlatform;
use Illuminate\Database\Seeder;

class SocialPlatformSeeder extends Seeder
{
    public function run(): void
    {
        $platforms = [
            ['name' => 'Discord', 'icon' => 'discord'],
            ['name' => 'Website', 'icon' => 'globe'],
            ['name' => 'YouTube', 'icon' => 'youtube'],
            ['name' => 'Twitch', 'icon' => 'twitch'],
            ['name' => 'Instagram', 'icon' => 'instagram'],
            ['name' => 'Facebook', 'icon' => 'facebook'],
            ['name' => 'X / Twitter', 'icon' => 'twitter'],
            ['name' => 'TikTok', 'icon' => 'music'],
            ['name' => 'Telegram', 'icon' => 'send'],
            ['name' => 'WhatsApp', 'icon' => 'message-circle'],
            ['name' => 'GitHub', 'icon' => 'github'],
            ['name' => 'Shop / Store', 'icon' => 'shopping-cart'],
        ];

        foreach ($platforms as $platform) {
            SocialPlatform::create($platform);
        }
    }
}
