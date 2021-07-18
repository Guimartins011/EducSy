import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";

// Pages
import Inicial from "./pages/Inicial";
import Alunos from "./pages/aluno/Alunos";
import Professores from "./pages/Professores";
import Turmas from "./pages/Turmas";
import Salas from "./pages/Salas";

function App() {
  return (
    <Router>
      <Layout>
        <Row>
          <Col xs={2} className="sidebar-col">
            <Sidebar />
          </Col>
          <Col>
            <Switch>
              <Route exact path="/" component={Inicial} />
              <Route exact path="/inicio" component={Inicial} />
              <Route exact path="/alunos" component={Alunos} />
              <Route exact path="/professores" component={Professores} />
              <Route exact path="/turmas" component={Turmas} />
              <Route exact path="/salas" component={Salas} />
            </Switch>
          </Col>
        </Row>
      </Layout>
    </Router>
  );
}

export default App;
