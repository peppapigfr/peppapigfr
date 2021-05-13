import React from 'react'
import JollibeeFM1 from '../images/jollibee/JollibeeFM1.jpeg';
import JollibeeFM2 from '../images/jollibee/JollibeeFM2.jpeg';
import JollibeeFM3 from '../images/jollibee/JollibeeFM3.jpeg';
import JollibeeFM4 from '../images/jollibee/JollibeeFM4.jpeg';
import JollibeeFM5 from '../images/jollibee/JollibeeFM5.jpeg';
import JollibeeFM6 from '../images/jollibee/JollibeeFM6.jpeg';
import JollibeeFM7 from '../images/jollibee/JollibeeFM7.jpeg';
import JollibeeFM8 from '../images/jollibee/JollibeeFM8.jpeg';
import JollibeeCJ1 from '../images/jollibee/JollibeeCJ1.jpeg';
import JollibeeCJ2 from '../images/jollibee/JollibeeCJ2.jpeg';
import JollibeeCJ3 from '../images/jollibee/JollibeeCJ3.jpeg';
import JollibeeCJ4 from '../images/jollibee/JollibeeCJ4.jpeg';
import JollibeeCJ5 from '../images/jollibee/JollibeeCJ5.jpeg';
import JollibeeCJ6 from '../images/jollibee/JollibeeCJ6.jpeg';
import JollibeeCJ7 from '../images/jollibee/JollibeeCJ7.jpeg';
import JollibeeCJ8 from '../images/jollibee/JollibeeCJ8.jpeg';
import JollibeeB1 from '../images/jollibee/JollibeeB1.jpeg';
import JollibeeB2 from '../images/jollibee/JollibeeB2.jpeg';
import JollibeeB3 from '../images/jollibee/JollibeeB3.jpeg';
import JollibeeB4 from '../images/jollibee/JollibeeB4.jpeg';
import JollibeeB5 from '../images/jollibee/JollibeeB5.jpeg';
import JollibeeB6 from '../images/jollibee/JollibeeB6.jpeg';
import JollibeeB7 from '../images/jollibee/JollibeeB7.jpeg';
import JollibeeB8 from '../images/jollibee/JollibeeB8.jpeg';
import { Button, Container, Row, Col, Image, Card, CardDeck } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function Jollibee() {
    return (

        <div id="jollibee" className="p-5" >
            <div className="container">
                <hr/>
                <ul class="nav nav-pills pills-dark mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Family Meals</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Chicken Joy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Burgers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Jolly Spaghetti</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Burger Steak</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Super Meals</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Jolly Hotdog and Pie</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Desserts and Beverages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Soups and Sides</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Palabok</a>
                    </li>
                
                </ul>


                <br></br>
                <section id="familyMeals"><h3>Family Meals</h3></section>
                <CardDeck className="mt-5">
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeFM1}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">6pc Chickenjoy w/ Jolly Spaghetti Pan</h5>
                                        <p className="card-text">
                                            Php 644.00
                                <br></br>
                                            <button size="sm" className="float-right" data-toggle="modal" data-target="#exampleModal" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </button>
                                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            ...
                                                    </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeFM2}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">8pc Chickenjoy w/ Jolly Spaghetti Pan</h5>
                                        <p className="card-text">
                                            Php 769.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeFM3}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Cheesy Yumburger Family Savers</h5>
                                        <p className="card-text">
                                            Php 248.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeFM4}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Yumburger Family Savers w/ Choco Sundae</h5>
                                        <p className="card-text">
                                            Php 424.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeFM5}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Champ All-Star Meal</h5>
                                        <p className="card-text">
                                            Php 659.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeFM6}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">6pc Burger Steak Family Pan</h5>
                                        <p className="card-text">
                                            Php 281.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeFM7}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">8pc Burger Steak Family Pan</h5>
                                        <p className="card-text">
                                            Php 373.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeFM8}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">6pc Burger Steak w/ Jolly Spaghetti Pan</h5>
                                        <p className="card-text">
                                            Php 479.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </CardDeck>
                <br></br>

                <section id="chickenJoy"><h3>Chicken Joy</h3></section>
                <CardDeck className="mt-5">
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeCJ1}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">6pc Chickenjoy Solo</h5>
                                        <p className="card-text">
                                            Php 439.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeCJ2}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">8pc Chickenjoy Solo</h5>
                                        <p className="card-text">
                                            Php 549.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeCJ3}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">6pc Chickenjoy w/ Jolly Spaghetti Pan</h5>
                                        <p className="card-text">
                                            Php 644.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeCJ4}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">8pc Chickenjoy w/ Jolly Spaghetti Pan</h5>
                                        <p className="card-text">
                                            Php 769.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB1}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Yumburger, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 95.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB2}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Cheesy Yumburger, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 109.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB3}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Bacon Cheesy Yumburger, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 121.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB4}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Amazing Aloha Yumburger, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 149.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </CardDeck>
                <br></br>

                <section id="burgers"><h3>Burgers</h3></section>
                <CardDeck className="mt-5">
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB1}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Yumburger, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 95.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB2}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Cheesy Yumburger, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 109.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB3}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Bacon Cheesy Yumburger, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 121.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB4}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Amazing Aloha Yumburger, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 149.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB5}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Bacon Cheesy Deluxe Yum, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 149.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB6}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Cheesy Deluxe Yumburger, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 132.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB7}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Champ, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 219.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" xl="4" md="4" sm="12" className="px-0">
                        <div className="card mb-3" style={{ width: '350px', height: '170px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Card.Img src={JollibeeB8}
                                        className="bd-placeholder-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Bacon Champ, Fries and Drink</h5>
                                        <p className="card-text">
                                            Php 259.00
                                <br></br>
                                            <Button size="sm" className="float-right" variant="danger">
                                                <i className="fas fa-minus mx-1"></i>
                                            </Button>
                                            <Button size="sm" className="float-right mx-1">
                                                <i className="fas fa-plus mx-1"></i>
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </CardDeck>
            </div>
        </div>
    );
}

export default Jollibee;