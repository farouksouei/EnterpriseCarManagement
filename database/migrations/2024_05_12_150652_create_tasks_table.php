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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('task_name');
            $table->string('task_description');
            $table->string('task_status');
            $table->string('task_priority');
            $table->timestamps();
        });

        // associate tasks with work orders
        Schema::table('tasks', function (Blueprint $table) {
            $table->unsignedBigInteger('work_order_id');
            $table->foreign('work_order_id')->references('id')->on('work_orders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
};
