// import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

import Loginpage from "./components/LoginPage/Loginpage"
import useBearStore from './store';
function App() {
  
  const login=useBearStore((state)=>state.login)

  return (
    <div className="App">
      
   { login ?  null : <Loginpage/> }
   { login ? <Main/> :null}
    </div>
  );
}

export default App;
