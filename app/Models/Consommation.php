<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consommation extends Model
{
    protected $fillable = [
        'date',
        'kilometers',
        'vehicle_id'
    ];

    public function vehicle()
    {
        return $this->belongsTo(Vehicule::class);
    }

    use HasFactory;
}
