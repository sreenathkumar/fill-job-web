import { ThemeProvider } from '@emotion/react';
import { Container, Box, AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Avatar, Button, Link } from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../../utils/Theme';

export default function Header() {
   const [openNav, setOpenNav] = useState<boolean>(false);

   const handleUserMenu = () => {
      setOpenNav(!openNav);
   }

   const settings = ['Job Profile', 'My account', 'Logout'];

   return (
      <ThemeProvider theme={theme}>
         <AppBar position="sticky" sx={{ bgcolor: '#002884' }}>
            <Container maxWidth='xl'>
               <Toolbar sx={{ justifyContent: 'space-between' }} >
                  <Typography variant='h6' component='a' noWrap sx={{ fontWeight: '900' }} >Fill Job</Typography>
                  <Box sx={{
                     display: 'flex',
                     alignItems: 'center',
                  }}>
                     <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Button variant="contained" sx={{
                           bgcolor: theme.palette.primary.main,
                           color: theme.palette.primary.contrastText,
                           borderColor: theme.palette.primary.main
                        }} >Sign Up</Button>
                        <Button variant="contained" sx={{
                           bgcolor: theme.palette.secondary.main,
                           color: theme.palette.primary.contrastText,
                           borderColor: theme.palette.primary.contrastText
                        }}>Sign In</Button>

                     </Box>
                     <Box >
                        <IconButton
                           size="large"
                           aria-label="account of current user"
                           aria-controls="menu-appbar"
                           aria-haspopup="true"
                           onClick={handleUserMenu}
                           color="inherit"
                        >
                           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </IconButton>
                        <Menu
                           sx={{ mt: '45px' }}
                           id="menu-appbar"
                           anchorEl={null}
                           anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                           }}
                           keepMounted
                           transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                           }}
                           open={openNav}
                           onClose={handleUserMenu}
                        >
                           {settings.map((setting) => (
                              <MenuItem key={setting}>
                                 <Link textAlign="center" underline='none' href={setting.replace(' ', '-').toLowerCase()}>{setting}</Link>
                              </MenuItem>
                           ))}
                        </Menu>
                     </Box>
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>
      </ThemeProvider>
   )
}
