import { Jumbotron, Button, Container, InputGroup, FormControl, Row, Col, Image } from 'react-bootstrap';
import BrickBG from '../images/brickwall-bg.jpg';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';
import React, { useState, useEffect } from 'react';
import Restaurant from '../reusable-components/Restaurants';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import juanIcon from '../images/juanify-male.png';

function Food() {

    const commands = [
        {
            command: ["Go to *", "Open *"],
        },
    ];

    const [state, setState] = useState({
        order: ''
    })

    const onChangeValue = (event) => setState({ ...state, order: event.target.value })

    const { transcript } = useSpeechRecognition({ commands });

    const voiceActivate = (event) => setState({
        ...state,
        order: transcript
    })

    return (
        <div id="food">
            <Jumbotron id="food-jumbotron" className="overlay-dark overlay-opacity-3 bg-cover" style={{ backgroundImage: `url(${BrickBG})` }}>
                <Container>
                    <div className="padded">
                        <center>
                            <Row>
                                <Col xl="2"></Col>
                                <Col xl="8">
                                    <Fade>
                                        <h1 className="title"> What can we do for you today?</h1>
                                    </Fade>
                                    <Tada>
                                        <InputGroup className="mt-4 voice-activate">
                                            <FormControl
                                                id="voice-activate-field"
                                                value={state.order}
                                                onChange={onChangeValue}
                                                placeholder="Click the mic icon to activate voice"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <Button variant="warning" onClick={() => {
                                                    SpeechRecognition.startListening();
                                                    voiceActivate();
                                                }} className="voice-activate-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                                        <path fill-rule="evenodd" d="M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                                                    </svg>
                                                </Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Tada>
                                </Col>
                                <Col xl="2"></Col>
                            </Row>
                        </center>
                    </div>
                </Container>
            </Jumbotron>
    
            <section class="features-icons bg-light text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex">
                                    <i class="fas fa-hamburger m-auto text-primary"></i>
                                </div>
                                <h3>Juanify Juanify</h3>
                                <p class="lead mb-0">Juanify Juanify</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex">
                                    <i class="fas fa-pizza-slice m-auto text-primary"></i>
                                </div>
                                <h3>Juanify Juanify</h3>
                                <p class="lead mb-0">Juanify Juanify</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex">
                                    <i class="fas fa-cookie-bite m-auto text-primary"></i>
                                </div>
                                <h3>Juanify Juanify</h3>
                                <p class="lead mb-0">Juanify Juanify</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="showcase">
                <div class="container-fluid p-0">
                    <div class="row no-gutters">
                    {/* {style="background-image: url('img/bg-showcase-1.jpg');"} */}
                        <div class="col-lg-6 order-lg-2 text-white showcase-img" ><img src = {juanIcon} width = "500px" height = "500px"></img></div>
                        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h2>Fully Responsive Design</h2>
                            <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                        </div>
                    </div>
                    <div class="row no-gutters">
                    {/* style="background-image: url('img/bg-showcase-2.jpg');" */}
                        <div class="col-lg-6 text-white showcase-img"><img src = {juanIcon} width = "500px" height = "500px"></img></div>
                        <div class="col-lg-6 my-auto showcase-text">
                            <h2>Updated For Bootstrap 4</h2>
                            <p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
                        </div>
                    </div>
                    <div class="row no-gutters">
                    {/* style="background-image: url('img/bg-showcase-3.jpg');" */}
                        <div class="col-lg-6 order-lg-2 text-white showcase-img"><img src = {juanIcon} width = "500px" height = "500px"></img></div>
                        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h2>Easy to Use &amp; Customize</h2>
                            <p class="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Food;