import React from 'react';

const validation =(props) =>{
    let validationMsg ="Text Long Enough";

    if (props.inputLen<=5){
        validationMsg ="Text Too Short";
    }

    return(
        <div>
            <p>
                {validationMsg}
            </p>
        </div>
    )


};

export default validation;