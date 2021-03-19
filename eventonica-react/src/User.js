import React from 'react';




const UserForm= ()=> {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
  
    return(
      <><h2> Add User!!!!</h2>
      <form 
          onSubmit={(e) => {
            e.preventDefault();
            console.log({ name, email});}}
        >
          <div>
            <label>
              Name:
              <input name="userName" value={name} onChange={(e) => {setName(e.target.value)}}
              />
            </label>
          </div>
          <div>
          <label>
              Email:
              <input name="userEmail" value={email} onChange={(e) => {setEmail(e.target.value)}}
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

export default UserForm;