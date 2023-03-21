import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Profile() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://localhost:44359/Kayititems');
            setData(response.data)
        }

        fetchData();
    }, []);

  return (
    <div className='Profil'>
        <div>
            {data.map(repo =>
                <div key={repo.id}>
                    <p>{repo.firstName}</p>
                </div>  
            )}
        </div>
    </div>
  )
}
