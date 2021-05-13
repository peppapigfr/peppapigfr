import {Jumbotron, Button, Container, InputGroup, FormControl, Row, Col, Image} from 'react-bootstrap';
import pizzaBg from '../images/pizzabg.jpg';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';
import React, { useState, useEffect } from 'react';
import Restaurant from '../reusable-components/Restaurants';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';

function FoodLocation() {

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
        <div id="food">
            <Jumbotron id="food-jumbotron" className="overlay-dark overlay-opacity-3 bg-cover"  style={{ backgroundImage:`url(${pizzaBg})`}}>
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
                                            placeholder="Search Location"
                                            aria-describedby="basic-addon2"
                                            />
                                            
                                            <InputGroup.Append>
                                                <Button variant="warning" onClick={() => {
                                                    SpeechRecognition.startListening();
                                                    voiceActivate();
                                                }} className="voice-activate-button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
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
            <Restaurant />
        </div>
    )
}
export default FoodLocation;