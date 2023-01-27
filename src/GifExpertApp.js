import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp= ()=> {


const [categoria, setcategoria] = useState(['Primera'])

 return (
    <>
    <div>GifExpertApp</div>
    <AddCategory setcategoria= {setcategoria}/>
   <hr/>
    
   <ol>
    {
    
    categoria.map( categori =>(
         <GifGrid
          key={categori}
          categori={categori}
             />
    ))
}
    </ol>
   </>
  )
  

}


