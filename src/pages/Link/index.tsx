import { Link, Outlet, useNavigate } from "react-router-dom";
import React from "react"
import './styles.tsx'
import { Button } from "@mui/material";
import { ButtonSobre, ContainerSobre } from "./styles";
import zIndex from "@mui/material/styles/zIndex";
import Ibutton from "../../interfaces/button";


function LinkPag() {
    let navigate = useNavigate();  
return (
    <ContainerSobre>
            <ButtonSobre variant={undefined} onClick={() => { navigate("/") }}>Inicio</ButtonSobre> 
            <ButtonSobre variant={undefined} onClick={() => { navigate("/sobre")}}>Sobre Mim</ButtonSobre> 
            <ButtonSobre variant={undefined} onClick={() => { navigate("/contato")}}>Informações de contato</ButtonSobre> 
    </ContainerSobre>
)
}

export default LinkPag;