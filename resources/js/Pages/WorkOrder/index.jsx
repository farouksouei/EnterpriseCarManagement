import {Link, useForm} from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import Dialog from '../../Components/Dashboard/Dialog';
import Base from '../../Layouts/Base'
import useDialog from '../../Hooks/useDialog';
import CreateWorkOrder from '../../Components/Dashboard/WorkOrders/CreateWorkOrder';
import EditUser from '../../Components/Dashboard/Users/EditUser';
import { Inertia } from '@inertiajs/inertia';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Index(props) {
    console.log(props)

    const {data: workOrders, links, meta} = props.workOrder;
    const [state, setState] = useState({})
    const [addDialogHandler, addCloseTrigger,addTrigger] = useDialog()
    const [UpdateDialogHandler, UpdateCloseTrigger,UpdateTrigger] = useDialog()
    const [destroyDialogHandler, destroyCloseTrigger,destroyTrigger] = useDialog()
    const [AssignTasksDialogHandler, AssignTasksCloseTrigger,AssignTasksTrigger] = useDialog()

    const { data, setData, post, reset } = useForm({
        task_name: '',
        task_description: '',
        task_status: '',
        task_priority: '',
    });

    const handleInputChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submitTask = (e) => {
        e.preventDefault();
        post(route('workorders.assign', state), {
            data,
            onSuccess: () => {
                reset(),
                    close()
            },
        });
        AssignTasksCloseTrigger();
    };
    const openUpdateDialog = (workOrder) => {
        setState(workOrder);
        UpdateDialogHandler()
    }

    const openDestroyDialog = (workOrder) => {
        setState(workOrder);
        destroyDialogHandler()
    };

    const AssignTasks = (workOrder) => {
        console.log(workOrder)
        setState(workOrder);
        AssignTasksDialogHandler()
    }

    const ExportTasks = (workOrder) => {
        console.log("work order", workOrder);

        // Build the HTML for tasks to export in PDF
        const tasksHtml = workOrder.tasks.map(task => {
            console.log(task);
            return `<tr>
                    <td>${task.task_name}</td>
                    <td>${task.task_description}</td>
                    <td>${task.task_status}</td>
                    <td>${task.task_priority}</td>
                </tr>`;
        }).join('');

        // Create a wrapper div to hold the table
        const container = document.createElement('div');
        container.innerHTML = `
        <table border="1" style="border-collapse: collapse; width: 100%;">
            <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Priority</th>
                </tr>
            </thead>
            <tbody>
                ${tasksHtml}
            </tbody>
        </table>
    `;
        document.body.appendChild(container);

        const printDocument = (element) => {
            html2canvas(element)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    pdf.addImage(imgData, 'JPEG', 0, 0);
                    pdf.save("download.pdf");

                    // Clean up the added element from the DOM
                    document.body.removeChild(container);
                })
                .catch((error) => {
                    console.error('Error generating PDF:', error);
                    // Clean up the added element from the DOM in case of error
                    document.body.removeChild(container);
                });
        };

        printDocument(container);
    };


    const destroyUser = () => {
        Inertia.delete(
            route('users.destroy', state.id),
            { onSuccess: () => destroyCloseTrigger() });
    }

    return (
        <>
            <div className="container-fluid py-4">
                <Dialog trigger={addTrigger} title="Add New Worker">
                    <CreateWorkOrder close={addCloseTrigger} workers={props.workers} vehicles={props.vehicles}/>
                </Dialog>

                <Dialog trigger={UpdateTrigger} title={`Update Worker: ${state.license_plate}`}>
                    <EditUser model={state} close={UpdateCloseTrigger}/>
                </Dialog>

                <Dialog trigger={destroyTrigger} title={`Delete Worker: ${state.license_plate}`}>
                    <p>Are you sure to delete this user ?</p>
                    <div className="modal-footer">
                        <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" onClick={destroyUser} className="btn bg-gradient-danger">Delete</button>
                    </div>
                </Dialog>


                <Dialog trigger={AssignTasksTrigger} title={`Assign Tasks: ${state.work_order_number}`}>
                    <form onSubmit={submitTask}>
                        <div className="form-group">
                            <TextField
                                label="Task Name"
                                name="task_name"
                                value={data.task_name}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Task Description"
                                name="task_description"
                                value={data.task_description}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </div>
                        <div className="form-group">
                            <FormControl fullWidth>
                                <InputLabel>Task Status</InputLabel>
                                <Select
                                    name="task_status"
                                    value={data.task_status}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="">Select Status</MenuItem>
                                    <MenuItem value="pending">Pending</MenuItem>
                                    <MenuItem value="in_progress">In Progress</MenuItem>
                                    <MenuItem value="completed">Completed</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="form-group">
                            <FormControl fullWidth>
                                <InputLabel>Task Priority</InputLabel>
                                <Select
                                    name="task_priority"
                                    value={data.task_priority}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="">Select Priority</MenuItem>
                                    <MenuItem value="low">Low</MenuItem>
                                    <MenuItem value="medium">Medium</MenuItem>
                                    <MenuItem value="high">High</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="modal-footer">
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => setAssignTasksDialog(false)}
                            >
                                Close
                            </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Assign
                            </Button>
                        </div>
                    </form>
                </Dialog>


                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Work Order table</h6>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <button onClick={addDialogHandler} type="button"
                                                className="btn bg-gradient-success btn-block mb-3"
                                                data-bs-toggle="modal" data-bs-target="#exampleModalMessage">
                                            Create New Work Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-0 pt-0 pb-2">
                                <div className="table-responsive-xxl p-0" width="100%">
                                    <table className="table align-items-center justify-content-center mb-0"
                                           width="100%">
                                        <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-centter">#</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">work_order_number</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">work_order_status</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">work_order_type</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Export
                                                task
                                            </th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {workOrders.map((workOrder, index) => (
                                            <tr key={workOrder.id}>
                                                <td className='text-center'>{meta.from + index}</td>
                                                <td className='text-left'>
                                                    <div className="d-flex px-2">
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">{workOrder.work_order_number}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-left'>
                                                    <p className="text-sm font-weight-bold mb-0">{workOrder.work_order_status}</p>
                                                </td>
                                                <td className='text-left'>
                                                    <span className="text-xs font-weight-bold">{workOrder.work_order_type}</span>
                                                </td>
                                                <td className="align-middle text-left">
                                                    <div className="d-flex align-items-center text-left">
                                                        <span className="text-xs font-weight-bold mb-0">
                                                            <button type="button" onClick={() => ExportTasks(workOrder)}
                                                                    className="btn btn-success btn-icon-only mx-2">
                                                            <span className="btn-inner--icon"><i
                                                                className="fas fa-download"></i></span>
                                                        </button>
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center text-left">
                                                        <span className="text-xs font-weight-bold mb-0">
                                                            <button type="button" onClick={() => ExportTasks(workOrder)}
                                                                    className="btn btn-success btn-icon-only mx-2">
                                                            <span className="btn-inner--icon"><i
                                                                className="fas fa-eye"></i></span>
                                                        </button>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-center" width="10%">
                                                    <div>
                                                        <button type="button"
                                                                onClick={() => openUpdateDialog(workOrder)}
                                                                className="btn btn-vimeo btn-icon-only mx-2">
                                                            <span className="btn-inner--icon"><i
                                                                className="fas fa-pencil-alt"></i></span>
                                                        </button>
                                                        <button type="button" onClick={() => openDestroyDialog(workOrder)}
                                                                className="btn btn-youtube btn-icon-only">
                                                            <span className="btn-inner--icon"><i
                                                                className="fas fa-trash"></i></span>
                                                        </button>
                                                        <button type="button" onClick={() => AssignTasks(workOrder)}
                                                                className="btn btn-primary btn-icon-only mx-2">
                                                            <span className="btn-inner--icon"><i
                                                                className="fas fa-plus"></i></span>
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

Index.layout = (page) => <Base key={page} children={page} title={"Manage Worker Orders"}/>
