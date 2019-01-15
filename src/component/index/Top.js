import React, { Component } from 'react';
import logo from './../../assets/img/logo.jpg';
class Top extends Component {
  render() {
    return (
      <div className="header">
	    	<div className="h-list"><i className="iconfont icon-liebiao" onClick={this.props.showNav}></i></div>
        <div className="h-logo"><img src={logo} alt="" /></div>
        <div className="h-center"><i className="iconfont icon-wode"></i></div>
      </div>
    );
  }
}

export default Top;
