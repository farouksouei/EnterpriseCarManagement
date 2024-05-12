import { useForm } from '@inertiajs/inertia-react';
import React from 'react';

export default function CreateVehicule({ close }) {
    const { data, setData, post, reset, errors } = useForm({
        make: '',
        model: '',
        year: '',
        registration: '',
        mileage: '',
        license_plate: '',
        fuel: '',
        transmission: '',
        price: '',
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
        longitude: ''
    });

    const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        // get current location
        navigator.geolocation.getCurrentPosition((position) => {
            setData({
                ...data,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        })

        console.log(data);
        post(route('vehicles.store'), {
            ...data,
            onSuccess: () => {
                reset();
                close();
            },
        });
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="make" className="col-form-label">Make:</label>
                        <input type="text" className="form-control" name="make" value={data.make} onChange={onChange} />
                        {errors.make && <div className='text-danger mt-1'>{errors.make}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="model" className="col-form-label">Model:</label>
                        <input type="text" className="form-control" name="model" value={data.model} onChange={onChange} />
                        {errors.model && <div className='text-danger mt-1'>{errors.model}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="year" className="col-form-label">Year:</label>
                        <input type="text" className="form-control" name="year" value={data.year} onChange={onChange} />
                        {errors.year && <div className='text-danger mt-1'>{errors.year}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="registration" className="col-form-label">Registration:</label>
                        <input type="text" className="form-control" name="registration" value={data.registration} onChange={onChange} />
                        {errors.registration && <div className='text-danger mt-1'>{errors.registration}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="mileage" className="col-form-label">Mileage:</label>
                        <input type="text" className="form-control" name="mileage" value={data.mileage} onChange={onChange} />
                        {errors.mileage && <div className='text-danger mt-1'>{errors.mileage}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="license_plate" className="col-form-label">License Plate:</label>
                        <input type="text" className="form-control" name="license_plate" value={data.license_plate} onChange={onChange} />
                        {errors.license_plate && <div className='text-danger mt-1'>{errors.license_plate}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="fuel" className="col-form-label">Fuel:</label>
                        <input type="text" className="form-control" name="fuel" value={data.fuel} onChange={onChange} />
                        {errors.fuel && <div className='text-danger mt-1'>{errors.fuel}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="transmission" className="col-form-label">Transmission:</label>
                        <input type="text" className="form-control" name="transmission" value={data.transmission} onChange={onChange} />
                        {errors.transmission && <div className='text-danger mt-1'>{errors.transmission}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="price" className="col-form-label">Price:</label>
                        <input type="text" className="form-control" name="price" value={data.price} onChange={onChange} />
                        {errors.price && <div className='text-danger mt-1'>{errors.price}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="color" className="col-form-label">Color:</label>
                        <input type="text" className="form-control" name="color" value={data.color} onChange={onChange} />
                        {errors.color && <div className='text-danger mt-1'>{errors.color}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="vin" className="col-form-label">Vin:</label>
                        <input type="text" className="form-control" name="vin" value={data.vin} onChange={onChange} />
                        {errors.vin && <div className='text-danger mt-1'>{errors.vin}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="miles_until_service" className="col-form-label">Miles Until Service:</label>
                        <input type="text" className="form-control" name="miles_until_service" value={data.miles_until_service} onChange={onChange} />
                        {errors.miles_until_service && <div className='text-danger mt-1'>{errors.miles_until_service}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="miles_until_oil" className="col-form-label">Miles Until Oil:</label>
                        <input type="text" className="form-control" name="miles_until_oil" value={data.miles_until_oil} onChange={onChange} />
                        {errors.miles_until_oil && <div className='text-danger mt-1'>{errors.miles_until_oil}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="miles_until_tire" className="col-form-label">Miles Until Tire:</label>
                        <input type="text" className="form-control" name="miles_until_tire" value={data.miles_until_tire} onChange={onChange} />
                        {errors.miles_until_tire && <div className='text-danger mt-1'>{errors.miles_until_tire}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="miles_until_brake" className="col-form-label">Miles Until Brake:</label>
                        <input type="text" className="form-control" name="miles_until_brake" value={data.miles_until_brake} onChange={onChange} />
                        {errors.miles_until_brake && <div className='text-danger mt-1'>{errors.miles_until_brake}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="inspection_date" className="col-form-label">Inspection Date:</label>
                        <input type="date" className="form-control" name="inspection_date" value={data.inspection_date} onChange={onChange} />
                        {errors.inspection_date && <div className='text-danger mt-1'>{errors.inspection_date}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="insurance_date" className="col-form-label">Insurance Date:</label>
                        <input type="date" className="form-control" name="insurance_date" value={data.insurance_date} onChange={onChange} />
                        {errors.insurance_date && <div className='text-danger mt-1'>{errors.insurance_date}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tax_date" className="col-form-label">Tax Date:</label>
                        <input type="date" className="form-control" name="tax_date" value={data.tax_date} onChange={onChange} />
                        {errors.tax_date && <div className='text-danger mt-1'>{errors.tax_date}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="status" className="col-form-label">Status:</label>
                        <select className="form-control" name="status" value={data.status} onChange={onChange}>
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                        </select>
                        {errors.status && <div className='text-danger mt-1'>{errors.status}</div>}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" onClick={close}>Close</button>
                    <button type="submit" className="btn bg-gradient-primary">Save</button>
                </div>
            </form>
        </>
    );
}
