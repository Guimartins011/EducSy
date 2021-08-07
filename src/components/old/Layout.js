import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Menu from './Menu';
import { IconContext } from 'react-icons';

class Layout extends Component {
    render() {
        return (
            <main role="main">
                <Menu />
                <Container fluid>
                    {this.props.children}
                </Container>
                <Footer />
            </main>
        );
    }
}

export default Layout;