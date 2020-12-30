
import Contacts from '../components/contactapp/Contacts'

import './App.css';
import SignUpCard from '../components/contactapp/SignUpCard';
import TicTacToeMain from '../components/tictactoegame/TicTacToeMain';
import PersonMain from '../components/personcomponents/PersonMain'
import UserInputOutputMain from '../components/udemyassignment/userassignment/UserInputOutputMain'
import ListMain from '../components/udemyassignment/listassignment/Listmain'

import Radium,{ StyleRoot } from 'radium'



//acting as adapter
function App() {
  return (
    <StyleRoot>
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo"></a>

        </div>
      </nav>
    {/*<div className="row"><Contacts/></div>*/}
    {/*<div className="row"><TicTacToeMain/></div>*/}
    {/*<div className="row"><SignUpCard/></div> */}
     {<PersonMain/> }
     {/*<ListMain/>*/}
     {/*<UserInputOutputMain/>*/}
    </div>
    </StyleRoot>
    
  );
}

export default App;
