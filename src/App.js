import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import Route from './Config/Route'; // 路由配置

import 'normalize.css/normalize.css'; //重子浏览器默认样式
import './Iconfont/iconfont.css'; //字体图标
import './style/index.css'; //加载公共样式
import 'flex.css/dist/data-flex.css'; //flex布局

const Init = () =>
	<div><Route/></div>
ReactDOM.render(<Init/>,document.getElementById('app'))
