import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro';


export default function Routes() {

    return (
        <Switch>
            <Route path="/cadastro" component={Cadastro} />
            
            <Route path="/listagem" component={() => <h3>Componente de teste 2</h3>} />

        </Switch>
    )
}