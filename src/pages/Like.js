import React from 'react'
import './cartComponents/Course.css';
import { useSelector, useDispatch } from 'react-redux';
import LikeItem from './pageComponents/LikeItem';
import '../pages/cartComponents/Course.css';


function Like() {

  const { quantity, likeItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch()

  return (
    <>
      {quantity === null ?(
       <section className='cart'>
         <header>
            <h2>BEĞENDİKLERİM</h2>
            <h4>Henüz beğendiğiniz bir ürün yok</h4>
          </header>  
        </section>
      ) : (
        <section className='cart'>
          <header>
            <h2>BEĞENDİKLERİM</h2>
          </header>
          <div>
            {likeItems.map((items) => {
              return <LikeItem key={items.id} {...items}/>;
            })}
          </div>
          <hr/>
        </section>
       )}
    </>


    
  )
}


export default Like;
