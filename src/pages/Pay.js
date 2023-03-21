import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/pay.css'
import Card from 'card';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { clearCart } from '../ScreenDetails/CartControls';





export default function Pay() {

  const navigate = useNavigate();
  const dispatch = useDispatch();



  new Card({
      form: document.querySelector('form'),
      container: '.card-wrapper'
  });

  new Card({

    // numara formatı
    formatting: true,

    // form seçicileri
    formSelectors: {
      numberInput: 'input[name="number"]',
      expiryInput: 'input[name="expiry"]',
      cvcInput: 'input[name="cvc"]',
      nameInput: 'input[name="name"]'
    },
    cardSelectors: {
      cardContainer: '.jp-card-container',
      card: '.jp-card',
      numberDisplay: '.jp-card-number',
      expiryDisplay: '.jp-card-expiry',
      cvcDisplay: '.jp-card-cvc',
      nameDisplay: '.jp-card-name'
    },

    // mesajlar
    messages: {
      validDate: 'valid\nthru',
      monthYear: 'month/year'
    },

    // placeholder alanları
    placeholders: {
      number: '&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;',
      name: 'Full Name',
      expiry: '&bull;&bull;/&bull;&bull;',
      cvc: '&bull;&bull;&bull;'
    },

    // input masking aktifle
    masks: {
      cardNumber: false
    },

    // valid/invalid CSS class bilgileri
    classes: {
      valid: 'jp-card-valid',
      invalid: 'jp-card-invalid'
    },

    // debug mode
    debug: false
    
  });

  const { cartItems } = useSelector((store) => store.cart);

  const validationSchema = Yup.object({
    number: Yup.string().required("Zorunlu alan"),
    name: Yup.string().required("Zorunlu alan"),
    expiry: Yup.string().required('Zorunlu alan'),
    cvc: Yup.string().required('Zorunlu Alan'),
    check: Yup.array().required('Zorunlu Alan')
  });
    

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      check: '',
    },
    validationSchema,
    onSubmit: values => {
      // console.log(values);
      // console.log("setten once");
      // console.log(cartItems)

      const prev = JSON.parse(localStorage.getItem('prevOrder'));
      const all = prev ? [...prev, ...cartItems] : cartItems;
      localStorage.setItem('prevOrder', JSON.stringify(all));

      alert('Ödemeniz başarılı bir şekilde yapılmıştır')
      navigate('/Siparisler');
      dispatch(clearCart());
    },
  });

  // console.log(cartItems);


  return (


    <div className='container'>

      <div className='card-wrapper' style={{marginTop: 20, marginLeft: '-20%'}}></div>

      <div>
        <form id='cc-form' method='post' name='credit' onSubmit={handleSubmit}>
          
          {errors.number ? errors.number : null} 
          <input placeholder='Kredi Kartı Numarası' type='tel' name='number' className='Input' onChange={handleChange} values={values.number}/>  <br/>
          
          {errors.name ? errors.name : null} 
          <input placeholder='Ad Soyad' type='text' name='name' className='Input' onChange={handleChange} values={values.name}/>  <br/>
          
          {errors.expiry ? errors.expiry : null}  
          <input placeholder='AA/YY' type='tel' name='expiry' className='Input' onChange={handleChange} values={values.expiry}/> <br/>
          
          {errors.cvc ? errors.cvc : null} 
          <input placeholder='CVC' type="number" name="cvc" className='Input' maxLength={2} onChange={handleChange} values={values.cvc}/>  <br/>
          
          {errors.check ? errors.check : null}  
          <section className='contract'>
            <input type='checkbox' className='rule' name='check' onChange={handleChange} values={values.check}/>
            <strong> Ön Bilgilendirme Koşulları</strong>'nı ve <strong>Mesafeli Satış Sözleşmesi</strong>'ni okudum, onaylıyorum.
          </section>
          
          <input type='submit' value="Ödeme Yap" className='submit' />
        
        </form>
      </div>
    </div>

  )
}
