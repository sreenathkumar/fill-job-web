import { Box, Button, Grid, Paper, TextField, Typography, Link, ThemeProvider, Alert } from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../utils/Theme';
import { app } from '../App';


export default function ResetPassword() {
   const [resetPasswordStatus, setResetPasswordStatus] = useState<AlertMessageType | undefined>();

   const params = new URLSearchParams(window.location.search); //getting the query params
   const token = params.get('token'); //getting the token from query params
   const tokenId = params.get('tokenId'); //getting the tokenId from query params

   function handleResetPassword(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const { new_password, confirm_password } = Object.fromEntries(data);

      if (new_password === confirm_password) {
         if (new_password.toString().length > 6) {
            if (token !== null && tokenId !== null) {
               try {
                  app.emailPasswordAuth.resetPassword({ token, tokenId, password: new_password.toString() }).then((res) => {
                     setResetPasswordStatus({ type: 'success', message: 'Successfully reset password!' });
                     console.log('res', res);
                  });
               }
               catch (error) {
                  console.log('err', error);
                  setResetPasswordStatus({ type: 'error', message: 'Error resetting password' });
               }
            }
         } else {
            setResetPasswordStatus({ type: 'error', message: 'Password must be at least 6 characters' });
         }
      } else {
         setResetPasswordStatus({ type: 'error', message: 'Password does not match' });
      }
   }
   return (
      <ThemeProvider theme={theme}>
         <Grid container component="main" justifyContent={'center'}>
            <Box gap='0.5rem' mb='2.5rem' sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               width: '100%',
            }}>
               <Typography component="h1" variant="h5" fontWeight='900' >
                  Fill Job
               </Typography>
               <Typography component='p'>
                  Fill up your dream job within a minute
               </Typography>
            </Box>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
               <Box
                  sx={{
                     m: 4,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                  }}
               >
                  <Typography component="h2" variant="h5">
                     Reset Password
                  </Typography>
                  <Box component="form" onSubmit={handleResetPassword} sx={{ mt: 1 }}>
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="new_password"
                        label="New Password"
                        name="new_password"
                        type="password"
                        autoFocus
                     />
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirm_password"
                        label="Conform Password"
                        type="password"
                        id="confirm_password"
                     />
                     {resetPasswordStatus &&
                        <Alert severity={resetPasswordStatus.type}>{resetPasswordStatus.message}</Alert>
                     }
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                     >
                        Reset Password
                     </Button>
                     <Grid container>
                        <Grid item xs>
                           <Link href='/signin' sx={{ cursor: 'pointer' }} variant="body2">
                              Sign In
                           </Link>
                        </Grid>
                        <Grid item>
                           <Link href='/signup' sx={{ cursor: 'pointer' }} variant="body2">
                              {"Don't have an account? Sign Up"}
                           </Link>
                        </Grid>
                     </Grid>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </ThemeProvider>
   )
}
