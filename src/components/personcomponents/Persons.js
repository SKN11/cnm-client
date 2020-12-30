import React, { Component } from 'react'
import Person from './Person'

export default class Persons extends Component {

    shouldComponentUpdate(nextProps,nextState){
        console.log("[Persons.js] shouldComponentUpdate");
        if(nextProps.persons !== this.props.persons)
        return true;
        else
        return false;
    }

    componentWillUnmount(){
        console.log("[Persons.js] componentWillUnmount");
    }

    componentDidUpdate(){
        console.log("[Persons.js] componentDidUpdate");
    }
   
    render(){
        console.log("[Persons.js] rendering...");
        return(
    this.props.persons.map((person,index)=>{

        return <Person 
        name={person.name} 
        age={person.age}
        key={person.id}
        changed = {(event) => this.props.changed(event,person.id)}
        click={() => this.props.clicked(index)}
        />
        })
    );
}

}




