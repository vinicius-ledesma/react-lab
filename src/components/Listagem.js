import React from 'react';

function Listagem({item}) {

    return (
        <li >
              <span>Nome:</span> {item.nome}
              <br/>
              <span>Usuário:</span> {item.usuario}
              <br/>
              <span>Email:</span> {item.email}
              <br/>
              
            </li>
    )
}

export default Listagem;