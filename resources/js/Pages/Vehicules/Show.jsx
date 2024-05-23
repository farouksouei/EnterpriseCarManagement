import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Dialog from '../../Components/Dashboard/Dialog';
import Base from '../../Layouts/Base';
import useDialog from '../../Hooks/useDialog';
import 'react-calendar/dist/Calendar.css';
import './style.css';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Box, CardContent, Grid, LinearProgress, Typography } from "@mui/material";
import ReactCalendar from "react-calendar";

// Create a custom icon
const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Define maximum miles for each service
const MAX_MILES = {
    miles_until_brake: 10000,
    miles_until_service: 10000,
    miles_until_oil: 10000,
    miles_until_tire: 10000
};

export default function Index(props) {
    console.log(props);

    const { data: vehicule, links, meta } = props.vehicule;
    const [state, setState] = useState([]);
    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog();
    const [updateDialogHandler, updateCloseTrigger, updateTrigger] = useDialog();
    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] = useDialog();

    const position = [vehicule.latitude || 0, vehicule.longitude || 0];

    return (
        <>
            <div className="container-fluid py-4">
                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="">
                                        <h6>Vehicle {vehicule.make} {vehicule.model} <span style={{
                                            backgroundColor: 'black',
                                            color: 'white',
                                            border: '1px solid white',
                                            padding: '4px 4px',
                                            borderRadius: '5px',
                                            float: 'right'
                                        }}>{vehicule.license_plate}</span></h6>

                                    </div>
                                </div>
                            </div>
                            <CardContent>
                                <Grid container spacing={2}>
                                    {Object.keys(vehicule).map(key => (
                                        key !== 'id' && key !== 'make' && key !== 'model' && key !== 'latitude' && key !== 'longitude' && key !== 'inspection_date' && key !== 'insurance_date' && (
                                            <Grid item xs={12} md={6} key={key}>
                                                <Typography variant="body1">
                                                    <strong>{key.replace(/_/g, ' ')}:</strong> {vehicule[key]}
                                                </Typography>
                                                {key.startsWith('miles_until_') && (
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={(vehicule[key] / MAX_MILES[key]) * 100}
                                                        sx={{
                                                            '& .MuiLinearProgress-bar': {
                                                                backgroundColor: vehicule[key] <= 0.15 * MAX_MILES[key] ? 'red' : 'green'
                                                            }
                                                        }}
                                                    />
                                                )}
                                            </Grid>

                                        )
                                    ))}
                                </Grid>
                                <Box sx={{ marginTop: '20px' }}>

                                </Box>
                            </CardContent>
                            <div className="card-body">
                                <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="map-container">
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position} icon={customIcon}>
                                        <Popup>
                                            A pretty CSS3 popup. <br /> Easily customizable.
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = (page) => <Base key={page} children={page} title={"Manage Vehicles"} />;
