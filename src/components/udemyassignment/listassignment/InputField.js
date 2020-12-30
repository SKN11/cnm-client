import React, { Component } from 'react'



    const InputField = (props) => {

        return (
            <div>
            <input type="text" onChange={props.changed} value={props.message}/>
            <p>{props.length}</p>
            </div>
        );

    }



    export default InputField;