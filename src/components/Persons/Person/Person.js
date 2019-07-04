import React,{Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    render(){
    
        return (

            <div className={classes.Person}>
                <p onClick={this.props.click}>HI !! I'm {this.props.name} and I'm {this.props.age} years old !</p>
                <p> {this.props.children}</p> 
                <label>Name :</label> <br/><br/> <input type="text"  className={classes.input}onChange={this.props.change} value={this.props.name}/>
                <br/><br/>
                <button className={classes.button} onClick={this.props.delCont}>Delete Component</button>
            </div>
        )
    }
}
export default Person;