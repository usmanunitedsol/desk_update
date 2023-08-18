import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import "../src/SCSS/main.scss";
import Footer from './Components/Footer/Footer';
import Home from "../src/Components/Blocks/Home"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
   <>
   
     <Header/>
     <Home/>
     <Footer/>
   </>
  );
}

export default App;
