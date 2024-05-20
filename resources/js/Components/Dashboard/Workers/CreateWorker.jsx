import { useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function CreateWorker({close}) {

    const {data, setData, post, reset, errors} = useForm({
        first_name: '', last_name: '', email: '', phone: '', address: '', city: '', state: '', zip: '', country: '', job_title: '', salary: '', status: ''
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('workers.store'), {
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
                        <label htmlFor="first_name" className="col-form-label">First Name:</label>
                        <input type="text" className="form-control" name='first_name' value={data.first_name} onChange={onChange} id="first_name"/>
                        {errors && <div className='text-danger mt-1'>{errors.first_name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name" className="col-form-label">Last Name:</label>
                        <input type="text" className="form-control" name='last_name' value={data.last_name} onChange={onChange} id="last_name"/>
                        {errors && <div className='text-danger mt-1'>{errors.last_name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="col-form-label">Email:</label>
                        <input type="email" className="form-control" name='email' value={data.email} onChange={onChange} id="email"/>
                        {errors && <div className='text-danger mt-1'>{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="col-form-label">Phone:</label>
                        <input type="text" className="form-control" name='phone' value={data.phone} onChange={onChange} id="phone"/>
                        {errors && <div className='text-danger mt-1'>{errors.phone}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address" className="col-form-label">Address:</label>
                        <input type="text" className="form-control" name='address' value={data.address} onChange={onChange} id="address"/>
                        {errors && <div className='text-danger mt-1'>{errors.address}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="city" className="col-form-label">City:</label>
                        <input type="text" className="form-control" name='city' value={data.city} onChange={onChange} id="city"/>
                        {errors && <div className='text-danger mt-1'>{errors.city}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="state" className="col-form-label">State:</label>
                        <input type="text" className="form-control" name='state' value={data.state} onChange={onChange} id="state"/>
                        {errors && <div className='text-danger mt-1'>{errors.state}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip" className="col-form-label">Zip:</label>
                        <input type="text" className="form-control" name='zip' value={data.zip} onChange={onChange} id="zip"/>
                        {errors && <div className='text-danger mt-1'>{errors.zip}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="country" className="col-form-label">Country:</label>
                        <input type="text" className="form-control" name='country' value={data.country} onChange={onChange} id="country"/>
                        {errors && <div className='text-danger mt-1'>{errors.country}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="job_title" className="col-form-label">Job Title:</label>
                        <input type="text" className="form-control" name='job_title' value={data.job_title} onChange={onChange} id="job_title"/>
                        {errors && <div className='text-danger mt-1'>{errors.job_title}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary" className="col-form-label">Salary:</label>
                        <input type="text" className="form-control" name='salary' value={data.salary} onChange={onChange} id="salary"/>
                        {errors && <div className='text-danger mt-1'>{errors.salary}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="status" className="col-form-label">Status:</label>
                        <input type="text" className="form-control" name='status' value={data.status} onChange={onChange} id="status"/>
                        {errors && <div className='text-danger mt-1'>{errors.status}</div>}
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
