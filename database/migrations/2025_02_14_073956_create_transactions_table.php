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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('tool_id');
            $table->enum('transaction_type', ['sale', 'rent']);
            $table->decimal('amount', 10, 2);
            $table->enum('status', ['pending', 'paid', 'completed', 'cancelled']);
            $table->string('payment_method');
            $table->enum('payment_status', ['pending', 'paid', 'failed']);
            $table->decimal('shipping_fee', 10, 2);

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('tool_id')->references('id')->on('tools')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
