<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_orders', function (Blueprint $table) {
            $table->id();
            $table->string('work_order_number');
            $table->string('work_order_type');
            $table->string('work_order_status');
            // relationship with workers and vehicles and tasks
            $table->unsignedBigInteger('worker_id');
            $table->foreign('worker_id')->references('id')->on('workers');
            $table->unsignedBigInteger('vehicle_id');
            $table->foreign('vehicle_id')->references('id')->on('vehicules');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('work_orders');
    }
};
