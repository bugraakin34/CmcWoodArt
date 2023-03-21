import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../ScreenDetails/cards';
import Header from '../ScreenDetails/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


function Home() {

  // const [name, setName] = useState('');
  // const [navigate, setNavigate] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const {data} = await axios.get('https://localhost:44359/kayititems');
  //       setName(data.name);
  //     } catch(e) {
  //       setNavigate(true);
  //     }
      
  //   })();
  // },  [])

  // const logout = async () => {
  //   await axios.post('https://localhost:44359Kayititems', {}, {withCredentials: true});

  //   setNavigate(true);
  // }

  // if (navigate) {
  //     return <Navigate to="/Giris"/>;
  // }

  return (
    <div style={{margin:"auto"}}>

      <Header/>
      <Cards/>
      
    </div>


  );
}

export default Home;