/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  Container
} from 'native-base';

import Main from './src/Main';

class App extends Component {

  
  render(){
    return (
      <Container>
        <Main></Main>
      </Container>
    );
  }
}

export default App;
