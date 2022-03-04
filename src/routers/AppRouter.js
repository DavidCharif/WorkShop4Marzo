import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Main from "../componentes/main/Main";
import NavBar from "../componentes/navBar/NavBar";
import { Registro } from "../componentes/registro/Registro";

import { RutasPrivadas } from './RutasPrivadas';


export const AppRouter = () => {


    return (
        <>
        <NavBar  />
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Main/> } />

                <Route path="/registro" element={<Registro/>} />

                <Route path="/*" element={<RutasPrivadas/>}/>

            </Routes>
        </BrowserRouter>
        </>
    )
}
