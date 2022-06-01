import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#ffe4c4" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#ffa07a", fontWeight: "bold" }}>Bem Vindo(a) ao Gelato Blog!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#ffa07a", fontWeight: "bold" }}>Recomende gelatos incríveis!!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={2}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#e9967a", backgroundColor: "#fa8072", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src={require('../../assets/images/sorvetes1.jpg')}  alt="" width="700px" height="500px"/>
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;