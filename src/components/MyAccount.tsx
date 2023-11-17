import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Container, Box, Typography } from '@mui/material'
import { theme } from '../utils/Theme'
import userImage from '../assets/images/logo512.png'

export default function MyAccount() {
   return (
      <ThemeProvider theme={theme}>
         <Container maxWidth='xl' sx={{ display: 'flex', gap: '2rem', }}>
            <Box display={'flex'} p={'1.5rem'} gap={'2rem'}>
               <Box sx={{ maxWidth: '200px', maxHeight: '200px' }}>
                  <img src={userImage} alt="" style={{ width: '100%' }} />
               </Box>
               <Box >
                  <Typography variant='h4' fontWeight='800' >Name</Typography>
                  <Typography >description</Typography>
               </Box>
            </Box>
         </Container>
      </ThemeProvider>
   )
}
