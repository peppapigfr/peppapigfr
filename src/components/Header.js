import { Navbar, NavDropdown, Form, FormControl, Button, Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import juanIcon from '../images/juanifyjumbo.png';
import  './headers.css';
import { FiShoppingCart } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";

function Header() {

    let iconStyles = { color: "black", fontSize: "1.5em" };
    return (
        <Navbar className = "Navbar1"  expand= "lg">
            <Container >
                <Navbar.Brand href="/">
                    <Image src={juanIcon} height="40" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        <NavDropdown title="Order Now" id="basic-nav-dropdown" >
                            <NavDropdown.Item href="/food-delivery" >Food Delivery</NavDropdown.Item>
                            <NavDropdown.Item href="about-Us">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="check-out">Checkout</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="food-location">Food Location</NavDropdown.Item>
                            <NavDropdown.Item href="sign-up">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href="food-Homepage">Food Homepage</NavDropdown.Item>
                            <NavDropdown.Item href="User-page">User Page</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Form inline>
                        <button class="btn btn-outline-success me-2" type="button" >
                        < FiShoppingCart style = {iconStyles}/>
                        </button>
                        <i  button class="btn btn-outline-success me-2" type="button"  >
                             < BiUserCircle style = {iconStyles}/>                         
                           </i>
                        <button href="sign-up" class="btn btn-outline-success me-2" type="button">
                            <i className="fas fa-user-plus"></i>
                            Sign up
                        </button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;