import { useForm } from '@inertiajs/inertia-react';
import React from 'react';

export default function CreateMaintenance({ close, vehicles }) {
    const { data, setData, post, reset, errors } = useForm({
        date: '',
        kilometers: '',
        vehicle_id: ''
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('data', data)
        post(route('consommation.store'), {
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
                        <label htmlFor="date" className="col-form-label">Date:</label>
                        <input type="date" className="form-control" name="date" value={data.date} onChange={onChange} id="date"/>
                        {errors.date && <div className='text-danger mt-1'>{errors.date}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="kilometers" className="col-form-label">Kilometers:</label>
                        <input type="number" className="form-control" name="kilometers" value={data.kilometers} onChange={onChange} id="kilometers"/>
                        {errors.kilometers && <div className='text-danger mt-1'>{errors.kilometers}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicle_id" className="col-form-label">Vehicle:</label>
                        <select className="form-control" name="vehicle_id" value={data.vehicle_id} onChange={onChange} id="vehicle_id">
                            <option value="">Select Vehicle</option>
                            {vehicles.map(vehicle => (
                                <option key={vehicle.id} value={vehicle.id}>{vehicle.model}</option>
                            ))}
                        </select>
                        {errors.vehicle_id && <div className='text-danger mt-1'>{errors.vehicle_id}</div>}
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
