<?php

namespace App\Http\Controllers;

use App\Http\Resources\VehiculeResource;
use App\Http\Resources\WorkerResource;
use App\Models\Vehicule;
use App\Models\Workers;
use App\Http\Requests\StoreWorkersRequest;
use App\Http\Requests\UpdateWorkersRequest;

class WorkersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $worker = WorkerResource::collection(Workers::latest()->paginate(10));
        // Return a collection of $vehicles with pagination
        // inertia response
        return Inertia('Worker/index', [
            'workers' => $worker,
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
     * @param  \App\Http\Requests\StoreWorkersRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWorkersRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Workers  $workers
     * @return \Illuminate\Http\Response
     */
    public function show(Workers $workers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Workers  $workers
     * @return \Illuminate\Http\Response
     */
    public function edit(Workers $workers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWorkersRequest  $request
     * @param  \App\Models\Workers  $workers
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateWorkersRequest $request, Workers $workers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Workers  $workers
     * @return \Illuminate\Http\Response
     */
    public function destroy(Workers $workers)
    {
        //
    }
}
