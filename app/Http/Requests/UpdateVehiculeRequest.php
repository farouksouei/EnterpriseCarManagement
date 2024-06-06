<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVehiculeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'make' => 'required|string|max:55',
            'model' => 'required|string|max:55',
            'year' => 'required|string|max:4',
            'registration' => 'required|string|max:55',
            'mileage' => 'required|string|max:55',
            'fuel' => 'required|string|max:55',
            'transmission' => 'required|string|max:55',
            'price' => 'required|string|max:55',
            'license_plate' => 'required|string|max:55',
            'color' => 'required|string|max:55',
            'vin' => 'required|string|max:55',
            'miles_until_service' => 'required|string|max:55',
            'miles_until_oil' => 'required|string|max:55',
            'miles_until_tire' => 'required|string|max:55',
            'miles_until_brake' => 'required|string|max:55',
            'inspection_date' => 'required|date',
            'insurance_date' => 'required|date',
            'tax_date' => 'required|date',
            'status' => 'required|in:available,unavailable',
            'latitude' => 'required|string|max:55',
            'longitude' => 'required|string|max:55',
            'description' => 'required|string|max:255',
            'url' => 'required|string|max:255',
        ];
    }
}
