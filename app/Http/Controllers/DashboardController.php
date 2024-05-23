<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Http\Resources\VehiculeResource;
use App\Models\User;
use App\Models\Vehicule;
use App\Http\Resources\WorkerResource;
use App\Models\Workers;
use App\Models\WorkOrder;
class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function __invoke(Request $request)
    {
        // count all users
        $users_count = User::count();
        $vehicules_count = Vehicule::count();
        $workers_count = Workers::count();
        $work_order_count = WorkOrder::count();

        // get last added user
        $last_user = User::orderBy('created_at', 'desc')->first();
        // Get the last added vehicule
        $last_vehicule = Vehicule::orderBy('created_at', 'desc')->first();

        // Get the last added worker
        $last_worker = Workers::orderBy('created_at', 'desc')->first();

        // Get the last added work order
        $last_work_order = WorkOrder::orderBy('created_at', 'desc')->first();

        // Get the last 4 work orders
        $work_orders = WorkOrder::latest()->take(4)->get();

        $entretien = Vehicule::all()->pluck('inspection_date');
        $tax_date = Vehicule::all()->pluck('tax_date');
        $insurance_date = Vehicule::all()->pluck('insurance_date');

        return inertia('Dashboard', [
            'vehicles' => $vehicules_count,
            'users' => $users_count,
            'workers' => $workers_count,
            'workOrder' => $work_order_count,
            'lastVehicule' => $last_vehicule,
            'lastUser' => $last_user,
            'lastWorker' => $last_worker,
            'lastWorkOrder' => $last_work_order,
            'workOrders4' => $work_orders,
            'dates_entretien' => $entretien,
            'tax_dates' => $tax_date,
            'insurance_dates' => $insurance_date
        ]);
    }
}
