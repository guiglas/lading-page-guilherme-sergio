import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Ipage from '../../interfaces/page';
import { CardSobre, Conteudo, Title } from './styles';
import Foto from "./foto.png"
import { Route } from 'react-router-dom';
import LinkPag from '../Link';

const Inicio: React.FunctionComponent<Ipage> = props => {
    return (
      <>
            <LinkPag button1="contained"/>
      <CardSobre>
        <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
         >
          <Grid item xs={4}>
          <CardMedia
              component="img"
              image={Foto}
              alt="FotoMinha"/>
          </Grid>
          <Grid item xs={8}>
            <Title>Olá, me chamo Guilherme</Title>
            <Conteudo>Sou estudante de Engenharia Química e trabalho atualmente como desenvolvedor Front-end para web.</Conteudo>
            <Conteudo>Estou à procura de me especializar cada vez em desenvolvimento web. </Conteudo>
          </Grid>
          <Grid item xs={10}>
              <Conteudo>Este site foi construido utilizando:</Conteudo>
            </Grid>
            <Grid item xs={4}>
              <Conteudo>React:</Conteudo>
              </Grid>
            <Grid item xs={6}>
              <Conteudo>
              <ul>
                <li>Style Componentes</li>
                <li>React Router Doom</li>
                <li>Material UI</li>
              </ul>
              </Conteudo>
            </Grid>
            <Grid item xs={4}>
              <Conteudo>Typescript:</Conteudo>
              </Grid>
            <Grid item xs={6}>
             <Conteudo>
               Typescript e um compilador 
             </Conteudo>
            </Grid>
        </Grid>
      </CardSobre>

            </>
    )
}


export default Inicio;