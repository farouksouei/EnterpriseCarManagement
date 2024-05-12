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
        Schema::create('vehicules', function (Blueprint $table) {
            $table->id();
            $table->string('make');
            $table->string('model');
            $table->string('year');
            $table->string('registration');
            $table->string('mileage');
            $table->string('license_plate');
            $table->string('fuel');
            $table->string('transmission');
            $table->string('price');
            $table->string('color');
            $table->string('vin');
            $table->string('miles_until_service');
            $table->string('miles_until_oil');
            $table->string('miles_until_tire');
            $table->string('miles_until_brake');
            //inspection date
            $table->date('inspection_date');
            $table->date('insurance_date');
            $table->date('tax_date');
            $status = ['available', 'unavailable'];
            $table->enum('status', $status);
            $table->string('latitude');
            $table->string('longitude');
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
        Schema::dropIfExists('vehicules');
    }
};
