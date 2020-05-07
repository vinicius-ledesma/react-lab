import React, {useState} from 'react';

import "./styles.css"

function Cadastro(){
    const valorInicial = {
        name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    const [user, setUser] = useState(valorInicial);

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className="container">
            <form>
                <h3>Cadastro de Usuário</h3>
                <div className="row">
                    <input name="name" value={user.name} 
                    onChange={handleChange} placeholder="Nome" />
                </div>
                <div className="row">
                    <input name="username" value={user.username} 
                    onChange={handleChange} placeholder="Username" />
                </div>
                <div className="row">
                    <input name="email" value={user.email} 
                    onChange={handleChange} placeholder="E-mail"/>
                </div>
                <div className="row">
                    <input name="password" value={user.password} 
                    onChange={handleChange} placeholder="Senha"/>
                </div>
                <div className="row">
                    <input name="confirm_password" 
                    value={user.confirm_password} 
                    onChange={handleChange} placeholder="Confirme a senha"/>
                </div>
                <div className="row">
                    <button>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Cadastro;