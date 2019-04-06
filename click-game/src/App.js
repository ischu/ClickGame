import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Container from './components/Container';
import ImgCard from './components/ImgCard';
import images from './images.json'

class App extends Component {
  // STATE
  // set image state to json, score and high score to 0, correct to true
  state = {
    images,
    score: 0,
    highScore: 0,
    correct: true,
    clicked: []
  }
  // METHODS

  // increment score count
  increaseScore = () => {
    let newScore = this.state.score + 1;
    this.setState(
      { score: newScore }
    )
  }

  // set new high score when reached
  newHighScore = () => {
    if (this.state.score >= this.state.highScore) {
      let newScore = this.state.score + 1;
      this.setState(
        { highScore: newScore }
      )
    }
  }

  // function for shuffling an array (from stack overflow)
  shuffle(arr) {
    // my note- this sets all these variable to equal each other
    var ctr = arr.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
    }
    return arr;
  }

  // function to shuffle image  cards
  shuffleCards = () => {
    // copy images array
    const copyArray = images.slice(0);
    // function for shuffling an array (from stack overflow)
    let shuffledArray = this.shuffle(copyArray)

    // set this.state.images to new shuffled array,
    this.setState(
      { images: shuffledArray }
    );
  }

  // function to check if guess is correct
  checkCorrect = event => {
    const cardId = event.target.id;
    const idArray = this.state.clicked;
    const isInArr = idArray.filter((num) => { return num === cardId });
    idArray.push(parseInt(cardId));
    console.log(idArray, " is in arr: "+isInArr)
    // if clicked card's id is in array of clicked cards
    if (isInArr) {
      // incorrect
      this.setState(
        { correct: false }
      )
    }
    else {
      // correct- set clicked array
      this.setState(
        { clicked: idArray }
      )
    }
    console.log(this.state.correct, this.state.clicked)
  }

  // function bundling all game functions together
  clickFunc = (event) => {
    this.shuffleCards();
    this.increaseScore();
    this.newHighScore();
    this.checkCorrect(event)
  }

  // reset states for new game
  newGame = () => {
    this.setState(
      {
        score: 0,
        clicked: [],
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Scoreboard
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Container>
          {/* maps images to jsx elements */}
          {this.state.images.map(image => (
            <ImgCard
              key={image.id}
              id={image.id}
              name={image.name}
              url={image.url}
              shuffle={this.clickFunc}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
