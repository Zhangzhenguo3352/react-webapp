import React, {Component} from 'react';

import { Link } from 'react-router';

import {Nav, Footer,DataLoad} from '../indexList.js';

{/*首页*/}
export class Name1 extends Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <div className="content_mar_T_40">
                    <div className="home_content">轮播图</div>
                <div className="pa_top_10px bj_fff display-flex H-80">
                    <div className="flex-1 bor_R_bor_c">111</div>
                    <div className="flex-1 display-flex flex-column">
                        <div className="flex-1">1111</div>
                        <div className="flex-1 bor_T_bor_c">1111</div>
                    </div>
                </div>
                <div className="bj_fff pa_top_10px">
                    <div className="display-flex H-50 ">123</div>
                    <div className="display-flex">
                        <div className="flex-1 bor_R_bor_c display-flex flex-column">
                            <div className="flex-1 H-40 bor_T_bor_c">111111</div>
                            <div className="flex-1 H-40 bor_T_bor_c">111111</div>

                        </div>
                        <div className="flex-1 display-flex flex-column">
                            <div className="flex-1 H-40 bor_T_bor_c">222222</div>
                            <div className="flex-1 H-40 bor_T_bor_c">222222</div>

                        </div>
                    </div>
                </div>

                {/*猜你喜欢*/}
                <div className="bj_fff pa_top_10px">
                    <div className="f_cor_LuSe f_s_10 padd_TRBL_10">
                        <i className="iconfont f_s_10">&#xe605;</i>
                        <span className="ma_L_5px">猜你喜欢</span>
                    </div>
                    <div className="display-flex H-80 bor_T_bor_c">
                        <div className="W-60 H-60 ser_mar_self">123</div>
                        <div className="flex-1 padd_TRBL_10">
                            <h3 className="f_s_10">一元夺iPhone6</h3>
                            <p className="fn_we_normal f_s_10">[全国]超高中奖率，不信来试！</p>
                        </div>
                    </div>
                    <div className="display-flex H-80 bor_T_bor_c">
                        <div className="W-60 H-60 ser_mar_self">123</div>
                        <div className="flex-1 padd_TRBL_10">
                            <h3 className="f_s_10">一元夺iPhone6</h3>
                            <p className="fn_we_normal f_s_10">[全国]超高中奖率，不信来试！</p>
                        </div>
                    </div>
                    <div className="display-flex H-80 bor_T_bor_c">
                        <div className="W-60 H-60 ser_mar_self">123</div>
                        <div className="flex-1 padd_TRBL_10">
                            <h3 className="f_s_10">一元夺iPhone6</h3>
                            <p className="fn_we_normal f_s_10">[全国]超高中奖率，不信来试！</p>
                        </div>
                    </div>
                    <div className="display-flex H-80 bor_T_bor_c">
                        <div className="W-60 H-60 ser_mar_self">123</div>
                        <div className="flex-1 padd_TRBL_10">
                            <h3 className="f_s_10">一元夺iPhone6</h3>
                            <p className="fn_we_normal f_s_10">[全国]超高中奖率，不信来试！</p>
                        </div>
                    </div>
                </div>

                </div>
                <Footer/>
            </div>
            )
    }
}



