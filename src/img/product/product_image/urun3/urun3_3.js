import React, { Component } from 'react'
import urun3 from "./urun3_3.jpg";

export default class Urun3_3 extends Component {
  render() {
    return (
      <div>
        <img src={urun3} style={{
                                maxWidth:200, height:200,
                                marginLeft: 50, marginTop:15,
                                borderRadius:5
                               }}/>
      </div>
    )
  }
}
