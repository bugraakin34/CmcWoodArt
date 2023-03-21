import React, { Component } from 'react'
import logo from "./ablamlogo.png";

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} style={{width:80, height:60}}/>
      </div>
    )
  }
}
