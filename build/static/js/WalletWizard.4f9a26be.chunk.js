(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1394:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},3508:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a(14),r=a(20),l=a(19),s=a(21),o=a(30),i=a(0),m=a.n(i),d=a(3),p=a(2876),u=a(354),b=a(591),E=a(2),v=a.n(E),f=a(5),y=a(2877);function g(e){var t=e.address,n=e.privateKey,c=e.addressQRCode,r=e.privateKeyQRCode,l=a(396);return m.a.createElement("div",{className:"card d-inline-block"},m.a.createElement("div",{className:"card-body d-flex"},m.a.createElement("div",{className:"col text-center"},m.a.createElement("div",{className:"font-weight-bold"},"Address"),m.a.createElement("img",{src:c,style:h.qr})),m.a.createElement("div",{className:"col"},m.a.createElement("img",{src:l,style:h.logo})),m.a.createElement("div",{className:"col text-center"},m.a.createElement("div",{className:"font-weight-bold"},"Private Key"),m.a.createElement("img",{src:r,style:h.qr}),m.a.createElement("br",null))),m.a.createElement("div",{className:"card-body p-0 text-center"},m.a.createElement("table",{className:"table m-0"},m.a.createElement("tr",null,m.a.createElement("th",null,"Address"),m.a.createElement("td",null,t)),m.a.createElement("tr",null,m.a.createElement("th",{style:h.th},"Private Key"),m.a.createElement("td",null,n)))))}var h={logo:{height:150,marginTop:50},qr:{height:200},th:{width:200}},_=a(2334),N=a.n(_);function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:260;return N.a.toDataURL(e,{width:t})}var j=function(e){return'<link rel="stylesheet" href="'.concat(e,'" type="text/css" />')};function O(){return(O=Object(f.a)(v.a.mark(function e(t,n){var c,r,l,s,o,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:return c=e.sent,e.next=5,w(n);case 5:r=e.sent,l=Object(y.renderToString)(m.a.createElement(g,{addressQRCode:c,privateKeyQRCode:r,address:t,privateKey:n})),"",s=[a(2879)],o=s.map(function(e){return j(e)}).join(""),i="\n    <html>\n      <head>\n        ".concat(o,'\n      </head>\n      <body style="background-color: white;">\n        <div id="app">').concat(l,"</div>\n          <style>").concat("",'</style>\n            \n          <script type="text/javascript">\n            setTimeout(function () { window.print(); }, 2000);\n          <\/script>\n      </body>\n    </html>\n  '),window.open("about:blank","_blank").document.write(i);case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}var k=a(65),x=a(18),A=a(118),S=a(2880),K=a.n(S),C=a(84),V=a(80),R=a(2881),T=a(408);function U(e){var t=e.icon,a=e.completed,n=void 0!==a&&a,c=e.first,r=void 0!==c&&c;return m.a.createElement("div",{className:"col step d-flex justify-content-center "+(n?"completed":"")},r&&m.a.createElement("div",{className:"progress first-progress"},m.a.createElement("div",{className:"progress-bar bg-danger"})),m.a.createElement("div",{className:"step-icon"},m.a.createElement("i",{className:t+" icon-waiting"}),m.a.createElement("i",{className:"fa fa-check icon-complete"})),m.a.createElement("div",{className:"progress"},m.a.createElement("div",{className:"progress-bar bg-danger"})))}function q(e){var t=e.children;return m.a.createElement("div",null,t)}var P=function(e){function t(e){var a;e.isOpen;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this))).generateAccount=function(){var e=Object(p.generateAccount)();a.setState({address:e.address,privateKey:e.privateKey,salt:R()})},a.hideModal=function(){var e=a.props.onClose;e&&e()},a.onPasswordChanged=function(e){var t=e.password,n=e.isValid;a.setState({fieldPassword:t,passwordValid:n})},a.printPaperWallet=function(){var e=a.state;!function(e,t){O.apply(this,arguments)}(e.address,e.privateKey)},a.nextStep=function(){var e=a.state,t=e.step,n=e.privateKey,c=t<3?t+1:3;switch(c){case 1:var r=a.encryptData();a.setState({encryptedKey:r.hex});break;case 3:a.props.login(n)}a.setState({step:c})},a.previousStep=function(){a.setState(function(e){var t=e.step;return{step:t>0?t-1:0}})},a.downloadEncryptedKeyFile=function(){var e=a.state.address;Object(b.a)(a.buildEncryptedKeyStore(),e+".txt")},a.isStepValid=function(){var e=a.state,t=e.step,n=e.passwordValid;switch(t){case 0:return n}return!0},a.state={step:0,fieldPassword:"",fieldEncryptedKey:"",passwordValid:!1},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.generateAccount()}},{key:"encryptData",value:function(){var e=this.state,t=e.fieldPassword,a=e.privateKey,n=e.salt,c=Object(u.b)(t,n),r=Object(u.c)(c,a);return{encryptedKey:c,hex:r.hex,bytes:r.bytes}}},{key:"buildEncryptedKeyStore",value:function(){var e=this.state,t={version:1,key:e.encryptedKey,address:e.address,salt:e.salt};return Object(C.byteArray2hexStr)(Object(V.stringToBytes)(JSON.stringify(t)))}},{key:"componentWillReceiveProps",value:function(e){var t=e.isOpen;this.setState({isOpen:t})}},{key:"renderPage",value:function(){var e=this.state,t=e.step,a=e.privateKey;switch(t){case 0:return m.a.createElement(q,null,m.a.createElement("div",{className:"d-flex justify-content-center text-center"},m.a.createElement("div",{className:"col-md-12"},m.a.createElement("h5",null,Object(d.c)("new_wallet")),m.a.createElement("p",null,Object(d.c)("password_encr_key_message_0")),m.a.createElement("p",null,Object(d.c)("password_encr_key_message_1")))),m.a.createElement("div",{className:"d-flex justify-content-center"},m.a.createElement("div",{className:"col-md-5"},m.a.createElement("div",{className:"text-center"},m.a.createElement("label",null,Object(d.c)("password")),m.a.createElement(K.a,{minLength:8,tooShortWord:Object(d.b)("too_short"),changeCallback:this.onPasswordChanged,minScore:2,scoreWords:[Object(d.b)("weak"),Object(d.b)("okay"),Object(d.b)("good"),Object(d.b)("strong"),Object(d.b)("secure")],inputProps:{name:"password_input",autoComplete:"off",className:""}}),m.a.createElement("div",{className:"text-muted"},Object(d.c)("strong_password_info"))))));case 1:return m.a.createElement(q,null,m.a.createElement("div",{className:"d-flex justify-content-center text-center"},m.a.createElement("div",{className:"col-md-6"},m.a.createElement("h5",null,Object(d.c)("save_keystore_file")),m.a.createElement("p",null,m.a.createElement("button",{className:"btn btn-lg btn-block",onClick:this.downloadEncryptedKeyFile},m.a.createElement("i",{className:"fa fa-download mr-2"}),Object(d.c)("download_keystore_file"))))),m.a.createElement("p",{className:"text-center"},m.a.createElement("b",null,Object(d.c)("do_not_lose_it"))," ",Object(d.c)("do_not_lose_it_message_0")," ",m.a.createElement("br",null),m.a.createElement("b",null,Object(d.c)("do_not_share_it"))," ",Object(d.c)("do_not_share_it_message_0")," ",m.a.createElement("br",null),m.a.createElement("b",null,Object(d.c)("make_a_backup"))," ",Object(d.c)("make_a_backup_message_0")," ",m.a.createElement("br",null)));case 2:return m.a.createElement(q,null,m.a.createElement("div",{className:"d-flex justify-content-center text-center"},m.a.createElement("div",{className:"col-md-6"},m.a.createElement("h5",null,Object(d.c)("save_private_key")),m.a.createElement("p",null,m.a.createElement("div",{className:"input-group mb-3"},m.a.createElement("input",{type:"text",readOnly:!0,className:"form-control",value:a}),m.a.createElement("div",{className:"input-group-append"},m.a.createElement(A.CopyToClipboard,{text:a},m.a.createElement("button",{className:"btn btn-outline-secondary",type:"button"},m.a.createElement("i",{className:"fa fa-paste"})))))),m.a.createElement("p",null,m.a.createElement("button",{className:"btn btn-lg btn-block",onClick:this.printPaperWallet},m.a.createElement("i",{className:"fa fa-print mr-2"}),Object(d.c)("print_paper_wallet"))))),m.a.createElement("p",{className:"text-center"},m.a.createElement("b",null,Object(d.c)("do_not_lose_it"))," ",Object(d.c)("do_not_lose_it_message_0")," ",m.a.createElement("br",null),m.a.createElement("b",null,Object(d.c)("do_not_share_it"))," ",Object(d.c)("do_not_share_it_message_0")," ",m.a.createElement("br",null),m.a.createElement("b",null,Object(d.c)("make_a_backup"))," ",Object(d.c)("make_a_backup_message_0")," ",m.a.createElement("br",null)));case 3:return m.a.createElement(q,null,m.a.createElement("div",{className:"text-center"},m.a.createElement("p",{className:"font-weight-bold"},Object(d.c)("new_wallet_ready_message")),m.a.createElement(k.a,{className:"btn btn-success",to:"/account"},Object(d.c)("go_to_account_page"))))}}},{key:"render",value:function(){var e=this.state.step,t=a(1394);return m.a.createElement("main",{className:"container wallet-wizard header-overlap"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"text-center p-5 bg-dark"},m.a.createElement("img",{className:"wallet-wizard-logo",src:T,onError:function(e){e.target.onerror=null,e.target.src=t}})),m.a.createElement("div",{className:"card-body d-flex wizard-steps"},m.a.createElement(U,{completed:e>0,first:!0,icon:"fa fa-key"}),m.a.createElement(U,{completed:e>1,icon:"fa fa-save"}),m.a.createElement(U,{completed:e>2,icon:"fa fa-lock"})),m.a.createElement("div",{className:"card-body"},this.renderPage()),m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"row d-flex px-3"},e<3&&m.a.createElement("button",{disabled:!this.isStepValid(),className:"btn btn-dark btn-lg ml-auto",onClick:this.nextStep},Object(d.c)("next"))))))}}]),t}(m.a.PureComponent);var J={login:x.v};t.default=Object(o.connect)(function(e){return{account:e.app.account}},J)(P)}}]);