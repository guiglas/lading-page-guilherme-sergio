import { BrowserRouter, Route, Routes} from "react-router-dom";
import SobreMim from './pages/SobreMim';
import React from 'react';
import Inicio from "./pages/Inicio";
import Contato from "./pages/Contato";

const Application: React.FunctionComponent<{}> = props => {
    return(
        <div>
            <BrowserRouter>
                <Routes >
                    <Route path="/" element={<Inicio name={"a"}/>}/>
                    <Route path="/contato" element={<Contato name={"a"}/>}/>
                    <Route path="/sobre" element={<SobreMim/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Application;