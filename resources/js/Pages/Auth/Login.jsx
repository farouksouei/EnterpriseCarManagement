import { Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import Auth from '../../Layouts/Auth'

export default function Login({ errors }) {
    const {data, setData, post} = useForm({
        email: '', password:'', remember:'',
    })

    const changeHandler = (e) => setData({...data, [e.target.id]: e.target.value})

    const submitHandler = (e) => {
        e.preventDefault()
        post(route('login'), data);
    }
    return (
        <>
            <div className="page-header min-vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                            <div className="card card-plain">
                                <div className="card z-index-0">
                                    <div className="card-header text-center pt-4">
                                        <h5>Login</h5>
                                        </div>
                                        <div className="row px-xl-5 px-sm-4 px-3 d-flex justify-content-center">
                                    </div>
                                    <div className="card-body">
                                        <form role="form" onSubmit={submitHandler} noValidate>
                                            <div className="mb-3">
                                                <input value={data.email} onChange={changeHandler} type="email" name='email' id='email' className="form-control form-control-lg" placeholder="Email" aria-label="Email" />
                                                {errors && (<div className='text-danger mt-1'>{errors.email}</div>)}
                                            </div>
                                            <div className="mb-3">
                                                <input  value={data.password} onChange={changeHandler} type="password" name='password' id='password' className="form-control form-control-lg" placeholder="Password" aria-label="Password" />
                                                {errors && (<div className='text-danger mt-1'>{errors.password}</div>)}

                                            </div>
                                            <div className="form-check form-switch">
                                                <input  value={data.remember} onChange={(e) => setData({...values, remember: e.target.checked})} name='remember' id='remember' className="form-check-input" type="checkbox" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                        <p className="mb-4 text-sm mx-auto">
                                            Don't have an account? {' '}
                                            <Link href={route('register')} className="text-primary text-gradient font-weight-bold">Sign up</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                        <div className="position-relative bg-gradient-success h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style={{backgroundImage: 'url("https://www.flexerent.co.uk/hubfs/Artboard%20289824@2x.png")', backgroundSize: 'cover'}}>
                            <span className="mask bg-gradient-secondary opacity-6" />
                            <h4 className="mt-5 text-white font-weight-bolder position-relative">"Login here"</h4>
                            <p className="text-white position-relative">Enter your vehicule managemnt domain.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Login.layout = (page) => <Auth children={page} title={"Login"}/>
