import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid">
                <Row>
                    <Col>
                        <span className="copyright"><FaIcons.FaRegCopyright /> Copyright Education System</span>
                    </Col>
                    <Col>
                        <div className="text-right">
                            <FaIcons.FaUserCheck /> <span className="user-status">Usuário: Osni Barbosa Chagas</span>
                            <a href="#" className="user-logout">Sair <FaIcons.FaSignOutAlt /></a>
                        </div>
                    </Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;