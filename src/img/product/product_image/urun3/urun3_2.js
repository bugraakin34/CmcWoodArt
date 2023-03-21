import React, { Component } from 'react'
import urun2 from "./urun3_2.jpg";

export default class Urun3_2 extends Component {
  render() {
    return (
      <div>
        <img src={urun2} style={{
                                maxWidth:200, height:200,
                                marginLeft: 50, marginTop:15,
                                borderRadius:5
                               }}/>
      </div>
    )
  }
}
