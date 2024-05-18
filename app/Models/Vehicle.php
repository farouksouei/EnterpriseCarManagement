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
        'taxation_date',
        'insurance_date',
        'technical_visit_date',
        'consumption',
        'open',
    ];

    //add date taxation (tax assurance visite technique)
    //consommation
    //open

    // define the relationship with the WorkOrder model
    public function workOrders()
    {
        return $this->hasMany(WorkOrder::class);
    }

    // use the workOrders relationship to get the work orders for a vehicle
    public function getWorkOrders()
    {
        return $this->workOrders;
    }

    use HasFactory;
}
