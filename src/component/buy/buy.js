import React, { Component } from 'react';
import Loading from './../public/loading';
class Buy extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:"buy",
      loadingFlag:true
    };
  }
  componentDidMount(){
    this.setState({
      loadingFlag:false
    });
  }
  render() {
    return (
      <div className="buy">
        <Loading loadingFlag = {this.state.loadingFlag} />
        {this.state.page}
      </div>
    );
  }
}

export default Buy;
