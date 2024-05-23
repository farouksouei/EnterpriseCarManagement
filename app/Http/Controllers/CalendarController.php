<?php

namespace App\Http\Controllers;

use App\Http\Resources\ConsommationResource;
use App\Models\Consommation;
use Illuminate\Http\Request;
use App\Http\Resources\SingleVehiculeResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\VehiculeResource;
use App\Models\User;
use App\Models\Vehicule;
use App\Http\Requests\StoreVehiculeRequest;
use App\Http\Requests\UpdateVehiculeRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\ResponseFactory;

class CalendarController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @return \Inertia\Response|ResponseFactory
     */
    public function __invoke(Request $request)
    {
        $entretien = Vehicule::all()->pluck('inspection_date');
        $tax_date = Vehicule::all()->pluck('tax_date');
        $insurance_date = Vehicule::all()->pluck('insurance_date');

        // inertia response
        return Inertia('Calendar/index', [
            'dates_entretien' => $entretien,
            'tax_dates' => $tax_date,
            'insurance_dates' => $insurance_date
        ]);
    }
}
