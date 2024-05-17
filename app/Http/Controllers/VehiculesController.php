<?php

namespace App\Http\Controllers;

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

class VehiculesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response|ResponseFactory
     */
    public function index(): \Inertia\Response|ResponseFactory
    {
        // Get all vehicles
        $vehicles = VehiculeResource::collection(Vehicule::latest()->paginate(10));
        // Return a collection of $vehicles with pagination
        // inertia response
        return Inertia('Vehicules/Index', [
            'vehicles' => $vehicles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        // Create a new vehicle
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreVehiculeRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreVehiculeRequest $request)
    {
        $attr = $request->toArray();

        print_r($attr);die;

        Vehicule::create($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Vehicle has been created',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Vehicule $vehicule
     * @return \Inertia\Response|ResponseFactory
     */
    public function show(Vehicule $vehicule): \Inertia\Response|ResponseFactory
    {
        // return a single vehicle
        print_r($vehicule);die;
        $vehicule = new SingleVehiculeResource($vehicule);

        return Inertia('Vehicules/Show', [
            'vehicule' => $vehicule,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Vehicule $vehicule
     * @return Response
     */
    public function edit(Vehicule $vehicule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVehiculeRequest  $request
     * @param Vehicule $vehicule
     * @return Response
     */
    public function update(UpdateVehiculeRequest $request, Vehicule $vehicule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Vehicule $vehicule
     * @return Response
     */
    public function destroy(Vehicule $vehicule)
    {
        //
    }
}
