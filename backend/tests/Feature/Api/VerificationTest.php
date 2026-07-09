<?php

namespace Tests\Feature\Api;

use App\Models\VerificationCode;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class VerificationTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        Mail::fake();
        Http::fake([
            'https://challenges.cloudflare.com/*' => Http::response(['success' => true]),
        ]);
    }

    public function test_can_send_verification_code(): void
    {
        $response = $this->postJson('/api/auth/send-code', [
            'email' => 'test@example.com',
        ]);

        $response->assertStatus(200);

        $this->assertDatabaseHas('verification_codes', [
            'email' => 'test@example.com',
        ]);

        Mail::assertSent(\App\Mail\VerificationCodeMail::class);
    }

    public function test_can_verify_code(): void
    {
        VerificationCode::create([
            'email' => 'test@example.com',
            'code' => '123456',
            'expires_at' => now()->addMinutes(10),
        ]);

        $response = $this->postJson('/api/auth/verify-code', [
            'email' => 'test@example.com',
            'code' => '123456',
        ]);

        $response->assertStatus(200);

        $this->assertNotNull(
            VerificationCode::where('email', 'test@example.com')
                ->where('code', '123456')
                ->first()->used_at
        );
    }

    public function test_invalid_code_returns_error(): void
    {
        $response = $this->postJson('/api/auth/verify-code', [
            'email' => 'test@example.com',
            'code' => '000000',
        ]);

        $response->assertStatus(400)
            ->assertJsonPath('error.code', 'INVALID_CODE');
    }

    public function test_cannot_register_without_verification(): void
    {
        $response = $this->postJson('/api/register', [
            'username' => 'testuser',
            'email' => 'test@example.com',
            'password' => 'password123',
            'turnstile' => 'test-token',
            'code' => '123456',
        ]);

        $response->assertStatus(400)
            ->assertJsonPath('error.code', 'EMAIL_NOT_VERIFIED');
    }
}
