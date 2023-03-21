import React from 'react'
import { useDispatch } from 'react-redux';
import { likeRemoveItem, addToCart } from '../../ScreenDetails/CartControls';
import './pageCom.css';
import CourseItem from '../cartComponents/CourseItem';


export default function LikeItem({id, title, price, img}) {

    const dispatch = useDispatch();


  return (
    <div className='cart-Item'>
        <img src={img} style={{width:250, height:200}}/>
        <div className='cart-Info'>
            <h4>{title}</h4>
            <h4>{price} ₺</h4>
            <button 
                className='cart-delete-button' 
                onClick={() => {
                    dispatch(likeRemoveItem(id))
                }}>
                Kaldır
            </button>
        </div>
    </div>
  );
}
