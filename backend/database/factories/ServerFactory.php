<?php

namespace Database\Factories;

use App\Models\Server;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ServerFactory extends Factory
{
    protected $model = Server::class;

    public function definition(): array
    {
        return [
            'owner_id' => User::factory(),
            'name' => fake()->words(2, true),
            'slug' => fake()->unique()->slug(2),
            'java_ip' => fake()->domainName(),
            'java_port' => 25565,
            'description_short' => fake()->sentence(),
            'description_markdown' => fake()->paragraphs(3, true),
            'status' => 'pending',
        ];
    }
}
