import {Button, Container, Row, Col, Image, Card, CardDeck} from 'react-bootstrap';
import foodIcon from '../images/food-icon.png';

function Categories() {
    return(
        <div className="mb-5" id="category-grid">
            <Container>
                <h1 className="display-4">What can we do for you today?</h1>
                <CardDeck>
                    <Row className="mt-4">
                        <Col xs="12" xl="3" md="4" sm="12" className="px-0">
                            <a href="/food-delivery" className="text-decoration-none text-black">
                                
                                <Card>
                                    <Card.Img variant="top" className="px-3" src={foodIcon} />
                                    <Card.Body>
                                    <Card.Title >Food Delivery</Card.Title>
                                    <Card.Text>                                   
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted"> Satisfy your cravings. </small>
                                    </Card.Footer>
                                </Card>
                            </a>
                        </Col>
                        <Col xs="12" xl="3" md="4" sm="12" className="px-0">
                            <a href="/food-delivery" className="text-decoration-none text-black">
                                <Card>
                                    <Card.Img variant="top" className="px-3" src={foodIcon} />
                                    <Card.Body>
                                    <Card.Title>Food Delivery</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted"> Satisfy your cravings. </small>
                                    </Card.Footer>
                                </Card>
                            </a>
                        </Col>
                        <Col xs="12" xl="3" md="4" sm="12" className="px-0">
                            <a href="/food-delivery" className="text-decoration-none text-black">
                                <Card>
                                    <Card.Img variant="top" className="px-3" src={foodIcon} />
                                    <Card.Body>
                                    <Card.Title>Food Delivery</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted"> Satisfy your cravings. </small>
                                    </Card.Footer>
                                </Card>
                            </a>
                        </Col>
                        <Col xs="12" xl="3" md="4" sm="12" className="px-0">
                            <a href="/food-delivery" className="text-decoration-none text-black">
                                <Card>
                                    <Card.Img variant="top" className="px-3" src={foodIcon} />
                                    <Card.Body>
                                    <Card.Title>Food Delivery</Card.Title>
                                    <Card.Text>                                   
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted"> Satisfy your cravings. </small>
                                    </Card.Footer>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs="12" xl="3" md="4" sm="12" className="px-0">
                            <a href="/food-delivery" className="text-decoration-none text-black">
                                <Card>
                                    <Card.Img variant="top" className="px-3" src={foodIcon} />
                                    <Card.Body>
                                    <Card.Title>Food Delivery</Card.Title>
                                    <Card.Text>                                   
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted"> Satisfy your cravings. </small>
                                    </Card.Footer>
                                </Card>
                            </a>
                        </Col>
                        <Col xs="12" xl="3" md="4" sm="12" className="px-0">
                            <a href="/food-delivery" className="text-decoration-none text-black">
                                <Card>
                                    <Card.Img variant="top" className="px-3" src={foodIcon} />
                                    <Card.Body>
                                    <Card.Title>Food Delivery</Card.Title>
                                    <Card.Text>                                  
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted"> Satisfy your cravings. </small>
                                    </Card.Footer>
                                </Card>
                            </a>
                        </Col>
                        <Col xs="12" xl="3" md="4" sm="12" className="px-0">
                            <a href="/food-delivery" className="text-decoration-none text-black">
                                <Card>
                                    <Card.Img variant="top" className="px-3" src={foodIcon} />
                                    <Card.Body>
                                    <Card.Title>Food Delivery</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted"> Satisfy your cravings. </small>
                                    </Card.Footer>
                                </Card>
                            </a>
                        </Col>
                        <Col xs="12" xl="3" md="4" sm="12" className="px-0">
                            <a href="/food-delivery" className="text-decoration-none text-black">
                                <Card>
                                    <Card.Img variant="top" className="px-3" src={foodIcon} />
                                    <Card.Body>
                                    <Card.Title>Food Delivery</Card.Title>
                                    <Card.Text>                                   
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted"> Satisfy your cravings. </small>
                                    </Card.Footer>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </CardDeck>
            </Container>
        </div>
    );
}
export default Categories;