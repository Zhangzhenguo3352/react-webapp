import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import IndexList from '../Component/common';
import { Name1,Name2,Name3,Name4,Name5 ,Shangjia_nav} from '../Component/common';
// import Animation_1 from '../Component/module/Animation_1.js';
// import Animation_2 from '../Component/module/Animation_2.js';


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
			<Route path="Name1" component={Name1}/>
			<Route path="Name2" component={Name2}>
				<Route path="Animation_1" component={Animation_1}/>
				<Route path="Animation_2" component={Animation_2}/>
			</Route>
			<Route path="Name3" component={Name3}/>
			<Route path="Name4" component={Name4}/>
			
		</Route>
	</Router>

export default RouteConfig;
