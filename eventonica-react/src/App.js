import React from 'react';
// import logo from './logo.svg';
// import './App.css';

//how to export component 
export const Box = (props)=> {
  return (
    <div> Helloooooooooo, USER {props.name} </div>
  );
}

export const Box2= (props)=> {
  return(
    <div> WHATSUPPPPPPP EVENTS {props.text}</div>
  )
}

const EventForm= ()=> {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [eventDate, setEventDate] = React.useState("2021-03-17");

  return(
    <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ name, description, eventDate});
        }}
      >
        <div>
          <label>
            Event Name:
            <input
              name="eventName"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Event Description:
            <textarea
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Event Date:
            <input
              type="date"
              value={eventDate}
              onChange={(e) => {
                setEventDate(e.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>




  );
};







function App() {
  const [apiResponse, setAPIResponse] = React.useState("");
    function callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => setAPIResponse(res))
            .catch(err => err);
};
    React.useEffect(() => {
        callAPI();
    });

  return (
    <>
      <p className="App-intro">{apiResponse}</p>
      <h2> Add Event </h2>
      <EventForm/>
      <Box className="Pink" name= "Brit"/>
      <Box2 text="ok"/>
      <p> dfdfdfd</p>
      <div> component here </div>
    </>
  );
};

export default App;

