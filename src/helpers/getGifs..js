
   export const getGifs = async(categori) =>{
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Y3l5xY7L0uowKBlQ29xubpl88nr5Scwk&q=${encodeURI(categori)}&limit=10`
    const resp = await fetch (url);
    const {data} = await resp.json();
    
     const gifs = data.map( imag =>{
      return{
          id:imag.id,
          title:imag.title,
          url:imag.images?.downsized_medium.url

      }

 })
  
     return gifs;
    
       }