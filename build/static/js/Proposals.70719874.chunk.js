(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1996:function(e,a,t){(function(e){!function(e){"use strict";e.exports.is_uri=t,e.exports.is_http_uri=l,e.exports.is_https_uri=n,e.exports.is_web_uri=r,e.exports.isUri=t,e.exports.isHttpUri=l,e.exports.isHttpsUri=n,e.exports.isWebUri=r;var a=function(e){return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function t(e){if(e&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e)&&!/%[^0-9a-f]/i.test(e)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)){var t,l,n,r,o,s="",p="";if(s=(t=a(e))[1],l=t[2],n=t[3],r=t[4],o=t[5],s&&s.length&&0<=n.length){if(l&&l.length){if(0!==n.length&&!/^\//.test(n))return}else if(/^\/\//.test(n))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(s.toLowerCase()))return p+=s+":",l&&l.length&&(p+="//"+l),p+=n,r&&r.length&&(p+="?"+r),o&&o.length&&(p+="#"+o),p}}}function l(e,l){if(t(e)){var n,r,o,s,p="",c="",i="",u="";if(p=(n=a(e))[1],c=n[2],r=n[3],o=n[4],s=n[5],p){if(l){if("https"!=p.toLowerCase())return}else if("http"!=p.toLowerCase())return;if(c)return/:(\d+)$/.test(c)&&(i=c.match(/:(\d+)$/)[0],c=c.replace(/:\d+$/,"")),u+=p+":",u+="//"+c,i&&(u+=i),u+=r,o&&o.length&&(u+="?"+o),s&&s.length&&(u+="#"+s),u}}}function n(e){return l(e,!0)}function r(e){return l(e)||n(e)}}(e)}).call(this,t(117)(e))},2413:function(e,a,t){"use strict";var l=t(2),n=t.n(l),r=t(5),o=t(16),s=t(15),p=t(21),c=t(20),i=t(0),u=t.n(i),m=t(28),d=t(3),g=t(17),E=t(13),f=t(50),_=t.n(f),v=t(4),h=t(11),y=t(40),b=t(1996).isWebUri,M=function(e){Object(p.a)(t,e);var a=Object(c.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).isValid=function(){return e.state.check&&e.isValidUrl()},e.isValidUrl=function(){var a=e.state.url;return 0<a.length&&b(a)},e.doApply=Object(r.a)(n.a.mark(function a(){var t,l,r,o,s,p,c,i,m,E,f,h,b,M,w,O,x;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(l=e.props,r=l.account,o=l.isTronLink,s=e.state.url,e.setState({loading:!0}),!v.B){a.next=23;break}if(1===o)return"ACCOUNT_LEDGER"===e.props.walletType.type?p=e.props.tronWeb():"ACCOUNT_TRONLINK"===e.props.walletType.type&&(p=r.tronWeb),a.next=8,p.transactionBuilder.applyForSR(p.defaultAddress.hex,s);a.next=16;break;case 8:return c=a.sent,a.next=11,Object(y.c)(c,p);case 11:i=a.sent,m=i.result,t=m,a.next=21;break;case 16:return a.next=18,g.b.applyForDelegate(r.address,s)(r.key);case 18:E=a.sent,f=E.success,t=f;case 21:a.next=42;break;case 23:if(1===o)return a.next=26,r.sunWeb.sidechain.transactionBuilder.applyForSR(r.sunWeb.sidechain.defaultAddress.hex,s).catch(function(e){return console.log(e)});a.next=34;break;case 26:return h=a.sent,a.next=29,Object(y.e)(h,r.sunWeb);case 29:b=a.sent,M=b.result,t=M,a.next=42;break;case 34:return a.next=36,r.sunWeb.sidechain.transactionBuilder.applyForSR(r.sunWeb.sidechain.defaultAddress.hex,s).catch(function(e){return console.log(e)});case 36:return w=a.sent,a.next=39,Object(y.e)(w,r.sunWeb);case 39:O=a.sent,x=O.result,t=x;case 42:e.setState({loading:!1}),t?e.confirm():e.setState({modal:u.a.createElement(_.a,{warning:!0,title:Object(d.c)("error"),onConfirm:e.hideModal},Object(d.c)("apply_representative_error_message_0")," ",u.a.createElement("br",null),Object(d.c)("apply_representative_error_message_1"))});case 44:case"end":return a.stop()}},a)})),e.hideModal=function(){e.setState({modal:null})},e.confirm=function(){var a=e.props.onConfirm;a&&a()},e.cancel=function(){var a=e.props.onCancel;a&&a()},e.state={url:"",check:!1,applyResponse:null,loading:!1,modal:null},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.check,l=a.loading,n=a.modal,r=a.url,o=this.props.intl;return n||u.a.createElement(E.c,{isOpen:!0,toggle:this.cancel,fade:!1,size:"lg",className:"modal-dialog-centered apply-super-modal"},u.a.createElement(E.f,{className:"text-center _applyHeader",toggle:this.cancel},Object(d.c)("Super Representatives")),u.a.createElement(E.d,null,u.a.createElement("p",{className:"body-text text-left"},Object(d.b)("proposal_apply_super_desc")),u.a.createElement("hr",null),u.a.createElement("p",{className:"text-left"},u.a.createElement("label",{className:"_applyTitle"},Object(d.c)("proposal_apply_super_input_website")),u.a.createElement("input",{className:"form-control text-left "+(t&&!this.isValidUrl()?" is-invalid":""),type:"text",placeholder:o.formatMessage({id:"proposal_apply_super_input_website_ph"}),style:{borderRadius:"0px",background:"#F3F3F3",border:"1px solid #EEEEEE "},value:r,onChange:function(a){return e.setState({url:a.target.value})}}),u.a.createElement("div",{className:"invalid-feedback text-left text-danger"},Object(d.c)("invalid_url"))),u.a.createElement("div",{className:"text-center"},u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{className:"form-check-label _apply"},u.a.createElement("input",{type:"checkbox",style:{verticalAlign:"1px",marginRight:"9px"},checked:t,onChange:function(a){return e.setState({check:a.target.checked})}}),Object(d.c)("understand_tron_sr_message_0"),u.a.createElement(h.c,{value:v.db}),"TRX",Object(d.b)("understand_tron_sr_message_1")))),u.a.createElement("div",{className:"pt-3"},u.a.createElement("p",{className:"text-center"},u.a.createElement("button",{disabled:!this.isValid()||l,className:"btn btn-success",style:{width:"220px",background:"#69C265",fontSize:"14px"},onClick:this.doApply},Object(d.c)("submit"))))))}}]),t}(i.Component);a.a=Object(m.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet}},{})(Object(h.h)(M))},3484:function(e,a,t){"use strict";t.r(a);var l,n=t(1434),r=t.n(n),o=t(264),s=t.n(o),p=t(2),c=t.n(p),i=t(5),u=t(8),m=t(16),d=t(15),g=t(21),E=t(20),f=t(0),_=t.n(f),v=t(28),h=t(3),y=t(17),b=t(63),M=t(1357),w=t(11),O=t(91),x=t(22),j=t(265),T=t(4),S=t(50),k=t.n(S),C=t(13),A=t(2413),N=t(10),V=t.n(N),K=t(40),L=t(139),R=Object(L.a)(l=function(e){Object(g.a)(n,e);var a,t,l=Object(E.a)(n);function n(){var e;return Object(m.a)(this,n),(e=l.call(this)).onChange=function(a,t){e.load(a,t)},e.handleTableChange=function(a,t,l){var n=Object(u.a)({},e.state.pagination);n.current=a.current,n.pageSize=a.pageSize,e.setState({pagination:n,page:n.current,pageSize:n.pageSize},function(){e.load(n.current,n.pageSize),clearInterval(e.state.timer);var a=setInterval(function(){e.load(n.current,n.pageSize,1)},1e4);e.setState({timer:a})})},e.load=Object(i.a)(c.a.mark(function a(){var t,l,n,r,o,s,p,i,m,d,g,E,f,_,v=arguments;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=0<v.length&&void 0!==v[0]?v[0]:1,l=1<v.length&&void 0!==v[1]?v[1]:20,n=2<v.length?v[2]:void 0,e.setState({loading:!n}),r=e.props.account,a.next=7,y.b.getProposalList({sort:"-number",limit:l,start:(t-1)*l,address:r.address||""});case 7:if(o=a.sent,s=o.proposal,p=o.total,i=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","getAllowShieldedTransaction","getShieldedTransactionFee","getAdaptiveResourceLimitMultiplier","getChangeDelegation","getWitness127PayPerBlock","getAllowTvmSolidity059","getAdaptiveResourceLimitTargetRatio","getShieldedTransactionCreateAccountFee","getForbidTransferToContract"],m=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"},{id:"1000012",key:"getUpdateGateway_v1_0_2"}],T.B)for(d in s)for(g in s[d].paramters)s[d].paramters[g].proposalKey=i[s[d].paramters[g].key],s[d].paramters[g].proposalVal=s[d].paramters[g].value;else for(E in s)for(f in s[E].paramters)for(_ in m)m[_].id==s[E].paramters[f].key&&(s[E].paramters[f].proposalKey=m[_].key,s[E].paramters[f].proposalVal=s[E].paramters[f].value);e.setState({loading:!1,dataSource:s,total:p,page:t,pagination:Object(u.a)({},e.state.pagination,{total:p})});case 14:case"end":return a.stop()}},a)})),e.isLoggedIn=function(a){var t=e.props,l=t.account,n=t.intl;return l.isLoggedIn||1!=a&&e.setState({modal:_.a.createElement(k.a,{warning:!0,title:Object(h.c)("proposal_not_sign_in"),confirmBtnText:n.formatMessage({id:"confirm"}),confirmBtnBsStyle:"danger",onConfirm:function(){return e.setState({modal:null})},style:{marginLeft:"-240px",marginTop:"-195px"}})}),l.isLoggedIn},e.hideModal=function(){e.setState({modal:null,balanceTip:!1,isAction:!1})},e.applySuperModal=function(){e.props.intl;var a=e.state.balanceTip;e.setState({modal:_.a.createElement(C.c,{isOpen:!0,toggle:e.hideModal,className:"committee-modal modal-dialog-centered",style:{width:"460px"}},_.a.createElement(C.f,{toggle:e.hideModal,className:""}),_.a.createElement(C.d,null,_.a.createElement("div",{style:{color:"#333",padding:"10px 0 50px",fontSize:"16px",textAlign:"center"}},Object(h.c)("proposal_apply_super")),_.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},_.a.createElement("div",{className:a?"balance-tip show":"balance-tip"},Object(h.c)("proposal_balance_not_enough")),_.a.createElement("div",{style:{width:"220px",height:"38px",lineHeight:"38px",textAlign:"center",background:"#69C265",color:"#fff",cursor:"pointer"},onClick:function(){e.showApplyForDelegate()}},Object(h.c)("proposal_apply_super_btn"))))),balanceTip:!1})},e.applyForDelegate=function(){var a=e.state.privateKey;e.setState({modal:_.a.createElement(A.a,{isTronLink:e.state.isTronLink,privateKey:a,onCancel:e.hideModal,onConfirm:function(){e.setState({modal:_.a.createElement(k.a,{success:!0,timeout:"3000",onConfirm:e.hideModal},Object(h.c)("proposal_apply_super_success"))})}})})},e.state={dataSource:[],total:0,loading:!1,pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},modal:null,isTronLink:0,balanceTip:!1,isAction:!1,timer:null,page:1,pageSize:20},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,a=this.props,t=a.account;if(a.currentWallet,t.isLoggedIn){var l=setInterval(function(){e.load(1,20,1)},1e4);this.setState({isTronLink:V.a.get("islogin"),timer:l})}this.load()}},{key:"componentDidUpdate",value:function(e){var a=this,t=this.props.account,l=this.state,n=l.page,r=l.pageSize;if(e.account.address!=t.address){clearInterval(this.state.timer),this.load(n,r,1);var o=setInterval(function(){a.load(n,r,1)},1e4);this.setState({isTronLink:V.a.get("islogin"),timer:o})}}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"getColumns",value:function(){var e=this,a=this.props,t=a.account,l=a.intl;return this.state.dataSource,[{title:s()(l.formatMessage({id:"proposal_serial"})),dataIndex:"index",key:"index",className:"position-relative",render:function(e,a){return _.a.createElement("div",{style:{fontFamily:"HelveticaNeue-Medium"}},a.createSelf?_.a.createElement("div",{className:"mine-flag"},Object(h.c)("proposal_my")):"","#"+a.proposalId)}},{title:s()(l.formatMessage({id:"proposal_content_info"})),dataIndex:"proposalVal",key:"proposalVal",width:"40%",render:function(e,a){return _.a.createElement("div",{style:{fontFamily:"HelveticaNeue-Medium"}},a.paramters.map(function(e,a){return _.a.createElement("div",{key:a},T.B?_.a.createElement("div",null,"getMaintenanceTimeInterval"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/36e5)," \xa0",_.a.createElement("span",null,l.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_2"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L)," \xa0",_.a.createElement("span",null,"TRX")),"getCreateAccountFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_3"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L)," \xa0",_.a.createElement("span",null,"TRX")),"getTransactionFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_4"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)," \xa0",_.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_5"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L)," \xa0",_.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_6"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L)," \xa0",_.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_7"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L)," \xa0",_.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_8"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L)," \xa0",_.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_9"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)," \xa0",_.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_10"})),_.a.createElement("span",null,Object(h.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_11"}))),"getEnergyFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_12"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L," TRX")),"getExchangeCreateFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_13"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L," TRX")),"getMaxCpuTimeOfOneTx"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_14"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," ms")),"getAllowUpdateAccountName"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_15"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getAllowSameTokenName"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_16"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getAllowDelegateResource"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_17"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getTotalEnergyLimit"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_18"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getAllowTvmTransferTrc10"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_19"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_18_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," ENERGY")),"getTotalEnergyCurrentLimit"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_20"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," ENERGY")),"getAllowMultiSign"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_21"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_22"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_23"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal),"/",_.a.createElement("span",null,Object(h.c)("propose_minute"))),"getTotalEnergyAverageUsage"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_24"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,_.a.createElement("span",null,e.proposalVal),"/",_.a.createElement("span",null,Object(h.c)("propose_minute"))):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_25"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L)," \xa0",_.a.createElement("span",null,"TRX")),"getMultiSignFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_26"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L)," \xa0",_.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_27"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_activate")):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getAllowTvmConstantinople"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_28"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getAllowShieldedTransaction"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_29"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getShieldedTransactionFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_28_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L)," \xa0",_.a.createElement("span",null,"TRX")),"getAdaptiveResourceLimitMultiplier"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_29_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getChangeDelegation"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_30"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_activate")):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getWitness127PayPerBlock"==e.proposalKey&&_.a.createElement("div",{className:"mt-1"},_.a.createElement("span",null,l.formatMessage({id:"propose_31"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L)," \xa0",_.a.createElement("span",null,"TRX")),"getAllowTvmSolidity059"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_32"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getAdaptiveResourceLimitTargetRatio"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_33"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getShieldedTransactionCreateAccountFee"==e.proposalKey&&_.a.createElement("div",{className:"mt-1"},_.a.createElement("span",null,l.formatMessage({id:"propose_34"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.L)," \xa0",_.a.createElement("span",null,"TRX")),"getForbidTransferToContract"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_35"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_prohibit")):_.a.createElement("span",null,Object(h.c)("propose_not_prohibit")))):_.a.createElement("div",null,"getChargingSwitch"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_activate")):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getSideChainGateWayList"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_2"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getProposalExpireTime"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_3"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getVoteWitnessSwitch"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_4"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_activate")):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getFundInjectAddress"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_5"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getFundDistributeEnableSwitch"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_6"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_activate")):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getDayToSustainByFund"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_7"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," ",Object(h.c)("day"))),"getPercentToPayWitness"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_8"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," %")),"getUpdateGateway_v1_0_2"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_12"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed")))))}))}},{title:s()(l.formatMessage({id:"proposer"})),dataIndex:"name",key:"name",width:"20%",render:function(e,a){return a.proposer.name?_.a.createElement(x.a,{address:a.proposer.address},a.proposer.name):_.a.createElement(x.a,{address:a.proposer.address},a.proposer.address)}},{title:s()(l.formatMessage({id:"proposal_time_of_creation"}))+"/ "+s()(l.formatMessage({id:"proposal_endtime"})),dataIndex:"createTime",key:"createTime",width:"15%",align:"center",render:function(e,a){return _.a.createElement("div",null,_.a.createElement("div",{style:{color:"#333"}},_.a.createElement(w.a,{value:Number(e)}),"\xa0",_.a.createElement(w.e,{value:Number(e),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),_.a.createElement("div",{style:{color:"#C23631"}},_.a.createElement(w.a,{value:Number(a.expirationTime)}),"\xa0",_.a.createElement(w.e,{value:Number(a.expirationTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})))}},{title:s()(l.formatMessage({id:"proposal_status"})),dataIndex:"state",key:"state",align:"center",render:function(e){return _.a.createElement("div",null,"PENDING"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(h.c)("proposal_voting"))),"DISAPPROVED"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(h.c)("proposal_ineffective"))),"APPROVED"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(h.c)("proposal_effective"))),"CANCELED"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(h.c)("proposal_cancelled"))))}},{title:function(){var e=s()(l.formatMessage({id:"proposal_valid_votes"}))+" / "+s()(l.formatMessage({id:"proposal_total_votes"})),a=s()(l.formatMessage({id:"proposal_votes_tip"}));return _.a.createElement("div",null,e," "," ",_.a.createElement("span",{className:"mr-2"},_.a.createElement(j.a,{placement:"top",text:a})))},dataIndex:"votes",key:"votes",width:"12%",align:"center",className:!T.B&&"hidden",render:function(e,a){return a.validVotes+" / "+a.totalVotes}},{title:s()(l.formatMessage({id:"proposal_action"})),dataIndex:"details",key:"details",width:"12%",align:"center",render:function(a,l){return _.a.createElement("div",{className:"detail-action"},_.a.createElement("div",null,_.a.createElement(b.a,{to:"/proposal/".concat(l.proposalId),className:"proposal-more"},Object(h.c)("proposal_more"))),t.address?_.a.createElement("div",null,"PENDING"===l.state&&!l.approveSelf&&_.a.createElement("div",null,_.a.createElement("a",{href:"javascript:;",className:"proposal-approve",onClick:function(){return e.qualificationsVerify(l.proposalId,!0)}},Object(h.c)("proposal_approve"))),"PENDING"===l.state&&l.approveSelf&&_.a.createElement("div",null,_.a.createElement("a",{href:"javascript:;",className:"proposal-cancel",onClick:function(){return e.qualificationsVerify(l.proposalId)}},Object(h.c)("proposal_cancel_approve")))):_.a.createElement("div",null,"PENDING"===l.state&&_.a.createElement("div",null,_.a.createElement("a",{href:"javascript:;",className:"proposal-approve",onClick:function(){return e.qualificationsVerify(l.proposalId,!0)}},Object(h.c)("proposal_approve")))))}}]}},{key:"qualificationsVerify",value:function(e,a){if(this.isLoggedIn()&&!this.state.isAction){this.setState({isAction:!0});var t=this.props;t.account,t.account.tronWeb,t.currentWallet.representative.enabled?a?this.voteProposal(e,a):this.cancelModal(e):this.applySuperModal()}}},{key:"voteProposal",value:(t=Object(i.a)(c.a.mark(function e(a,t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResult(a,t);case 2:e.sent?this.setState({modal:_.a.createElement(k.a,{success:!0,timeout:"3000",onConfirm:this.hideModal},Object(h.c)("proposal_success"))}):this.setState({modal:_.a.createElement(k.a,{warning:!0,timeout:"3000",onConfirm:this.hideModal},Object(h.c)("proposal_fail"))}),this.setState({isAction:!1});case 5:case"end":return e.stop()}},e,this)})),function(e,a){return t.apply(this,arguments)})},{key:"getResult",value:(a=Object(i.a)(c.a.mark(function e(a,t){var l,n,r,o,s,p,i,u,m;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isTronLink,n=this.props.account,T.B)return"ACCOUNT_LEDGER"===this.props.walletType.type?r=this.props.tronWeb():"ACCOUNT_TRONLINK"!==this.props.walletType.type&&"ACCOUNT_PRIVATE_KEY"!==this.props.walletType.type||(r=n.tronWeb),e.next=6,r.transactionBuilder.voteProposal(a,t,n.address,1).catch(function(e){return console.log(e)});e.next=14;break;case 6:return o=e.sent,e.next=9,Object(K.c)(o,r);case 9:s=e.sent,p=s.result,l=p,e.next=22;break;case 14:return e.next=16,n.sunWeb.sidechain.transactionBuilder.voteProposal(a,t,n.address,1).catch(function(e){return console.log(e)});case 16:return i=e.sent,e.next=19,Object(K.e)(i,n.sunWeb);case 19:u=e.sent,m=u.result,l=m;case 22:return e.abrupt("return",l);case 23:case"end":return e.stop()}},e,this)})),function(e,t){return a.apply(this,arguments)})},{key:"cancelModal",value:function(e){var a=this,t=this.props.intl;this.setState({modal:_.a.createElement(k.a,{showCancel:!0,title:"",confirmBtnText:t.formatMessage({id:"confirm"}),cancelBtnText:t.formatMessage({id:"cancel"}),confirmBtnBsStyle:"link",confirmBtnCssClass:"modal-confirm",cancelBtnCssClass:"modal-cancel",onCancel:function(){return a.setState({modal:null})},onConfirm:function(){return a.voteProposal(e,!1)}},_.a.createElement("div",{style:{color:"#333",padding:"30px 0"}},Object(h.c)("proposal_cancel_tip"))),isAction:!1})}},{key:"showApplyForDelegate",value:function(){9999e6<=this.props.currentWallet.balance?this.applyForDelegate():this.setState({modal:_.a.createElement(C.c,{isOpen:!0,toggle:this.hideModal,className:"committee-modal modal-dialog-centered",style:{width:"460px"}},_.a.createElement(C.f,{toggle:this.hideModal,className:""}),_.a.createElement(C.d,null,_.a.createElement("div",{style:{color:"#333",padding:"10px 0 50px",fontSize:"16px",textAlign:"center"}},Object(h.c)("proposal_apply_super")),_.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},_.a.createElement("div",{className:"balance-tip show"},Object(h.c)("proposal_balance_not_enough")),_.a.createElement("div",{style:{width:"220px",height:"38px",lineHeight:"38px",textAlign:"center",background:"#69C265",color:"#fff",cursor:"pointer"}},Object(h.c)("proposal_apply_super_btn")))))})}},{key:"pageHandle",value:function(e){if(this.isLoggedIn()){var a=this.props;a.account,a.currentWallet.representative.enabled?this.props.history.push(e?"proposalscreate":"myproposals"):this.applySuperModal()}}},{key:"render",value:function(){var e=this,a=this.state,t=a.modal,l=(a.page,a.total,a.pageSize,a.loading),n=a.dataSource,o=(a.emptyState,a.pagination),s=this.getColumns(),p=this.props.intl;return p.formatMessage({id:"view_total"}),p.formatMessage({id:"token_unit"}),p.formatMessage({id:"no_commission_proposed_found"}),_.a.createElement("main",{className:"container header-overlap committee"},t,_.a.createElement("div",{className:"token_black table_pos proposal-table"},T.B&&_.a.createElement("div",{className:"proposal-header"},_.a.createElement("a",{href:"javascript:;",onClick:function(){return e.pageHandle(1)}},Object(h.c)("proposal_create")),_.a.createElement("a",{href:"javascript:;",onClick:function(){return e.pageHandle()}},Object(h.c)("proposal_mine"))),l&&_.a.createElement("div",{className:"loading-style"},_.a.createElement(O.b,null)),!l&&_.a.createElement(r.a,{bordered:!0,columns:s,rowKey:function(e,a){return a},dataSource:n,scroll:scroll,pagination:o,loading:l,onChange:this.handleTableChange})))}}]),n}(_.a.Component))||l;a.default=Object(v.connect)(function(e){return{account:e.app.account,currentWallet:e.wallet.current,walletType:e.app.wallet}},null)(Object(M.a)(Object(w.h)(R)))}}]);