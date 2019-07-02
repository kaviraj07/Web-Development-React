import React from 'react';
import './Person.css';

const person =(props)=>{
    
    return (

        <div className="Person">
            <p onClick={props.click}>HI !! I'm {props.name} and I'm {props.age} years old !</p>
            <p> {props.children}</p> 
            <input type="text" onChange={props.change} value={props.name}/>
            <br/><br/>
            <button onClick={props.delCont}>Delete Component</button>
        </div>
    )
}

export default person;