<?php

namespace Tests\Feature\Api;

use App\Models\Server;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ServerTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_list_approved_servers(): void
    {
        Server::factory()->count(3)->create(['status' => 'approved']);

        $response = $this->getJson('/api/servers');

        $response->assertStatus(200);
    }

    public function test_can_show_server_by_slug(): void
    {
        $server = Server::factory()->create(['slug' => 'test-server', 'status' => 'approved']);

        $response = $this->getJson("/api/servers/{$server->slug}");

        $response->assertStatus(200)
            ->assertJsonPath('data.slug', 'test-server');
    }

    public function test_returns_404_for_unknown_slug(): void
    {
        $response = $this->getJson('/api/servers/nonexistent');

        $response->assertStatus(404);
    }

    public function test_auth_required_to_create_server(): void
    {
        $response = $this->postJson('/api/servers', [
            'name' => 'Test Server',
            'java_ip' => 'play.test.com',
        ]);

        $response->assertStatus(401);
    }
}
