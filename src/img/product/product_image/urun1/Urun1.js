import React, { Component } from 'react'
import urun1 from "./cerezlik.jpg";

export default class Urun1 extends Component {
  render() {
    return (
      <div>
        <img src={urun1} style={{
                                maxWidth:200, height:200,
                                marginLeft: 40, marginTop:15,
                                borderRadius:5
                               }}/>
      </div>
    )
  }
}
