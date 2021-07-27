import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from '../components/layout/Header'
import ListMovies from '../components/ListMovies'
import { Container } from './home-styles/HomeStyles'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0F0E17;
    margin: 0px;
  };

  h1 {
      margin: 0;
      padding: 0;
      color: #fff;
  }
`

const Home = () => {

    return (
        <>
        <GlobalStyle />
        <Container>
            <Header />
            <ListMovies />
        </Container>
        </>
    )
}

export default Home
