(this.webpackJsonpDelphiComponents=this.webpackJsonpDelphiComponents||[]).push([[0],[,,function(t,e,n){t.exports={container:"DatePicker_container__39YqJ",header:"DatePicker_header__VcpTg",titleButton:"DatePicker_titleButton__vF326",titleText:"DatePicker_titleText__3j4a4",body:"DatePicker_body__34n3e",bodyLine:"DatePicker_bodyLine__1jPSH",lineElement:"DatePicker_lineElement__pksM7",lineElementToday:"DatePicker_lineElementToday__3qZ_H",lineElementSelected:"DatePicker_lineElementSelected__1vMQi",footer:"DatePicker_footer__3CCSF",currentDateTitle:"DatePicker_currentDateTitle__FjYSB",monthBoardButtons:"DatePicker_monthBoardButtons__2dhoI",monthBoardButton:"DatePicker_monthBoardButton__H5FKT"}},,,,function(t,e,n){t.exports={block:"ShowComponent_block__11O8O",name:"ShowComponent_name__9rbjd",body:"ShowComponent_body__2AvZ6"}},function(t,e,n){t.exports={container:"DateEdit_container__1uTvE",containerBorder:"DateEdit_containerBorder__lphe9",inputDate:"DateEdit_inputDate__1-NEt"}},,function(t,e,n){t.exports={block:"ShowResult_block__1z30j",resultText:"ShowResult_resultText__2yBac"}},function(t,e,n){t.exports={block:"BitBtn_block__3EK9q",image:"BitBtn_image__13fCA"}},,function(t,e,n){t.exports={textarea:"Memo_textarea__2YXkc"}},function(t,e,n){t.exports={block:"GroupBox_block__2HqhI"}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(11),i=n.n(o),a=(n(18),n(3)),r=(n(19),n(6)),s=n.n(r),l=n(0),u=function(t){return Object(l.jsxs)("div",{className:s.a.block,children:[Object(l.jsx)("div",{className:s.a.name,children:t.name}),Object(l.jsx)("div",{className:s.a.body,children:t.children})]})},j=n(9),d=n.n(j),h=function(t){return Object(l.jsxs)("div",{className:d.a.block,children:[Object(l.jsx)("b",{children:"Result: "}),Object(l.jsx)("span",{className:d.a.resultText,children:t.result})]})},b=function(t){return Object(l.jsx)("span",{style:t.style,children:t.caption})},x=n(4),O=n(5),g=function(t){var e=t.title,n=void 0===e?"":e,c=t.textAlignmentRight,o=void 0!==c&&c,i=t.text,a=(t.value,Object(O.a)(t,["title","textAlignmentRight","text","value"]));return Object(l.jsxs)("label",{children:[!o&&Object(l.jsx)("span",{children:n}),Object(l.jsx)("input",Object(x.a)({value:i},a)),o&&Object(l.jsx)("span",{children:n})]})},m=function(t){var e=t.textAlignmentRight,n=t.caption,c=(t.type,Object(O.a)(t,["textAlignmentRight","caption","type"]));return Object(l.jsxs)("label",{children:[!e&&n,Object(l.jsx)("input",Object(x.a)({type:"checkbox"},c)),e&&n]})},p=n(10),v=n.n(p),D=function(t){var e=t.caption,n=t.image,c=t.imageWidth,o=void 0===c?20:c,i=t.imageHeight,a=void 0===i?20:i,r=Object(O.a)(t,["caption","image","imageWidth","imageHeight"]),s={width:o,height:a};return Object(l.jsx)("button",Object(x.a)(Object(x.a)({},r),{},{children:Object(l.jsxs)("div",{className:v.a.block,children:[n&&Object(l.jsx)("img",{className:v.a.image,style:s,src:n,alt:"BitBtn"}),e]})}))},B=n(12),f=n.n(B),_=function(t){var e=t.lines,n=void 0===e?[]:e,c=(t.value,Object(O.a)(t,["lines","value"]));return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("textarea",Object(x.a)({className:f.a.textarea,value:n.join("\n")},c))})},k=function(t){var e=t.items,n=void 0===e?[]:e,o=t.itemIndex,i=void 0===o?0:o,r=t.width,s=void 0===r?0:r,u=t.style,j=void 0===u?{}:u,d=t.onMouseDown,h=t.onKeyDown,b=t.onBlur,g=t.onChange,m=Object(O.a)(t,["items","itemIndex","width","style","onMouseDown","onKeyDown","onBlur","onChange"]),p=Object(c.useState)(i),v=Object(a.a)(p,2),D=v[0],B=v[1],f=Object(c.useState)(i>0),_=Object(a.a)(f,2),k=_[0],y=_[1],w={minWidth:s},C=function(){D<0?B(0):!k&&B(-1)};return Object(l.jsx)("select",Object(x.a)(Object(x.a)({style:Object(x.a)(Object(x.a)({},j),w),value:D,onMouseDown:function(t){C(),d&&d(t)},onKeyDown:function(t){var e=t.code;"Enter"!==e&&"Space"!==e||C(),h&&h(t)},onBlur:function(t){!k&&B(-1),b&&b(t)},onChange:function(t){y(!0),B(+t.currentTarget.value),g&&g(t)}},m),{},{children:D>=0&&n.map((function(t,e){return Object(l.jsx)("option",{value:e,children:t},e)}))}))},y=n(13),w=n.n(y),C=function(t){t.children;var e=Object(O.a)(t,["children"]);return Object(l.jsx)("div",Object(x.a)(Object(x.a)({className:w.a.block},e),{},{children:t.children}))},M=n(2),S=n.n(M),T=["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u0412\u0441"],N=function(t){var e=t.map((function(t,e){return Object(l.jsx)("div",{children:t},e)}));return Object(l.jsx)("div",{className:S.a.bodyLine,children:e})},E=function(t){var e=t.initDate,n=void 0===e?new Date(Date.now()):e,o=t.previousMonthButton,i=void 0===o||o,r=t.nextMonthButton,s=void 0===r||r,u=t.showFooterContent,j=void 0===u||u,d=t.showFooterButtons,h=void 0!==d&&d,b=new Date(Date.now()),x=Object(c.useState)(n),O=Object(a.a)(x,2),g=O[0],m=O[1],p=Object(c.useState)((function(){var t=g.getDay();return t&&g.getMonth()!==new Date(g.getFullYear(),g.getMonth(),g.getDate()+7-t).getMonth()?new Date(g.getFullYear(),g.getMonth()+1,1):new Date(g.getFullYear(),g.getMonth(),1)})),v=Object(a.a)(p,2),D=v[0],B=v[1],f=new Date(D.getFullYear(),D.getMonth(),1),_=f.getDay()>0?f.getDay():7,k=new Date(D.getFullYear(),D.getMonth(),D.getDate()-_+1),y=D.getMonth()===new Date(k.getFullYear(),k.getMonth(),k.getDate()+35-1).getMonth()?5:4,w=function(e){m(e),t.getDate&&t.getDate(e)};return Object(l.jsxs)("div",{className:S.a.container,children:[Object(l.jsxs)("div",{className:S.a.header,children:[Object(l.jsx)("div",{className:S.a.titleButton,children:i&&Object(l.jsx)("button",{onClick:function(){t.previousMonthFunction?t.previousMonthFunction():B((function(t){return new Date(t.setMonth(t.getMonth()-1))}))},children:"<"})}),Object(l.jsx)("div",{className:S.a.titleText,children:"".concat(D.toLocaleString("default",{month:"long"}),", ").concat(D.getFullYear())}),Object(l.jsx)("div",{className:S.a.titleButton,children:s&&Object(l.jsx)("button",{className:S.a.titleButton,onClick:function(){t.nextMonthFunction?t.nextMonthFunction():B((function(t){return new Date(t.setMonth(t.getMonth()+1))}))},children:">"})})]}),Object(l.jsxs)("div",{className:S.a.body,children:[N(T),Object(l.jsx)("div",{children:Object(l.jsx)("hr",{style:{margin:"1px 5px"}})}),function(t,e){for(var n=t,c=[],o=0;o<5;o++){for(var i=[],a=function(t){var c=void 0,a=(c=4===o&&5!==e?"":n.getDate())&&n.toDateString()===b.toDateString()&&S.a.lineElementToday,r=c&&n.toDateString()===g.toDateString()&&S.a.lineElementSelected,s=new Date(n);i.push(Object(l.jsx)("div",{className:"".concat(S.a.lineElement," ").concat(a," ").concat(r),onClick:function(){return c&&w(s)},children:c},7*o+t)),n.setDate(n.getDate()+1)},r=0;r<7;r++)a(r);c.push(Object(l.jsx)("div",{className:S.a.bodyLine,children:i},o))}return c}(k,y)]}),Object(l.jsxs)("div",{className:S.a.footer,children:[j&&Object(l.jsx)("div",{className:S.a.currentDateTitle,onClick:function(){w(b),B(new Date(b.getFullYear(),b.getMonth(),1))},children:"Today: ".concat(b.toLocaleString("default",{month:"long"})," ").concat(b.getDate(),", ").concat(b.getFullYear())}),h&&Object(l.jsxs)("div",{className:S.a.monthBoardButtons,children:[Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)("button",{className:S.a.monthBoardButton,onClick:function(){return t.monthBoardButtonUp&&t.monthBoardButtonUp()},children:"^"})}),Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(l.jsx)("button",{className:S.a.monthBoardButton,onClick:function(){return t.monthBoardButtonLeft&&t.monthBoardButtonLeft()},children:"<"}),Object(l.jsx)("button",{className:S.a.monthBoardButton,onClick:function(){return t.monthBoardButtonDown&&t.monthBoardButtonDown()},children:"v"}),Object(l.jsx)("button",{className:S.a.monthBoardButton,onClick:function(){return t.monthBoardButtonRight&&t.monthBoardButtonRight()},children:">"})]})]})]})]})},F=n(7),L=n.n(F),P=function(t){var e=t.initDate,n=void 0===e?new Date(Date.now()):e,o=t.showBorder,i=void 0===o||o,r=Object(c.useState)(n),s=Object(a.a)(r,2),u=s[0],j=s[1],d=Object(c.useState)(!1),h=Object(a.a)(d,2),b=h[0],x=h[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"".concat(L.a.container," ").concat(i?L.a.containerBorder:""),children:[Object(l.jsx)("input",{className:L.a.inputDate,type:"text",placeholder:"date",maxLength:8,value:u.toLocaleString("default",{day:"2-digit",month:"2-digit",year:"2-digit"})}),Object(l.jsx)("button",{onClick:function(){x(!b)},children:"D"})]}),b&&Object(l.jsx)("div",{style:{position:"absolute"},children:Object(l.jsx)("div",{children:Object(l.jsx)(E,{initDate:u,getDate:function(e){j(e),x(!1),t.getDate&&t.getDate(e)}})})})]})};var R=function(){var t=Object(c.useState)("Edit text with Title1"),e=Object(a.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)("Edit text without Title2"),r=Object(a.a)(i,2),s=r[0],j=r[1],d=Object(c.useState)(!1),x=Object(a.a)(d,2),O=x[0],p=x[1],v=Object(c.useState)(!1),B=Object(a.a)(v,2),f=B[0],y=B[1],w=Object(c.useState)(["Memo text1","Memo text2"]),M=Object(a.a)(w,2),S=M[0],T=M[1],N=["line1","line2","line3","line4","line5","line6","line7","line8","line9"],F=Object(c.useState)(-1),L=Object(a.a)(F,2),R=L[0],A=L[1],Y=["line12","line22","line32","line42","line52","line62","line72","line82","line92"],I=Object(c.useState)(4),G=Object(a.a)(I,2),H=G[0],J=G[1],K=Object(c.useState)(new Date(2021,11,28)),W=Object(a.a)(K,2),q=W[0],U=W[1],Z=Object(c.useState)(new Date(1981,11,2)),z=Object(a.a)(Z,2),Q=z[0],V=z[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)(u,{name:"DateEdit",children:[Object(l.jsx)(P,{initDate:Q,getDate:V}),Object(l.jsx)("p",{}),Object(l.jsx)(P,{initDate:Q,getDate:V,showBorder:!1}),Object(l.jsx)(h,{result:Q.toLocaleString("default",{day:"2-digit",month:"long",year:"numeric"})})]}),Object(l.jsxs)(u,{name:"DatePicker",children:[Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)(E,{initDate:q,getDate:U,showFooterButtons:!0,monthBoardButtonDown:function(){return alert("DOWN button pressed!")}}),Object(l.jsx)(E,{previousMonthButton:!1,getDate:U})]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)(E,{previousMonthButton:!1,nextMonthButton:!1,getDate:U}),Object(l.jsx)(E,{previousMonthFunction:function(){return alert("PreviousMonth button pressed!")},nextMonthButton:!1,showFooterContent:!1,getDate:U})]}),Object(l.jsx)(h,{result:q.toLocaleString("default",{day:"2-digit",month:"long",year:"numeric"})})]}),Object(l.jsx)("hr",{style:{margin:"30px 0"}}),Object(l.jsx)(u,{name:"Label",children:Object(l.jsx)(b,{caption:"Label text"})}),Object(l.jsxs)(u,{name:"Edit",children:[Object(l.jsx)(g,{title:" Edit with title RightJustify",textAlignmentRight:!0,text:n,onChange:function(t){return o(t.currentTarget.value)}}),Object(l.jsx)(h,{result:n}),Object(l.jsx)("hr",{color:"green"}),Object(l.jsx)(g,{title:"Edit with title LeftJustify ",textAlignmentRight:!1,text:n,onChange:function(t){return o(t.currentTarget.value)}}),Object(l.jsx)(h,{result:n}),Object(l.jsx)("hr",{color:"green"}),Object(l.jsx)(g,{text:s,onChange:function(t){return j(t.currentTarget.value)}}),Object(l.jsx)(h,{result:s})]}),Object(l.jsxs)(u,{name:"CheckBox",children:[Object(l.jsx)(m,{caption:"CheckBox RightJustify",textAlignmentRight:!0,checked:O,onChange:function(t){return p(t.currentTarget.checked)}}),Object(l.jsx)(h,{result:O?"checked":"unChecked"}),Object(l.jsx)("hr",{color:"green"}),Object(l.jsx)(m,{caption:"CheckBox LeftJustify",textAlignmentRight:!1,checked:f,onChange:function(t){return y(t.currentTarget.checked)}}),Object(l.jsx)(h,{result:f?"checked":"unChecked"})]}),Object(l.jsxs)(u,{name:"BitBtn",children:[Object(l.jsx)(D,{caption:"BitButton with Image",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/1200px-Approve_icon.svg.png",imageWidth:40,imageHeight:40,onClick:function(){return alert("Button pressed!")}}),Object(l.jsx)("hr",{color:"green"}),Object(l.jsx)(D,{caption:"BitButton without Image",onClick:function(){return alert("Button pressed!")}})]}),Object(l.jsxs)(u,{name:"Memo",children:[Object(l.jsx)(_,{lines:S,rows:5,cols:75,onChange:function(t){return T(t.currentTarget.value.split("\n"))}}),Object(l.jsx)(h,{result:S.join("\n")})]}),Object(l.jsxs)(u,{name:"ComboBox",children:[Object(l.jsx)(k,{items:N,itemIndex:R,width:200,onChange:function(t){return A(+t.currentTarget.value)}}),Object(l.jsx)(h,{result:N[R]}),Object(l.jsx)("hr",{color:"green"}),Object(l.jsx)(k,{items:Y,itemIndex:H,width:200,onChange:function(t){return J(+t.currentTarget.value)}}),Object(l.jsx)(h,{result:Y[H]})]}),Object(l.jsx)(u,{name:"GroupBox",children:Object(l.jsxs)(C,{style:{width:"750px"},children:[Object(l.jsx)(g,{title:"GroupBox Test ",text:"GroupBox Test"}),Object(l.jsx)(D,{caption:"GroupBox Test",onClick:function(){return alert("GroupBox Test!")}}),Object(l.jsx)("p",{}),Object(l.jsx)(_,{lines:["GroupBox","Test"]})]})})]})};i.a.render(Object(l.jsx)(R,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.74346cc9.chunk.js.map