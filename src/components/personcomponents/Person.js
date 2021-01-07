import React, { Component } from 'react'
import './Person.css'
import Radium from 'radium'
import PropTypes from 'prop-types'
import AuthContext from '../../context/AuthContext'

class Person extends Component {
    static contextType  =AuthContext;
   

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        //document.querySelector('input').focus();
        this.inputElementRef.current.focus();
        //console.log(this.contextType.authenticated);
    }

    

    render(){
    const style = {
        
        '@media (min-width:500px)' : {
            width:'450px'
        }
    }
    return(
        <div className="Person" style={style}>
        <AuthContext.Consumer>
            {(context) => context.authenticated?'Authenticated':'Please Login'}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I'm {this.props.name} I'm {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input 
        type="text" 
        ref={this.inputElementRef}
        onChange={this.props.changed} 
        value={this.props.name}
        />
        </div>

    );

    }
}

Person.propTypes = {
    click :PropTypes.func,
    changed :PropTypes.func,
    name :PropTypes.string,
    age : PropTypes.number

}
export default Radium(Person);