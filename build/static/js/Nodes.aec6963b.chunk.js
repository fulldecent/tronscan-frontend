(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1484:function(e,t,a){"use strict";t.a={pieChart:{color:["#98C8EB","#1A3964","#2A4994","#3665B0","#205097","#3A69C4"],title:{text:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} %"},series:[{name:"",type:"pie",radius:["45%","70%"],center:["50%","60%"],data:[],label:{normal:{show:!0,formatter:"{c}%"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}}}]},representPieChart:{color:["#424246","#96EE80","#F4A45D","#8085ED","#F25C81","#E5D355","#348188","#F25C81","#8FCACE","#7CB5EC"],title:{text:"",subtext:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},legend:{type:"scroll",show:!1,orient:"vertical",left:"right",top:35,selectedMode:"false",data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","60%"],data:[],label:{normal:{show:!0,formatter:"{b}"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}}}]},supplyTypesTRXPieChart:{color:["#c84a45","#e7afad","#e19b98","#da8683"],title:{text:"",subtext:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},legend:{type:"plain",show:!1,orient:"horizontal",bottom:0,left:"center",selectedMode:"false",itemGap:20,data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","50%"],data:[],label:{normal:{show:!0,formatter:"{b}"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:10,length2:5},emphasis:{show:!0}}}]},lineChart:{title:{text:"",x:"center",link:"",target:"self"},grid:{left:"5%",right:"7%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:[],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:[{data:[],type:"line"}]},ringPieChart:{title:{text:"",x:"center"},color:["#F25C81","#7CB5EC","#F4A45D","#8085ED","#8FCACE","#424246","#348188","#F25C81","#E5D355","#96EE80"],legend:{type:"scroll",orient:"vertical",x:"right",selected:{"Bancor Network":!1,Gatecoin:!1,BitFlip:!1,Braziliex:!1,Cobinhood:!1,CoinExchange:!1,CoinFalcon:!1,Cryptomate:!1,IDEX:!1,"LiteBit.eu":!1,"Stocks.Exchange":!1,Tidex:!1}},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},series:[{name:"",type:"pie",selectedMode:"single",radius:[0,"30%"],center:["50%","50%"],label:{normal:{position:"inner",show:!1}},labelLine:{normal:{show:!1}},data:[]},{name:"",type:"pie",radius:["40%","55%"],center:["50%","50%"],data:[]}]},multiLineChart:{title:{text:"",x:"center"},legend:{type:"scroll",data:[]},grid:{left:"3%",right:"3%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[]},mapChart:{color:["gold"],series:[{name:"",type:"map",roam:!0,hoverable:!1,mapType:"none",itemStyle:{normal:{borderColor:"rgba(100,149,237,1)",borderWidth:.5,areaStyle:{color:"#1b1b1b"}}},data:[],geoCoord:{}},{name:"",type:"map",mapType:"none",data:[],markPoint:{symbol:"emptyCircle",symbolSize:function(e){return 1+e/10},effect:{show:!0,shadowBlur:0},itemStyle:{normal:{label:{show:!1}},emphasis:{label:{position:"top"}}},data:[]}}]},barChart:{title:{text:"Ranking"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:150},xAxis:{type:"value",name:"",axisLabel:{formatter:"{value}"}},yAxis:{type:"category",inverse:!0,data:[]},series:[{name:"",type:"bar",data:[],label:{normal:{show:!0,textBorderWidth:0}},itemStyle:{}}]},overviewChart:{title:{text:"",x:"center",link:"",target:"self",padding:[0,0,10,0]},tooltip:{trigger:"axis",axisPointer:{animation:!1}},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},axisPointer:{link:{xAxisIndex:"all"}},dataZoom:[{start:0,end:100},{type:"inside"}],grid:[{top:80,left:"10%",right:80,containLabel:!0}],xAxis:[{type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:[]}],yAxis:[{name:"",nameGap:20,type:"value"}],series:[{name:"",type:"line",markPoint:{data:[{type:"max",name:"max"},{type:"min",name:"min"}]},data:[]}]},overviewHighChart:{chart:{zoomType:"",spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0,resetZoomButton:{position:{align:"right",verticalAlign:"top",x:-55,y:0},relativeTo:"chart",theme:{fill:"white",stroke:"silver",r:0,states:{hover:{fill:"#eeeeee",style:{color:"red"}}}}}},title:{text:"",style:{color:"#c23631",fontSize:"16px"}},credits:{enabled:!1},colors:["#c84a45","#e7afad"],exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},subtitle:{text:""},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},yAxis:{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#999999"}}},legend:{align:"center",verticalAlign:"bottom",symbolRadius:0,enabled:!1},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ECC2C1"],[1,"#ffffff"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:2}},threshold:null,column:{pointPadding:.1,borderWidth:0}}},series:[{type:"area",name:"",data:[],marker:{enabled:!0}}]},HomeHighChart:{chart:{zoomType:"",spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0,resetZoomButton:{position:{align:"right",verticalAlign:"top",x:-55,y:0},relativeTo:"chart",theme:{fill:"white",stroke:"silver",r:0,states:{hover:{fill:"#eeeeee",style:{color:"red"}}}}}},title:{text:"",style:{color:"#c23631",fontSize:"16px"}},credits:{enabled:!1},colors:["#c84a45","#e7afad"],exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},subtitle:{text:""},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},yAxis:[{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#c23631"}},gridLineWidth:0},{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#333333"}},opposite:!0,gridLineWidth:0}],legend:{align:"center",verticalAlign:"bottom",floating:!1,backgroundColor:"#FFFFFF"},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ECC2C1"],[1,"#ffffff"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:2}},threshold:null,column:{pointPadding:.1,borderWidth:0}}},series:[{type:"spline",name:"",data:[],color:"#c23631",marker:{enabled:!1,radius:1}},{type:"spline",name:"",data:[],color:"#FFAA38",marker:{enabled:!1,radius:1},visible:!1},{type:"spline",name:"",data:[],color:"#FF8A84",yAxis:1,marker:{enabled:!1,radius:1},visible:!1}]},ringPieHighChart3D:{chart:{type:"pie",options3d:{enabled:!0,alpha:45},spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0},title:{text:""},subtitle:{text:""},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},credits:{enabled:!1},colors:["#424246","#96EE80","#F4A45D","#8085ED","#F25C81","#E5D355","#348188","#F25C81","#8FCACE","#7CB5EC"],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",showInLegend:!0,innerSize:100,depth:60}},legend:{itemStyle:{fontWeight:"normal",color:"#666666"}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},series:[{name:"",data:[]}]},supplyPieHighChart:{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:""},credits:{enabled:!1},exporting:{enabled:!0,sourceWidth:562,sourceHeight:400,filename:""},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},colors:["#c84a45","#e7afad"],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0},showInLegend:!0}},series:[{name:"",colorByPoint:!0,data:[]}]},supplyAreaHighChart:{chart:{type:"area"},title:{text:""},subtitle:{text:""},credits:{enabled:!1},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]},tickmarkPlacement:"on",title:{enabled:!1}},yAxis:{title:{text:""},labels:{style:{color:"#999999"}}},tooltip:{shared:!0,valueSuffix:"%"},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},plotOptions:{area:{stacking:"normal",lineColor:"#666666",lineWidth:1,marker:{lineWidth:1,lineColor:"#666666",radius:1}}},series:[]},OverallFreezingRateChart:{chart:{type:"",zoomType:"xy"},title:{text:""},subtitle:{text:""},credits:{enabled:!1},legend:{enabled:!0,align:"center"},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]},title:{enabled:!1}},yAxis:[],tooltip:{},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},plotOptions:{},series:[]},HoldTrxAccountChart:{chart:{type:"",zoomType:"xy"},title:{text:""},subtitle:{text:""},credits:{enabled:!1},legend:{enabled:!0,align:"center"},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]},title:{enabled:!1}},yAxis:[],tooltip:{},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},plotOptions:{},series:[]},activeAccountChartConfig:{chart:{zoomType:"",spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0,resetZoomButton:{position:{align:"right",verticalAlign:"top",x:-55,y:0},relativeTo:"chart",theme:{fill:"white",stroke:"silver",r:0,states:{hover:{fill:"#eeeeee",style:{color:"red"}}}}}},title:{text:"",style:{color:"#c23631",fontSize:"16px"}},credits:{enabled:!1},colors:["#c84a45","#e7afad"],exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},rangeSelector:{enabled:!1},subtitle:{text:""},navigator:{maskFill:"rgba(198,72,68, 0.3)",xAxis:{labels:{format:"{value:%Y-%m-%d}"}}},xAxis:{ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},yAxis:{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#999999"}}},legend:{enabled:!1},plotOptions:{},series:[{type:"line",name:"",data:[],zoneAxis:"y",zones:[{value:200},{color:"#000"}],marker:{enabled:!0}}]}}},3510:function(e,t,a){"use strict";a.r(t);var i=a(1371),o=a.n(i),l=a(2),r=a.n(l),n=a(5),s=a(80),c=a.n(s),d=a(1354),m=a.n(d),p=a(78),h=a(16),u=a(15),g=a(21),b=a(20),y=a(0),x=a.n(y),f=a(10),v=a.n(f),C=a(28),w=a(253),E=a(3),k=a(90),H=a(14),L=Object(H.a)(function(){return Promise.all([a.e(81),a.e(42)]).then(a.bind(null,3493))},function(){return x.a.createElement("div",{className:"card"},x.a.createElement(k.b,null,Object(E.c)("loading_map")))}),A=a(387),M=a(11),S=a(1484),F=a(1390),N=a.n(F),O=(a(1568),a(1498),a(1557),function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var i;Object(h.a)(this,a),i=t.call(this,e);var o=("_"+Math.random()).replace(".","_");return i.state={barId:"bar"+o},i}return Object(u.a)(a,[{key:"initBar",value:function(e){var t=this.props,a=(t.intl,t.data),i=N.a.getInstanceByDom(document.getElementById(e));void 0===i&&(i=N.a.init(document.getElementById(e))),S.a.barChart.title.text="",S.a.barChart.yAxis.data=[],S.a.barChart.series[0].data=[],S.a.barChart.series[0].itemStyle={normal:{color:new N.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#ed213a"},{offset:1,color:"#93291e"}])},emphasis:{color:new N.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0052d4"},{offset:1,color:"#0052d4"}])}};var o=[],l={name:"Others",total:0};a.map(function(e){10<e.total&&null!==e.name?o.push(e):l.total=l.total+e.total}),o.push(l),o&&0<o.length&&o.map(function(e){S.a.barChart.yAxis.data.push(e.name),S.a.barChart.series[0].data.push(e.total)}),o&&0===o.length&&(S.a.barChart.title.text="No data"),i.setOption(S.a.barChart)}},{key:"componentDidMount",value:function(){this.initBar(this.state.barId)}},{key:"componentDidUpdate",value:function(){this.initBar(this.state.barId)}},{key:"render",value:function(){return x.a.createElement("div",null,x.a.createElement("div",{id:this.state.barId,style:this.props.style}))}}]),a}(x.a.Component)),B=Object(C.connect)(function(e){return{}},{},null,{pure:!1})(Object(M.h)(O)),T=a(4),Y=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(h.a)(this,a),(i=t.call(this,e)).buildNodeList=function(){var e,t=i.state.nodes,a={},o=Object(p.a)(t);try{for(o.s();!(e=o.n()).done;){var l=e.value;a[l.country]||(a[l.country]={name:l.country,nodes:[],total:0}),a[l.country].nodes.push(l),a[l.country].total++}}catch(e){o.e(e)}finally{o.f()}var r=Object.values(a);return r=m()(r,function(e){return e.total}),(r=c()(r,function(e){return""!==e.name})).reverse(),r},i.setCountryHover=function(e){i.setState({activeCountry:e})},i.loadNodes=Object(n.a)(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(T.f,"/api/nodemap"));case 2:t=e.sent,a=t.data,i.setState({nodes:a.data,syncStatus:null});case 5:case"end":return e.stop()}},e)})),i.state={showAllCountries:!1,size:5,nodes:[],syncStatus:"waiting",show3D:"3d"===Object(A.a)(e.location,"mode")},i}return Object(u.a)(a,[{key:"renderList",value:function(){var e=this.state,t=e.showAllCountries,a=e.size,i=this.state.nodes,o=this.buildNodeList();return t||(o=o.slice(0,a)),0===i.length?x.a.createElement("div",{className:"d-flex justify-content-center p-4"},x.a.createElement(k.b,null)):x.a.createElement("ul",{className:"list-group list-group-flush"},o.map(function(e,t){return x.a.createElement("li",{key:e.name,className:"list-group-item d-flex"},e.name,x.a.createElement("span",{className:"ml-auto"},e.total))}))}},{key:"componentDidMount",value:function(){this.loadNodes()}},{key:"render",value:function(){var e=this.state,t=e.nodes,a=e.syncStatus,i=this.buildNodeList();return"waiting_for_first_sync"===a?x.a.createElement("main",{className:"container header-overlap"},x.a.createElement("div",{className:"card"},x.a.createElement(k.b,null,Object(E.c)("first_node_sync_message")))):0===t.length?x.a.createElement("main",{className:"container header-overlap"},x.a.createElement("div",{className:"card"},x.a.createElement(k.b,null,Object(E.c)("loading_nodes")))):x.a.createElement("main",{className:"container header-overlap _nodemap"},x.a.createElement("div",{className:"row"},x.a.createElement("div",{className:"col-md-6"},x.a.createElement("div",{className:"card h-100 text-left widget-icon bg-line_red bg-image_node"},x.a.createElement("div",{className:"card-body _node",style:{marginLeft:"50px"}},x.a.createElement("h3",{className:"text-secondary"},t.length),Object(E.c)("nodes")))),x.a.createElement("div",{className:"col-md-6 mt-3 mt-md-0"},x.a.createElement("div",{className:"card h-100 text-left widget-icon bg-line_green bg-image_nodest"},x.a.createElement("div",{className:"card-body _node",style:{marginLeft:"50px"}},0<i.length?x.a.createElement("h3",{className:"text-primary"},o()(i,function(e){return e.total}).name):x.a.createElement("h3",{className:"text-primary"},"Unknown"),Object(E.c)("most_nodes"))))),x.a.createElement("div",{className:"row mt-3"},x.a.createElement("div",{className:"col-md-12"},x.a.createElement("div",{className:"card",style:{padding:"20px"}},x.a.createElement(L,{nodes:t,countries:i})))),x.a.createElement("div",{className:"row mt-3"},x.a.createElement("div",{className:"col-md-12"},x.a.createElement("div",{className:"card"},x.a.createElement("div",{className:"card-body _node"},x.a.createElement("h5",{className:"card-title text-center"},Object(E.c)("nodes_ranking"),x.a.createElement("br",null),Object(E.c)("split_by_country")),x.a.createElement("div",{style:T.B?{height:500}:{height:250}},null===i?x.a.createElement(k.b,null):x.a.createElement(B,{style:T.B?{height:500}:{height:250},data:i})))))))}}]),a}(y.Component),j={loadNodes:w.d};t.default=Object(C.connect)(function(e){return{}},j)(Y)}}]);