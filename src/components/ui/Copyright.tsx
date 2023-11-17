import React from 'react'
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function Copyright(props: any) {
   return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
         {'Copyright © '}
         <Link color="inherit" href="/">
            Fill Job
         </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}