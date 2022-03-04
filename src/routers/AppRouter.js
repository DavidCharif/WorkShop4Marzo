import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';


import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from "./PublicRoute";
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from "@firebase/auth";

import { RutasPrivadas } from "./RutasPrivadas";
import Login from "../componentes/login/Login";
import { Registro } from "../componentes/registro/Registro";
import { loginEmailPassword } from "../componentes/redux/actions/actionLogin";


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            console.log('usuario no existe', user)
            if (user?.uid) {
                console.log('usiario existe')
                dispatch(loginEmailPassword(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }


    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Login />
                    </PublicRoute>
                } />

                <Route path="/registro" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Registro />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <RutasPrivadas />
                    </PrivateRoute>}
                />


            </Routes>
        </BrowserRouter>
    )
}
