import React, { Component } from 'react'
import urun2 from "./urun4_2.jpg";

export default class Urun4_2 extends Component {
  render() {
    return (
      <div>
        <img src={urun2} style={{
                                maxWidth:200, height:200,
                                marginLeft: 25, marginTop:15,
                                borderRadius:5
                               }}/>
      </div>
    )
  }
}
