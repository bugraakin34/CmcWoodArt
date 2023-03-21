/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import './pageCom.css';
import CommentsItems from '../comment/CommentsItem';
import ReactStars from 'react-stars';

export default function OrdersItem({id, title, price, img, quantity}) {

  const [popup, setPopup] = useState(false);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className='cart-Item' key={id}>
        <img src={img} style={{width:250, height:200}}/>
        <div className='cart-Info'>
            <h4>{title}</h4>
            <h4>{price} ₺</h4>
            <p className='cart-quantity'>{quantity}</p>
            <button className='comment' onClick={() => setPopup(true)}>Yorum Yap</button>
        </div>
        
        <CommentsItems trigger={popup} setTrigger= {setPopup}>

          <h2 style={{marginTop:'10px', marginBottom:'10px'}}>{title}</h2>
          <img src={img} style={{width:150, height:100}}/>
          <ReactStars
            className='stars'
            count={5}
            value={0}
            onChange={ratingChanged}
            size={30}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          <p style={{color:'red'}}>Lütfen ürünü puanlayın</p>
          <h4>Yorumunuz</h4>
          <textarea className='text' rows="5" cols="70"></textarea>
          <section className='che'>
            <input type="checkbox" name="yorum" />&nbsp;
            Yorumlarda ismimin gözükmesine ve yorum detaylarının site genelinde kullanılmasına izin veriyorum.
          </section>
        </CommentsItems>
    </div>
  );
}
