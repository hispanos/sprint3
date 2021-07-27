import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from '../components/layout/Header'
import ListMovies from '../components/ListMovies'
import { Container } from './home-styles/HomeStyles'
import '../styles/style.css'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Administrator from '../components/Administrator'

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
        <BrowserRouter>
        <GlobalStyle />
        <Container>
            <Header />
            <Switch>
              <Route exact path="/" component={ListMovies} />
              <Route exact path="/admin" component={Administrator} />
            </Switch>
        </Container>
        </BrowserRouter>
    )
}

export default Home
