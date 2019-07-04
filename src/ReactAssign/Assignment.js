import React, { Component } from 'react';
import '../ReactAssign/Assignment.css';
import Validation from '../ReactAssign/Validation/Validation';
import Char from '../ReactAssign/Char/Char';

class Assignment extends Component{
    state={
        userInput:''
    }
    contentOut =(event) =>{
        this.setState({userInput:event.target.value});
    }

    deleteChar =(index)=>{

        const myText = this.state.userInput.split('');
        myText.splice(index,1);
        const newText =myText.join('');
        this.setState({userInput:newText});

    }
    render(){

        const charList =this.state.userInput.split('').map((ch,index) =>{

            return <Char 
            character={ch} 
            key={index}
            clicked={()=>this.deleteChar(index)}/>;

        });

        return (
    
            <div className="App">
               <input type="text" onChange={this.contentOut} value={this.state.userInput}/>
               <hr/>
               <span id="msg">{this.state.userInput}</span>
               <Validation  inputLen={this.state.userInput.length}/>
               {charList}
            </div>
        )   
    }
   

};
export default Assignment;
