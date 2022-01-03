import React from 'react';
import { Container, Grid } from '@mui/material';
import Ipage from '../../interfaces/page';
import LinkPag from '../Link';
import { CardContato, ItemGride, TituloContato, ConteudoContato } from './styles';

const Contato: React.FunctionComponent<Ipage> = props => {

    return (
      <>
            <LinkPag button3="contained"/>
      <CardContato>
        <TituloContato>Informações de contato</TituloContato>
        <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
         >
          <ItemGride item xs={5}
          >
           <a href="https://www.linkedin.com/in/guilhermesergiodossantos/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
           <ConteudoContato>Converse comigo no Linkedin!</ConteudoContato>
           </ItemGride>
           <ItemGride item xs={5}>
           <a href="https://github.com/guiglas"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>
             <ConteudoContato>Se quiser ver mais projetos como esse, dá uma olhada no meu GitHub.</ConteudoContato>
            </ItemGride>
         </Grid>
      </CardContato>
      </>
    )
}


export default Contato;