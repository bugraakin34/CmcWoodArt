import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsBasket2Fill } from "react-icons/bs";
import { FaUserCircle } from 'react-icons/fa';
import Logo from './img/Logo';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Produtc1 from './Products/Produtc1';
import Product2 from './Products/Product2';
import Product3 from './Products/Products3';
import Produtc4 from './Products/Products4';
import Cart from './pages/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotal } from './ScreenDetails/CartControls';
import Like from './pages/Like';
import Orders from './pages/Orders';
import Pay from './pages/Pay';
import Register from './costumer/Register';
import Login from './costumer/Login';
import { clearCart } from './ScreenDetails/CartControls';
import Profile from './costumer/Profile';


function App() {

  // console.log(useSelector((store) => store.cart));

  const dispatch = useDispatch();

  const { cartItems, quantity} = useSelector((store) => store.cart);
  
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);


  return (
    <div>
      <Navbar bg="light" variant="light" className='navbar'>
         <Container>
            <Navbar.Brand> <Link to='/'><Logo/></Link> </Navbar.Brand>
            <Nav className="me-auto">
              <NavLink> <Link className='navbar-link' to="/">Ana Sayfa</Link> </NavLink>
              <NavLink> <Link className='navbar-link' to="/Urunler">Ürünler</Link> </NavLink>
              <NavLink> <Link className='navbar-link' to="/Hakkimizda">Hakkımızda</Link> </NavLink>
              <NavLink> <Link className='navbar-link' to='/Sepet'> 
                <div className='basket'>
                  <p>{quantity}</p>
                  <BsBasket2Fill className='basket-icon'/> 
                </div>
              </Link> </NavLink>
              <NavLink className='profil-position'>
                
                <div className="Dropdown">

                  <div className="dropbtn"><FaUserCircle/></div>

                  <div className="dropdown-content">

                    <Link to="/Siparisler">Siparişler</Link>
                    <Link to="/Begendiklerim">Beğendiklerim</Link>
                    <Link to="/" onClick={() =>dispatch(clearCart())}>Çıkış</Link>

                  </div>
                </div>
              </NavLink>
               
            </Nav>
          </Container>
      </Navbar>

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Urunler' element={<Products/>}/>
          <Route path='/Hakkimizda' element={<About/>}/>
          <Route path='/Sepet' element={<Cart/>}/>
          <Route path='/Giris' element={<Login/>}/>
          <Route path='/Kayıt' element={<Register/>}/>
          <Route path='/Profil' element={<Profile/>}/>
          <Route path='/Odeme' element={<Pay/>} />
          <Route path='/Siparisler' element={<Orders/>}/>
          <Route path='/Begendiklerim' element={<Like/>}/>
          <Route path='/urun1' element={<Produtc1/>}/>
          <Route path='/urun2' element={<Product2/>}/>
          <Route path='/urun3' element={<Product3/>}/>
          <Route path='/urun4' element={<Produtc4/>}/>
      </Routes>
    </div>
  );
}

export default App;