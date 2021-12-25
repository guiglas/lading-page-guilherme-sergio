import { Link, Outlet, useNavigate } from "react-router-dom";
import React from "react"
import './styles.tsx'
import { Button } from "@mui/material";
import { ButtonSobre, ContainerSobre } from "./styles";

function LinkPag () {
    let navigate = useNavigate();
return (
    <ContainerSobre>
            <ButtonSobre variant="contained" onClick={() => navigate("/")}>Inicio</ButtonSobre> 
            <ButtonSobre  onClick={() => navigate("/sobre")}>Sobre Mim</ButtonSobre> 
            <ButtonSobre  onClick={() => navigate("/contato")}>Informações de contato</ButtonSobre> 
    </ContainerSobre>
)
}

export default LinkPag;