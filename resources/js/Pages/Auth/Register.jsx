import { Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import Auth from '../../Layouts/Auth'

export default function Register({ errors }) {
    const {data, setData, post} = useForm({
        name: '', username: '', email: '', password:'',
    })

    const changeHandler = (e) => setData({...data, [e.target.id]: e.target.value})

    const submitHandler = (e) => {
        // console.log(data);
        e.preventDefault()
        post(route('register'), data);
    }
    return (
        <>
            <div>
                <main className="main-content  mt-0">
                    <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg" style={{backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg")', backgroundPosition: 'top'}}>
                    <span className="mask bg-gradient-dark opacity-6" />
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-5 text-center mx-auto">
                            <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                            <p className="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                    <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
                        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                        <div className="card z-index-0">
                            <div className="card-header text-center pt-4">
                            {/* <h5>Register with</h5> */}
                            </div>
                            <div className="row px-xl-5 px-sm-4 px-3 d-flex justify-content-center">
                            <div className="mt-2 position-relative text-center">
                                <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                                or
                                </p>
                            </div>
                        </div>
                            <div className="card-body">
                            <form role="form" onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <input value={data.name} onChange={changeHandler} name='name' id='name' type="text" className="form-control" placeholder="Name" aria-label="Name" />
                                    {errors && (<div className='text-danger mt-1'>{errors.name}</div>)}
                                </div>
                                <div className="mb-3">
                                    <input value={data.username} onChange={changeHandler} name='username' id='username' type="text" className="form-control" placeholder="Username" aria-label="Username" />
                                    {errors && (<div className='text-danger mt-1'>{errors.username}</div>)}
                                </div>
                                <div className="mb-3">
                                    <input value={data.email} onChange={changeHandler} type="email" name='email' id='email' className="form-control" placeholder="Email" aria-label="Email" />
                                    {errors && (<div className='text-danger mt-1'>{errors.email}</div>)}
                                </div>
                                <div className="mb-3">
                                    <input value={data.password} onChange={changeHandler} type="password" name='password' id='password' className="form-control" placeholder="Password" aria-label="Password" />
                                    {errors && (<div className='text-danger mt-1'>{errors.password}</div>)}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2">Sign up</button>
                                </div>
                                <p className="text-sm mt-3 mb-0 text-center">
                                    Already have an account? {''}
                                    <Link href={route('login')} className="text-dark font-weight-bolder">Sign in</Link>
                                </p>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </main>
                <footer className="footer py-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-4 mx-auto text-center">
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Company
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            About Us
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Team
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Products
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Blog
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Pricing
                        </a>
                        </div>
                        <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-dribbble" />
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-twitter" />
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-instagram" />
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-pinterest" />
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-github" />
                        </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 mx-auto text-center mt-1">
                        <p className="mb-0 text-secondary">
                            Copyright ©  Soft by Creative Tim.
                        </p>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

Register.layout = (page) => <Auth children={page} title={"Register"}/>

