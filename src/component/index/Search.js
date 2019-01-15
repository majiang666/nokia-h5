import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search">
      	<div className="search-box">
      		<span><i className="iconfont icon-sousuo"></i></span>
	    	<input type="text" onChange={this.props.searchVal} placeholder="诺基亚 X7" />
	    </div>
      </div>
    );
  }
}

export default Search;
