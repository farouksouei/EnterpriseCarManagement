import { useForm } from '@inertiajs/inertia-react';
import React from 'react';

export default function CreateVehicle({ close }) {
    const { data, setData, post, reset, errors } = useForm({
        make: '',
        model: '',
        year: '',
        registration: '',
        mileage: '',
        fuel: '',
        transmission: '',
        price: '',
        license_plate: '',
        color: '',
        vin: '',
        miles_until_service: '',
        miles_until_oil: '',
        miles_until_tire: '',
        miles_until_brake: '',
        inspection_date: '',
        insurance_date: '',
        tax_date: '',
        status: 'available',
        latitude: '',
        longitude: '',
        description: '',
        url: ''
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('vehicles.store'), {
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
                    {[
                        { label: 'Make', id: 'make' },
                        { label: 'Model', id: 'model' },
                        { label: 'Year', id: 'year' },
                        { label: 'Registration', id: 'registration' },
                        { label: 'Mileage', id: 'mileage' },
                        { label: 'Fuel', id: 'fuel' },
                        { label: 'Transmission', id: 'transmission' },
                        { label: 'Price', id: 'price' },
                        { label: 'License Plate', id: 'license_plate' },
                        { label: 'Color', id: 'color' },
                        { label: 'VIN', id: 'vin' },
                        { label: 'Miles Until Service', id: 'miles_until_service' },
                        { label: 'Miles Until Oil', id: 'miles_until_oil' },
                        { label: 'Miles Until Tire', id: 'miles_until_tire' },
                        { label: 'Miles Until Brake', id: 'miles_until_brake' },
                        { label: 'Inspection Date', id: 'inspection_date', type: 'date' },
                        { label: 'Insurance Date', id: 'insurance_date', type: 'date' },
                        { label: 'Tax Date', id: 'tax_date', type: 'date' },
                        { label: 'Latitude', id: 'latitude' },
                        { label: 'Longitude', id: 'longitude' },
                        { label: 'Description', id: 'description' },
                        { label: 'URL', id: 'url' }
                    ].map(field => (
                        <div className="form-group" key={field.id}>
                            <label htmlFor={field.id} className="col-form-label">{field.label}:</label>
                            <input
                                type={field.type || 'text'}
                                className="form-control"
                                name={field.id}
                                value={data[field.id]}
                                onChange={onChange}
                                id={field.id}
                            />
                            {errors[field.id] && <div className='text-danger mt-1'>{errors[field.id]}</div>}
                        </div>
                    ))}
                    <div className="form-group">
                        <label htmlFor="status" className="col-form-label">Status:</label>
                        <select className="form-control" name="status" value={data.status} onChange={onChange} id="status">
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                        </select>
                        {errors.status && <div className='text-danger mt-1'>{errors.status}</div>}
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
