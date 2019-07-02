import React from 'react';
import './Person.css';
import Radium from 'radium';
const person =(props)=>{
    const style ={
        '@media (min-width:500px)':{
            width:'450px'
        }
    }
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

export default Radium(person);