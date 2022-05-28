import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css"


function Navbar() {
    return (
        <>
        <AppBar position="static" className='back'>
            <Toolbar variant="dense">

                <Box display="flex" justifyContent="start">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Criar Nova Postagem
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Perfil
                        </Typography>
                    </Box>
                    <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Entrar
                            </Typography>
                        </Box>
                    </Link>
                    
                </Box>

            </Toolbar>
        </AppBar>
    </>
)
}

export default Navbar;
