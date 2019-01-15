import React, { Component } from 'react';

class Leftbar extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    console.log(this.props);
    return (
      <div className="left-bar" onClick={this.props.showName} style={this.props.showHtml ? {left:'0',opacity:1} : {left:'-100%',opacity:0}}>
       <div className="left-bar-mean" onClick={this.props.stop}>
          <div className="left-top">
            <i className="iconfont icon-guanbi" onClick={this.props.showName}></i>
          </div>
          <div className="nav-box">
            <ul>
                <li>首页</li>
                <li onClick={this.props.showCover}>智能手机<i className="iconfont icon-jiantou"></i></li>
                <li onClick={this.props.showCover}>经典手机<i className="iconfont icon-jiantou"></i></li>
                <li onClick={this.props.showCover}>智能配件<i className="iconfont icon-jiantou"></i></li>
                <li>相关支持</li>
                <li>语系</li>
            </ul>
          </div>
       </div>
       <div className="left-product" style={this.props.coverFlag ? {left:'0',opacity:1} : {left:'-100%',opacity:0}}>
          <div className="left-top">
            <i className="iconfont icon-fanhui" onClick={this.props.closeCover}></i>
          </div>
          <div className="nav-box">
            <ul>
                <li><img alt="" src="https://product-res.baozun.com/prod/88000027/images/280e2bfcaed2466d94619c73d691a3d8.jpg" />Nokia/诺基亚 X7</li>
                <li><img alt="" src="https://product-res.baozun.com/prod/88000027/images/c07ef0a0a8404c159d26c17d16e518e1.jpg" />Nokia/诺基亚 7 Plus</li>
                <li><img alt="" src="https://product-res.baozun.com/prod/88000027/images/082adc51988e421499525ba22267f353.jpg" />Nokia/诺基亚 8 Sirocco</li>
                <li><img alt="" src="https://product-res.baozun.com/prod/88000027/images/6f17be36954543eabe05de21a1f09e1e.jpg" />Nokia/诺基亚 X6</li>
                <li><img alt="" src="https://product-res.baozun.com/prod/88000027/images/dtWfbzAJ6A.jpg" />Nokia/诺基亚 3.1 Plus</li>
            </ul>
          </div>
       </div>
      </div>
    );
  }
}

export default Leftbar;
