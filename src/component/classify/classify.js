import React, { Component } from 'react';
import Search from './../index/Search';
import Index from './index';
import { NavLink } from 'react-router-dom';
class Classify extends Component {
  render() {
    return (
      <div className="classify">
	    	<Search />
        <div className="classify-box">
          <div className="c-name">
            <NavLink activeClassName="cur-tab" to='/classify/all'>全部</NavLink>
            <NavLink activeClassName="cur-tab" to='/classify/capacity'>智能手机</NavLink>
            <NavLink activeClassName="cur-tab" to='/classify/classics'>经典手机</NavLink>
            <NavLink activeClassName="cur-tab" to='/classify/parts'>智能配件</NavLink>
          </div>
          <div className="c-filter">
              <span>上新</span>
              <span>销量</span>
              <span>价格</span>
              <span>综合</span>
              <span>筛选</span>
          </div>
          <Index />
        </div>
      </div>
    );
  }
}

export default Classify;