export class Name3 extends Component{
    render(){
        return(
            <div>
                    <div className="display-flex H-40 bj_fff set_line_heig_40 set_text_align set_style_self po_fixed">
                        <div className="flex-1 f_s_0_7">我的</div>
                        <div className="flex-1"></div>
                        <div className="flex-3"></div>
                        <div className="flex-1"><i className="iconfont f_s_1_1">&#xe641;</i></div>
                        <div className="flex-1"><i className="iconfont f_s_1_1">&#xe618;</i></div>
                    </div>


                    <div className="content_mar_T_40_B_60">
                          <div className="display-flex flex-row-r H-30 set_line_heig_30 f_s_0_7 bj_rgba_1">
                              <span className="flex-1 pa_L_1em color_1">温馨提示：为了您的账户安全，请设置您的密码</span>
                          </div>
                          <div className="display-flex H-80 bj_c_5DCE9F color_2">
                              <div className="flex-1 display-flex">
                                  <div className="H-40 W-40 set_2 align-self-center bj_c_E2DEDE"></div>
                              </div>
                              <div className="flex-3 set_line_heig_80 f_s_0_7">张振国 New</div>
                              <div className="flex-1 set_line_heig_80 set_text_align_right set_3"><i className="iconfont f_s_0_7">&#xe632;</i></div>
                          </div>
                          <div className="display-flex H-40 set_line_heig_40 set_text_align f_s_0_7 bj_rgba_2 color_2">
                              <div className="flex-1 bor_R_bor_c "><i className="iconfont">&#xe643;</i>美团卷</div>
                              <div className="flex-1 bor_R_bor_c"><i className="iconfont vertical_align_sub">&#xe645;</i>评价</div>
                              <div className="flex-1"><i className="iconfont">&#xe644;</i>收藏</div>
                          </div>

                          <div className="display-flex H-40 set_line_heig_40  f_s_0_7 bj_fff ma_T_10px">
                              <i className="w-40 iconfont color_3 set_text_align_right ma_L_10px">&#xe608;</i>
                              <div className="flex-3 ma_L_10px">我的订单</div>
                              <div className="flex-2 set_text_align_right ma_R_5px">查看全部订单
                                  <i className="iconfont f_s_0_7 color_4 pa_L_5px">&#xe632;</i>
                              </div>
                          </div>

                          <div className="display-flex H-60 bj_fff bor_T_bor_c set_text_align f_s_0_7 color_5">
                              <div className="flex-1 ma_T_14px">
                                  <i className="iconfont">&#xe60d;</i>
                                  <div>代付款</div>
                              </div>
                              <div className="flex-1 ma_T_14px">
                                  <i className="iconfont">&#xe60c;</i>
                                  <div>待使用</div>
                              </div>
                              <div className="flex-1 ma_T_14px">
                                  <i className="iconfont">&#xe608;</i>
                                  <div>待评价</div>
                              </div>
                              <div className="flex-1 ma_T_14px">
                                  <i className="iconfont">&#xe60b;</i>
                                  <div>退款/售后</div>
                              </div>
                          </div>

                          <div className="set_4">
                              <div className="display-flex H-40 set_line_heig_40 f_s_0_7 bj_fff ma_T_10px bor_T_bor_c">
                                  <i className="w-40 iconfont color_3 set_text_align_right ma_L_10px">&#xe62c;</i>
                                  <div className="display-flex flex-1 bor_B_bor_c ma_L_10px">
                                      <div className="flex-3">我的订单</div>
                                      <div className="flex-2 set_text_align_right ma_R_5px">余额：￥0.00
                                          <i className="iconfont f_s_0_7 color_4 pa_L_5px">&#xe632;</i>
                                      </div>
                                  </div>
                              </div>
                              <div className="display-flex H-40 set_line_heig_40 f_s_0_7 bj_fff">
                                  <i className="w-40 iconfont color_3 set_text_align_right ma_L_10px">&#xe630;</i>
                                  <div className="display-flex flex-1 bor_B_bor_c ma_L_10px">
                                      <div className="flex-3">抵用劵</div>
                                      <div className="flex-2 set_text_align_right ma_R_5px">0
                                          <i className="iconfont f_s_0_7 color_4 pa_L_5px">&#xe632;</i>
                                      </div>
                                  </div>
                              </div>
                              <div className="display-flex H-40 set_line_heig_40 f_s_0_7 bj_fff">
                                  <i className="w-40 iconfont color_3 set_text_align_right ma_L_10px">&#xe648;</i>
                                  <div className="display-flex flex-1 bor_B_bor_c ma_L_10px">
                                      <div className="flex-3">会员卡</div>
                                      <div className="flex-2 set_text_align_right ma_R_5px">0
                                          <i className="iconfont f_s_0_7 color_4 pa_L_5px">&#xe632;</i>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="set_4">
                              <div className="display-flex H-40 set_line_heig_40 f_s_0_7 bj_fff ma_T_10px bor_T_bor_c">
                                  <i className="w-40 iconfont color_3 set_text_align_right ma_L_10px">&#xe62c;</i>
                                  <div className="display-flex flex-1 bor_B_bor_c ma_L_10px">
                                      <div className="flex-3">我的订单</div>
                                      <div className="flex-2 set_text_align_right ma_R_5px">余额：￥0.00
                                          <i className="iconfont f_s_0_7 color_4 pa_L_5px">&#xe632;</i>
                                      </div>
                                  </div>
                              </div>
                              <div className="display-flex H-40 set_line_heig_40 f_s_0_7 bj_fff">
                                  <i className="w-40 iconfont color_3 set_text_align_right ma_L_10px">&#xe630;</i>
                                  <div className="display-flex flex-1 bor_B_bor_c ma_L_10px">
                                      <div className="flex-3">抵用劵</div>
                                      <div className="flex-2 set_text_align_right ma_R_5px">0
                                          <i className="iconfont f_s_0_7 color_4 pa_L_5px">&#xe632;</i>
                                      </div>
                                  </div>
                              </div>
                              <div className="display-flex H-40 set_line_heig_40 f_s_0_7 bj_fff">
                                  <i className="w-40 iconfont color_3 set_text_align_right ma_L_10px">&#xe648;</i>
                                  <div className="display-flex flex-1 bor_B_bor_c ma_L_10px">
                                      <div className="flex-3">会员卡</div>
                                      <div className="flex-2 set_text_align_right ma_R_5px">0
                                          <i className="iconfont f_s_0_7 color_4 pa_L_5px">&#xe632;</i>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    </div>
                <Nav></Nav>

            </div>
            )
    }
}

