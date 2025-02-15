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
        Schema::create('tools', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->string('category');
            $table->unsignedBigInteger('category_id');
            $table->string('image');
            $table->string('price');
            $table->enum('listing_type', ['sale', 'rent']);
            $table->integer('stock');
            $table->enum('status', ['available', 'sold', 'rented']);
            $table->text('gps_coordinates')->nullable();

            $table->foreign('category_id')->references('id')->on('tool_categories')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tools');
    }
};
