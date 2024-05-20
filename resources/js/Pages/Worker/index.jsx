import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import Dialog from '../../Components/Dashboard/Dialog';
import Base from '../../Layouts/Base'
import useDialog from '../../Hooks/useDialog';
import CreateWorker from '../../Components/Dashboard/Workers/CreateWorker';
import EditUser from '../../Components/Dashboard/Users/EditUser';
import { Inertia } from '@inertiajs/inertia';

export default function Index(props) {
    console.log(props)

    const {data: workers, links, meta} = props.workers;
    const [state, setState] = useState([])
    const [addDialogHandler, addCloseTrigger,addTrigger] = useDialog()
    const [UpdateDialogHandler, UpdateCloseTrigger,UpdateTrigger] = useDialog()
    const [destroyDialogHandler, destroyCloseTrigger,destroyTrigger] = useDialog()
    const openUpdateDialog = (worker) => {
        setState(worker);
        UpdateDialogHandler()
    }

    const openDestroyDialog = (worker) => {
        setState(worker);
        destroyDialogHandler()
    };

    const destroyUser = () => {
        Inertia.delete(
            route('workers.destroy', state.id),
            { onSuccess: () => destroyCloseTrigger() });
    }

    return (
        <>
            <div className="container-fluid py-4">
                <Dialog trigger={addTrigger} title="Add New Worker">
                    <CreateWorker close={addCloseTrigger}/>
                </Dialog>

                <Dialog trigger={UpdateTrigger} title={`Update Worker: ${state.first_name}`}>
                    <EditUser model={state} close={UpdateCloseTrigger}/>
                </Dialog>

                <Dialog trigger={destroyTrigger} title={`Delete Worker: ${state.first_name}`}>
                    <p>Are you sure to delete this user ?</p>
                    <div className="modal-footer">
                        <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" onClick={destroyUser} className="btn bg-gradient-danger">Delete</button>
                    </div>
                </Dialog>

                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Workers table</h6>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <button onClick={addDialogHandler} type="button" className="btn bg-gradient-success btn-block mb-3" data-bs-toggle="modal" data-bs-target="#exampleModalMessage">
                                            Add new worker
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-0 pt-0 pb-2">
                                <div className="table-responsive-xxl p-0" width="100%">
                                    <table className="table align-items-center justify-content-center mb-0" width="100%">
                                        <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-centter">#</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">first_name</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">last_name</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">email</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">job_title</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {workers.map((worker, index) => (
                                            <tr key={worker.id}>
                                                <td className='text-center'>{meta.from + index}</td>
                                                <td className='text-left'>
                                                    <div className="d-flex px-2">
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">{worker.first_name}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-left'>
                                                    <p className="text-sm font-weight-bold mb-0">{worker.last_name}</p>
                                                </td>
                                                <td className='text-left'>
                                                    <span className="text-xs font-weight-bold">{worker.email}</span>
                                                </td>
                                                <td className="align-middle text-left">
                                                    <div className="d-flex align-items-center text-left">
                                                        <span className="text-xs font-weight-bold mb-0">{worker.job_title}</span>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-center" width="10%">
                                                    <div>
                                                        <button type="button" onClick={() => openUpdateDialog(worker)} className="btn btn-vimeo btn-icon-only mx-2">
                                                            <span className="btn-inner--icon"><i className="fas fa-pencil-alt"></i></span>
                                                        </button>
                                                        <button type="button" onClick={() => openDestroyDialog(worker)} className="btn btn-youtube btn-icon-only">
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
                        { meta.links.map((link, k) => (
                            <li key={k} className="page-item">
                                <Link disabled={link.url == null ? true : false} as="button" className={`${link.active && 'bg-info'} ${link.url == null && 'btn bg-gradient-secondary text-white'} page-link`} href={link.url || ''} dangerouslySetInnerHTML={{ __html: link.label }}/>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

Index.layout = (page) => <Base key={page} children={page} title={"Manage Workers"}/>
