import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CourseItem from '../pages/cartComponents/CourseItem';
import '../pages/cartComponents/Course.css';
import { clearCart} from '../ScreenDetails/CartControls';
import { Link } from 'react-router-dom';


function Cart () {

  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  const dispatch = useDispatch();



  return(
    <>
     {quantity < 1 ?(
          <section className='cart'>
            <header>
              <h2>SEPETİM</h2>
              <h4>Sepetiniz Boş</h4>
            </header>  
          </section>
        ) : (
          <section className='cart'>
            <header>
              <h2>SEPETİM</h2>
            </header>
            <div>
              {cartItems.map((item) => {
                return <CourseItem key={item.id} {...item}/>;
              })}
            </div>
            <footer className='footer'>
                <hr />
                <div>
                  <h4>Toplam Tutar <span> {total} ₺</span></h4>
                </div>
                <button className='cart-buy-button' key='item'> <Link className='cart-buy-button' to='/Odeme'>Alışverişi Tamamla</Link> </button> &nbsp;  
                <button className='cart-clear-button' onClick={() => dispatch(clearCart())}>Temizle</button>
            </footer>
          </section>
        )}
    </>
  );
}

export default Cart;