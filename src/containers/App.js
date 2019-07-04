import React, {Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  
  state={
      persons : [
        {id:"ab",name:'Paul',age:15},
        {id:"cd",name:'Rita',age:25},
        {id:"ef",name:'Mary',age:85}
      ],
      showPersons:true
     
  };

  /* The following is just a testing state
     const [otherVal,setOtherVal]=useState({
     otherVal: 'sdsdsndsbvdh'
    })

     console.log(myState,otherVal);
  */

  /* This handler is no longer used- was used to change name 
  
  switchBtnHandler = (changeName)=>{
    this.setState({
      person:[
        {name:'Gaby',age:22},
        {name:changeName,age:22},
        {name:'Max',age:33},
        {name:'King',age:28}
      ]
    })
  };
*/

  //This handler will change dynamically and respectively the name when text is input

  nameUpdater= (event,id) => {
    const personIndex =this.state.persons.findIndex(p =>{

      return p.id===id;
    });

    const person={
      ...this.state.persons[personIndex]
    }
    person.name=event.target.value;
    const persons=[...this.state.persons]
    persons[personIndex]=person;

    this.setState({
      persons:persons
    });
  }
  
  //This handler will delete component person on click

  delContentHandler =(pid) =>{

    const myNodes=[...this.state.persons];
    myNodes.splice(pid,1);
    const newNode=myNodes;  
    this.setState({persons:newNode})
   
  }
  

  //This handler will toggle the block of content

  toggleContentHandler =() =>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render(){

    /*
    const style={
      backgroundColor:'turquoise',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    }
    */

    /* 
    **The following is not used because of CSS Modules implemented
    const style ={
      backgroundColor:'green',
      color:'white',
   
    }
    */
    
    let persons =null;

    if (this.state.showPersons){
      persons=
          
          <Person
            persons={this.state.persons}
            change={this.nameUpdater}
            delCont={this.delContentHandler}
          />  
    }

    return (
     
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.toggleContentHandler}
        />
        {persons}
       
      </div>
  
    );
    
  }
};


export default App;