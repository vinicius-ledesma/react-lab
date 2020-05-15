import React, { useCallback, useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import "./styles.css";

import api from '../../services/api'

function Editar({usuario, callback, callClose}) {

    const [user, setUser] = useState({
        name: '',
        email: '',
        username: '',
        _id: ''
    });

    const history = useHistory();

    useEffect(() => {
        setUser(usuario);
    }, [usuario])

    const handleChange = useCallback((e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }, [user]);

    const handleSubmit = useCallback(() => {
        const id = user._id;
        api.put(`/users/${id}`, user)
        .then((resolve) => {
            callback(true);
        })
        .catch((error) => console.log(error));
    },[callback, user]);

    const handleFechar = useCallback(() => {
        callClose();
    },[callClose])

    return (
        <div className="modal">
            <span>E-mail</span>
             <input type="text"
                className="input"
                defaultValue={user.email}
                readOnly
             /> 

            <span>Name</span>
            <input className="input" type="text" name="name" onChange={handleChange} value={user.name || ""} />

            <span>Username</span>
            <input type="text" className="input" name="username" onChange={handleChange} value={user.username || ""} />
            <button type="button" className="button" onClick={handleSubmit}>Editar</button>
            <button type="button" className="button" onClick={handleFechar}>Fechar</button>
        </div>
    )
}

export default Editar;
