<?php

namespace Tests\Feature\Api;

use App\Models\VerificationCode;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        Http::fake([
            'https://challenges.cloudflare.com/*' => Http::response(['success' => true]),
        ]);
    }

    public function test_user_can_register(): void
    {
        VerificationCode::create([
            'email' => 'test@example.com',
            'code' => '123456',
            'expires_at' => now()->addMinutes(10),
            'used_at' => now(),
        ]);

        $response = $this->postJson('/api/register', [
            'username' => 'testuser',
            'email' => 'test@example.com',
            'password' => 'password123',
            'turnstile' => 'test-token',
            'code' => '123456',
        ]);

        $response->assertStatus(201)
            ->assertJsonStructure(['data' => ['user' => ['id', 'username', 'email', 'role']]]);

        $this->assertDatabaseHas('users', ['email' => 'test@example.com']);
    }

    public function test_user_can_login(): void
    {
        User::factory()->create([
            'email' => 'test@example.com',
            'password' => 'password123',
        ]);

        $response = $this->postJson('/api/login', [
            'email' => 'test@example.com',
            'password' => 'password123',
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['user' => ['id', 'username', 'email', 'role']]]);
    }

    public function test_login_with_invalid_credentials(): void
    {
        $response = $this->postJson('/api/login', [
            'email' => 'wrong@example.com',
            'password' => 'wrongpassword',
        ]);

        $response->assertStatus(401)
            ->assertJson([
                'data' => null,
                'error' => ['code' => 'UNAUTHORIZED'],
            ]);
    }

    public function test_register_with_duplicate_email(): void
    {
        VerificationCode::create([
            'email' => 'other@example.com',
            'code' => '654321',
            'expires_at' => now()->addMinutes(10),
            'used_at' => now(),
        ]);

        User::factory()->create(['email' => 'test@example.com']);

        $response = $this->postJson('/api/register', [
            'username' => 'another',
            'email' => 'test@example.com',
            'password' => 'password123',
            'turnstile' => 'test-token',
            'code' => '654321',
        ]);

        $response->assertStatus(422);
    }
}
