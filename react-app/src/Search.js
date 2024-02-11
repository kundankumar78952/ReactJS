import React from 'react';
import './index.css';
import { useState } from 'react';
import Sresult from './Sresult';
const Search =() =>{
    const [img, setImg] = useState("");
     
       const inputEvent= (event) =>{
            const data= event.target.value;
           
            setImg(data);
        }
    
    return (<>
        <div align="center">
  <input type="text" placeholder="Search" value={img} onChange={inputEvent}/>
       
       {img===""? null : <Sresult name={img}/>}
        </div>
    </>)
}

export default Search;