import React, { useState } from 'react'
//import { GifExpertApp } from '../GifExpertApp';
import PropTypes from 'prop-types';

  const AddCategory=({setcategoria}) => {


    const [inputValue, setinputValue] = useState('')
    
    const haddleInputChange= (e)=> {
       setinputValue(e.target.value)

    }
    const haddleSumit=(e)=>{
    e.preventDefault();
    ///console.log('Sumit hecho')

    if(inputValue.trim().length>2)
    {
      setcategoria( cat =>[...cat, inputValue]);
      setinputValue('');
    }
    
       }
 return (
   
    <form onSubmit={haddleSumit}>
     <input
     type=" text"
     value={inputValue}
     onChange={haddleInputChange}
      />
     </form>
  )

  
}
AddCategory.propTypes={
  setcategoria:PropTypes.func.isRequired
}
export default AddCategory

