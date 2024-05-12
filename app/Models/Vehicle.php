<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $fillable = [
        'make',
        'model',
        'year',
        'registration',
        'mileage',
        'license_plate',
        'fuel',
        'transmission',
        'price',
        'color',
        'vin',
        'miles_until_service',
        'miles_until_oil',
        'miles_until_tire',
        'miles_until_brake',
        'inspection_date',
        'insurance_date',
        'tax_date',
        'status',
        'latitude',
        'longitude',
        // timestamp

    ];

    // define the relationship with the WorkOrder and Worker models

    use HasFactory;
}
