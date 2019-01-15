import React, { Component } from 'react';
import logo from './../../assets/img/loading.gif';
class Loading extends Component {
  render() {
    return (
      <div className="loading" style={this.props.loadingFlag ? {opacity:1} : {opacity:0}}>
	    <img src={logo} alt="" />
      </div>
    );
  }
}

export default Loading;
