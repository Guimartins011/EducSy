import React, {Component} from 'react';
import {Card,Container,Row,Form,FormGroup,Label,Input,Button,Col} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';
import {CgGirl} from 'react-icons/cg';
import {BsXSquareFill} from 'react-icons/bs';
import {IoCheckbox, IoCard} from 'react-icons/io5';
import {HiCurrencyDollar} from 'react-icons/hi';


class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <main className="h-100">
            <Container className="h-100 animated fadeIn">
                <Row noGutters className="internas">
                    <Col xs={12} md={12} sm={12} id="divdados" >
                        <Card>
                            <Row>
                                <Col className="CardDashCol" md={3} lg={3} sm={3} xs={3}>                                       
                                <Row className="CardDashRow" style={{backgroundColor: 'green'}}>
                                    <Col className="CardDash" md={3} lg={3} sm={3} xs={3}><CgGirl style={{zoom: 3, marginTop: '0.5em'}}/></Col>
                                    <Col className="CardDashNum" md={8} lg={8} sm={8} xs={8}>
                                        <Row className="TextCount">Alunos Ativos</Row>
                                        <Row className="NumCount">1206</Row>
                                    </Col>
                                </Row>
                                </Col>
                                <Col className="CardDashCol" md={3} lg={3} sm={3} xs={3}>
                                <Row className="CardDashRow"  style={{backgroundColor: '#d6535d'}}>
                                    <Col className="CardDash" md={3} lg={3} sm={3} xs={3}><CgGirl style={{zoom: 3, marginTop: '0.5em'}}/></Col>
                                    <Col className="CardDashNum" md={8} lg={8} sm={8} xs={8}>
                                        <Row className="TextCount">Alunos Trancados</Row>
                                        <Row className="NumCount">62</Row>
                                    </Col>
                                </Row>
                                </Col>
                                <Col className="CardDashCol" md={3} lg={3} sm={3} xs={3}>
                                <Row className="CardDashRow"  style={{backgroundColor: '#9b8af7'}}>
                                    <Col className="CardDash" md={3} lg={3} sm={3} xs={3}><BsXSquareFill style={{zoom: 2.8, marginTop: '0.5em'}}/></Col>
                                    <Col className="CardDashNum" md={8} lg={8} sm={8} xs={8}>
                                        <Row className="TextCount">Cancelamento/Mês</Row>
                                        <Row className="NumCount">35</Row>
                                    </Col>
                                </Row>
                                </Col>
                                <Col className="CardDashCol" md={3} lg={3} sm={3} xs={3}>
                                <Row className="CardDashRow"  style={{backgroundColor: '#fdc75d'}}>
                                    <Col className="CardDash" md={3} lg={3} sm={3} xs={3}><IoCheckbox style={{zoom: 3, marginTop: '0.5em'}}/></Col>
                                    <Col className="CardDashNum" md={8} lg={8} sm={8} xs={8}>
                                        <Row className="TextCount">Matriculas/Mês</Row>
                                        <Row className="NumCount">143</Row>
                                    </Col>
                                </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </main>
        );
    }
}
export default withRouter(Student);
