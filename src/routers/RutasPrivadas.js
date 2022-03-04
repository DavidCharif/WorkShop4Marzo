
import {
    Routes, Route,
    Navigate
} from 'react-router-dom';


import Game from '../componentes/juego/Game';
import NavBar from '../componentes/navBar/NavBar';

export const RutasPrivadas = () => {
    return ( 
        <>
            <NavBar  />
            <div>
                <Routes>
                    <Route path="/game" element={<Game />} />
                    <Route path='*' element={<Navigate to="/game" />} />
                </Routes>
            </div>

        </>
    )
}
