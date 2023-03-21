/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Product2_1 from '../img/product/urun_page/product2_1';
import Product2_2 from '../img/product/urun_page/product2_2';
import Product2_3 from '../img/product/urun_page/product2_3';
import { Card } from 'react-bootstrap';
import '../Styles/Product.css';
import ReactStars from "react-stars";
import Urun1 from '../img/product/product_image/urun1/urun1_2';
import Urun3 from '../img/product/product_image/urun3/urun3_1';
import Urun4 from '../img/product/product_image/urun4/urun4_1';
import { addToCart,addToLike } from '../ScreenDetails/CartControls';
import CourseItem from '../CourseItems';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Cards from '../ScreenDetails/cards';


export default function Produtc2 () {

    const [index, SetIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        SetIndex(selectedIndex);
    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };


    const dispatch = useDispatch();

    const handleAddToCart = (CourseItem) => {
        dispatch(addToCart(CourseItem));
    }

    const handleAddToLike = (CourseItem) => {
        dispatch(addToLike(CourseItem));
    }
    

    return (
        <div className='Container'>
        

            <Card className='Card-carousel'>
                <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        
                    <Carousel.Item>
                        <Product2_1/>
                    </Carousel.Item>
        
                    <Carousel.Item>
                        <Product2_2/>
                    </Carousel.Item>
        
                    <Carousel.Item>
                        <Product2_3/>
                    </Carousel.Item>
        
                </Carousel>
        
            </Card>

            <div className='Card'>                   
                <h2 className='Card-title'> 
                    Güneş Ahşap Sunum Tabağı
                </h2>

                <p className='Card-text'> 
                    124,00 TL
                </p>
                
                <Button className='add-basket button1' onClick={() => handleAddToCart(CourseItem[1])}>
                    <i className="icon shopping basket"></i>
                    Sepete Ekle
                </Button>

                <Button className='Like button1' onClick={() => handleAddToLike(CourseItem[1])}>
                    <i className="heart icon"></i>
                </Button>
                
                <ReactStars
                    className='Rating'
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

                <h3 className='card-info'>Ürün Bilgileri</h3>

                <p className="card-exp">
                    Ürün Ölçüsü : 30 cm Dayanıklı kayın ağacı ve gıda ile temasa uygun olarak üretilmiştir. 
                    Gıda sunumu için herhangi bir zararlı madde vernik vb. Kimyasallar içermemektedir. 
                    %100 doğal kayın ağacından üretilmiştir. Antibakteriyeldir. 
                </p>

                <p className="card-exp2">
                    Bakım & Kullanımı: Ahşabın bakımı ve uzun ömürlü olabilmesi için belirli aralıklarla keten tohumu yağı veya zeytinyağı ile ahşabı yağlayabilirsiniz.
                    Bulaşık makinesinde yıkamayınız ve uzun süre suyun içinde bekletmeyiniz.
                </p>

                <h3 className='card-prop'>Ürün Özellikleri</h3>

                <div className='card-table'>
                    <table class="ui definition table">
                        <tbody className='card-table-size'>
                            <tr>
                                <td>Boyut/Ebat</td>
                                <td></td>
                                <td>30 cm</td>
                            </tr>

                            <tr>
                                <td>Parça Sayısı</td>
                                <td></td>
                                <td>Tekli</td>
                            </tr>

                            <tr>
                                <td>Materyal</td>
                                <td></td>
                                <td>Ahşap</td>
                            </tr>

                            <tr>
                                <td>Hacim</td>
                                <td></td>
                                <td>400 cc</td>
                            </tr>
                        </tbody>        
                    </table>
                </div>
            </div>
        

            <div className='Cards-comment'>
                <h3>Ürün Değerlendirmeleri</h3>
                <div className="ui comments">
                    <div class="comment">
                        <a className="avatar">
                        <img src="https://semantic-ui.com/images/avatar/small/christian.jpg"/>
                        </a>
                        <div class="content">
                            <a className="author">Joe Henderson</a>
                            <div class="metadata">
                                <div className="date">1 day ago</div>
                            </div>
                            <div className="text">
                                <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there. </p>
                                <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
                            </div>
                            <div classNaame="actions">
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
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <a className="avatar">
                        <img src="https://semantic-ui.com/images/avatar/small/joe.jpg"/>
                        </a>
                        <div className="content">
                            <a className="author">Christian Rocha</a>
                            <div className="metadata">
                                <div className="date">2 days ago</div>
                            </div>
                            <div className="text">
                                I re-tweeted this.
                            </div>
                            <div className="actions">
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
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <a className="avatar">
                        <img src="https://media.licdn.com/dms/image/C4D03AQGrp06DWRyNuw/profile-displayphoto-shrink_800_800/0/1647456317680?e=1679529600&v=beta&t=vAdIgRARYIR_xqvV0cWgwqnzaB0CWoidg2BMJjpBsYA"/>
                        </a>
                        <div className="content">
                            <a className="author">Buğrahan Akın</a>
                            <div className="metadata">
                                <div className="date">4 days ago</div>
                            </div>
                            <div className="text">
                                Ürün çok kaliteli annem için almıştım oda çok beğendi kargo çok hızlıydı hemen geldi ürün.
                            </div>
                            <div className="actions">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
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
            </div>

        </div>
    )
}
