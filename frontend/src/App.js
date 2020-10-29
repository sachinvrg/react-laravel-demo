import React, { Fragment } from 'react';
// import './App.css';
import Header from './container/Header'
import Home from './container/Home'
class App extends React.Component {
  render(){
    return (
        <Fragment>
            <Header/>
            <Home/>
        </Fragment>
    );
  }
}


export default App;
