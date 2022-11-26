
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import { type } from '@testing-library/user-event/dist/type';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode eis enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled", "success")
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>
    <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>         
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/>
          {/* </Route>  
     </Switch>  */}
    </div>
  {/* </Router> */}
    </>
  );
}

export default App;
