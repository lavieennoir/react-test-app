(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a.p+"static/media/bg-image.42a9f6c7.png"},123:function(e,t,a){e.exports=a(288)},128:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),l=a(15),c=a.n(l),s=(a(128),a(19)),o=a(20),d=a(22),u=a(21),m=a(23),h=a(25),p=a(115),g=a.n(p),b=a(116),f=a.n(b),E=a(17),y=a.n(E),C=a(117),v=a.n(C),S=a(45),k=a.n(S),w=a(38),O=a.n(w),j=a(53),P=a.n(j);!function(e){e.id="id",e.name="name",e.calories="calories",e.fat="fat",e.carbs="carbs",e.protein="protein"}(n||(n={}));var x,D=a(58),I=a(5),N=a.n(I),R=a(71),W=a.n(R),A=a(32),L=a.n(A),B=a(42),q=a.n(B),F=a(111),T=a.n(F),z=a(44),H=a.n(z),J=a(112),K=a.n(J),M=a(110),G=a.n(M),U=a(37),X=a.n(U),Z=a(24),$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleLocalSearch=function(e){a.setState({searchText:e.target.value}),a.props.handleSearch(e.target.value)},a.state={searchText:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.numSelected,a=e.classes,n=e.handleDeleteClick,r=e.handleAddClick;e.handleSearch;return i.a.createElement(W.a,{className:N()(a.root,Object(D.a)({},a.highlight,t>0))},t>0?i.a.createElement("div",{className:a.title},i.a.createElement(L.a,{color:"inherit",variant:"subtitle1"},t," selected")):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:a.title},i.a.createElement(L.a,{variant:"h6",id:"tableTitle"},"Deserts")),i.a.createElement("div",{className:a.search},i.a.createElement("div",{className:a.searchIcon},i.a.createElement(G.a,null)),i.a.createElement(X.a,{value:this.state.searchText,onChange:this.handleLocalSearch,placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput}}))),i.a.createElement("div",{className:a.spacer}),i.a.createElement("div",{className:a.actions},t>0?i.a.createElement(H.a,{title:"Delete"},i.a.createElement(q.a,{"aria-label":"Delete",onClick:function(e){return n()}},i.a.createElement(T.a,null))):i.a.createElement(H.a,{title:"Add item"},i.a.createElement(q.a,{"aria-label":"Add item",onClick:function(e){return r()}},i.a.createElement(K.a,null)))))}}]),t}(r.Component),Q=Object(h.withStyles)(function(e){return{root:{paddingRight:e.spacing.unit},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(Z.lighten)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},spacer:{flex:"1 1 100%"},actions:{color:e.palette.text.secondary},title:{flex:"0 0 auto"},search:Object(D.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Z.fade)(e.palette.primary.main,.15),"&:hover":{backgroundColor:Object(Z.fade)(e.palette.primary.main,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(D.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})}})($),V=a(113),Y=a.n(V),_=a(114),ee=a.n(_),te=[{id:n.name,numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:n.calories,numeric:!0,disablePadding:!1,label:"Calories"},{id:n.fat,numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:n.carbs,numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:n.protein,numeric:!0,disablePadding:!1,label:"Protein (g)"}],ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.onSelectAllClick,n=t.order,r=t.orderBy,l=t.numSelected,c=t.rowCount;return i.a.createElement(Y.a,null,i.a.createElement(k.a,null,i.a.createElement(y.a,{padding:"checkbox"},i.a.createElement(O.a,{indeterminate:l>0&&l<c,checked:l===c,onChange:a})),te.map(function(t){return i.a.createElement(y.a,{key:t.id,align:t.numeric?"right":"left",padding:t.disablePadding?"none":"default",sortDirection:r===t.id&&n},i.a.createElement(H.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},i.a.createElement(ee.a,{active:r===t.id,direction:n,onClick:e.createSortHandler(t.id)},t.label)))},this)))}}]),t}(r.Component);!function(e){e.desc="desc",e.asc="asc"}(x||(x={}));var ne,re=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).createFoodItem=function(e,t,n,r,i){return a.setState(function(e){return{counter:e.counter+1,lastItemId:null==e.lastItemId?0:e.lastItemId+1}}),{id:a.state.counter,name:e,calories:t,fat:n,carbs:r,protein:i,isDisplayed:!0}},a.deleteFoodItem=function(e){a.state,a.setState(function(t){return{data:t.data.filter(function(t){return t.id!==e}),counter:t.counter-1}})},a.handleDeleteClick=function(){a.state.selected.forEach(function(e){return a.deleteFoodItem(e)}),a.setState({selected:[]})},a.handleAddClick=function(){},a.handleSearch=function(e){var t=0;a.state.data.forEach(function(a){e&&!a.name.toLocaleLowerCase().startsWith(e.toLocaleLowerCase())?a.isDisplayed=!1:(a.isDisplayed=!0,t++)}),a.setState({counter:t})},a.desc=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0},a.tableSort=function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})},a.getSorting=function(e,t){return e===x.desc?function(e,n){return a.desc(e,n,t)}:function(e,n){return-a.desc(e,n,t)}},a.handleRequestSort=function(e,t){var n=t,r=x.desc;a.state.orderBy===t&&a.state.order===x.desc&&(r=x.asc),a.setState({order:r,orderBy:n})},a.handleSelectAllClick=function(e){e.target.checked?a.setState(function(e){return{selected:e.data.map(function(e){return e.id})}}):a.setState({selected:[]})},a.handleClick=function(e,t){var n=a.state.selected,r=n.indexOf(t),i=[];-1===r?i=i.concat(n,t):0===r?i=i.concat(n.slice(1)):r===n.length-1?i=i.concat(n.slice(0,-1)):r>0&&(i=i.concat(n.slice(0,r),n.slice(r+1))),a.setState({selected:i})},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:Number(e.target.value)})},a.isSelected=function(e){return-1!==a.state.selected.indexOf(e)},a.state={order:x.asc,orderBy:n.calories,selected:[],data:[{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,id:1,isDisplayed:!0},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,id:2,isDisplayed:!0},{name:"Eclair",calories:262,fat:16,carbs:24,protein:6,id:3,isDisplayed:!0},{name:"Frozen yoghurt",calories:159,fat:6,carbs:24,protein:4,id:4,isDisplayed:!0},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,id:5,isDisplayed:!0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,id:6,isDisplayed:!0},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,id:7,isDisplayed:!0},{name:"Jelly Bean",calories:375,fat:0,carbs:94,protein:0,id:8,isDisplayed:!0},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,id:9,isDisplayed:!0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,id:10,isDisplayed:!0},{name:"Marshmallow",calories:318,fat:0,carbs:81,protein:2,id:11,isDisplayed:!0},{name:"Nougat",calories:360,fat:19,carbs:9,protein:37,id:12,isDisplayed:!0},{name:"Oreo",calories:437,fat:18,carbs:63,protein:4,id:13,isDisplayed:!0}],page:0,rowsPerPage:5,counter:0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.data,r=a.order,l=a.orderBy,c=a.selected,s=a.rowsPerPage,o=a.page,d=s-Math.min(s,n.length-o*s);return i.a.createElement(P.a,{className:t.root},i.a.createElement(Q,{numSelected:c.length,handleDeleteClick:this.handleDeleteClick,handleAddClick:this.handleAddClick,handleSearch:this.handleSearch}),i.a.createElement("div",{className:t.tableWrapper},i.a.createElement(g.a,{className:t.table,"aria-labelledby":"tableTitle"},i.a.createElement(ae,{numSelected:c.length,order:r,orderBy:l,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:n.length}),i.a.createElement(f.a,null,this.tableSort(n,this.getSorting(r,l)).filter(function(e){return!0===e.isDisplayed}).slice(o*s,o*s+s).map(function(t){var a=e.isSelected(t.id);return i.a.createElement(k.a,{hover:!0,onClick:function(a){return e.handleClick(a,t.id)},role:"checkbox","aria-checked":a,tabIndex:-1,key:t.id,selected:a},i.a.createElement(y.a,{padding:"checkbox"},i.a.createElement(O.a,{checked:a})),i.a.createElement(y.a,{component:"th",scope:"row",padding:"none"},t.name),i.a.createElement(y.a,{align:"right"},t.calories),i.a.createElement(y.a,{align:"right"},t.fat),i.a.createElement(y.a,{align:"right"},t.carbs),i.a.createElement(y.a,{align:"right"},t.protein))}),d>0&&i.a.createElement(k.a,{style:{height:49*d}},i.a.createElement(y.a,{colSpan:6}))))),i.a.createElement(v.a,{rowsPerPageOptions:[5,10,25],component:"div",count:n.filter(function(e){return e.isDisplayed}).length,rowsPerPage:s,page:o,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(r.Component),ie=Object(h.withStyles)(function(e){return{root:{width:"calc(100% - "+6*e.spacing.unit+"px)",margin:3*e.spacing.unit},table:{minWidth:1020},tableWrapper:{overflowX:"auto"}}})(re),le=a(118),ce=a.n(le),se=a(119),oe=a.n(se),de=a(121),ue=a.n(de),me=a(18),he=a.n(me),pe=a(26),ge=a.n(pe),be=a(120),fe=a.n(be),Ee=a(57),ye=a.n(Ee),Ce=function(e){function t(e){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(ce.a,{className:e.card},i.a.createElement(oe.a,null,i.a.createElement(L.a,{variant:"h6",gutterBottom:!0},"Shipping address"),i.a.createElement(he.a,{container:!0,spacing:24},i.a.createElement(he.a,{item:!0,xs:12,sm:6},i.a.createElement(ge.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"fname"})),i.a.createElement(he.a,{item:!0,xs:12,sm:6},i.a.createElement(ge.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"lname"})),i.a.createElement(he.a,{item:!0,xs:12},i.a.createElement(ge.a,{required:!0,id:"address1",name:"address1",label:"Address line 1",fullWidth:!0,autoComplete:"billing address-line1"})),i.a.createElement(he.a,{item:!0,xs:12},i.a.createElement(ge.a,{id:"address2",name:"address2",label:"Address line 2",fullWidth:!0,autoComplete:"billing address-line2"})),i.a.createElement(he.a,{item:!0,xs:12,sm:6},i.a.createElement(ge.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"billing address-level2"})),i.a.createElement(he.a,{item:!0,xs:12,sm:6},i.a.createElement(ge.a,{id:"state",name:"state",label:"State/Province/Region",fullWidth:!0})),i.a.createElement(he.a,{item:!0,xs:12,sm:6},i.a.createElement(ge.a,{required:!0,id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"billing postal-code"})),i.a.createElement(he.a,{item:!0,xs:12,sm:6},i.a.createElement(ge.a,{required:!0,id:"country",name:"country",label:"Country",fullWidth:!0,autoComplete:"billing country"})),i.a.createElement(he.a,{item:!0,xs:12},i.a.createElement(fe.a,{control:i.a.createElement(O.a,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Use this address for payment details"})))),i.a.createElement(ue.a,{className:e.actions},i.a.createElement(ye.a,null,"Cancel"),i.a.createElement(ye.a,null,"Submit")))}}]),t}(r.Component),ve=Object(h.withStyles)(function(e){return{card:{maxWidth:800},actions:{display:"flex"}}})(Ce),Se=a(122),ke=a.n(Se);!function(e){e[e.List=0]="List",e[e.Create=1]="Create"}(ne||(ne={}));var we=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={currentPage:ne.List},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){switch(this.state.currentPage){case ne.Create:return i.a.createElement(ve,null);default:return i.a.createElement(ie,null)}}}]),t}(r.Component),Oe=Object(h.withStyles)(function(e){return{"@global body":{backgroundImage:"url(".concat(ke.a,")"),backgroundSize:"400px"}}})(we);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[123,1,2]]]);
//# sourceMappingURL=main.3a8acb8a.chunk.js.map