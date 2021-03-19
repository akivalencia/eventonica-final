import React from 'react';
import EventForm from './Event.js'
import UserForm from './User.js'
import ShowEvent from './ShowEvent.js'

// import logo from './logo.svg';
import './App.css';

//how to export component 
// export const Box = (props)=> {
//   return (
//     <div> Helloooooooooo, USER {props.name} </div>
//   );
// }

// export const Box2= (props)=> {
//   return(
//     <div> WHATSUPPPPPPP EVENTS {props.text}</div


function App() {
  const [apiResponse, setAPIResponse] = React.useState("");
    function callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.json())
            .then(res => setAPIResponse(res))
            .catch(err => err);
};
    React.useEffect(() => {
        callAPI();
    });

  return (
    <>
      <p className="App-intro">hi</p>
      <EventForm/>
      <UserForm/>
      {(apiResponse.event|| []).map( event => <ShowEvent {...event}/>) }
    </>
  );
};

export default App;