export class Name4 extends Component{
    render(){
        return(
            <div>
                <div className="display-flex H-40 bj_fff set_line_heig_40 set_text_align set_style_self po_fixed">
                    <div className="flex-1 f_s_0_7">更多</div>
                    <div className="flex-1"></div>
                    <div className="flex-3"></div>
                    <div className="flex-1"></div>
                    <div className="flex-1"></div>
                </div>
                <div className="content_mar_T_50_B_60">
                    <div className="display-flex H-40 set_line_heig_40  f_s_0_7 bj_fff ma_T_10px bor_T_bor_c">
                        <div className="flex-3 ma_L_10px">我的订单</div>
                        <div className="flex-2 set_text_align_right ma_R_5px">查看全部订单
                            <i className="iconfont f_s_0_7 color_4 pa_L_5px">&#xe632;</i>
                        </div>
                    </div>
                    <div className="display-flex H-40 set_line_heig_40  f_s_0_7 bj_fff bor_T_bor_c">
                        <div className="flex-3 ma_L_10px">我的订单</div>
                        <div className="flex-2 set_text_align_right ma_R_5px">查看全部订单
                            <i className="iconfont f_s_0_7 color_4 pa_L_5px">&#xe632;</i>
                        </div>
                    </div>
                    <div className="display-flex H-40 set_line_heig_40  f_s_0_7 bj_fff bor_T_bor_c">
                        <div className="flex-3 ma_L_10px">我的订单</div>
                        <div className="flex-2 set_text_align_right ma_R_5px">查看全部订单
                            <i className="iconfont f_s_0_7 color_4 pa_L_5px">&#xe632;</i>
                        </div>
                    </div>
                    <div className="display-flex H-40 set_line_heig_40  f_s_0_7 bj_fff bor_T_bor_c">
                        <div className="flex-3 ma_L_10px">我的订单</div>
                        <div className="flex-2 set_text_align_right ma_R_5px">查看全部订单
                            <i className="iconfont f_s_0_7 color_4 pa_L_5px">&#xe632;</i>
                        </div>
                    </div>
                </div>
                <Nav></Nav>
            </div>
            )
    }
}

export class Name5 extends Component{
    render(){
        return(
            <div>
                <Nav></Nav>

                <Footer/>
            </div>
            )
    }
}



const Aaa = () =>{
  return(
    <div>
      <Nav></Nav>
      <Footer/>
    </div>
  )
}
export default Aaa;
