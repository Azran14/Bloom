import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Pages/Body';
import Details from "./Pages/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path ="/" component={Body}/>
            <Route exact path ="/Details" component={Details}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
