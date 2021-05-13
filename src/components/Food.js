import {Jumbotron, Button, Container, InputGroup, FormControl, Row, Col, Image} from 'react-bootstrap';
import BrickBG from '../images/brickwall-bg.jpg';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';
import React, { useState, useEffect } from 'react';
import Restaurant from '../reusable-components/Restaurants';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';



// Hello

function Food() {

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
            <Jumbotron id="food-jumbotron" className="overlay-dark overlay-opacity-3 bg-cover"  style={{ backgroundImage:`url(${BrickBG})`}}>
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
            <Restaurant />
        </div>
    )
}

export default Food;