import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Sidebar() {
    return (
        <aside className="sidenav bg-default navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer opacity-5 position-absolute end-0 top-0 d-none d-xl-none opacity-8 text-white" aria-hidden="true" id="iconSidenav" />
                <Link className="navbar-brand m-0" href={route('home')} target="_blank">
                    <img
                        src="/img/download.jpg"
                        alt="main_logo"
                        style={{height: '30px'}}
                    />
                    <span className="ms-1 font-weight-bold"> Enterprise Vehicule Manager</span>
                </Link>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`${route().current('dashboard') && 'active'} nav-link`}
                              href={route('dashboard')}>
                            <div
                                className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-tv-2 text-primary text-sm opacity-10"/>
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Settings</h6>
                    </li>
                    <li className="nav-item">
                        <Link className={`${route().current('profile') && 'active'} nav-link`} href={route('profile')}>
                            <div
                                className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-single-02 text-dark text-sm opacity-10"/>
                            </div>
                            <span className="nav-link-text ms-1">Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Manage</h6>
                    </li>
                    <li className="nav-item">
                        <Link className={`${route().current('users.*') && 'active'} nav-link`}
                              href={route('users.index')}>
                            <div
                                className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-user-lock text-warning text-sm opacity-10"/>
                            </div>
                            <span className="nav-link-text ms-1">Users</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <div className={` nav-link` }
                              >
                            <div
                                className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-car text-warning text-sm opacity-10"/>
                            </div>
                            <span className="nav-link-text ms-1">Vehicle Management</span>
                        </div>
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item">
                                <Link className={`${route().current('vehicles.index') && 'active'} nav-link`}
                                      href={route('vehicles.index')}>
                                    <span className="nav-link-text ms-1">Vehicle List</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${route().current('carte-carburants.index') && 'active'} nav-link`}
                                      href={route('carte-carburants.index')}>
                                    <span className="nav-link-text ms-1">Company Fuel Card List</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${route().current('consommation.index') && 'active'} nav-link`}
                                      href={route('consommation.index')}>
                                    <span className="nav-link-text ms-1">Daily Consommation List</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${route().current('calendar') && 'active'} nav-link`}
                                      href={route('calendar')}>
                                    <span className="nav-link-text ms-1">Calendar</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className={`${route().current('workers.*') && 'active'} nav-link`}
                              href={route('workers.index')}>
                            <div
                                className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-user text-warning text-sm opacity-10"/>
                            </div>
                            <span className="nav-link-text ms-1">workers</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`${route().current('workorders.*') && 'active'} nav-link`}
                              href={route('workorders.index')}>
                            <div
                                className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-list text-warning text-sm opacity-10"/>
                                <i className=""></i>
                            </div>
                            <span className="nav-link-text ms-1">work orders</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " as='a' method='post' href={route('logout')}>
                            <div
                                className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-sign-out-alt text-danger text-sm opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Log out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
