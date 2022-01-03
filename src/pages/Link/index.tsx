import { Link, Outlet, useNavigate } from "react-router-dom";
import React from "react"
import './styles.tsx'
import { Button } from "@mui/material";
import { ButtonSobre, ContainerSobre } from "./styles";
import zIndex from "@mui/material/styles/zIndex";
import Ibutton from "../../interfaces/button";


function LinkPag(props: any) {
    let navigate = useNavigate();    
return (
    <ContainerSobre>
            <ButtonSobre variant={props.button1} onClick={() => { navigate("/") }}>Inicio</ButtonSobre> 
            <ButtonSobre variant={props.button2} onClick={() => { navigate("/sobre")}}>Sobre Mim</ButtonSobre> 
            <ButtonSobre variant={props.button3} onClick={() => { navigate("/contato")}}>Informações de contato</ButtonSobre> 
    </ContainerSobre>
)
}

export default LinkPag;

function props(props: any) {
    throw new Error("Function not implemented.");
}
