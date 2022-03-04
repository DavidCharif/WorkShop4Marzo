import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { Navbar } from '../components/Navbar';

import Game from '../componentes/juego/Game';

export const RutasPrivadas = () => {
    return ( 
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Game />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </div>

        </>
    )
}
