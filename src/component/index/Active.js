import React, { Component } from 'react';

class Active extends Component {
  render() {
    return (
      <div className="active-list">
        <h1>活动专区</h1>
          <ul>
            <li>
                <img alt="" src="https://uxresources.baozun.com/prod/88000027/jpg/20181122/72042468303d4c59bc75fbc6e44c04aa.jpg" />
                <h3>Nokia/诺基亚 X7</h3>
                <p>6.18英寸全高清屏</p>
            </li>
            <li>
                <img alt="" src="https://uxresources.baozun.com/prod/88000027/jpg/20181017/3644cb9b95aa41719fd3b864482ddc53.jpg" />
                <h3>Nokia/诺基亚 X7</h3>
            </li>
            
          </ul>
      </div>
    );
  }
}

export default Active;
