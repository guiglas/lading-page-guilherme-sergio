import { BrowserRouter, Route } from "react-router-dom";
import SobreMim from './pages/Inicio';
import React from 'react';
import Inicio from "./pages/Inicio";
import Contato from "./pages/Contato";

function Rotas(){
    return(
        <BrowserRouter>
            <Route path="/">
                <Inicio/>  
            </Route>  
            <Route path="/sobre">
                <SobreMim/>
            </Route>  
            <Route path="/contato">
                <Contato/>   
            </Route>
        </BrowserRouter>
    )
}

export default Rotas;