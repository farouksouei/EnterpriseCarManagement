<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCarteCarburantRequest extends FormRequest
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
            'litres' => ['required', 'numeric', 'min:0'],
            'max_litres' => ['required', 'numeric', 'min:0'],
            'plafond' => ['required', 'numeric', 'min:0'],
            'vehicle_id' => ['required', 'exists:vehicules,id'],
        ];
    }
}
