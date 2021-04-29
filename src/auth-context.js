import axios from 'axios';
import React, { useState, useContext } from 'react';

const AuthContext = React.createContext(); // Objeto global

    export function AuthProvider(props) {
    const [employee, setEmployee] = useState(window.localStorage.getItem('token') || null);
    const [error, setError] = useState(null); 

    function login({ correo, contrasena }) {
        axios({
            url: 'http://localhost:5000/admin/login',
            method: 'post',
            data: {
                correo,
                contrasena,
            },
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((result) => {
            console.log(result);
            window.localStorage.setItem('token', result.token)
            setEmployee(result.data.data);
        })
        .catch(() => {
            console.log('Errores')
        })
    }

    function logout() {
        setEmployee(null);
        window.localStorage.removeItem('token')
    }

    function register(employeeData) {
        axios({
            url: 'http://localhost:5000/admin/singup',
            method: 'post',
            body: employeeData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((result) => {
            window.localStorage.setItem('token', result.token)
            setEmployee(result);
        })
        .catch(() => {
            console.log('Errores')
        })
    }

    function getToken() {
        return (
            window.localStorage.getItem('token')
        )
    }

    const value = {
        employee,
        getToken,
        login,
        logout,
        register,
    };

        return <AuthContext.Provider value={value} {...props}/>
    
    }

    export function useAuth() {
        const context = useContext(AuthContext);
        if(!context) {
            throw new Error('useAuth solo puede ser utilizado dentro de un AuthProvider');
        }
        return context;
    }

export default AuthContext;