import App from 'next/app';
import React from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../theme/theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display:600i&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-style: italic;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
