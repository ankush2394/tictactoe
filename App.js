import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyButton from './components/MyButton';

class App extends Component {
  constructor(props) {
    super(props);
    //every component has a state which stores the json file like a key value pa
    this.state = {
      cplayer:"X",
      board:[".",".",".",".",".",".",".",".","."],
      winner:null
    }
  }

  draw() {
    var b = this.state.board;
    if(b[0]!="." && b[1]!="." &&b[2]!="." &&b[3]!="." &&b[4]!="." &&b[5]!="." &&b[6]!="." &&b[7]!="." &&b[8]!="." )
    {
      this.setState({winner:"No one"});
    }
    //console.log("draw");
  }
  evaluate()
  {
    var b = this.state.board;
    var winner=null;
    if((b[0]==b[1]) && b[1]==b[2] && b[0]!=".")
    {
      winner=b[0];
    }
    else if((b[3]==b[4]) && b[4]==b[5] && b[3]!=".")
    {
      winner=b[3];
    }
    else if((b[6]==b[7]) && b[7]==b[8] && b[7]!=".")
    {
      winner=b[6];
    }
    else if((b[0]==b[3]) && b[3]==b[6] && b[0]!=".")
    {
    winner=b[0];
    }
    else if((b[1]==b[4]) && b[4]==b[7] && b[1]!=".")
    {
      winner=b[1];
    }
    else if((b[2]==b[5]) && b[5]==b[8] && b[2]!=".")
    {
      winner=b[2];
    }
    else if((b[0]==b[4]) && b[4]==b[8] && b[0]!==".")
    {
      winner=b[0];
    }
    else if((b[2]==b[4]) && b[4]==b[6] && b[2]!==".")
    {
    winner=b[2];
    }
    else {
      this.draw();
    }


    this.setState({winner:winner})
  }
  whenClick(buttonId) {
    var oldBoard = this.state.board;
    var player = this.state.cplayer;
    if(oldBoard[buttonId]==".")
    {
      oldBoard[buttonId]=player;
      player = (player=="X")?"O":"X";
      this.setState({board:oldBoard,cplayer:player});
      this.evaluate();
    }
  }
  render() {

    var x=this.state.board;
    return (

        <span>
          <header className="App-header" >
            <h1><center>Welcome to Tic Tac Toe</center></h1>
          </header>
          <div className="center-align">
            <div>
              <MyButton clickFunc={()=>{this.whenClick(0);}}>{x[0]}</MyButton>
              <MyButton clickFunc={()=>{this.whenClick(1);}}>{x[1]}</MyButton>
              <MyButton clickFunc={()=>{this.whenClick(2);}}>{x[2]}</MyButton>
            </div>
            <div>
              <MyButton  clickFunc={()=>{this.whenClick(3);}}>{x[3]}</MyButton>
              <MyButton  clickFunc={()=>{this.whenClick(4);}}>{x[4]}</MyButton>
              <MyButton  clickFunc={()=>{this.whenClick(5);}}>{x[5]}</MyButton>
            </div>
            <div>
              <MyButton  clickFunc={()=>{this.whenClick(6);}}>{x[6]}</MyButton>
              <MyButton  clickFunc={()=>{this.whenClick(7);}}>{x[7]}</MyButton>
              <MyButton  clickFunc={()=>{this.whenClick(8);}}>{x[8]}</MyButton>
            </div>
            <br />
            <h4>
            {
              this.state.winner?
                this.state.winner + " is the winner"
                :
                ""
            }
            </h4>
          </div>
        </span>


    );
  }
}

export default App;
