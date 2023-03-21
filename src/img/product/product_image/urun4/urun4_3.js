import React, { Component } from 'react'
import urun3 from "./urun4_3.jpg";

export default class Urun3_1 extends Component {
  render() {
    return (
      <div>
        <img src={urun3} style={{
                                maxWidth:200, height:200,
                                marginLeft: 25, marginTop:15,
                                borderRadius:5
                               }}/>
      </div>
    )
  }
}
