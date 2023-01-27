import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'
//import { GifGrid } from './Components/GifGrid'

export const GifExpertApp= ()=> {
// const categoria =[ 'Primera','Segunda', 'Tercera']

const [categoria, setcategoria] = useState(['Primera','Segunda','Tercera'])
//  const [categoria, setcategoria] = useState(['Primera'])
// const haddleAdd =()=>{
// setcategoria([...categoria,'Cuarta']);
// //setcategoria( cat =>[...cat,'Cuarta']);
 return (
    <>
    <div>GifExpertApp</div>
    <AddCategory setcategoria= {setcategoria}/>
   <hr/>
    {/* <button onClick={haddleAdd}> Agregar </button> */}
   <ol>
    {
    // categoria.map( categori =>{
    //    <GifGrid
    //     key={categori}
    //     categori={categori}
    categoria.map( categori =>{
      return <li key={categori}>{categori}</li> 
      
       })
}
    </ol>
   </>
  )
  

}


