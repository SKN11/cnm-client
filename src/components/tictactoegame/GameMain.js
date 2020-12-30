import React,{Component} from 'react'

// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }


function Square(props){
    return (
      <button className="square" onClick={props.onClick}>{props.value}</button>
    );
  }
  
  
  class Board extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     squares: Array(9).fill(null),
    //     isXnext:true
    //
    //   };
    // }
  
    // handleClick(i){
    //   //console.log("in handeClick");
    //   //console.log(this.state.squares.length); // showing 9 why
    //   const squares = this.state.squares.slice(); //copy current squares array
    //   if(calculateWinner(squares || squares[i]))
    //   {
    //     return;
    //   }
    //   squares[i] = this.state.isXnext? "X": "O";
    //   this.setState({
    //                 squares:squares,
    //                 isXnext:!this.state.isXnext
    //                 });
    // }
  
    renderSquare(i) {
        return (
          <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
      }
  
    render() {
  
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  
  export default class GameMain extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {
        history : [{
          squares:Array(9).fill(null)
        }],
        stepNumber:0,
        isXnext:true,
      };
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        //xIsNext: (step % 2) === 0,
      });
    }
  
    handleClick(i){
      //console.log("in handeClick");
      //console.log(this.state.squares.length); // showing 9 why
      //const history = this.state.history;
      const history = this.state.history.slice(0,this.state.stepNumber+1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      //const squares = this.state.squares.slice(); //copy current squares array
      if(calculateWinner(squares) || squares[i])
      {
        return;
      }
      squares[i] = this.state.isXnext? "X": "O";
  
      this.setState({
                    history:history.concat([{
                      squares:squares,
                    }]),
                    stepNumber:history.length,
                    isXnext:!this.state.isXnext
                    });
    }
  
    render(){
      const history = this.state.history;
      //const current = history[history.length-1]
      const current = history[this.state.stepNumber]
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step,move)=>{
  
        const desc = move ? ("Go to move #"+move) : "Go to Start";
  
        return (
          <li key={move}>
            <button onClick={()=>this.jumpTo(move)}>{desc}</button>
          </li>
        )
  
  
  
    });
  
      let status;
      if(winner)
      {
        status = "Hurray Winner is !!! "+winner+" !!!";
      }
      else
      {
       status = 'Next player: '+ (this.state.isXnext ? "X" : "O");
      }
      return(
      <div className="game">
        <div className="game">
        <Board squares={current.squares}
                onClick={(i)=>this.handleClick(i)}
                />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  
    }
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  