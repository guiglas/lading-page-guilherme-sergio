import styled from '@emotion/styled';
import { Card, Grid } from '@mui/material';



export const CardContato = styled(Card)`
display: flex;
margin: 10% auto;
width: 50%;
border-radius: 5px;
flex-direction: column;
`;

export const ItemGride = styled(Grid)`
margin-top: 5%
align-items: flex-start
`

export const TituloContato = styled.h1`
font-size: 1.5em;
text-align: left;
color: grey;
margin-left: 8%;
margin-bottom:4%
`;

export const ConteudoContato = styled.p`
text-align: left;
color: grey;
`;
