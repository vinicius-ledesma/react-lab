import React, {useState, useRef, useEffect} from 'react';

import api from '../../services/api';

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
    const [messageError, setMessageError] = useState(null);
    const [responseError, setResponseError] = useState(null);

    const ref = useRef(null);

    useEffect(() => {
        console.log(ref);
        if(ref.current) {
            ref.current.focus();
        }

        const input = document.getElementsByName('name')[0];
        input.focus();
    },[])

    function handleChange(e) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function verificaSenha() {
        if(user.confirm_password !== user.password) {
            setMessageError('Senhas diferentes!');
        } else {
            setMessageError(null);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        api.post('users', user)
        .then(response => console.log(response))
        .catch((err) => {
            //setResponseError(err.message);
            setResponseError(err.response.data.error);
        })
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h3>Cadastro de Usuário</h3>

                <span className="errorResponse">{responseError}</span>

                <div className="row">
                    <input name="name" autoFocus ref={ref} value={user.name} 
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
                    className={messageError && "errorMessage"}
                    value={user.confirm_password} 
                    onChange={handleChange}
                    onBlur={verificaSenha} placeholder="Confirme a senha"/>
                </div>
                {messageError && <div className="row">
                    <strong>{messageError}</strong>
                </div>}
                <div className="row">
                    <button>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Cadastro;