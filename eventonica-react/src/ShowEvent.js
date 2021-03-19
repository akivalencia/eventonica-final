import React from 'react';

const ShowEvent= ({name, description, date})=> {
    return (
    <>
        <div> {name} </div>
        <div> {description} </div>
        <div> {date} </div>
    </>
    );

}


export default ShowEvent;