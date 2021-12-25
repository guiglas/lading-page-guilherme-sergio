import React from 'react';

import { Container } from '@mui/material';
import Ipage from '../../interfaces/page';
import LinkPag from '../Link';

const Contato: React.FunctionComponent<Ipage> = props => {

    return (
      <>
      <Container>          
        <h1>Informacoes de contato</h1>
      </Container>
      <LinkPag/>
      </>
    )
}


export default Contato;