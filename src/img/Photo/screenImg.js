import React, { Component } from 'react'
import photo1 from "../Photo/ablamlogo88.png";

export default class Photo1 extends Component {
  render() {
    return (
      <div>
        <img src={photo1} style={{width:'80%',height:'550px',display: 'block',
                                        marginLeft: 'auto', marginRight: 'auto', borderRadius:5}}/>
      </div>
    )
  }
}
