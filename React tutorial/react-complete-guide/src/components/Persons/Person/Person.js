import React from 'react';
import classes from './Person.css';


const person =(props)=>{
    let btnClass='';
    return (

        <div className={classes.Person}>
            <p onClick={props.click}>HI !! I'm {props.name} and I'm {props.age} years old !</p>
            <p> {props.children}</p> 
            <label>Name :</label> <br/><br/> <input type="text"  className={classes.input}onChange={props.change} value={props.name}/>
            <br/><br/>
            <button className={classes.button} onClick={props.delCont}>Delete Component</button>
        </div>
    )
}

export default person;