import React, { Component } from 'react'

import UserInput from './UserInput'
import UserOutput from './UserOutput'


export default class UserInputOutput extends Component {

    state={
        username:'root'
    }

    switchUser = () => {
        this.setState({
            username:'kali'
        });
    }

    switchUserViaInput = (event) => {
        this.setState({
            username:event.target.value
        });
    }

    render(){
        const style={
            backgroundColor:'white',
            font:'inherit',
            border:'1px solid blue',
            cursor:'pointer',
            padding:'8px',
            align:'center'
        }
 

        return(
                <div >
                    <UserOutput username={this.state.username}/>
                    <div style={style}>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button onClick={this.switchUser}>Switch User</button>
                    <UserInput user={this.state.username} changed={this.switchUserViaInput.bind(this)}/>
                    </div>
                    <UserOutput username="linux"/>
                    <UserOutput username="ubuntu"/>
                </div>
            );
    }
}