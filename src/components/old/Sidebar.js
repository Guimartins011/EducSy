import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SidebarData } from '../data/Sidebar.data'

class Sidebar extends Component {
    render() {
        return (
            <nav className="sidebar">
                <ListGroup variant="flush">
                    {SidebarData.map((item, index) => {
                        return (
                            <ListGroup.Item key={index}>
                                <Link to={item.path}>
                                    {item.icon} <span>{item.title}</span>
                                </Link>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </nav>
        );
    }
}

export default Sidebar;