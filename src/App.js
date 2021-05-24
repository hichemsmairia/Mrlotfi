import './App.css';
import React from 'react'
import {useState} from 'react';
import vide from './photos/vide.jpg'
import MapComponent from './Map'

import zitouna from './photos/zitouna.jpg'
import feskiaa from './photos/feskiaa.jpg'
import oasis from './photos/oasis.jpg'


const App = () => {
    const data_txt =["Mosquée zitouna", "feskia kairouan ", "Oasis de gabes"]

  const [txt, setTxt] = useState('')
  const [lat,setLat] = useState(0)
  const [lng,setLng] = useState(0)
    const [image, setImage] = useState(vide)



  const data_image =[zitouna , feskiaa, oasis]





  return (
    <div className="App">

      <button className="btn1" 
      onClick=             
      {()=> 
        {
          setTxt(data_txt[0])
          setLat(36.79815145222774)
          setLng(10.17115186931347)
        
          setImage(data_image[0])


        }

      }

      > mosquée zitouna</button>
      <button className="btn2"
      onClick=             
      {()=> 
        {
          setTxt(data_txt[1])
          setLat(35.68725882007924)
          setLng(10.09543362577373)
          setImage(data_image[1])


        }

      }
      
      
      >feskia kairouan</button>
      <button className="btn3 "
      onClick=             
      {()=> 
        {
          setTxt(data_txt[2])
          setLat(33.88996340888665)
          setLng(10.116250381647294)
          setImage(data_image[2])
        }

      }

      
      
      
      > oasis gabes</button>

      <p className="txt" >  {txt}</p>
     

      <img src={image} alt="" width="350" height="300"/>

      
     <MapComponent lat={lat} lng={lng} />
      

      </div>


       
    
  );
}

export default App;
