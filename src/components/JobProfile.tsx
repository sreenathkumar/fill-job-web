import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { theme } from '../utils/Theme';

export default function JobProfile() {
   return (
      <ThemeProvider theme={theme}>
         <div>JobProfile</div>
      </ThemeProvider>
   );
}
