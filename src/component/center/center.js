import React, { Component } from 'react';
import Loading from './../public/loading';
class Center extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:"center",
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
      <div className="center">
        <Loading loadingFlag = {this.state.loadingFlag} />
        {this.state.page}
      </div>
    );
  }
}

export default Center;
