/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import urunResim3 from '../product_image/urun3/urun3_3.jpg';

function product3_3(){
  return (
    <div>
        <img src={urunResim3} style={{width:"25rem", height:"25rem", marginTop:33, borderRadius: 5, display: 'block',
                                        marginLeft: 'auto', marginRight: 'auto' }
                                    }/>
    </div>
  )
}

export default product3_3;
