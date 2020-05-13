import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import Listagem from './components/Listagem';


export default function Routes() {

    return (
        <Switch>
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/listagem" component={Listagem} />
        </Switch>
    )
}