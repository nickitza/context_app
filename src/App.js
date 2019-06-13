import React from 'react';
import { Container, } from 'semantic-ui-react'
import { Route, Switch, } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Navbar'
import AccountProfile from './components/AccountProfile'

function App() {
  return (
    <>
      <Navbar />
      <Container >
        <Switch>
          <Route exact path="/" render={ () => <h1>Home</h1> } />
          <Route exact path="/about" render={ () => <h1>About</h1> } />
          <Route exact path="/account/profile" render={ () => < AccountProfile />} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
