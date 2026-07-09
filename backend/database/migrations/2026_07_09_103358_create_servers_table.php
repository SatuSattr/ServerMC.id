<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('owner_id')->constrained('users')->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('java_ip');
            $table->integer('java_port')->default(25565);
            $table->string('bedrock_ip')->nullable();
            $table->integer('bedrock_port')->nullable();
            $table->string('supported_versions')->default('');
            $table->string('server_location')->default('');
            $table->integer('launch_year')->nullable();
            $table->timestamp('submitted_at')->useCurrent();
            $table->string('contact_name')->nullable();
            $table->string('contact_method')->nullable();
            $table->text('description_short')->default('');
            $table->text('description_markdown')->default('');
            $table->string('logo_url')->nullable();
            $table->string('banner_card_url')->nullable();
            $table->string('banner_card_type')->default('image');
            $table->string('banner_detail_url')->nullable();
            $table->string('banner_detail_type')->default('image');
            $table->string('status')->default('pending');
            $table->text('status_note')->nullable();
            $table->uuid('plugin_key')->nullable()->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('servers');
    }
};
