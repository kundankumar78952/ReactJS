 //import React from "react";
 import React , {useState} from "react";
 import index from './index.css';
 //import AddIcon from '@mui/icons-material/Add';
 //import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 //<script src="https://use.fontawesome.com/7237cdc153.js"></script>
 //<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
 //<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
//import AcUnitIcon from '@material-ui/icons/AcUnit';
// import Heading from "./Heading";
// import Para from "./Para";
// import List from './List';
// import {add, sub, div, mult} from "./Calc";
//import SlotM from "./SlotM";

// const TodoList =() =>{
//   const [num, setNum] = useState(0);

//   const incNum= () => {
//     setNum(num + 1);
//   };

//   const decNum = () => {
//     if(num > 0){
//       setNum(num - 1);
//     }else{
//       alert("Sorry,Zero Limit Reached");
//       setNum(0);
//     }
//     };
//   return(
//     <>
//     <div className="main_div">
//       <div className="center_div">
//         <h1> {num} </h1>
//         <div className="btn_div">
//           <button onClick={incNum} className="btn_green">
//           +
//           </button>
//           <button onClick={decNum} className="btn_red">
//           -
//           </button>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default TodoList;

// const Appe =() =>{

//     return(<>
//         <h1>India Completely Annihilated Sri Lanka</h1>
//         <button class="btn btn-success">Tipo Mujhe</button>
//         <div class="input-group mb-3">
//   <span class="input-group-text" id="basic-addon1">@</span>
//   <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
// </div>

// <div class="input-group mb-3">
//   <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
//   <span class="input-group-text" id="basic-addon2">@example.com</span>
// </div>

// <label for="basic-url" class="form-label">Your vanity URL</label>
// <div class="input-group mb-3">
//   <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
//   <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
// </div>

// <div class="input-group mb-3">
//   <span class="input-group-text">$</span>
//   <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
//   <span class="input-group-text">.00</span>
// </div>

// <div class="input-group mb-3">
//   <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
//   <span class="input-group-text">@</span>
//   <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
// </div>

// <div class="input-group">
//   <span class="input-group-text">With textarea</span>
//   <textarea class="form-control" aria-label="With textarea"></textarea>
// </div>
//     </>);

// };
// export default Appe;

// const Appe=() =>{
//      const [name, setName]= useState();
//      const inputEvent =(event) =>{
//           console.log("clicked");
//           setName(event.target.value)
//      };
//      return(<>
//           <div>
//                <h1>Hello{name}</h1>
//                {/* <AcUnitIcon /> */}
//                 <input type="text" placeholder="Enter your name"onChange={inputEvent}/>
//                   <button>Click Me</button>
//                       </div>
//                           </>
//     )
// };
//     export default Appe;

// const Appe=()=>{
//      let newTime= new Date().toLocaleTimeString();
//      const[Ctime, CUtime]= useState(newTime);

// const UpdateTime =()=>{
//       newTime= new Date().toLocaleTimeString();
//      CUtime(newTime);
// }
// setTimeout(UpdateTime, 1000);

// return(<>
//      <h1>{Ctime}</h1>
// </>);
// };
// export default Appe;


// const Appe=() =>{
//      const state =useState();
     
//      const[count,setCount]= useState(0);
     
//        console.log(state);
      
//      const IncNum= () =>{
//           setCount(count+1);
//           setCount=(count++);
//           console.log("clicked", count++);
//      }
//    return(<>
//         <h1>{count}</h1>
//           <button onClick={IncNum}>Click Me</button>
//    </>);
// };
// export default Appe;

// function Appe(){
//      return(<>
//           <h1 className="heading_style">🎰 Welcome to<span style={{fontWeight : "bold"}}> slot Machine</span></h1>
//           <div className="slotmachine">

//          <SlotM x='😄' y='😄' z='😄' />
//           <SlotM x='😃' y='😅'z='😃'/>
//           <SlotM x='🥭' y='🥭' z='🥭'/>
//           </div>
//      </>)
// }
// export default Appe;
// function Appe(){
//      return(<>
//            <ul>
//           <li>the addition is {add(2,5)}</li>
//           <li> The substraction is {sub(8,17)}</li>
//           <li> The division is {div(4,3)}</li>
//           <li> The multiplication is {mult(6,8)}</li>
//      </ul>
//      </>

//      )
// }
// export default Appe;
// const youtuber="thapa technical";
// const favprogl="React.JS";
// export default youtuber;

//  function myName(){
//       let name="kundan";
//       return name;
//  }

//  function myNames(){
//       let names="Hello kundan";
//       return names;
//  }
//  export {favprogl,myName, myNames};


// function App(){
//     return(
//         <>
//     <Heading />
//     <Para />
//     <List />
//     </>
//     );
// }
// export default App;
// function Appe(){
    
// let currDate= new Date();
//  currDate= currDate.getHours();
// let greeting=""; 
// const cssStyle={};

//      if(currDate >=1 && currDate<12){
//           greeting= "Good Morning";
//           cssStyle.color='green';
//      }
//      else if
//           (currDate>= 12 && currDate<19){
//                greeting="Good afternoon";
//                cssStyle.color='cyan';
//           }
//      else{
//           greeting="Good night";
//           cssStyle.color='blue';
//      }
//      return(<>
//         <div>
//         <h1>Hello <span style={cssStyle}>{greeting}</span> </h1>
//         </div>
//         </>  
//    );
//      }

// export default Appe;

// const Appe = () =>{
//   let time = new Date().toLocaleTimeString();

//   const [ctime, setCtime] = useState(time);
//   const UpdateTime = () =>{
//     time = new Date().toLocaleTimeString();
//     setCtime(time);
    
//   }
//   setInterval(UpdateTime, 3000);
//   return (<>
//     <h1>{ctime}</h1>
//   </>);
// }

// export default Appe;

const Appe = () =>{
  const purple= "yellow";
  const [bg, setbg] = useState(purple);
  const [name, setName] = useState("click Me");
  
  const bgChange=()=>{
    // console.log('clicked');
    // setbg(bg);
    let newBg = "#34495e";
    setbg(newBg);
    setName('oooh');
  };

  const bgBack = () =>{
    setbg(purple);
    setName('hoo');
  }

  return(<>
  <div style={{ backgroundColor: bg}}> 
    <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
    </div>
  </>)
}

export default Appe;