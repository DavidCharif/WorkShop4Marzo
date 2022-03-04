import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Main from "../componentes/main/Main";

import { Registro } from '../components/Registro';
import { RutasPrivadas } from './RutasPrivadas';


export const AppRouter = () => {


    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Main/> } />

                <Route path="/registro" element={<Registro/>} />

                <Route path="/*" element={<RutasPrivadas/>}/>

            </Routes>
        </BrowserRouter>
    )
}
