import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

export class Footer extends Component {
  render(){
    return(
      <div >
      <ul className="display-flex Footer-content">
        <li className="flex-1 active">
          精华1

        </li>
        <li className="flex-1">
          精华1
        </li>
        <li className="flex-1">
          精华3

        </li>
        <li className="flex-1">

          精华4
        </li>
        <li className="flex-1">

          精华5
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
        <ul className="Header-box" data-flex="box:mean">
          <li className="jhuan1">
              <Link to="/Name1" activeClassName="active">Name1</Link>
          </li>
          <li className="jhuan2">
              <Link to="/Name2" activeClassName="active">Name2</Link>
          </li>
          <li className="jhuan3">

              <Link to="/Name3" activeClassName="active">Name3</Link>
          </li>
          <li className="jhuan4">
              <Link to="/Name4" activeClassName="active">Name4</Link>
          </li>
          <li className="jhuan5">
              <Link to="/Name5" activeClassName="active">Name5</Link>
          </li>
        </ul>
      )
    }
    

}