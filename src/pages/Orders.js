import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import OrdersItem from './pageComponents/OrdersItem';



export default function Orders() {
  const { quantity } = useSelector((store) => store.cart);
  

  const prevOrders = JSON.parse(localStorage.getItem("prevOrder"));
  


  return (
    <>
      {prevOrders === null ?(
       <section className='cart'>
         <header>
            <h2>SİPARİŞLERİM</h2>
            <h4>Henüz bir sipariş vermediniz</h4>
          </header>  
        </section>
      ) : (
        <section className='cart'>
          <header>
            <h2>Siparişlerim</h2>
          </header>
          <div>
              {prevOrders.map((item) => {
                return <OrdersItem key={item.id} {...item}/>;
              })}
            
          </div>
          <hr/>
        </section>
       )}
    </>


    
  )
}
