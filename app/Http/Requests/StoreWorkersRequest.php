<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreWorkersRequest extends FormRequest
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
            'first_name' => 'required|string|max:55',
            'last_name' => 'required|string|max:55',
            'email' => 'required|email',
            'phone' => 'required|string|max:55',
            'address' => 'required|string|max:55',
            'city' => 'required|string|max:55',
            'state' => 'required|string|max:55',
            'zip' => 'required|string|max:55',
            'country' => 'required|string|max:55',
            'job_title' => 'required|string|max:55',
            'salary' => 'required|string|max:55',
            'status' => 'required|in:active,inactive',
        ];
    }
}
