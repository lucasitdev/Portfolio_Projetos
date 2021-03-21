import React from 'react';
import { ThemeProvider } from 'styled-components'
import Head from 'next/head';
import theme from '../src/theme';
import { GlobalStyle } from '../src/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfólio Lucas Assunção</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,300;0,400;1,200;1,300&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}