import { useEffect, useState } from "react";
import axios from "axios";

const ComA = () =>{
    const [name, setName] = useState();
    const [num, setNum] = useState();
    const [move, setMove] = useState();


    useEffect(() => {
        // alert("hi");
        async function getData() {
            const res= await axios.get(`https://pokeapi.co/api/v2/type/${name}`);
            console.log(res.data.name);
            setName(res.data.name);
            setNum(res.data.num);
            setMove(res.data.move.game_index);

        };
        getData();
    })
    return(<>
        <div align = "center">
        <h2>My name is <span style={{color: "aqua"}}>{name} </span></h2>
        <h2>That is the <span style={{color: "red"}}>{num} </span></h2>
        <h2>The step is <span style={{color: "green"}}>{move} </span></h2>
   
        <select value = {name} onChange = {(event) => setName(event.target.value)}>

        <option value ="1">1</option>
        <option value ="2">2</option>
        <option value ="3">3</option>
        <option value ="4">4</option>
        <option value ="5">5</option>
        </select>
        </div>
    </>)
}

export default ComA;