import React, { useState } from 'react';

import { Container, Input } from './styles'

import UserHook from '../../hooks/userHooks';

function Home() {

    const { adicionaUsuario } = UserHook();
    const [nomeUsuario, setNomeUsuario] = useState()

    return (
        <Container>
            <Input onChange={ (e) => setNomeUsuario(e.target.value)} placeholder="Nome do usuário"/>
            <Input placeholder="E-mail do usuário" isEmail />
            <button onClick={() => adicionaUsuario(nomeUsuario)}>Adicionar nome do usuário</button>
        </Container>
    )
}

export default Home;
