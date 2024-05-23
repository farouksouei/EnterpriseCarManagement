import { useForm } from '@inertiajs/inertia-react';
import React from 'react';

export default function CreateCarteCarburant({ close, vehicles }) {
    const { data, setData, post, reset, errors } = useForm({
        litres: '',
        max_litres: '',
        plafond: '',
        vehicle_id: ''
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('carte-carburants.store'), {
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
                        <label htmlFor="litres" className="col-form-label">Litres:</label>
                        <input type="number" className="form-control" name="litres" value={data.litres} onChange={onChange} id="litres"/>
                        {errors.litres && <div className='text-danger mt-1'>{errors.litres}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="max_litres" className="col-form-label">Max Litres:</label>
                        <input type="number" className="form-control" name="max_litres" value={data.max_litres} onChange={onChange} id="max_litres"/>
                        {errors.max_litres && <div className='text-danger mt-1'>{errors.max_litres}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="plafond" className="col-form-label">Plafond:</label>
                        <input type="number" className="form-control" name="plafond" value={data.plafond} onChange={onChange} id="plafond"/>
                        {errors.plafond && <div className='text-danger mt-1'>{errors.plafond}</div>}
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
