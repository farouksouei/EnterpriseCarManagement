<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SingleVehiculeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    // return one vehicle
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'make' => $this->make,
            'model' => $this->model,
            'registration' => $this->registration,
            'license_plate' => $this->license_plate,
            'year' => $this->year,
            'mileage' => $this->mileage,
            'fuel' => $this->fuel,
            'transmission' => $this->transmission,
            'price' => $this->price,
            'color' => $this->color,
            'vin' => $this->vin,
            'miles_until_service' => $this->miles_until_service,
            'miles_until_oil' => $this->miles_until_oil,
            'miles_until_tire' => $this->miles_until_tire,
            'miles_until_brake' => $this->miles_until_brake,
            'inspection_date' => $this->inspection_date,
            'insurance_date' => $this->insurance_date,
            'tax_date' => $this->tax_date,
            'status' => $this->status,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'url' => $this->url,
            'description'=> $this->description,
        ];
    }
}
