<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use App\Models\WorkOrder;
use App\Http\Requests\StoreWorkOrderRequest;
use App\Http\Requests\UpdateWorkOrderRequest;
use App\Http\Resources\WorkOrderResource;
use Illuminate\Http\Request;

class WorkerOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $workOrder = WorkOrderResource::collection(WorkOrder::latest()->paginate(10));
        // Return a collection of $workOrder with pagination
        // inertia response
        return Inertia('WorkOrder/index', [
            'workOrder' => $workOrder,
        ]);
    }

    public function assign(Request $request, WorkOrder $workOrder): \Illuminate\Http\RedirectResponse
    {
        $validatedData = $request->validate([
            'task_name' => 'required|string|max:255',
            'task_description' => 'nullable|string',
            'task_status' => 'required|string|max:255',
            'task_priority' => 'required|string|max:255',
        ]);

        $task = new Tasks($validatedData);
        $task->work_order_id = $workOrder->id;
        $task->save();

        $workOrder = WorkOrderResource::collection(WorkOrder::latest()->paginate(10));
        // Return a collection of $workOrder with pagination
        // inertia response
        return Inertia('WorkOrder/index', [
            'workOrder' => $workOrder,
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
     * @param  \App\Http\Requests\StoreWorkOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWorkOrderRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WorkOrder  $workOrder
     * @return \Illuminate\Http\Response
     */
    public function show(WorkOrder $workOrder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\WorkOrder  $workOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(WorkOrder $workOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWorkOrderRequest  $request
     * @param  \App\Models\WorkOrder  $workOrder
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateWorkOrderRequest $request, WorkOrder $workOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WorkOrder  $workOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkOrder $workOrder)
    {
        //
    }
}
