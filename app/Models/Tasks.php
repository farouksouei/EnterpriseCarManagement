<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    protected $fillable = [
        'task_name',
        'task_description',
        'task_status',
        'task_priority',
        'work_order_id',
    ];

    // resolve the relationship between the task and the work order
    public function workOrder()
    {
        return $this->belongsTo(WorkOrder::class);
    }

    use HasFactory;
}
