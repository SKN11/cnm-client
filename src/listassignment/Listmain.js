import React, { Component } from 'react'
import CharComponent from './CharComponent'
import InputField from './InputField'
import ValidationList from './ValidationList'


export default class ListMain extends Component {

    state = { message : 'hi',
    validmessage:'',
length:0
};

    outputFromInputHandler = (event) => {

        let validMsg;
        if(event.target.value.length >= 7)
        {validMsg = 'Text long enough'}
        else if(event.target.value.length <= 5)
        {validMsg = 'Text too short'}
         
        const length = event.target.value.length 

        this.setState({
            message : event.target.value,
            validmessage:validMsg,
            length:length
        });

    }

    handleCharCompClick = (char) => {

        const st = {...this.state};
        let msg = st.message.split('');
        const msgIndex = msg.findIndex( (ch)=> {
            return (ch === char);
        })

        console.log(msg);
       msg.splice(msgIndex,1);

       console.log(msg);
       this.setState({
        message:msg.join(''),
        length:msg.length
    });
        
    }

    
    render(){

        let charComp = null;
        const msg = this.state.message.split('');     
        charComp=(
            <div>
            {
                msg.map((char, index)=>{
                return <CharComponent
                 value={char} id = {"abc"+index}
                 click={this.handleCharCompClick.bind(this,(char))}
                 />
            })
            }

            </div>
        )
    
    return (

        <div className="App">
         <InputField message={this.state.message} length={this.state.length} changed={(event) => this.outputFromInputHandler(event)}/>
        <ValidationList valid={this.state.validmessage} />
        {charComp}
        
         <ol>
            <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>Create a new component (= ValidationComponent) which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (= CharComponent) and style it as an inline box (= display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        </div>
      );
    }
}

