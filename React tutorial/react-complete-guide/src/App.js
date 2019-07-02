import React, {Component } from 'react';
import './App.css';
import Radium ,{StyleRoot} from 'radium';
import Person from './Person/Person';

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

    const style ={
      backgroundColor:'green',
      color:'white',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }

    }
    let persons =null;

    if (this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person) =>{
            return <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    change={(event) => this.nameUpdater(event,person.id)}
                    delCont={() => this.delContentHandler(person.id)}
                    />
          })}  
        </div>
           
      );
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'maroon',
        color:'white'
      }
    }
    
    const colorClass=[];
    if (this.state.persons.length <=2){
      colorClass.push('red');

    }
    if (this.state.persons.length <=1){
      colorClass.push('bold');
      //The following has been added on own
      document.getElementById('txtArea').innerHTML="Beware";
      
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi just creating the react app</h1>
        <p id="txtArea"className={colorClass.join(' ')}> This is working just fine !!</p>
        <button id="clicker"
          style={style}
          onClick={this.toggleContentHandler}>
          Toggle Content !
        </button>
        {persons}
       
      </div>
      </StyleRoot>
    );
    
  }
};


export default Radium(App);