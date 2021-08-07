import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Student from './components/Cruds/Student'
import Teste from './components/Cruds/teste'
import LayoutDefault from './components/Layouts/LayoutDefault';


class Routes extends Component {
    render(){ 
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LayoutDefault>
                        <Home />
                    </LayoutDefault>
                </Route>                
                <Route exact path="/alunos">
                    <LayoutDefault>
                        <Student/>
                    </LayoutDefault>
                </Route>
                <Route exact path="/teste">
                    <LayoutDefault>
                        <Teste/>
                    </LayoutDefault>
                </Route>
            </Switch>
        </BrowserRouter>

        );

    }
}

export default Routes;


