/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import '../costumer/login.css'
import logo from '../img/ablamlogo.png';
import { Link } from 'react-router-dom';
import {HiOutlineMail} from 'react-icons/hi';
import {RiLockPasswordLine} from 'react-icons/ri';
import axios from 'axios';
import { Navigate } from 'react-router-dom';




export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ navigate, setNavigate ] = useState(false);
  const [ error, setError ] = useState('');

  
  const submit = async e => {
    e.preventDefault();

    try {
      const {data} = await axios.post('https://localhost:7288/api/Auth/login', {
        email, password
      }, {withCredentials: true});

      axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;

      setNavigate(true);
    
    } catch (error) {
      setError('Kullanıcı adı veya şifre yanlış');
    }
  }


  if (navigate) {
    return <Navigate to="/"/>;
  }



  return (
    <div className='login-page'>
      <img src={logo} className='logo'/>

      <form className='login-form' onSubmit={submit}>

        <HiOutlineMail style={{width:35, height:35, marginBottom:6}}/>
        <input type="text" name="eposta" placeholder='E-posta' onChange={e => setEmail(e.target.value)} required className='login'/> <br/>
            
        <RiLockPasswordLine style={{width:35, height:35, marginBottom:6}}/> 
        <input placeholder='Şifre' name='pass' type='password' onChange={e => setPassword(e.target.value)} required className='login'/> <br/>
        
        <section>
          <input type='checkbox' name='check' className='check'/>
          <strong> Beni Hatırla </strong>
        </section>
        
        <button  className='reg'> <Link to='/Kayıt'  className='reg-button'> Üye OL</Link></button>
        <input type='submit' name='Login' value='Giriş Yap' className='log-button'/>
        {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
      </form>
     </div>
  )
}