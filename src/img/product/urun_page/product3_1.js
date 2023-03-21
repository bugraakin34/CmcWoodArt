/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import urunResim1 from '../product_image/urun3/urun3_1.jpg';

function product3_1(){
  return (
    <div>
        <img src={urunResim1} style={{width:"25rem", height:"25rem", marginTop:33, borderRadius: 5, display: 'block',
                                        marginLeft: 'auto', marginRight: 'auto' }
                                    }/>
    </div>
  )
}

export default product3_1;
