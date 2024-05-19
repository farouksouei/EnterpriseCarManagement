<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkOrder extends Model
{
    protected $fillable = [
        'work_order_number',
        'work_order_type',
        'work_order_status',
        'worker_id',
        'vehicle_id',
    ];

    // resolve the relationship between the work order and the worker
    public function worker()
    {
        return $this->belongsTo(Workers::class);
    }

    // resolve the relationship between the work order and the vehicle
    public function vehicle()
    {
        return $this->belongsTo(Vehicule::class);
    }

    // the work order has many tasks associated with it so every task has a work order id associated with it
    public function tasks()
    {
        return $this->hasMany(Tasks::class);
    }

    use HasFactory;
}
