<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarteCarburantResource;
use App\Http\Resources\VehiculeResource;
use App\Http\Resources\WorkerResource;
use App\Models\CarteCarburant;
use App\Http\Requests\StoreCarteCarburantRequest;
use App\Http\Requests\UpdateCarteCarburantRequest;
use App\Models\User;
use App\Models\Vehicule;
use App\Models\Workers;

class CarteCarburantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cartes = CarteCarburantResource::collection(CarteCarburant::latest()->paginate(10));
        $vehicles = VehiculeResource::collection(Vehicule::all());
        // inertia response
        return Inertia('CarteCarburant/index', [
            'cartes' => $cartes,
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
     * @param  \App\Http\Requests\StoreCarteCarburantRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCarteCarburantRequest $request)
    {
        $attr = $request->toArray();

        CarteCarburant::create($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Carte Carburant has been affected!',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CarteCarburant  $carteCarburant
     * @return \Illuminate\Http\Response
     */
    public function show(CarteCarburant $carteCarburant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CarteCarburant  $carteCarburant
     * @return \Illuminate\Http\Response
     */
    public function edit(CarteCarburant $carteCarburant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCarteCarburantRequest  $request
     * @param  \App\Models\CarteCarburant  $carteCarburant
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCarteCarburantRequest $request, CarteCarburant $carteCarburant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CarteCarburant  $carteCarburant
     * @return \Illuminate\Http\Response
     */
    public function destroy(CarteCarburant $carteCarburant)
    {
        $carteCarburant->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Carte Carburant has been deleted!',
        ]);
    }
}
