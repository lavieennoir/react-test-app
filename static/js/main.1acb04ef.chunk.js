(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){e.exports=a.p+"static/media/bg-image.42a9f6c7.png"},137:function(e,t,a){e.exports=a(297)},142:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var n,r,i=a(0),l=a.n(i),o=a(18),s=a.n(o),c=(a(142),a(22)),d=a(23),u=a(25),h=a(24),m=a(26),p=a(17),g=a(120),f=a(20),b=a(128),E=a.n(b),v=a(129),y=a.n(v),C=a(21),O=a.n(C),S=a(130),k=a.n(S),w=a(64),j=a.n(w),D=a(65),x=a.n(D),P=a(61),I=a.n(P),N=a(5),F=a.n(N),L=a(82),R=a.n(L),B=a(49),T=a.n(B),W=a(50),A=a.n(W),q=a(124),z=a.n(q),M=a(53),H=a.n(M),J=a(125),U=a.n(J),X=a(123),G=a.n(X),K=a(40),V=a.n(K),$=a(27),Q=a(63),Y=a.n(Q),Z=a(62),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleLocalSearch=function(e){a.setState({searchText:e.target.value}),a.props.handleSearch(e.target.value)},a.state={searchText:""},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.numSelected,a=e.classes,n=e.handleDeleteClick,r=e.handleAddClick,i=e.width,o=Object(Q.isWidthUp)("sm",i),s=l.a.createElement(l.a.Fragment,null);return t<1&&(s=l.a.createElement("div",{className:F()(a.search,o?a.searchUpSm:a.searchXs)},l.a.createElement("div",{className:a.searchIcon},l.a.createElement(G.a,null)),l.a.createElement(V.a,{value:this.state.searchText,onChange:this.handleLocalSearch,placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput}}))),l.a.createElement(l.a.Fragment,null,l.a.createElement(R.a,{className:F()(a.root,Object(f.a)({},a.highlight,t>0))},t>0?l.a.createElement("div",{className:a.title},l.a.createElement(T.a,{color:"inherit",variant:"subtitle1"},t," selected")):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:a.title},l.a.createElement(T.a,{variant:"h6",id:"tableTitle"},"Desserts")),o?s:""),l.a.createElement("div",{className:a.spacer}),l.a.createElement("div",{className:a.actions},t>0?l.a.createElement(H.a,{title:"Delete"},l.a.createElement(A.a,{"aria-label":"Delete",onClick:function(e){return n()}},l.a.createElement(z.a,null))):l.a.createElement(H.a,{title:"Add item",disableFocusListener:!0},l.a.createElement(A.a,{"aria-label":"Add item",color:"primary",onClick:function(e){return r()}},l.a.createElement(U.a,null))))),o?"":s)}}]),t}(i.Component),ee=Object(Z.a)(Y()(),Object(p.withStyles)(function(e){return Object(p.createStyles)({root:{paddingLeft:3*e.spacing.unit,paddingRight:e.spacing.unit},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object($.lighten)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},spacer:{flex:"1 1 100%"},actions:{color:e.palette.text.secondary},title:{flex:"0 0 auto"},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object($.fade)(e.palette.primary.main,.15),"&:hover":{backgroundColor:Object($.fade)(e.palette.primary.main,.25)}},searchUpSm:{marginRight:3*e.spacing.unit,marginLeft:3*e.spacing.unit,width:"100%",minWidth:"320px"},searchXs:{marginRight:3*e.spacing.unit,marginLeft:3*e.spacing.unit,marginBottom:3*e.spacing.unit},searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(f.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})})}))(_),te=a(126),ae=a.n(te),ne=a(127),re=a.n(ne),ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a.rows=[{id:n.name,numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:n.calories,numeric:!0,disablePadding:!1,label:"Calories"},{id:n.fat,numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:n.carbs,numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:n.protein,numeric:!0,disablePadding:!1,label:"Protein (g)"}],a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.onSelectAllClick,n=t.order,r=t.orderBy,i=t.numSelected,o=t.rowCount;return l.a.createElement(ae.a,null,l.a.createElement(j.a,null,l.a.createElement(O.a,{padding:"checkbox"},l.a.createElement(x.a,{indeterminate:i>0&&i<o,checked:i===o&&i>0,onChange:a})),this.rows.map(function(t){return l.a.createElement(O.a,{key:t.id,align:t.numeric?"right":"left",padding:t.disablePadding?"none":"default",sortDirection:r===t.id&&n},l.a.createElement(H.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},l.a.createElement(re.a,{active:r===t.id,direction:n,onClick:e.createSortHandler(t.id)},t.label)))},this)))}}]),t}(i.Component),le=a(43),oe=a.n(le);!function(e){e.id="id",e.name="name",e.calories="calories",e.fat="fat",e.carbs="carbs",e.protein="protein"}(n||(n={})),function(e){e.desc="desc",e.asc="asc"}(r||(r={}));var se=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).deleteFoodItem=function(e){a.state,a.setState(function(t){return{data:t.data.filter(function(t){return t.id!==e}),counter:t.counter-1}})},a.handleDeleteClick=function(){a.state.selected.forEach(function(e){return a.deleteFoodItem(e)}),a.setState({selected:[]})},a.handleSearch=function(e){var t=0;a.state.data.forEach(function(a){e&&!a.name.toLocaleLowerCase().startsWith(e.toLocaleLowerCase())?a.isDisplayed=!1:(a.isDisplayed=!0,t++)}),a.setState({counter:t})},a.desc=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0},a.tableSort=function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})},a.getSorting=function(e,t){return e===r.desc?function(e,n){return a.desc(e,n,t)}:function(e,n){return-a.desc(e,n,t)}},a.handleRequestSort=function(e,t){var n=t,i=r.desc;a.state.orderBy===t&&a.state.order===r.desc&&(i=r.asc),a.setState({order:i,orderBy:n})},a.handleSelectAllClick=function(e){e.target.checked?a.setState(function(e){return{selected:e.data.filter(function(e){return!0===e.isDisplayed}).map(function(e){return e.id})}}):a.setState({selected:[]})},a.handleClick=function(e,t){var n=a.state.selected,r=n.indexOf(t),i=[];-1===r?i=i.concat(n,t):0===r?i=i.concat(n.slice(1)):r===n.length-1?i=i.concat(n.slice(0,-1)):r>0&&(i=i.concat(n.slice(0,r),n.slice(r+1))),a.setState({selected:i})},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:Number(e.target.value)})},a.isSelected=function(e){return-1!==a.state.selected.indexOf(e)};var i=[{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,id:1,isDisplayed:!0},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,id:2,isDisplayed:!0},{name:"Eclair",calories:262,fat:16,carbs:24,protein:6,id:3,isDisplayed:!0},{name:"Frozen yoghurt",calories:159,fat:6,carbs:24,protein:4,id:4,isDisplayed:!0},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,id:5,isDisplayed:!0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,id:6,isDisplayed:!0},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,id:7,isDisplayed:!0},{name:"Jelly Bean",calories:375,fat:0,carbs:94,protein:0,id:8,isDisplayed:!0},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,id:9,isDisplayed:!0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,id:10,isDisplayed:!0},{name:"Marshmallow",calories:318,fat:0,carbs:81,protein:2,id:11,isDisplayed:!0},{name:"Nougat",calories:360,fat:19,carbs:9,protein:37,id:12,isDisplayed:!0},{name:"Oreo",calories:437,fat:18,carbs:63,protein:4,id:13,isDisplayed:!0}];return a.state={order:r.asc,orderBy:n.calories,selected:[],data:i,page:0,rowsPerPage:5,counter:i.length},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"createFoodItem",value:function(e){var t=this.state,a=t.data,n=t.counter;if(a.filter(function(t){return t.id===e.id}).length>0){for(var r=0;r<a.length;r++)if(a[r].id===e.id){a[r]=Object(g.a)({},a[r],e);break}}else e.id=n+1,e.isDisplayed=!0,a.push(e);this.setState(function(e){return{counter:e.counter+1,lastItemId:null==e.lastItemId?0:e.lastItemId+1,data:a}})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.data,r=a.order,i=a.orderBy,o=a.selected,s=a.rowsPerPage,c=a.page;return l.a.createElement(I.a,{className:t.root},l.a.createElement(ee,{numSelected:o.length,handleDeleteClick:this.handleDeleteClick,handleAddClick:this.props.handleDialogOpen,handleSearch:this.handleSearch}),l.a.createElement("div",{className:t.tableWrapper},l.a.createElement(E.a,{className:t.table,"aria-labelledby":"tableTitle"},l.a.createElement(ie,{numSelected:o.length,order:r,orderBy:i,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:n.length}),l.a.createElement(y.a,null,this.tableSort(n,this.getSorting(r,i)).filter(function(e){return!0===e.isDisplayed}).slice(c*s,c*s+s).map(function(a){var n=e.isSelected(a.id);return l.a.createElement(j.a,{hover:!0,onClick:function(t){return e.handleClick(t,a.id)},role:"checkbox","aria-checked":n,tabIndex:-1,key:a.id,selected:n},l.a.createElement(O.a,{padding:"checkbox"},l.a.createElement(x.a,{checked:n})),l.a.createElement(O.a,{component:"th",scope:"row",padding:"none"},l.a.createElement(oe.a,{color:"primary",onClick:function(t){e.props.handleItemEdit(a),t.stopPropagation()},className:t.rowButton},a.name)),l.a.createElement(O.a,{align:"right"},a.calories),l.a.createElement(O.a,{align:"right"},a.fat),l.a.createElement(O.a,{align:"right"},a.carbs),l.a.createElement(O.a,{align:"right"},a.protein))})))),l.a.createElement(k.a,{rowsPerPageOptions:[5,10,25],component:"div",count:n.filter(function(e){return e.isDisplayed}).length,rowsPerPage:s,page:c,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(i.Component),ce=Object(p.withStyles)(function(e){return Object(p.createStyles)({root:Object(f.a)({width:"100%",display:"flex",flexDirection:"column",height:"100vh"},e.breakpoints.up("sm"),{width:"calc(100% - "+6*e.spacing.unit+"px)",margin:3*e.spacing.unit,display:"block",flexDirection:"unset",height:"initial"}),table:{minWidth:1020},tableWrapper:Object(f.a)({overflowX:"auto"},e.breakpoints.down("sm"),{flexGrow:1}),rowButton:{textTransform:"none",justifyContent:"start"}})})(se),de=a(35),ue=a.n(de),he=a(44),me=a.n(he),pe=a(133),ge=a.n(pe),fe=a(132),be=a.n(fe),Ee=a(131),ve=a.n(Ee),ye=a(34),Ce=a.n(ye),Oe=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).validate=function(e,t){if(t===n.name)return!!e;var a=Number(e);return""!==e&&!isNaN(a)&&a>=0},a.handleChange=function(e){return function(t){var n,r=t.target.value,i=a.state.hasError,l=i.indexOf(e),o=a.validate(r,e);o&&-1!==l?i.splice(l,1):o||-1!==l||i.push(e),a.setState((n={},Object(f.a)(n,e,t.target.value),Object(f.a)(n,"hasError",i),n))}},a.hasError=function(e){return-1!==a.state.hasError.indexOf(e)},a.isValid=function(){var e=a.state;return-1===[e.name,e.calories,e.fat,e.carbs,e.protein].indexOf(null)&&0===a.state.hasError.length},a.getFoodItemState=function(){var e=a.state,t=e.name,n=e.calories,r=e.fat,i=e.carbs,l=e.protein,o=a.props.editingItem;return{id:o?o.id:-1,name:null===t?"":t,calories:null===n?0:n,fat:null===r?0:r,carbs:null===i?0:i,protein:null===l?0:l}};var r=e.editingItem;return a.state=r?{name:r.name,calories:r.calories,fat:r.fat,carbs:r.carbs,protein:r.protein,hasError:[]}:{name:null,calories:null,fat:null,carbs:null,protein:null,hasError:[]},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,r=t.editingItem;return l.a.createElement(l.a.Fragment,null,l.a.createElement(ve.a,{id:"form-dialog-title"},r?"Edit selected dessert":"Add new dessert to the list"),l.a.createElement(be.a,null,l.a.createElement(ue.a,{container:!0,spacing:24},l.a.createElement(ue.a,{item:!0,xs:12},l.a.createElement(me.a,{autoFocus:!0,required:!0,error:this.hasError(n.name),id:"name",label:"Name",type:"text",value:null!==this.state.name?this.state.name:"",onChange:this.handleChange(n.name),fullWidth:!0}),l.a.createElement(Ce.a,{className:this.hasError(n.name)?a.formLabel:a.hidden,error:this.hasError(n.name)},"Field ",n.name," is not valid!!")),l.a.createElement(ue.a,{item:!0,xs:12,sm:6},l.a.createElement(me.a,{required:!0,error:this.hasError(n.calories),id:"callories",label:"Callories",type:"number",value:null!==this.state.calories?this.state.calories:"",onChange:this.handleChange(n.calories),fullWidth:!0}),l.a.createElement(Ce.a,{className:this.hasError(n.calories)?a.formLabel:a.hidden,error:this.hasError(n.calories)},"Field ",n.calories," is not valid!!")),l.a.createElement(ue.a,{item:!0,xs:12,sm:6},l.a.createElement(me.a,{required:!0,error:this.hasError(n.fat),id:"fat",label:"Fat (g)",type:"number",value:null!==this.state.fat?this.state.fat:"",onChange:this.handleChange(n.fat),fullWidth:!0}),l.a.createElement(Ce.a,{className:this.hasError(n.fat)?a.formLabel:a.hidden,error:this.hasError(n.fat)},"Field ",n.fat," is not valid!!")),l.a.createElement(ue.a,{item:!0,xs:12,sm:6},l.a.createElement(me.a,{required:!0,error:this.hasError(n.carbs),id:"carbs",label:"Carbs (g)",type:"number",value:null!==this.state.carbs?this.state.carbs:"",onChange:this.handleChange(n.carbs),fullWidth:!0}),l.a.createElement(Ce.a,{className:this.hasError(n.carbs)?a.formLabel:a.hidden,error:this.hasError(n.carbs)},"Field ",n.carbs," is not valid!!")),l.a.createElement(ue.a,{item:!0,xs:12,sm:6},l.a.createElement(me.a,{required:!0,error:this.hasError(n.protein),id:"protein",label:"Protein (g)",type:"number",value:null!==this.state.protein?this.state.protein:"",onChange:this.handleChange(n.protein),inputProps:{min:"0",step:"0.1"},fullWidth:!0}),l.a.createElement(Ce.a,{className:this.hasError(n.protein)?a.formLabel:a.hidden,error:this.hasError(n.protein)},"Field ",n.protein," is not valid!!")))),l.a.createElement(ge.a,null,l.a.createElement(oe.a,{onClick:function(t){return e.props.handleDialogClose(!1)},color:"primary"},"Cancel"),l.a.createElement(oe.a,{disabled:!this.isValid(),onClick:function(t){return e.props.handleDialogClose(!0,e.getFoodItemState())},color:"primary"},"Submit")))}}]),t}(i.Component),Se=Object(p.withStyles)(function(e){return Object(p.createStyles)({hidden:{display:"none"},formLabel:{fontSize:.8*e.typography.fontSize}})})(Oe),ke=a(135),we=a.n(ke),je=a(134),De=a.n(je),xe=a(136),Pe=a.n(xe),Ie=Object(p.createMuiTheme)({overrides:{MuiTablePagination:{toolbar:{height:"initial",flexFlow:"row wrap"}}}}),Ne=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).foodTable=void 0,a.handleDialogOpen=function(){a.setState({isDialogOpen:!0})},a.handleItemEdit=function(e){a.setState({editingItem:e,isDialogOpen:!0})},a.handleDialogClose=function(e,t){a.setState({isDialogOpen:!1,editingItem:void 0}),e&&t&&a.foodTable.current&&a.foodTable.current.createFoodItem(t)},a.state={isDialogOpen:!1},a.foodTable=l.a.createRef(),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.fullScreen;return l.a.createElement(p.MuiThemeProvider,{theme:Ie},l.a.createElement(ce,{innerRef:this.foodTable,handleDialogOpen:this.handleDialogOpen,handleItemEdit:this.handleItemEdit}),l.a.createElement(we.a,{fullScreen:t,open:this.state.isDialogOpen,onClose:function(t){return e.handleDialogClose(!1)},"aria-labelledby":"form-dialog-title"},l.a.createElement(Se,{handleDialogClose:this.handleDialogClose,editingItem:this.state.editingItem})))}}]),t}(i.Component),Fe=Object(Z.a)(Pe()({breakpoint:"xs"}),Object(p.withStyles)(function(e){return{"@global body":{backgroundImage:"url(".concat(De.a,")"),backgroundAttachment:"fixed",backgroundSize:"400px"}}}))(Ne);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,1,2]]]);
//# sourceMappingURL=main.1acb04ef.chunk.js.map