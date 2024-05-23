import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Inertia } from '@inertiajs/inertia';
import Dialog from '../../Components/Dashboard/Dialog';
import Base from '../../Layouts/Base';
import useDialog from '../../Hooks/useDialog';
import CreateCarteCarburant from '../../Components/Dashboard/CarteCarburant/Create';
import EditCarteCarburant from '../../Components/Dashboard/Users/EditUser';

export default function Index(props) {
    const dates_entretiens = props.dates_entretien.map(date => new Date(date));
    const tax_dates = props.tax_dates.map(date => new Date(date));
    const insurance_dates = props.insurance_dates.map(date => new Date(date));
    const [state, setState] = useState({});
    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog();
    const [updateDialogHandler, updateCloseTrigger, updateTrigger] = useDialog();
    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] = useDialog();

    const openUpdateDialog = (carte) => {
        setState(carte);
        updateDialogHandler();
    }

    const openDestroyDialog = (carte) => {
        setState(carte);
        destroyDialogHandler();
    };

    const destroyCarte = () => {
        Inertia.delete(
            route('carte-carburants.destroy', state.id),
            { onSuccess: () => destroyCloseTrigger() }
        );
    }

    const tileContent = (dates) => ({ date, view }) => {
        if (view === 'month' && dates.find(d => d.toDateString() === date.toDateString())) {
            return <p>•</p>;
        }
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
                            <div className="card-body">
                                <Calendar
                                    tileContent={tileContent(dates_entretiens)}
                                />
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
                            <div className="card-body">
                                <Calendar
                                    tileContent={tileContent(tax_dates)}
                                />
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
                            <div className="card-body">
                                <Calendar
                                    tileContent={tileContent(insurance_dates)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = (page) => <Base key={page} children={page} title={"View Important Dates"} />;
