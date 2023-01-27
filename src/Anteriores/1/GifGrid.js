 import React, { useEffect, useState } from 'react'

  export const GifGrid = ({categori}) => {

    // const [caunter, setcaunter] = useState(1)
    const [imagens, setimagens] = useState([])
    
    // useEffect se utiliza para permitir q mi componente solo se reinicie una vez
    useEffect(()=>{
      getGifs();
    },[])

  const getGifs = async() =>{
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Y3l5xY7L0uowKBlQ29xubpl88nr5Scwk&q=Rick+and+Morty&limit=10`
    const resp = await fetch (url);
    const {data} = await resp.json();
    
    const gifs = data.map( imag =>{
      return{
          id:imag.id,
          title:imag.title,
          url:imag.images?.downsized_medium.url

      }

 })
  
    console.log(gifs);
     setimagens(gifs);
       }
      // getGifs();
  return (
    <>
    {/* // <div>GifGrid</div> */}
    <h3>{categori}</h3>
    <ol>
    {
    
    imagens.map( img =>(
         <li key={img.id}>{img.title}</li>
        ))
}

    </ol>
    {/* <h3>{caunter}</h3>
    <button onClick={()=>setcaunter(caunter+1)} ></button> */}
    </>
  )
}
