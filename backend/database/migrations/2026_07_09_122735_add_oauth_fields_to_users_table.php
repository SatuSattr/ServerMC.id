<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('oauth_id')->nullable()->unique();
            $table->string('oauth_provider')->nullable();
            $table->text('oauth_token')->nullable();
            $table->text('oauth_refresh_token')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['oauth_id', 'oauth_provider', 'oauth_token', 'oauth_refresh_token']);
        });
    }
};
