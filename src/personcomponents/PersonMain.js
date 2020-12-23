import React, { Component } from 'react'

import Person from './Person'


export default class PersonMain extends Component{

    state = {
        person:[
            {name:'sam',age:27},
            {name:'sky',age:13},
            {name:'euro',age:7}
        ]
    }

    switchHandler = () =>
    {
        this.setState({
            person:[
                {name:'SAM',age:27},
                {name:'SKY',age:13},
                {name:'EURO',age:7},
            ],
            showPerson:false
        });

    }

    switchHandlerWithArg = (skyNAme) =>
    {
        this.setState({
            person:[
                {name:'sam',age:27},
                {name:skyNAme,age:13},
                {name:'euro',age:7},
            ]
        });

    }

    nameChangeHandler = (event) =>
    {
        this.setState({
            person:[{name:event.target.value,age:27},{name:'sky',age:13},{name:'euro',age:7}]
        });

    }

    togglePersons = () => {
        const isShowPerson = this.state.showPerson;
        this.setState({showPerson:!isShowPerson});
    }

   render(){
       const style={
           backgroundColor:'white',
           font:'inherit',
           border:'1px solid blue',
           cursor:'pointer',
           padding:'8px'
       }

    let persons = null;
       {/* use of conditional statement method 2*/}
    if(this.state.showPerson){
        persons = (<div>
            <Person 
            changed={this.nameChangeHandler} 
            name={this.state.person[0].name} 
            age={this.state.person[0].age}/>
    
            <Person 
            click = {this.switchHandlerWithArg.bind(this,'sky happy')} 
            changed ={this.nameChangeHandler}
            name={this.state.person[1].name} 
            age={this.state.person[1].age}>It's a dog</Person>
    
            <Person  
            changed ={this.nameChangeHandler}
            name={this.state.person[2].name} 
            age={this.state.person[2].age}
            ></Person>
                </div>
            );
    }

    return (
        <div>
            <h1>Person App (^_^)</h1>
        <button style={style} className='squarePerson' onClick={this.togglePersons}>Toggle Persons</button><br/>
        <button style={style} className='squarePerson' onClick={this.switchHandler}>Capital</button><br/>
        {persons}
       {/* use of conditional statement method 1*/}
        {/* 
            this.state.showPerson ?
            <div>
        <Person 
        changed={this.nameChangeHandler} 
        name={this.state.person[0].name} 
        age={this.state.person[0].age}/>

        <Person 
        click = {this.switchHandlerWithArg.bind(this,'sky happy')} 
        changed ={this.nameChangeHandler}
        name={this.state.person[1].name} 
        age={this.state.person[1].age}>It's a dog</Person>

        <Person  
        changed ={this.nameChangeHandler}
        name={this.state.person[2].name} 
        age={this.state.person[2].age}
        ></Person>
            </div> : null
        */}
        </div>

    );
    }

}