import React, { Component } from 'react'
import urun2_2 from "./urun2_2.jpg";

export default class Urun2 extends Component {
  render() {
    return (
      <div>
        <img src={urun2_2} style={{
                                maxWidth:200, height:'auto',
                                marginLeft: 25, marginTop:15,
                                borderRadius:5
                               }}/>
      </div>
    )
  }
}
