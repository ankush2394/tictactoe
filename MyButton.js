import React, { Component } from 'react';


class MyButton extends Component {
  constructor(props) {
    super(props);
    //every component has a state which stores the json file like a key value pa
    this.state = {
    }
  }
//style property needs json inside it
  render() {
    var {children,clickFunc} = this.props;
    var color = "grey";
    if(children=="X")
    color="red";
    else if(children=="O")color="yellow";
    return (
      <span>
        <button className={"btn-large "+color} style={{width:100,height:100}} onClick = {()=>{clickFunc();}}>{children}</button>
      </span>
    );
  }
}

export default MyButton;
