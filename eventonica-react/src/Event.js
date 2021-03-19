import React from 'react';

const EventForm= ()=> {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [eventDate, setEventDate] = React.useState("2021-03-17");
  
    return(
      <><h2> Add Event!!!!</h2>
      <form 
          onSubmit={(e) => {
            e.preventDefault();
            console.log({ name, description, eventDate});}}
        >
          <div>
            <label>
              Event Name:
              <input
                name="eventName"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
              />
            </label>
          </div>
  
          <div>
            <label>
              Event Description:
              <textarea
                name="description"
                value={description}
                onChange={(e) => {setDescription(e.target.value);}}
              />
            </label>
          </div>
  
          <div>
            <label>
              Event Date:
              <input
                type="date"
                value={eventDate}
                onChange={(e) => {setEventDate(e.target.value);}}
              />
            </label>
          </div>
  
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
  </>
    );
  };
  
  export default EventForm;