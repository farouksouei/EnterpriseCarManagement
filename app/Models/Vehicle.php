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
        'license_plate',
        'color',
        'kilometers',
        'vin',
        'registration_date',
        'engine',
        'kilometers_until_vidange',
        'kilometers_until_revision',
        'kilometers_until_pneus',
        'status',
        'latitude',
        'longitude',
    ];

    // define the relationship with the WorkOrder and Worker models

    use HasFactory;
}
