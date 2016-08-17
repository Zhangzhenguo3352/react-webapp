import React, {Component} from 'react';


import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';


export class Footer extends Component {
  render(){
    return(
      <div >
      <ul className="display-flex Footer-content">
        <li className="flex-1 active">
          精华2

        </li>
        <li className="flex-2 se_bj_c_01 se_fn_c">
            <form className="bag_box">
                <div></div>
                <input type="text" placeholder="数商家、分类或商家" className=""/>
            </form>
        </li>
        <li className="flex-1">
          精华1

        </li>
        <li className="flex-1">

          精华1
        </li>
        
      </ul></div>
      )
    }
}
export class DataLoad extends Component {
    render() {
        let {loadAnimation, loadMsg} = this.props;
        return (
            <div className={'data-load data-load-' + loadAnimation}>
                <div className="msg">{loadMsg}</div>
            </div>
        );
    }
}
DataLoad.defaultProps = {
    loadAnimation: true, //默认显示加载动画
    loadMsg: '正在加载中'
}
export class Nav extends Component {


    render(){
        return(
        <ul className="Header-box display-flex">
          <li className="flex-1">
              <Link to="/Name1" activeClassName="active" >
              <i className="iconfont">&#xe607;</i>
              首页
              </Link>
          </li>
          <li className="flex-1">
              <Link to="/Name2" activeClassName="active">商家</Link>
          </li>
          <li className="flex-1">

              <Link to="/Name3" activeClassName="active">我们</Link>
          </li>
          <li className="flex-1">
              <Link to="/Name4" activeClassName="active">更多</Link>
          </li>
        </ul>
      )
    }
    

}