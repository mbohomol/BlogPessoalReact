import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css"


function NavBar() {
    return (
        <>
            <AppBar position="static" className='back'>
                <Toolbar className='bar'>
                <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography className='title' variant="h6">
                        Menu Gelato Blog
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
