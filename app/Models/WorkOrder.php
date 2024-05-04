<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkOrder extends Model
{
    protected $fillable = [
        'vehicle_id',
        'worker_id',
        'description',
        'status',
        'start_date',
        'end_date',
    ];

    // define the relationship with the Vehicle and Worker models
    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    // Define the relationship with the Worker model
    public function worker()
    {
        return $this->belongsTo(Worker::class);
    }
    use HasFactory;
}
