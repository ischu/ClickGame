import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from './components/Container';
import ImgCard from './components/ImgCard';
import images from './images.json'

class App extends Component {
  // set image state to json, timer state to zero, score state to zero
  state={
    images
  }
  // this is where the methods go
  render() {
    return (
      <div className="App">
        <Container>
        { console.log(this.state.images[0].name)}
        {this.state.images.map( image => (
          <ImgCard
            key={image.id}
            name={image.name}
            url={image.url}
          />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
