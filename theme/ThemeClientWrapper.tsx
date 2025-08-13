'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import {theme} from './index'; 
import createEmotionCache from '../utils/createEmotionCache';
import { ReactNode } from 'react';

const clientSideEmotionCache = createEmotionCache();

export default function ThemeClientWrapper({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
