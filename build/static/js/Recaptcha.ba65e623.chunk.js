(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{3491:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return u});var r,n=t(13),i=t(14),l=t(20),o=t(19),p=t(193),d=t(21),c=t(0),s=t.n(c),h={elementID:"g-recaptcha",onloadCallback:void 0,onloadCallbackName:"onloadCallback",verifyCallback:void 0,verifyCallbackName:"verifyCallback",expiredCallback:void 0,expiredCallbackName:"expiredCallback",render:"onload",theme:"light",type:"image",size:"normal",tabindex:"0",hl:"en",badge:"bottomright"},b=function(){return"undefined"!==typeof window&&"undefined"!==typeof window.grecaptcha&&"function"===typeof window.grecaptcha.render},u=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(o.a)(a).call(this,e))).updateReadyState=function(){b()&&(t.setState({ready:!0}),clearInterval(r))},t.renderGrecaptcha=function(){t.setState({widget:grecaptcha.render(t.props.elementID,{sitekey:t.props.sitekey,callback:t.props.verifyCallback||void 0,theme:t.props.theme,type:t.props.type,size:t.props.size,tabindex:t.props.tabindex,hl:t.props.hl,badge:t.props.badge,"expired-callback":t.props.expiredCallback||void 0})}),t.props.onloadCallback&&t.props.onloadCallback()},t.reset=t.reset.bind(Object(p.a)(t)),t.state={ready:b(),widget:null},t.state.ready||(r=setInterval(t.updateReadyState,1e3)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.state.ready&&this.renderGrecaptcha()}},{key:"componentDidUpdate",value:function(e,a){var t=this.props,r=t.render,n=t.onloadCallback;"explicit"===r&&n&&this.state.ready&&!a.ready&&this.renderGrecaptcha()}},{key:"componentWillUnmount",value:function(){clearInterval(r)}},{key:"reset",value:function(){var e=this.state,a=e.ready,t=e.widget;a&&null!==t&&grecaptcha.reset(t)}},{key:"execute",value:function(){var e=this.state,a=e.ready,t=e.widget;a&&null!==t&&grecaptcha.execute(t)}},{key:"render",value:function(){return"explicit"===this.props.render&&this.props.onloadCallback?s.a.createElement("div",{id:this.props.elementID,"data-onloadcallbackname":this.props.onloadCallbackName,"data-verifycallbackname":this.props.verifyCallbackName}):s.a.createElement("div",{id:this.props.elementID,"data-sitekey":this.props.sitekey,"data-theme":this.props.theme,"data-type":this.props.type,"data-size":this.props.size,"data-badge":this.props.badge,"data-tabindex":this.props.tabindex})}}]),a}(c.Component);u.defaultProps=h}}]);