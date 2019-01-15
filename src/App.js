import React, { Component } from 'react';
import Navbar from './component/index/Navbar';
import Index from './component/index/index';
import Buy from './component/buy/buy';
import Center from './component/center/center';
import Classify from './component/classify/classify';
import { Switch, Route } from 'react-router-dom';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="app">
        <Switch>
            <Route exact path='/' component={Index}/>
            <Route path="/buy" component={Buy}/>
            <Route path="/center" component={Center}/>
            <Route path="/classify" component={Classify}/>
        </Switch>
        <Navbar />
      </div>
    );
  }
}

export default App;
