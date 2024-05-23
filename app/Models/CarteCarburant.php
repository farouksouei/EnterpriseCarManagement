<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarteCarburant extends Model
{
    protected $fillable = [
        'litres',
        'max_litres',
        'plafond',
        'vehicle_id'
    ];

    public function vehicle()
    {
        return $this->belongsTo(Vehicule::class);
    }

    use HasFactory;
}
