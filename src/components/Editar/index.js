import React, { useCallback, useState, useEffect } from 'react';

import "./styles.css";

function Editar({usuario}) {

    const [user, setUser] = useState({
        name: '',
        email: '',
        username: '',
        _id: ''
    });

    useEffect(() => {
        setUser(usuario);
    }, [usuario])

    const handleChange = useCallback((e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }, [user]);

    return (
        <div className="modal">
            <span>E-mail</span>
             <input type="text"
                defaultValue={user.email}
                readOnly
             /> 

            <span>Name</span>
            <input type="text" name="name" onChange={handleChange} value={user.name} />

            <span>Username</span>
            <input type="text" name="username" onChange={handleChange} value={user.username || ""} />
        </div>
    )
}

export default Editar;
