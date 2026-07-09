<?php

namespace Database\Factories;

use App\Models\Server;
use App\Models\Vote;
use Illuminate\Database\Eloquent\Factories\Factory;

class VoteFactory extends Factory
{
    protected $model = Vote::class;

    public function definition(): array
    {
        return [
            'server_id' => Server::factory(),
            'voter_name' => fake()->userName(),
        ];
    }
}
