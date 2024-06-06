<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarteCarburantResource;
use App\Http\Resources\ConsommationResource;
use App\Http\Resources\VehiculeResource;
use App\Models\CarteCarburant;
use App\Models\Consommation;
use App\Http\Requests\StoreConsommationRequest;
use App\Http\Requests\UpdateConsommationRequest;
use App\Models\User;
use App\Models\Vehicule;
use Illuminate\Http\RedirectResponse;

class ConsommationtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $consommation = ConsommationResource::collection(Consommation::latest()->paginate(10));
        $vehicles = VehiculeResource::collection(Vehicule::all());
        // inertia response
        return Inertia('Consommation/index', [
            'consommation' => $consommation,
            'vehicles' => $vehicles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreConsommationRequest  $request
     * @return RedirectResponse
     */
    public function store(StoreConsommationRequest $request)
    {
        $attr = $request->toArray();

        Consommation::create($attr);

        // add the kilometer to the vehicle to the existing kilometers
        $vehicle = Vehicule::find($request->vehicle_id);
        $vehicle->mileage = strval($vehicle->mileage + $request->kilometers);
        $vehicle->save();


        return back()->with([
            'type' => 'success',
            'message' => 'Consommation has been added has been created',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Consommation $consommation
     * @return \Illuminate\Http\Response
     */
    public function show(Consommation $consommation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Consommation $consommation
     * @return \Illuminate\Http\Response
     */
    public function edit(Consommation $consommation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateConsommationRequest $request
     * @param Consommation $consommation
     * @return RedirectResponse
     */
    public function update(UpdateConsommationRequest $request, Consommation $consommation)
    {
        $attr = $request->toArray();

        $consommation->update($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'consommation has been updated',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Consommation $consommation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Consommation $consommation)
    {
        $consommation->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Consommation has been deleted',
        ]);
    }
}
