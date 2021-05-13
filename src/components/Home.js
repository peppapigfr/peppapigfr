import {Jumbotron, Button, Container, InputGroup, FormControl, Row, Col, Image} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import HomeCategories from '../reusable-components/Categories';
import juanIcon from '../images/juanifyjumbo.png';
import Tada from 'react-reveal/Tada';
import {Bounce, Fade} from 'react-reveal';
import juanMaleIcon from '../images/juanify-male.png';
import deliveryImg from '../images/delivery.png';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';

function Home() {
    const commands = [
        {
            command: ["Go to *", "Open *"],
        },
    ];

    const [state, setState] = useState({
        order: ''
    })

    const onChangeValue = (event) => setState({ ...state, order: event.target.value})

    const {transcript} = useSpeechRecognition({ commands });

    const voiceActivate = (event) => setState({ 
        ...state, 
        order: transcript
    })

    return (
        <div id="home">
            <Jumbotron id="home-jumbotron">
                <Container>
                    <div className="padded">
                        <center>
                            <Fade top >
                            <Image src={juanIcon} fluid/>
                            </Fade>
                        </center>
                        <h1 className="display-5 text-center">
                        What do you need?
                        </h1>
                        <center>
                                <Row>
                                    <Col xl="2"></Col>
                                    <Col xl="8">
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
                                            <path fill-rule="evenodd" d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                                            <path fill-rule="evenodd" d="M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
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
            <HomeCategories />
            <Container>
                <Row>
                    <Col xl="6" md="6" xs="12" sm="12">
                        <Bounce right>
                            <Image src={juanMaleIcon} fluid/>
                        </Bounce>
                    </Col>
                    <Col xl="6" md="6" xs="12" sm="12" className="mt-5"> 
                        <h1 className="mb-2">Welcome, mga ka-Juan!</h1> 
                        <p className="pt-2">
                        Juanify is an AI delivery of services platform that aggregates essential services, making user experience from search to completion of services simple and easy.
                        </p>       
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" md="6" xs="12" sm="12" className="mt-5"> 
                        <h1 className="mb-2">Deliver anywhere, anytime</h1> 
                        <p className="pt-2">
                        Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses. Even better, it allows you to adjust the parameters of the random words to best fit your needs.
                        </p>       
                    </Col>
                    
                        <Col xl="6" md="6" xs="12" sm="12">
                            <Bounce left>
                                <Image src={deliveryImg} fluid/>
                            </Bounce>
                        </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Home;