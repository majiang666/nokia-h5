import React, { Component } from 'react';
import Top from './Top';
import Search from './Search';
import Banner from './Banner';
import Product from './Product';
import Active from './Active';
import Leftbar from './Leftbar';
import Loading from './../public/loading';
class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      showFlag:false,
      coverFlag:false,
      loadingFlag:true,
      searchVal:""
    };
    this.closeNav = this.closeNav.bind(this);
    this.showNav = this.showNav.bind(this);
    this.stop = this.stop.bind(this);
    this.showCover = this.showCover.bind(this);
    this.closeCover = this.closeCover.bind(this);
    this.searchValFun = this.searchValFun.bind(this);
  }
  closeNav(){
    this.setState({
      showFlag:false,
      coverFlag:false
    });
  }
  showNav(){
      this.setState({
      showFlag:true
    });
  }
  stop(e){
    e.stopPropagation();
  }
  showCover(){
    this.setState({
      coverFlag:true
    });
  }
  closeCover(e){
    e.stopPropagation();
    this.setState({
      coverFlag:false
    });
  }
  componentDidMount(){
    this.setState({
      loadingFlag:false
    });
  }
  searchValFun(e){
    console.log(e.target.value);
  }
  render() {
    return (
      <div className="index">
        <Loading loadingFlag = {this.state.loadingFlag} />
        <Top showNav={this.showNav} />
        <Search searchVal={(e) => this.searchValFun(e)} />
        <Banner />
        <div className="ad">
          <img alt="" src="https://uxresources.baozun.com/prod/88000027/jpg/20181101/a068122e27dc4ad997bba01d65756829.jpg" /> 
        </div>
        <Product />
        <Active />
        <Leftbar 
        showName={this.closeNav} 
        showHtml={this.state.showFlag} 
        coverFlag={this.state.coverFlag} 
        showCover={this.showCover}
        closeCover={(e) => this.closeCover(e)}
        stop={(e)=>this.stop(e)} />
      </div>
    );
  }
}

export default Index;
