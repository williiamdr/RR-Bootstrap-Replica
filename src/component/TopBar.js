import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

export default function Navi() {
    return (
        <header>
            <Navbar bg="light" expand="lg" className='justify-content-between'>
                <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                    <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav>
                            <Nav.Item>
                                <Nav.Link href="#LogIn">Log In</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Button variant="success">Sign Up</Button>{' '}
                            </Nav.Item>
                    </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
        </header>
    )
}




