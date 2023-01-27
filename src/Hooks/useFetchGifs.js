import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs.';


export const useFetchGifs = (categori) => {
  
    const [state, setstate] = useState({
         data:[],
         loading:true
    
    });
    useEffect(() => {
      getGifs(categori)
        .then( imagens=>{

            setTimeout(() => {
                console.log(imagens)
                setstate({
                    data:imagens,
                    loading:false
           
                   });
            },3000);
         


      })
    
    }, [categori])
    
    // setTimeout(() => {
    //     setstate({
    //         data:[1,2,3,4,5,6,7,8,9,10],
    //         loading:false
    //      })
        
    //     }, 300);

    return state;
}
