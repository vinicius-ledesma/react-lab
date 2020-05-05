import React from 'react';
import { Switch, Route } from 'react-router-dom';


export default function Routes() {

    return (
        <Switch>
            <Route path="/teste" component={() => <h3>Componente de teste</h3>} />
            
            <Route path="/teste2" component={() => <h3>Componente de teste 2</h3>} />

        </Switch>
    )
}