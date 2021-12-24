
import React from 'react';
import { ButtonSobre, ContainerSobre } from './styles';



const Cabecalho: React.FunctionComponent<{}> = props => {
  return ( 
    <ContainerSobre>
        <ButtonSobre variant="contained">Inicio</ButtonSobre>
        <ButtonSobre>Sobre Mim</ButtonSobre>
        <ButtonSobre>Informações de contato</ButtonSobre>
    </ContainerSobre>
    );
}

export default Cabecalho;
