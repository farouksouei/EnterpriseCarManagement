import { useForm } from '@inertiajs/inertia-react';
import React from 'react';

export default function CreateWorkOrder({ close, workers, vehicles }) {
    console.log(workers)
    console.log(vehicles)
    const { data, setData, post, reset, errors } = useForm({
        work_order_number: '',
        work_order_type: '',
        work_order_status: '',
        worker_id: '',
        vehicle_id: ''
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        console.log("data",data)
        e.preventDefault();
        post(route('workorders.store'), {
            data,
            onSuccess: () => {
                reset();
                close();
            },
        });
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="work_order_number" className="col-form-label">Work Order Number:</label>
                        <input type="text" className="form-control" name='work_order_number' value={data.work_order_number} onChange={onChange} id="work_order_number"/>
                        {errors && <div className='text-danger mt-1'>{errors.work_order_number}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="work_order_type" className="col-form-label">Work Order Type:</label>
                        <input type="text" className="form-control" name='work_order_type' value={data.work_order_type} onChange={onChange} id="work_order_type"/>
                        {errors && <div className='text-danger mt-1'>{errors.work_order_type}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="work_order_status" className="col-form-label">Work Order Status:</label>
                        <input type="text" className="form-control" name='work_order_status' value={data.work_order_status} onChange={onChange} id="work_order_status"/>
                        {errors && <div className='text-danger mt-1'>{errors.work_order_status}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="worker_id" className="col-form-label">Worker:</label>
                        <select className="form-control" name="worker_id" value={data.worker_id} onChange={onChange} id="worker_id">
                            <option value="">Select Worker</option>
                            {workers.data.map(worker => (
                                <option key={worker.id} value={worker.id}>{worker.first_name}</option>
                            ))}
                        </select>
                        {errors && <div className='text-danger mt-1'>{errors.worker_id}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicle_id" className="col-form-label">Vehicle:</label>
                        <select className="form-control" name="vehicle_id" value={data.vehicle_id} onChange={onChange} id="vehicle_id">
                            <option value="">Select Vehicle</option>
                            {vehicles.data.map(vehicle => (
                                <option key={vehicle.id} value={vehicle.id}>{vehicle.model}</option>
                            ))}
                        </select>
                        {errors && <div className='text-danger mt-1'>{errors.vehicle_id}</div>}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn bg-gradient-primary">Save</button>
                </div>
            </form>
        </>
    )
}
