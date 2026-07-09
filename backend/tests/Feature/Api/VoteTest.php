<?php

namespace Tests\Feature\Api;

use App\Models\Server;
use App\Models\Vote;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class VoteTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        Http::fake([
            'https://challenges.cloudflare.com/*' => Http::response(['success' => true]),
        ]);
    }

    public function test_can_submit_vote(): void
    {
        $server = Server::factory()->create(['status' => 'approved']);

        $response = $this->postJson('/api/vote', [
            'server_id' => $server->id,
            'voter_name' => 'Player123',
            'fingerprint' => 'test-fingerprint-abc',
            'turnstile' => 'test-token',
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('votes', ['voter_name' => 'Player123']);
    }

    public function test_can_check_vote_status(): void
    {
        $server = Server::factory()->create(['slug' => 'test-server']);
        Vote::factory()->count(5)->create(['server_id' => $server->id]);

        $response = $this->getJson('/api/vote/test-server/status');

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['total', 'today', 'can_vote']]);
    }
}
