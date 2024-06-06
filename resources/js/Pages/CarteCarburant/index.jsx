import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Dialog from '../../Components/Dashboard/Dialog';
import Base from '../../Layouts/Base';
import useDialog from '../../Hooks/useDialog';
import CreateCarteCarburant from '../../Components/Dashboard/CarteCarburant/Create';
import EditCarteCarburant from '../../Components/Dashboard/CarteCarburant/Edit';
import { Inertia } from '@inertiajs/inertia';

export default function Index(props) {
    console.log(props)

    const {data: cartes, links, meta} = props.cartes;
    const vehicles = props.vehicles.data;
    console.log(vehicles)
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

    return (
        <>
            <div className="container-fluid py-4">
                <Dialog trigger={addTrigger} title="Create New Carte Carburant">
                    <CreateCarteCarburant close={addCloseTrigger} vehicles={vehicles}/>
                </Dialog>

                <Dialog trigger={updateTrigger} title={`Update Carte Carburant`}>
                    <EditCarteCarburant vehicles={vehicles} model={state} close={updateCloseTrigger}/>
                </Dialog>

                <Dialog trigger={destroyTrigger} title={`Delete Carte Carburant`}>
                    <p>Are you sure you want to delete this Carte Carburant?</p>
                    <div className="modal-footer">
                        <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" onClick={destroyCarte} className="btn bg-gradient-danger">Delete</button>
                    </div>
                </Dialog>

                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Carte Carburant Table</h6>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <button onClick={addDialogHandler} type="button" className="btn bg-gradient-success btn-block mb-3" data-bs-toggle="modal" data-bs-target="#exampleModalMessage">
                                            Create New Carte Carburant
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-0 pt-0 pb-2">
                                <div className="table-responsive-xxl p-0" width="100%">
                                    <table className="table align-items-center justify-content-center mb-0" width="100%">
                                        <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">#</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Litres</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Max Litres</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Plafond</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Vehicle</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {cartes.map((carte, index) => (
                                            <tr key={carte.id}>
                                                <td className='text-center'>{meta.from + index}</td>
                                                <td className='text-left'>
                                                    <div className="d-flex px-2">
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">{carte.litres}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-left'>
                                                    <p className="text-sm font-weight-bold mb-0">{carte.max_litres}</p>
                                                </td>
                                                <td className='text-left'>
                                                    <span className="text-xs font-weight-bold">{carte.plafond}</span>
                                                </td>
                                                <td className="align-middle text-left">
                                                    <div className="d-flex align-items-center text-left">
                                                        <span className="text-xs font-weight-bold mb-0">vehicule avec id :{carte.vehicle_id}</span>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-center" width="10%">
                                                    <div>
                                                        <button type="button" onClick={() => openUpdateDialog(carte)} className="btn btn-vimeo btn-icon-only mx-2">
                                                            <span className="btn-inner--icon"><i className="fas fa-pencil-alt"></i></span>
                                                        </button>
                                                        <button type="button" onClick={() => openDestroyDialog(carte)} className="btn btn-youtube btn-icon-only">
                                                            <span className="btn-inner--icon"><i className="fas fa-trash"></i></span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {meta.links.map((link, k) => (
                            <li key={k} className="page-item">
                                <Link disabled={link.url == null ? true : false} as="button" className={`${link.active && 'bg-info'} ${link.url == null && 'btn bg-gradient-secondary text-white'} page-link`} href={link.url || ''} dangerouslySetInnerHTML={{ __html: link.label }}/>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}

Index.layout = (page) => <Base key={page} children={page} title={"Manage Carte Carburant"} />;
