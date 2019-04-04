import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from './components/Container'
import ImgCard from './components/ImgCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          {/* map the imgcards */}
          <ImgCard></ImgCard>
        </Container>
      </div>
    );
  }
}

export default App;
