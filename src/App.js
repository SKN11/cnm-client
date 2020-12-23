
import Contacts from './components/Contacts'

import './App.css';
import SignUpCard from './components/SignUpCard';
import TicTacToeMain from './components/TicTacToeMain';
import PersonMain from './personcomponents/PersonMain'
import UserInputOutputMain from './personcomponents/UserInputOutputMain'


//acting as adapter
function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo"></a>

        </div>
      </nav>
    {/*<div className="row"><Contacts/></div>*/}
    {/*<div className="row"><TicTacToeMain/></div>*/}
    {/*<div className="row"><SignUpCard/></div> */}
     {<PersonMain/>}
     {/*<UserInputOutputMain/>*/}
    </div>
    
  );
}

export default App;
