/* eslint-disable no-dupe-keys */
import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Urun1 from '../img/product/product_image/urun1/urun1_2';
import Urun2 from '../img/product/product_image/urun2/Urun2';
import Urun3 from '../img/product/product_image/urun3/urun3_1';
import Urun4 from '../img/product/product_image/urun4/urun4_1';
import ReactStars from "react-stars";
import '../Styles/cards.css';
import { useDispatch } from 'react-redux';
import CourseItem from '../CourseItems';
import { addToCart } from './CartControls';


// eslint-disable-next-line import/no-anonymous-default-export
export default function cards () {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const handleAddToCart = (CourseItem) => {
    dispatch(addToCart(CourseItem));
  }
    


  return (
    <div className="ui link cards" style={{ marginTop:10 }}>

      <div style={{ width: "20rem",  marginLeft:10, display: 'block', marginBottom: 20,
                    marginLeft: 'auto', marginRight: 'auto' }} className='card'>

        <Link to="/urun1"><Urun1/></Link>
        <div className="content"  style={{ marginTop:10}}>
          <Link className="header" to='/urun1'>Mars Ahsap Servis Tabağı</Link>
          <div className='description'>
            Ürün Ölçüsü : 30 cm Dayanıklı kayın ağacı ve gıda ile temasa uygun olarak üretilmiştir. Gıda sunumu için herhangi bir zararlı madde vernik vb. Kimyasallar içermemektedir. %100 doğal kayın ağacından üretilmiştir. 
          </div>
          <div className='extra content'>
            <span className='right floated'>
              <Button className='button button1' to='/urun1' onClick={() => handleAddToCart(CourseItem[0])}>Sepete Ekle</Button>
            </span>
            <span>
              <ReactStars
                count={5}
                value={4.5}
                onChange={ratingChanged}
                size={30}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                    />
            </span>
          </div>
        </div>
      </div>

      
      <div style={{ width: "20rem",  marginLeft:10, display: 'block', marginBottom: 20,
                    marginLeft: 'auto', marginRight: 'auto' }} className='card'>
        <Link to="/urun2"><Urun2/></Link>
        <div className="content"  style={{ marginTop:10}}>
          <Link className="header" to='/urun2'>Güneş Ahşap Servis Tabağı</Link>
          <div className='description'>
            Ürün Ölçüsü : 30 cm Dayanıklı kayın ağacı ve gıda ile temasa uygun olarak üretilmiştir. Gıda sunumu için herhangi bir zararlı madde vernik vb. Kimyasallar içermemektedir. %100 doğal kayın ağacından üretilmiştir. 
          </div>
          <div className='extra content'>
            <span className='right floated'>
              <Button variant="primary" className='button button1' onClick={() => handleAddToCart(CourseItem[1])}> Sepete Ekle </Button>
            </span>
            <span>
              <ReactStars
                count={5}
                value={3.5}
                onChange={ratingChanged}
                size={30}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                    />
            </span>
          </div>
        </div>
      </div>

      <div style={{ width: "20rem",  marginLeft:10, display: 'block', marginBottom: 20,
                    marginLeft: 'auto', marginRight: 'auto' }} className='card'>
        <Link to="/urun3"><Urun3/></Link>
        <div className="content"  style={{ marginTop:10}}>
          <Link className="header" to='/urun3'>Ay Ahşap Servis Tabağı</Link>
          <div className='description'>
            Ürün Ölçüsü : 30 cm Dayanıklı kayın ağacı ve gıda ile temasa uygun olarak üretilmiştir. Gıda sunumu için herhangi bir zararlı madde vernik vb. Kimyasallar içermemektedir. %100 doğal kayın ağacından üretilmiştir. 
          </div>
          <div className='extra content'>
            <span className='right floated'>
              <Button variant="primary" to='/urun3'  className='button button1' onClick={() => handleAddToCart(CourseItem[2])}>Sepete Ekle</Button>
            </span>
            <span>
              <ReactStars
                count={5}
                value={5}
                onChange={ratingChanged}
                size={30}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                    />
            </span>
          </div>
        </div>
      </div>


      <div style={{ width: "20rem",  marginLeft:10, display: 'block', marginBottom: 20,
                    marginLeft: 'auto', marginRight: 'auto' }} className='card'>
        <Link to="/urun4"><Urun4/></Link>
        <div className="content"  style={{ marginTop:10}}>
          <Link className="header" to='/urun4'>Dünya Ahşap Servis Tabağı</Link>
          <div className='description'>
            Ürün Ölçüsü : 30 cm Dayanıklı kayın ağacı ve gıda ile temasa uygun olarak üretilmiştir. Gıda sunumu için herhangi bir zararlı madde vernik vb. Kimyasallar içermemektedir. %100 doğal kayın ağacından üretilmiştir. 
          </div>
          <div className='extra content'>
            <span className='right floated'>
              <Button variant="primary" to='/urun4'  className='button button1' onClick={() => handleAddToCart(CourseItem[3])}>Sepete Ekle</Button>
            </span>
            <span>
              <ReactStars
                count={5}
                value={4}
                onChange={ratingChanged}
                size={30}
                isHalf={true}                        
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                    />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
