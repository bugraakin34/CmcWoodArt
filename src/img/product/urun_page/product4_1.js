/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import urunResim1 from '../product_image/urun4/urun4_1.jpg';

function product4_1(){
  return (
    <div>
        <img src={urunResim1} style={{width:"25rem", height:"25rem", marginTop:33, borderRadius: 5, display: 'block',
                                        marginLeft: 'auto', marginRight: 'auto' }
                                    }/>
    </div>
  )
}

export default product4_1;
