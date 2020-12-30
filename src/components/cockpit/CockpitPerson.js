import React, { useEffect } from 'react'
import Radium from 'radium'

const CockpitPerson = (props) => {
    useEffect(()=>{
        console.log("[CockpitPerson] useEffect called");
        //setTimeout(()=>{alert('useEffect called')},1000);
    }); //[] empty array tells to load only first time

    const style={
        backgroundColor:'green',
        font:'inherit',
        border:'1px solid blue',
        cursor:'pointer',
        padding:'8px',
        ':hover':{ // hover css selecter by radium
         backgroundColor:'lightgreen',
         color:'black'
        }
    }

    if(props.showPerson){

        style.backgroundColor = 'red';

        style[':hover'] ={
            backgroundColor:'salmon',
            color:'black'
        }

        }
    return(
        <>
        <h1>Person App (^_^)</h1>
        <button style={style} className='squarePerson' onClick={props.togglePersons}>Toggle Persons</button><br/>
        <button className='squarePerson' onClick={props.switchHandler}>Capital</button><br/>
       </>


    );
}

export default React.memo(Radium(CockpitPerson));