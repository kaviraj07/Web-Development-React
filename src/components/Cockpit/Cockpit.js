import React from 'react';
import classes from './Cockpit.css'

const cockpit =(props)=>{

    const colorClass=[];
    
    let btnClass='';
    

    if (props.showPersons){
        btnClass=classes.Red;
    }
    if (props.persons.length <=2){
      colorClass.push(classes.red);

    }
    if (props.persons.length <=1){
      colorClass.push(classes.bold);
      //The following has been added on own
      document.getElementById('txtArea').innerHTML="Beware";
      
    }

    
    return (
     
        <div className={classes.Cockpit}>

          <h1>{props.title}</h1>
          <p id="txtArea"className={colorClass.join(' ')}> This is working just fine !!</p>
          <button
            className={btnClass}
            onClick={props.clicked}>
            Toggle Content !
          </button>
          
         
        </div>
    
      );
}
export default cockpit;