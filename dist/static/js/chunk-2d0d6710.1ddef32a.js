(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6710"],{7320:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("aside",[e._v(" 这是对于安全星盟系统使用说明，我们将在这里展示我们的项目导航功能，感谢您支持并使用我们的系统 ")]),i("el-button",{attrs:{icon:"el-icon-question",type:"primary"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.guide(t)}}},[e._v(" 开始教程^o^ ")])],1)},o=[],r=i("c24c"),p=i.n(r),s=(i("01d7"),[{element:"#hamburger-container",popover:{title:"侧边栏状态",description:"通过这个按钮您可以展开 & 收缩侧边栏",position:"bottom"}},{element:"#breadcrumb-container",popover:{title:"当前位置",description:"说明您目前所在系统的位置",position:"bottom"}},{element:"#header-search",popover:{title:"页面查找",description:"通过搜索界面关键词快速导航界面位置",position:"left"}},{element:"#screenfull",popover:{title:"全屏",description:"设置系统界面进入全屏模式",position:"left"}},{element:"#size-select",popover:{title:"栏目大小",description:"选择历史记录栏目的条目大小",position:"left"}},{element:"#tags-view-container",popover:{title:"历史浏览",description:"可以通过这个按键查看您的历史浏览界面",position:"bottom"},padding:0}]),c=s,l={name:"Guide",data:function(){return{driver:null}},mounted:function(){this.driver=new p.a},methods:{guide:function(){this.driver.defineSteps(c),this.driver.start()}}},a=l,d=i("2877"),u=Object(d["a"])(a,n,o,!1,null,null,null);t["default"]=u.exports}}]);