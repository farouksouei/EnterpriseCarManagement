<?php

namespace App\Http\Controllers;

use App\Models\Consommation;
use App\Http\Requests\StoreConsommationRequest;
use App\Http\Requests\UpdateConsommationRequest;

class ConsommationtController extends Controller
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
     * @param  \App\Http\Requests\StoreConsommationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreConsommationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Consommation  $consommation
     * @return \Illuminate\Http\Response
     */
    public function show(Consommation $consommation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Consommation  $consommation
     * @return \Illuminate\Http\Response
     */
    public function edit(Consommation $consommation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateConsommationRequest  $request
     * @param  \App\Models\Consommation  $consommation
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateConsommationRequest $request, Consommation $consommation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Consommation  $consommation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Consommation $consommation)
    {
        //
    }
}
