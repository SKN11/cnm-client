import React,{Component} from 'react'


export default class TickTockWatch extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={date: new Date().toLocaleTimeString()}
    }

    componentDidMount()
    {
        this.timerId = setInterval(()=>this.tick(),1000);

    }

    componentWillUnmount()
    {
        clearInterval(this.timerId);
    }

    tick()
    {
        this.setState({date:new Date().toLocaleTimeString()});
        //this.setState({date:new Date().toLocaleDateString()});
    }
    
render()
{
    const ele = <div className='row'>
            <h1>Tick tock With Tac Toe</h1>
            <div>It is {this.state.date}</div>
            <br/>
            
    </div>
    return(
       ele
    );
}

}



