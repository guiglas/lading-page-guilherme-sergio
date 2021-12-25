
import React from 'react';
import { ButtonSobre, ContainerSobre } from './styles';
import { Link, useNavigate } from 'react-router-dom';


function Cabecalho(){
  let navigate = useNavigate();
  return ( 
    <ContainerSobre>
         <ButtonSobre variant="contained" onClick={() => navigate("/sobre")}>Inicio</ButtonSobre>
         <ButtonSobre>Sobre Mim</ButtonSobre>
          <ButtonSobre>Informações de contato</ButtonSobre>
    </ContainerSobre>
    );
}

export default Cabecalho;
