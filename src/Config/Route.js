import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import IndexList from '../Component/IndexList';
import Xxx from '../Component/common/index.js';
import { Name1,Name2,Name3,Name4,Name5 } from '../Component/IndexList';

// class RouteApp extends Component {
// 	render(){
// 		return (<div>{this.props.children}</div>)
// 	}
//
// }
const RouteApp =  ({children, location: { pathname } }) => {
	{/*仅仅 是为了解决 路由切换 只取 路径前一个的 ，保证前一个不会重复出现*/}
	 const key = pathname.split('/')[1] || 'root';
	 console.log(key)
		return (<div>{React.cloneElement(children || <div />, { key })}</div>)


}

const RouteConfig = () =>
	<Router history={browserHistory}>
		<Route path="/" component={RouteApp}>
			<IndexRoute component={Name1}/>
			<Route path="/Name1" component={Name1}/>
			<Route path="/Name2" component={Name2}/>
			<Route path="/Name3" component={Name3}/>
			<Route path="/Name4" component={Name4}/>
			<Route path="/Name5" component={Name5}/>
		</Route>
	</Router>

export default RouteConfig;
