import React, { Component } from 'react';
import Loading from './../public/loading';
import { Switch, Route } from 'react-router-dom';
import All from './all';
import Capacity from './capacity';
import Classics from './classics';
import Parts from './parts';
class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="classify-index">
        <Loading loadingFlag = {this.state.loadingFlag} />
	    	<Switch>
            <Route exact path='/classify/all' component={All}/>
            <Route path="/classify/capacity" component={Capacity}/>
            <Route path="/classify/classics" component={Classics}/>
            <Route path="/classify/parts" component={Parts}/>
        </Switch>
      </div>
    );
  }
}

export default Index;
