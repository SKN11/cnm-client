import React from 'react'



export default class Timer extends React.Component{

constructor(props)
{
    super(props);

    this.state={
        seconds:0
    }

}


componentDidMount()
{
    this.timerId=setInterval(() => this.tick(),1000);
}

tick()
{
    this.setState(()=>({
        
        seconds : this.state.seconds+1
    }));
}

render()
{
    return(

        <div className='row'>
            <h1>Tick tock Timer With Tac Toe</h1>
            <div>Game Time {this.state.seconds} seconds</div>
            <br/>
        </div>
    );
}


}