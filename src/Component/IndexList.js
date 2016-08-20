import React, {Component} from 'react';


import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';


export class Footer extends Component {
  render(){
    return(
      <div >
      <ul className="display-flex Footer-content">
        <li className="flex-1">
          地区
          <i className="iconfont f_s_10 pa_L_5px">&#xe61d;</i>
        </li>
        <li className="flex-2 se_bj_c_01 se_fn_c">
            <form className="bag_box">
                <div><i className="iconfont">&#xe616;</i></div>

                <input type="text" placeholder="数商家、分类或商家" className=""/>
            </form>
        </li>
        <li className="flex-1">
          <i className="iconfont">&#xe607;</i>

        </li>
        <li className="flex-1">

          <i className="iconfont">&#xe618;</i>
        </li>

      </ul></div>
      )
    }
}


export class DataLoad extends Component {
  render(){
    return(
      <div>123 </div>
      )
  }
}






export class Nav extends Component {


    render(){
        return(
        <ul className="Header-box display-flex">
          <li className="flex-1">
              <Link to="/Name1" activeClassName="active" >
              <i className="iconfont">&#xe612;</i>
              <div>首页</div>
              </Link>
          </li>
          <li className="flex-1">
              <Link to="/Name2" activeClassName="active">
              <i className="iconfont">&#xe619;</i>
              <div>商家</div>
              </Link>
          </li>
          <li className="flex-1">

              <Link to="/Name3" activeClassName="active">
              <i className="iconfont">&#xe600;</i>
              <div>我的</div>
              </Link>
          </li>
          <li className="flex-1">
              <Link to="/Name4" activeClassName="active">
              <i className="iconfont">&#xe603;</i>
              <div>更多</div>
              </Link>
          </li>
        </ul>
      )
    }


}
