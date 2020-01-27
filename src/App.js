import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import FullWebsite from './components/FullWebsite';
import WebsiteSections from './components/WebsiteSections';
import ReactScreen from './components/ReactScreen';
import ReactNativeScr from './components/ReactNativeScr';
import UiuxScreen from './components/UiuxScreen';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/fullwebsite" component={FullWebsite}/>
        <Route path="/website-sections" component={WebsiteSections}/>
        <Route path="/react" component={ReactScreen}/>
        <Route path="/react-native" component={ReactNativeScr}/>
        <Route path="/uiux-design" component={UiuxScreen}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
