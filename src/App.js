import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './Components/Header/Header';
import "../src/SCSS/main.scss";

import Footer from './Components/Footer/Footer';
import Home from "../src/Components/Blocks/Home/Home";
import 'tailwindcss/tailwind.css';

import "../src/SCSS/style.scss";

import "../src/SCSS/media.scss";



import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TermsConditions from './Components/Blocks/TermsConditions';
function App() {
  return (
   <>
   
     <Header/>
      <Home/>
      <TermsConditions/>
     <Footer/>
   </>
  );
}

export default App;
