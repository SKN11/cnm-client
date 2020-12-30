import React, { Component } from 'react'

import Persons from './Persons'
import Radium from 'radium'
import CockpitPerson from '../cockpit/CockpitPerson'




 class PersonMain extends Component{

    state = {
        person:[
            {id:'abc1',name:'sam',age:27},
            {id:'abc2',name:'sky',age:13},
            {id:'abc3',name:'euro',age:7}
        ],
        showPerson:false,
        showCockpit:true
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

    nameChangeHandlerById = (event,id) =>
    {
        const personIndex = this.state.person.findIndex(p => {
            return (p.id === id);
        });
        
        const person = {...this.state.person[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.person];
        persons[personIndex] = person;

        this.setState({
            person:persons
        });

    }

    deleteFromPersonList = (index) => {
        console.log("deketing"+index);
        //const persons = this.state.person; //wrong aproach u r making mutable
        //const persons = this.state.person.slice();
        const persons = [...this.state.person]; //spread operator
        persons.splice(index,1)
        this.setState({person:persons});

    }

    togglePersons = () => {
        const isShowPerson = this.state.showPerson;
        this.setState({showPerson:!isShowPerson});
    }

   render(){
      

    let persons = null;
       {/* use of conditional statement method 2*/}
    if(this.state.showPerson){
        persons = (

                <Persons persons={this.state.person}
                 changed = {this.nameChangeHandlerById}
                 clicked = {this.deleteFromPersonList}
                  />

            
           
        /*<div>
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
                */
            );

           

    }

    return (
        <div>
            <button onClick={()=> {this.setState({showCockpit:false})} }>RemoveCockpit</button>
            {
            (this.state.showCockpit) ?
            <CockpitPerson showPerson={this.state.showPerson} togglePersons={this.togglePersons} switchHandler={this.switchHandler}/>
            : null
            }
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


export default Radium(PersonMain);