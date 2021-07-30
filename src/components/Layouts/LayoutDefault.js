import React, {Component} from 'react';
import {Container, Col} from 'reactstrap';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Home from '../Home/Home';
import {IoHome, IoWarningSharp, IoLogOutOutline} from 'react-icons/io5'

import '../assets/css/facilitaStyles.css';

class LayoutDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    onCollapse = () => {
        let active = !this.state.collapsed;
        this.setState({collapsed: active});
    };

    render() {
        return (
            <Container fluid>
                <div class="topnav">
                <img src="logo-portal.png" width="126" alt="Facilita Educational" />
                <a href="#about"> <IoLogOutOutline /></a>
                <a href="#contact"> <IoWarningSharp /></a>
                <a href="#news"><IoHome /></a>

                </div>
                <Col                    
                    id="sidebar"
                    className={
                        this.state.collapsed
                            ? 'collapsed d-xs-none d-sm-none d-md-none d-lg-block'
                            : 'd-xs-none d-sm-none d-md-none d-lg-block'
                    }>
                    <Sidebar
                        action={this.onCollapse}
                        blUsuarioAcessos={this.props.params && parseInt(this.props.params.idUsuario) > 0}
                    />
                </Col>
                <Col id="main" className={this.state.collapsed ? 'collapsed h-100' : 'h-100'}>
                    {this.props.children}
                    <Footer/>
                </Col>
            </Container>
        );
    }
}

export default LayoutDefault;
