import React, { Component } from 'react'
import urun1 from "./urun2_2.jpg";;

export default class pro1 extends Component {
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
