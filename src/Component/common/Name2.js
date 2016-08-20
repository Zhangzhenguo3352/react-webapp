import React,{ Component } from 'react';
import { Link } from 'react-router';
import {Nav, Footer,DataLoad} from '../indexList.js';



export default class Name2 extends Component{
    render(){
        return(
            <div>
                <div className="display-flex H-40 bj_fff set_line_heig_40 set_text_align set_style_self">
                    <div className="flex-2 f_s_0_7"><Link to="/Name2/page1" activeClassName="active">全部商家</Link></div>
                    <div className="flex-2 f_s_0_7"><Link to="/Name2/page2" activeClassName="active">优惠商家</Link></div>
                    <div className="flex-3"></div>
                    <div className="flex-1"><i className="iconfont f_s_1_1">&#xe61e;</i></div>
                    <div className="flex-1"><i className="iconfont f_s_1_1">&#xe616;</i></div>
                </div>
                <div className="display-flex H-40 bj_fff set_line_heig_30 set_text_align f_s_0_7 bor_T_bor_c">
                    <div className="flex-1 po_re bor_R_bor_c margin_TRBL_5">全部分类<i className="iconfont po_ab WZ">&#xe629;</i></div>
                    <div className="flex-1 po_re bor_R_bor_c margin_TRBL_5">全城<i className="iconfont po_ab WZ">&#xe629;</i></div>
                    <div className="flex-1 po_re margin_TRBL_5">智能排序<i className="iconfont po_ab WZ">&#xe629;</i></div>
                </div>


                
                {this.props.children}
                <Nav></Nav>
            </div>
            )
    }
}
