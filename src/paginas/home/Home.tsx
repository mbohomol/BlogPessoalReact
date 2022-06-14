import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TokenState } from '../../store/tokens/tokensReducer';


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState ["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
          navigate("/login")
  
      }
  }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="cores">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="inicio2">Bem Vindo(a) ao Gelato Blog!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="inicio2">Recomende gelatos incríveis!!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={2}>
                        <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                        <Button variant="outlined" style={{ borderColor: "#db7093", backgroundColor: "#db7093", color: "white" }}>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src={require('../../assets/images/sorvete.jpg')}  alt="" width="750px" height="550px"/>
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;