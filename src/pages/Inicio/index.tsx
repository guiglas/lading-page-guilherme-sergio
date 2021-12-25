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
            <Conteudo>Sou estudante de Engenharia Química e trabalho atualmente como desenvolvedor web.</Conteudo>
            <Conteudo>Este e um site que foi construído com o intuito de mostrar um pouco das minhas habilidades e explorar alguns pacotes do REACT.</Conteudo>
          </Grid>
        </Grid>
      </CardSobre>
            <LinkPag/>
            </>
    )
}


export default Inicio;