import React from 'react';

const Char =(props)=>{
    const style ={
        display:'inline-block',
        padding:'16px',
        margin:'16px',
        border:'1px solid black',
        textAlign:'center',
        backgroundColor:'black',
        color:'white'
    };
    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default Char;