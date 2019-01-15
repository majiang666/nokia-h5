import React, { Component } from 'react';
class All extends Component {
  constructor(props){
    super(props);
    this.state = {
      msg:"全部"
    };
  }
  render() {
    return (
      <div className="all">
        <div className="product-list">
          <ul>
            <li>
                <img alt="" src="https://product-res.baozun.com/prod/88000027/images/6f17be36954543eabe05de21a1f09e1e.jpg" />
                <h3>Nokia/诺基亚 X7</h3>
                <p>6.18英寸全高清屏</p>
                <h2>1699.00起</h2>
            </li>
            <li>
                <img alt="" src="https://product-res.baozun.com/prod/88000027/images/6f17be36954543eabe05de21a1f09e1e.jpg" />
                <h3>Nokia/诺基亚 X7</h3>
                <p>6.18英寸全高清屏</p>
                <h2>1699.00起</h2>
            </li>
            <li>
                <img alt="" src="https://product-res.baozun.com/prod/88000027/images/6f17be36954543eabe05de21a1f09e1e.jpg" />
                <h3>Nokia/诺基亚 X7</h3>
                <p>6.18英寸全高清屏</p>
                <h2>1699.00起</h2>
            </li>
            <li>
                <img alt="" src="https://product-res.baozun.com/prod/88000027/images/6f17be36954543eabe05de21a1f09e1e.jpg" />
                <h3>Nokia/诺基亚 X7</h3>
                <p>6.18英寸全高清屏</p>
                <h2>1699.00起</h2>
            </li>
          </ul>
      </div>
      </div>
    );
  }
}

export default All;
