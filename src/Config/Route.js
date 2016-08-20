import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import IndexList from '../Component/common';
import Name2 from '../Component/common/Name2.js';
import { Name1,Name3,Name4,Name5 ,Shangjia_nav} from '../Component/common';
import {page1, page2} from '../Component/common/module/page';


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
				<Route path="page1" component={page1}/>
				<Route path="page2" component={page2}/>
			</Route>
			<Route path="Name3" component={Name3}/>
			<Route path="Name4" component={Name4}/>

		</Route>
	</Router>

export default RouteConfig;
