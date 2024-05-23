import React from 'react'
import Base from '../Layouts/Base'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function Dashboard(props) {
    console.log(props)

    // get vehicles and vehicles which an integer
    const { vehicles, users, workers, workOrder, lastVehicule, lastUser, lastWorker, lastWorkOrder,workOrders4 } = props;
    const dates_entretiens = props.dates_entretien.map(date => new Date(date));
    const tax_dates = props.tax_dates.map(date => new Date(date));
    const insurance_dates = props.insurance_dates.map(date => new Date(date));

    const tileContent = (dates) => ({ date, view }) => {
        if (view === 'month' && dates.find(d => d.toDateString() === date.toDateString())) {
            return <p>•</p>;
        }
    }
    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Vehicules</p>
                                <h5 className="font-weight-bolder">
                                    {vehicles}
                                </h5>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                <i className="fas fa-car text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Users</p>
                                <h5 className="font-weight-bolder">
                                    {users}
                                </h5>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                <i className="fas fa-user text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Workers</p>
                                <h5 className="font-weight-bolder">
                                    {workers}
                                </h5>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                <i className="fas fa-users text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Work Order</p>
                                <h5 className="font-weight-bolder">
                                    {workOrder}
                                </h5>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                                <i className="fas fa-list text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-7 mb-lg-0 mb-4">
                        <div className="card ">
                            <div className="card-header pb-0 p-3">
                                <div className="d-flex justify-content-between">
                                    <h6 className="mb-2">Last Added Work Orders</h6>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-items-center">
                                    <tbody>
                                    {workOrders4.map((workOrder, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="text-center">
                                                    <p className="text-xs font-weight-bold mb-0">work_order_number:</p>
                                                    <h6 className="text-sm mb-0">{workOrder.work_order_number}</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-center">
                                                    <p className="text-xs font-weight-bold mb-0">work_order_type:</p>
                                                    <h6 className="text-sm mb-0">{workOrder.work_order_type}</h6>
                                                </div>
                                            </td>
                                            <td className="align-middle text-sm">
                                                <div className="col text-center">
                                                    <p className="text-xs font-weight-bold mb-0">work_order_status:</p>
                                                    <h6 className="text-sm mb-0">{workOrder.work_order_status}</h6>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card card-carousel overflow-hidden h-100 p-0">
                            <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
                                <div className="carousel-inner border-radius-lg h-100">
                                    <div className="carousel-item h-100 active" style={{
                                        backgroundImage: 'url("/img/carousel-1.jpg")',
                                        backgroundSize: 'cover'
                                    }}>
                                        <div
                                            className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                            <div
                                                className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                                <i className="ni ni-camera-compact text-dark opacity-10"/>
                                            </div>
                                            <h5 className="text-white mb-1">Last added Vehicule</h5>
                                            <p><h6 className="text-white mb-1">{lastVehicule.make} {lastVehicule.model}
                                                <span style={{
                                                    backgroundColor: 'black',
                                                    color: 'white',
                                                    border: '1px solid white',
                                                    padding: '4px 4px',
                                                    borderRadius: '5px',
                                                    float: 'right'
                                                }}>{lastVehicule.license_plate}</span></h6></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item h-100"
                                         style={{
                                             backgroundImage: 'url("/img/carousel-2.jpg")',
                                             backgroundSize: 'cover'
                                         }}>
                                        <div
                                            className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                            <div
                                                className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                                <i className="ni ni-bulb-61 text-dark opacity-10"/>
                                            </div>
                                            <h5 className="text-white mb-1">Last added Worker</h5>
                                            <p>{lastWorker.first_name} {lastWorker.last_name} <span style={{
                                                padding: '4px 4px',
                                                borderRadius: '5px',
                                                float: 'right',
                                                fontSize: 'larger',
                                                fontWeight: 'bold'
                                            }}>{lastWorker.phone}</span></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item h-100"
                                         style={{
                                             backgroundImage: 'url("/img/carousel-3.jpg")',
                                             backgroundSize: 'cover'
                                         }}>
                                        <div
                                            className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                            <div
                                                className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                                <i className="ni ni-trophy text-dark opacity-10"/>
                                            </div>
                                            <h5 className="text-white mb-1">Share with us your design tips!</h5>
                                            <p>Don’t be afraid to be wrong because you can’t learn anything from a
                                                compliment.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev w-5 me-3" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next w-5 me-3" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-xl-0 m-4">
                            <div className="card h-100 w-100">
                                <div className="card-header pb-0">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6>Upcoming maintenace Dates</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body" style={{ display:"flex",justifyContent:"space-between" }}>
                                    <Calendar
                                        tileContent={tileContent(tax_dates)}
                                    />
                                    <Calendar
                                        tileContent={tileContent(insurance_dates)}
                                    />
                                    <Calendar
                                        tileContent={tileContent(dates_entretiens)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

Dashboard.layout = (page) => <Base children={page} title={"Dashboard"}/>
