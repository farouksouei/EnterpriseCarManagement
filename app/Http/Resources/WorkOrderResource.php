<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WorkOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'work_order_number' => $this->work_order_number,
            'work_order_type' => $this->work_order_type,
            'work_order_status' => $this->work_order_status,
            'worker' => new WorkerResource($this->worker),
            'vehicle' => new SingleVehiculeResource($this->vehicle),
            'tasks' => TaskResource::collection($this->tasks),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
