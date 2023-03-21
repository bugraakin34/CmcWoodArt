import React, { Component } from 'react'
import urun2_2 from "./urun2.jpg";

export default class pro2 extends Component {
  render() {
    return (
      <div>
        <img src={urun2_2} style={{
                                maxWidth:200, 
                                height:200, 
                                marginTop:15,
                                borderRadius:5
                               }}/>
      </div>
    )
  }
}
