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
        // Update foreign key on 'tasks' table
        Schema::table('tasks', function (Blueprint $table) {
            // Drop the existing foreign key constraint
            $table->dropForeign(['work_order_id']);

            // Add the foreign key constraint with onDelete('cascade')
            $table->foreign('work_order_id')
                ->references('id')->on('work_orders')
                ->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Revert foreign key on 'tasks' table
        Schema::table('tasks', function (Blueprint $table) {
            // Drop the foreign key constraint
            $table->dropForeign(['work_order_id']);

            // Add the original foreign key constraint
            $table->foreign('work_order_id')
                ->references('id')->on('work_orders');
        });


    }
};
