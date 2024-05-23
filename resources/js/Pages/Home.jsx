import React from 'react'
import Guest from '../Layouts/Guest'
import {Container, Row, Col, Button, Card, Form, CardImg} from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="hero-background text-center">
                    <Container className="py-1">
                        <Row className="justify-content-center align-content-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Col>
                                <CardImg src="/img/imageFleet.jpg" alt="Hero" />
                            </Col>
                            <Col md={8}>
                                <h1 className="display-4">Welcome to My Vehicle Management Site</h1>
                                <p className="lead">
                                    This site helps you manage your vehicles, workers, and their tasks efficiently.
                                </p>
                                <Button variant="primary" size="lg">Learn more</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container className="my-5">
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Track Vehicles</Card.Title>
                                    <Card.Text>
                                        Easily track the status and location of your vehicles in real-time.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Manage Vehicles</Card.Title>
                                    <Card.Text>
                                        Add, edit, delete, and view details of all your vehicles from one place.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Assign Tasks</Card.Title>
                                    <Card.Text>
                                        Assign tasks to workers and manage work orders efficiently.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Monitor Work Orders</Card.Title>
                                    <Card.Text>
                                        Keep track of the progress and status of all work orders.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Worker Management</Card.Title>
                                    <Card.Text>
                                        Manage your workforce, assign tasks, and monitor their performance.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Reports & Analytics</Card.Title>
                                    <Card.Text>
                                        Generate reports and analytics to make informed decisions.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <footer className="bg-light py-4">
                    <Container>
                        <Row>
                            <Col className="text-center">
                                <p>&copy; {new Date().getFullYear()} Vehicle Management Site. All rights reserved.</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </>
    );
}

Home.layout = (page) => <Guest children={page} title={"Home"} />


Home.layout = (page) => <Guest children={page} title={"Home"}/>
