import React,{ useState } from 'react';
//import './reducers.css';
import { useReducer } from 'react';

const initialState=0;
const reducer =(state, action) =>{
    if(action.type ==="INCREMENT"){
        return state+1;
    }
    if(action.type ==="DECREMENT"){
        return state-1;
    }
    return state;
}
const UseReducer = () =>{
    const [state, dispatch]= useReducer(reducer, initialState);
return (<>
    <div>
        <p>{state}</p>
        <div >
            <button onClick={() => dispatch({type: "INCREMENT"})}>inc</button>
            <button onClick={() =>dispatch({type: "DECREMENT"})}>Dec</button>
        </div>
    </div>
</>);
}
export default UseReducer;


// const UseReducer =() =>{
//      const[count, setCount] = useState(0);
//      return(
//           <>
//                <div> 
//                <p>{count}</p>
//                <div className="btnStylePosition">
//                     <button onClick={() =>setCount(count+1)} >Inc</button>
//                     <button onClick={() =>setCount(count -1)} >Dec</button>
//                </div>
//                </div>
//           </>
//      )
// }
// export default UseReducer;