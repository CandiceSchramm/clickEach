import React, { Component } from 'react';
import Tile from "./Tile"
import './App.css';
// images
import emoji1 from "./images/emoji1.jpg"
import emoji2 from "./images/emoji2.jpeg"
import emoji3 from "./images/emoji3.png"
import emoji4 from "./images/emoji4.jpeg"
import emoji5 from "./images/emoji5.jpeg"
import emoji6 from "./images/emoji6.jpeg"
import emoji7 from "./images/emoji7.jpg"
import emoji8 from "./images/emoji8.jpg"
import emoji9 from "./images/emoji9.jpeg"
import emoji10 from "./images/emoji10.png"
import emoji11 from "./images/emoji11.png"
import emoji12 from "./images/emoji12.jpeg"



class App extends Component {
  state = {
    tiles: [
      {
        image: emoji1,
        clicked: false,
        id: 1
      },
      {
        image: emoji2,
        clicked: false,
        id: 2
      },
      {
        image: emoji3,
        clicked: false,
        id: 3
      },
      {
        image: emoji4,
        clicked: false,
        id: 4
      },
      {
        image: emoji5,
        clicked: false,
        id: 5
      },
      {
        image: emoji6,
        clicked: false,
        id: 6
      },
      {
        image: emoji7,
        clicked: false,
        id: 7
      },
      {
        image: emoji8,
        clicked: false,
        id: 8
      },
      {
        image: emoji9,
        clicked: false,
        id: 9
      },
      {
        image: emoji10,
        clicked: false,
        id: 10
      },
      {
        image: emoji11,
        clicked: false,
        id: 11
      },
      {
        image: emoji12,
        clicked: false,
        id: 12
      }
    ],
    userscore: 0,
    topscore: 0,
    alert: ""
  }

  handleClick = (id) => {
    //make a copy of tiles array so we can update the key/values
    let newTiles = this.state.tiles
    //loop through the state tiles 
    for (let i = 0; i < this.state.tiles.length; i++) {
      //locate the object with the id attribute of the pic you clicked
      if (id === this.state.tiles[i].id) {
        //if tile has not been clicked
        if (!this.state.tiles[i].clicked) {
          //mark it clicked
          newTiles[i].clicked = true;
          //update user's score
          let newScore = this.state.userscore + 1
          //update state with user's new score, set tiles to the updated copy, set alert to "correct answer"
          this.setState({ ...this.state, userscore: newScore, tiles: newTiles, alert: this.rightAnswer() },
          )
          //if the tile has been clicked already
        } else {
          //loop through the newTiles copy and update them all back to not clicked (game reset)
          for (let i = 0; i < newTiles.length; i++) {
            newTiles[i].clicked = false;
          }
          //set alert to wrong answer, reset user's current score back to 0, set tiles to the updated copy of Tiles
          this.setState({ ...this.state, alert: this.wrongAnswer(), userscore: 0, tiles: newTiles })
        }
      }
    }
  }

  rightAnswer = () => {
    return "You've guessed correctly!"
  }

  wrongAnswer = () => {
    return "Sorry! Try again!"
  }
  componentDidUpdate = () => {
    this.checkHighScore();
    this.shuffleTiles();
  }

  //we'll wait to call this once's the user's score on the component actually get's updated
  checkHighScore = () => {
    //if user's current score is higher than the highestscore
    if (this.state.userscore > this.state.topscore) {
      //save the new high score in a variable to update the state later
      let newHighScore = this.state.userscore;
      //update the topscore on the state to the variable we saved
      this.setState({ ...this.state, topscore: newHighScore })
    } else {
      return;
    }
  }

  shuffleTiles = () => {
    let unshuffledTiles = this.state.tiles;
    var j, x, i;
    for (i = unshuffledTiles.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = unshuffledTiles[i];
      unshuffledTiles[i] = unshuffledTiles[j];
      unshuffledTiles[j] = x;
    }
    let shuffledTiles = unshuffledTiles;
    return shuffledTiles;
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid bg-warning">
          <div className="container">
            <h1 className="display-4">clickEach()</h1>
            <p className="lead">click each emoji... only once</p>
            <a className="nav-item nav-link active lead ">Current Score: {this.state.userscore} | Highest Score: {this.state.topscore}<span className="sr-only">(current)</span></a>
            <span className="lead justify-content-center">{this.state.alert}</span>
          </div>
        </div>
        <div className="container justify-content-center mr-auto ml-auto">
          <div className="tile-box">
            {/* loop through the tiles and pass down the image links * the id*/}
            {this.state.tiles.map(tile => <Tile
              key={tile.id}
              img={tile.image}
              id={tile.id}
              // we need to do something when an image is clicked!
              clickFunction={() => this.handleClick(tile.id)}
            />)}
          </div>
        </div>
        <footer className="footer bg-warning header-footer">
          <div className="container">
            <span className="text-muted">"If at first you don't succeed, try, try, try again"    -William Edwards</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
