import React from 'react' 

import Timer from './Timer'
import GameMain2 from './GameMain2'
import TickTockWatch from './TickTockWatch'


const TicTacToeMain = () => {

    return(
        <div className='row'>
                <TickTockWatch/>
                <Timer/>
                <GameMain2 />          
       </div>

    );


}


export default TicTacToeMain;