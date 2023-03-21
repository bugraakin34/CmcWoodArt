/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import './register.css';
import logo from '../img/ablamlogo.png'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [ navigate, setNavigate ] = useState(false);

  
  const submit = async e => {
    e.preventDefault();

    await axios.post('https://localhost:7288/api/Auth/register', {
      firstName, lastName, email, phone, password, checkbox
    });

    setNavigate(true);
  }

  if (navigate) {
    return <Navigate to="/Giris"/>;
  }


  return (
    <div className='register-page'>
      <img src={logo} className='logo'/>
      
      <form className='regsiter-form' onSubmit={submit}>

        <input placeholder='Adınız' name="firstName" id='firstName' type="text" required className='register' onChange={(e) => setFirstName(e.target.value)}/> 
        <input placeholder='Soyadınız' name='lastName' type='text' required className='register' onChange={(e) => setLastName(e.target.value)}/> <br/>
        <input placeholder='E-posta' name='email' type='email' required className='register' onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder='Telefon No' name='phone' type='phone' required className='register' onChange={(e) => setPhone(e.target.value)}/> <br/>
        <input placeholder='Şifre' name='password' type='password' required className='register' onChange={(e) => setPassword(e.target.value)}/>
        <input placeholder='Şifre Tekrar' name='passwordTwo' type='password' required className='register'/> <br/>
        
        <div  className='person'>
          <section className='sec'>
              <input type="checkbox" name="kampanya" className='check'/>&nbsp;
            Kampanyalardan haberdar olabilmem için kişisel verilerimin işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul ediyorum.
          </section>
          <section className='sec'>
            <input type="checkbox" name="Checkbox" required className='check' onChange={(e) => setCheckbox(!checkbox)}/> &nbsp;
            Kişisel verilerimin işlenmesine yönelik <span>aydınlatma metnini</span>  okudum ve anladım.
          </section>
        </div>

        <button className='log'> <Link to='/Giris' className='login-button'> Giriş Yap</Link></button>
        <input type='submit' name='Login' value='Kayıt Ol' className='register-button'/>
        
      </form>
    </div>
  )
}
