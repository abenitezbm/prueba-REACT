 import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
//  import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs.';
 import { GifGridItem } from './GifGridItem';

  export const GifGrid = ({categori}) => {

   const {data:image,loading}= useFetchGifs(categori);
   
    // const [caunter, setcaunter] = useState(1)
    // const [imagens, setimagens] = useState([])
    
    // // useEffect se utiliza para permitir q mi componente solo se reinicie una vez
    // useEffect(()=>{
    //   getGifs(categori)
    //      .then(setimagens)
    // },[categori])

  
      // getGifs();
  return (
    <>
    {/* // <div>GifGrid</div> */}
    <h3 className='animate__animated animate__bounce'>{categori}</h3>
    {/* {loading ? 'Cargando....':'Data cargada'} */}
    { loading&& <p className='animate__animated animate__flash'>Loading </p>}
    <div className='card-grid'>
    {
    
    image.map( img =>(
        < GifGridItem 
            key={img.id}
            {...img}
            />
        ))
    }
    </div>
    {/* <h3>{caunter}</h3>
    <button onClick={()=>setcaunter(caunter+1)} ></button> */}
    </>
  )
}
