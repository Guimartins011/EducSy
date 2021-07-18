import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col } from 'react-bootstrap';
import { FaSearch, FaUserGraduate } from 'react-icons/fa';

class Menu extends Component {
    render() {
        return (
            <Navbar expand="lg">
                <Navbar.Brand href="/" className="col-sm-3 col-md-2">
                    <FaUserGraduate /> EducSy
                </Navbar.Brand>
                <Form className="searchForm">
                    <Form.Row>
                        <Col xs={10}>
                            <FormControl type="text" placeholder="Pesquisar" />
                        </Col>
                        <Col xs={2}>
                            <Button block variant="outline-secondary"><FaSearch /> Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Navbar>
        );
    }
}

export default Menu;