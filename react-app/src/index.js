import React from "react";
import ReactDom from "react-dom";

// import * as ques from "./Appe.jsx";
// import Appe from './Appe.jsx';
 //import './index.css';
import Appe from "./Appe.jsx";
//import UseReducer from "./useReducer";

ReactDom.render(
   <Appe /> ,
document.getElementById("root")
);

// ReactDom.render(<>
//      <ol>
//      <li>{ques.default}</li>
//      <li>{ques.favprogl}</li>
//      <li>{ques.myName()}</li>
//      <li>{ques.myNames()}</li>
//      </ol>     
// </>,   
//      document.getElementById("root")   
// );
// ReactDom.render(
//   React.createElement("h1",null, "How are you today?"),
//   document.getElementById("root")
// );
// var h1= document.createElement("h1");
// h1.innerHTML="Thank you, i'm Good";
// document.getElementById("root").appendChild(h1);

// ReactDom.render([<h1>Hey what are you doing?</h1>,
//   , <p>I am learning react</p>,<h2>i am covering both theory plus practical, this has been done using array</h2>,],
//   document.getElementById("root"));

ReactDom.render(<>
  <h1>netflix pick</h1>
    <p>Here the list of my fav 5 netflix series</p>
    <ol>
      <li>Dark</li>
      <li>Extra cucrricular</li>
      <li>My Holo love</li>
      <li>Mirzapur</li>
       <li>jharkhand wala</li>
    </ol>
    </>,
    document.getElementById("root")
    );
//  const flname ="kundan kumar";
 

//  ReactDom.render(
//    <>
//      <h1>My name is {flname}</h1>
//      <p>My lucky number is {Math.random()}</p>
//    </>
//  ,
//  document.getElementById("root")
//  );
// const name = "kundan";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

//  ReactDom.render(<>
//    <h1>Hello My name is {name}</h1>
//    <p> today date is {currDate}</p>
//    <p> And time is {currTime}</p>

//  </>,
//  document.getElementById("root")
//  );
// const link="https://picsum.photos/seed/picsum/200/300"
// const link2= "https://picsum.photos/200/300"
// const link3="https://picsum.photos/200/300"

// const heading={color: 'rgb(47, 0, 255)',
// textAlign: 'center',
// fontWeight: 'bold',
// textShadow: '2px 2px 4px orange',
// fontFamily: '"Poppins", sans-serif' }
// const mamla="vs Russia war has started for the ussar Russia";
//  ReactDom.render(<>
//       <h1 style={heading}>Ukraine {mamla} </h1>
//       <div className="img_div">
//       <img src={link} alt= "random image"/>
//       <a href={link3} target="_kuchh">
//       <img src={link2} alt="hai kuchh images"/>
//       </a>
//       </div>
//       </>,
//  document.getElementById("root")
//  );
// let currDate= new Date(2020, 6, 5, 20);
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
//                cssStyle.color='orange';
//           }
//      else{
//           greeting="Good night";
//           cssStyle.color='blue';
//      }
//      /* cssStyle.color="green" */
//      ReactDom.render(
//      <div>
//      <h1>Hello <span style={cssStyle}>{greeting}</span> </h1>
//      </div>
//      ,
//      document.getElementById("root")
// );

