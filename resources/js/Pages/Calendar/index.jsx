import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Base from '../../Layouts/Base';
import {Link} from "@inertiajs/inertia-react";

export default function Index(props) {
    const [selectedEntretienVehicles, setSelectedEntretienVehicles] = useState([]);
    const [selectedTaxVehicles, setSelectedTaxVehicles] = useState([]);
    const [selectedInsuranceVehicles, setSelectedInsuranceVehicles] = useState([]);

    const tileContent = (dates) => ({ date, view }) => {
        if (view === 'month') {
            const foundDate = dates.find(d => new Date(d.date).toDateString() === date.toDateString());
            if (foundDate) {
                return (
                    <p title={`License Plate: ${foundDate.license_plate}, Make: ${foundDate.make}, Model: ${foundDate.model}`} style={{backgroundColor: 'blue', borderRadius: '5px'}}>
                        <span style={{color: 'blue'}}>•</span>
                    </p>
                );
            }
        }
    }

    const handleDayClick = (dates, setSelectedVehicles, value) => {
        const selectedDate = value.toDateString();
        const vehicles = dates.filter(d => new Date(d.date).toDateString() === selectedDate);
        setSelectedVehicles(vehicles);
    }

    return (
        <>
            <div className="container-fluid py-4">
                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Dates Entretiens</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style={{display: "flex", justifyContent: "space-between"}}>
                                <Calendar
                                    tileContent={tileContent(props.dates_entretien)}
                                    onClickDay={(value) => handleDayClick(props.dates_entretien, setSelectedEntretienVehicles, value)}
                                />
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>License Plate</th>
                                            <th>Make</th>
                                            <th>Model</th>
                                            <th>Link</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {selectedEntretienVehicles.map(vehicle => (
                                            <tr key={vehicle.license_plate}>
                                                <td>{vehicle.license_plate}</td>
                                                <td>{vehicle.make}</td>
                                                <td>{vehicle.model}</td>
                                                <Link href={route('vehicles.show', vehicle.id)} className="btn btn-primary btn-icon-only mx-2">
                                                    <span className="btn-inner--icon"><i className="fas fa-eye"></i></span>
                                                </Link>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Tax Dates</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style={{display: "flex", justifyContent: "space-between"}}>
                                <Calendar
                                    tileContent={tileContent(props.tax_dates)}
                                    onClickDay={(value) => handleDayClick(props.tax_dates, setSelectedTaxVehicles, value)}
                                />
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>License Plate</th>
                                            <th>Make</th>
                                            <th>Model</th>
                                            <th>Link</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {selectedTaxVehicles.map(vehicle => (
                                            <tr key={vehicle.license_plate}>
                                                <td>{vehicle.license_plate}</td>
                                                <td>{vehicle.make}</td>
                                                <td>{vehicle.model}</td>
                                                <Link href={route('vehicles.show', vehicle.id)}
                                                      className="btn btn-primary btn-icon-only mx-2">
                                                    <span className="btn-inner--icon"><i
                                                        className="fas fa-eye"></i></span>
                                                </Link>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Insurance Dates</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style={{display: "flex", justifyContent: "space-between"}}>
                                <Calendar
                                    tileContent={tileContent(props.insurance_dates)}
                                    onClickDay={(value) => handleDayClick(props.insurance_dates, setSelectedInsuranceVehicles, value)}
                                />
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>License Plate</th>
                                            <th>Make</th>
                                            <th>Model</th>
                                            <th>Link</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {selectedInsuranceVehicles.map(vehicle => (
                                            <tr key={vehicle.license_plate}>
                                                <td>{vehicle.license_plate}</td>
                                                <td>{vehicle.make}</td>
                                                <td>{vehicle.model}</td>
                                                <Link href={route('vehicles.show', vehicle.id)}
                                                      className="btn btn-primary btn-icon-only mx-2">
                                                    <span className="btn-inner--icon"><i
                                                        className="fas fa-eye"></i></span>
                                                </Link>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = (page) => <Base key={page} children={page} title={"View Important Dates"}/>;
