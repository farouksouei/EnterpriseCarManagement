<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreWorkOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // You can add additional authorization logic here if needed
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'work_order_number' => 'required|string|max:255',
            'work_order_type' => 'required|string|max:255',
            'work_order_status' => 'required|string|max:255',
            'worker_id' => 'required|exists:workers,id',
            'vehicle_id' => 'required|exists:vehicules,id',
        ];
    }
}
