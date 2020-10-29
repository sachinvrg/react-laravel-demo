import React from 'react'
import { Button, Navbar, Nav, Form} from 'react-bootstrap';

export default function Header() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link> Home </Nav.Link>
            <Nav.Link> About US </Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="btn-success">LOGO</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}
