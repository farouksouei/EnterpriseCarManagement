<?php

namespace App\Http\Controllers;

use App\Models\CarteCarburant;
use App\Http\Requests\StoreCarteCarburantRequest;
use App\Http\Requests\UpdateCarteCarburantRequest;

class CarteCarburantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        //
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
        //
    }
}
