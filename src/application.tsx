import { BrowserRouter, Route, Routes} from "react-router-dom";
import SobreMim from './pages/SobreMim';
import React from 'react';
import Inicio from "./pages/Inicio";
import Contato from "./pages/Contato";
import Cabecalho from "./pages/Cabecalho";
import { Link } from "react-router-dom";
import LinkPag from "./pages/Link";

const Application: React.FunctionComponent<{}> = props => {
    return(
        <div>
            <BrowserRouter>
                <Routes >
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                    <Route path="/sobre" element={<SobreMim/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Application;