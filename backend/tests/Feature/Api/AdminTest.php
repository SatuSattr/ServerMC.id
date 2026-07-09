<?php

namespace Tests\Feature\Api;

use App\Models\Server;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminTest extends TestCase
{
    use RefreshDatabase;

    public function test_non_admin_cannot_access_admin_servers(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->getJson('/api/admin/servers');

        $response->assertStatus(403);
    }

    public function test_non_admin_cannot_access_admin_users(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->getJson('/api/admin/users');

        $response->assertStatus(403);
    }

    public function test_admin_can_list_servers(): void
    {
        $admin = User::factory()->create(['role' => 'admin']);

        $response = $this->actingAs($admin)->getJson('/api/admin/servers');

        $response->assertStatus(200);
    }

    public function test_admin_can_update_server_status(): void
    {
        $admin = User::factory()->create(['role' => 'admin']);
        $server = Server::factory()->create(['status' => 'pending']);

        $response = $this->actingAs($admin)
            ->patchJson("/api/admin/servers/{$server->id}", [
                'status' => 'approved',
            ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('servers', ['id' => $server->id, 'status' => 'approved']);
    }
}
