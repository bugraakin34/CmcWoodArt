import React from 'react'
import { useDispatch } from 'react-redux';
import {BsChevronUp, BsChevronDown} from 'react-icons/bs';
import './Course.css';
import { removeItem, increase, decrease } from '../../ScreenDetails/CartControls';

function CourseItem({id, title, price, img, quantity}) {

    const dispatch = useDispatch();

  return (
    <div className='cart-Item'>
        <img src={img} style={{width:400, height:270}}/>
        <div className='cart-Info'>
            <h4>{title}</h4>
            <h4>{price} ₺</h4>
            
            <div>
                <button 
                    className='cart-quantity-button' 
                    onClick={() => {
                        dispatch(increase(id));
                    }}>
                    <BsChevronUp/>
                </button>
                <p className='cart-quantity'>{quantity}</p>
                <button 
                    className='cart-quantity-button'
                    onClick={() => {dispatch(decrease(id));
                    }}>
                    <BsChevronDown/>
                </button>
            </div>
            <button 
                className='cart-delete-button' 
                onClick={() => {
                    dispatch(removeItem(id))
                }}>
                Kaldır
            </button>
        </div>
    </div>
  )
}

export default CourseItem;