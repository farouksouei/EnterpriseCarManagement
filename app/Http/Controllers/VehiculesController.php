<?php

namespace App\Http\Controllers;

use App\Http\Resources\SingleVehiculeResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\VehiculeResource;
use App\Models\Tasks;
use App\Models\User;
use App\Models\Vehicule;
use App\Http\Requests\StoreVehiculeRequest;
use App\Http\Requests\UpdateVehiculeRequest;
use App\Models\WorkOrder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
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
     * @param StoreVehiculeRequest $request
     * @return RedirectResponse
     */
    public function store(StoreVehiculeRequest $request): RedirectResponse
    {
        $attr = $request->toArray();


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
    public function show(Vehicule $vehicle): \Inertia\Response|ResponseFactory
    {
        // return a single vehicle
        $vehicle = new SingleVehiculeResource($vehicle);

        return Inertia('Vehicules/Show', [
            'vehicule' => $vehicle,
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
     * @return RedirectResponse
     */
    public function update(UpdateVehiculeRequest $request, Vehicule $vehicule)
    {
        $attr = $request->toArray();

        $vehicule->update($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'User has been updated',
        ]);
    }

    public function latlong(Request  $request,Vehicule $vehicle)
    {
        // Debugging: check request data
        Log::info('Request Data:', $request->all());
        Log::info('Fetched Vehicule:', (array)$vehicle);

        // Extract latitude, longitude, and speed from the request body
        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');
        $speed = $request->input('speed');

        // Update the vehicle's data
        $vehicle->update([
            'latitude' => $latitude,
            'longitude' => $longitude,
            'url' => $speed,
        ]);

        // Return a 200 OK response with a success message
        return response()->json([
            'type' => 'success',
            'message' => 'Vehicle data has been updated successfully',
        ], 200);
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param Vehicule $vehicule
     * @return RedirectResponse
     */
    public function destroy(Vehicule $vehicule): RedirectResponse
    {
        // Delete a vehicle
        $vehicule->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'vehicule has been deleted',
        ]);
    }
}
