<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CarteCarburantResource extends JsonResource
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
            'litres' => $this->litres,
            'max_litres' => $this->max_litres,
            'plafond' => $this->plafond,
            'vehicle_id' => $this->vehicle_id,
        ];

    }
}
