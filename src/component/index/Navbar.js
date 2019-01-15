import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink activeClassName="cur" to='/'><i className="iconfont icon-shouye"></i>首页</NavLink>
        <NavLink activeClassName="cur" to='/classify/all'><i className="iconfont icon-fenlei"></i>分类</NavLink>
        <NavLink activeClassName="cur" to='/buy'><i className="iconfont icon-gouwuche"></i>购物车</NavLink>
        <NavLink activeClassName="cur" to='/center'><i className="iconfont icon-wode"></i>我的</NavLink>
      </div>
    );
  }
}

export default Navbar;
