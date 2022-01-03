
import React from 'react';

import { CardSobre, ConteudoSobre, SubTitulo, TituloSobre } from './styles';
import StepSobre from '../../components/step';
import { Container } from '@mui/material';
import Ipage from '../../interfaces/page';
import LinkPag from '../Link';


function SobreMim () {

    return (
    <>
          <LinkPag button2="contained" />
  <Container>          
        <TituloSobre>Sobre Mim</TituloSobre>
          <StepSobre/>
          <CardSobre>
            <SubTitulo>Graduação</SubTitulo>
            <ConteudoSobre>Testezada</ConteudoSobre>
          </CardSobre>
      </Container>
      </>
    )
}


export default SobreMim;