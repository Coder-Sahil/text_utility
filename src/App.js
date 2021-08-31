//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'
import TextForm from './components/TextForm/TextForm';
import {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");

  let changeMode = () => {
    if(mode === "light")
    {
      setMode("dark");
      console.log("Dark Mode Enable");
      document.body.style.backgroundColor = "#10022f";
    }
    else
    {
      setMode("light");
      console.log("Light Mode Enable");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Text Utility" mode = {mode} change_Mode = {changeMode}/>
      <Switch>     
        <Route exact path="/about">
          <About mode = {mode}/>
        </Route>              
        <Route exact path="/">
          <TextForm mode = {mode}/>  
        </Route>      
      </Switch>
    </Router> 
    </>
  )
}

export default App;
