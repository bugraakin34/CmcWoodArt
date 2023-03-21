import React, { Component } from 'react'
import urun1 from "./urun3_1.jpg";

export default class pro3 extends Component {
  render() {
    return (
      <div>
        <img src={urun1} style={{
                                maxWidth:200, 
                                height:200, 
                                marginTop:15,
                                borderRadius:5
                               }}/>
      </div>
    )
  }
}
