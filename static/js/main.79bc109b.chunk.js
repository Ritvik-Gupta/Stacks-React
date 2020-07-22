(this["webpackJsonpvisual-stack-new"]=this["webpackJsonpvisual-stack-new"]||[]).push([[0],{241:function(e,t,n){e.exports=n(404)},404:function(e,t,n){"use strict";n.r(t);var a=n(41),r=n(0),c=n.n(r),o=n(54),l=n.n(o),i=n(42),u=(n(246),n(20)),s=n(105),m=n(232),p=n(206),d=n(207),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;Object(p.a)(this,e),this.stack=new Array(t).fill(null),this.size=t,this.top=-1}return Object(d.a)(e,[{key:"isFull",value:function(){return this.top===this.size-1}},{key:"isEmpty",value:function(){return-1===this.top}},{key:"push",value:function(e){return!this.isFull()&&(this.stack[++this.top]=e,!0)}},{key:"pop",value:function(){if(!this.isEmpty()){var e=this.stack[this.top];return this.stack[this.top--]=null,e}return null}},{key:"copy",get:function(){return Object(m.a)(this.stack)}}],[{key:"create",value:function(t){var n=new e;return n.stack=t.stack,n.size=t.size,n.top=t.top,n}}]),e}(),f=["number","string","boolean"],b={number:function(e){return/^(\d)+(.(\d)+)?$/i.test(e)},boolean:function(e){return"true"===e||"false"===e},string:function(e){return"string"===typeof e&&""!==e}},g=function(e,t){return t===function(e){return Object.entries(b).reduce((function(t,n){return null===t&&!0===n[1](e)?n[0]:t}),null)}(e)?[]:[{head:"Invalid Input of Type < ".concat(t," >"),body:"Element to push should be a < ".concat(t," >"),error:!0}]},E=function(e){switch(e){case"number":return"sort numeric up";case"string":return"sort alphabet up";case"boolean":return"sort";default:return"delete"}},k=function(e){switch(e){case"number":return"orange";case"string":return"green";case"boolean":return"blue";default:return"red"}},v=n(417);function S(){var e=Object(a.a)(["\n\tcolor: black !important;\n\tbackground: "," !important;\n\tbox-shadow: "," !important;\n\n\t&:hover {\n\t\tbackground: "," !important;\n\t}\n\n\t&:active {\n\t\tbox-shadow: "," !important;\n\t}\n"]);return S=function(){return e},e}function y(){var e=Object(a.a)(["\n\twidth: 100%;\n\theight: 100%;\n\n\tbackground: ",";\n\tbox-shadow: ",";\n\n\toverflow-y: ",";\n\tpadding: ","%;\n"]);return y=function(){return e},e}var C=Object(i.b)("div")(y(),"#c1b8c1",(function(e){return e.outset?"13px 13px 35px #9c959c, -13px -13px 35px #e6dbe6":"inset 13px 13px 35px #9c959c, inset -13px -13px 35px #e6dbe6"}),(function(e){return e.noScroll?"visible":"scroll"}),(function(e){return e.padding?100*e.padding:3})),O=Object(i.b)(v.a)(S(),"#c1b8c1","5px 5px 21px #615c61, -5px -5px 21px #ffffff","#c6bec7","inset 5px 5px 21px #615c61, inset -5px -5px 21px #ffffff");function x(){var e=Object(a.a)(["\n\tgrid-area: ",";\n"]);return x=function(){return e},e}function j(){var e=Object(a.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tbackground: ",";\n\tpadding: 1%;\n\tdisplay: grid;\n\tgrid-template-rows: repeat(10, 1fr);\n\tgrid-template-columns: repeat(10, 1fr);\n\tgrid-gap: 1.5%;\n\tgrid-template-areas:\n\t\t'a a a a a d d d d d'\n\t\t'a a a a a d d d d d'\n\t\t'1 1 1 1 1 1 c c c c'\n\t\t'b b b b b b c c c c'\n\t\t'b b b b b b c c c c'\n\t\t'b b b b b b c c c c'\n\t\t'2 2 2 2 2 2 c c c c'\n\t\t'e e e e e e c c c c'\n\t\t'e e e e e e c c c c'\n\t\t'3 3 3 3 3 3 3 3 3 3';\n\n\t@media (max-width: 800px) {\n\t\theight: 250%;\n\t\tbackground-size: 100% 250%;\n\t\tpadding: 0%;\n\t\tgrid-template-rows: repeat(14, 1fr);\n\t\tgrid-template-columns: repeat(1, 1fr);\n\t\tgrid-gap: 0%;\n\t\tgrid-template-areas:\n\t\t\t'a'\n\t\t\t'1'\n\t\t\t'c'\n\t\t\t'c'\n\t\t\t'c'\n\t\t\t'c'\n\t\t\t'2'\n\t\t\t'd'\n\t\t\t'3'\n\t\t\t'b'\n\t\t\t'b'\n\t\t\t'4'\n\t\t\t'e'\n\t\t\t'5';\n\t}\n"]);return j=function(){return e},e}var w=Object(i.b)("div")(j(),"#c1b8c1"),M=Object(i.b)("div")(x(),(function(e){return e.area})),P=n(418),z=n(68),A=n(415),N=function(e){var t=e.stackCollection,n=e.handleStackChange,a=e.stackPos,r=t.map((function(e,t){var n=E(e.type);return{key:t,value:t,text:"".concat(e.name," < ").concat(e.type," >"),icon:n}}));return c.a.createElement(C,{noScroll:!0,outset:!0},c.a.createElement(P.a,{size:"small"},c.a.createElement(z.a,{name:"outdent"}),c.a.createElement(P.a.Content,null,"Choose a Stack",c.a.createElement(P.a.Subheader,null,"Choose one out of the following Stacks"))),c.a.createElement(A.a,{value:a,placeholder:"Select a Stack",fluid:!0,selection:!0,options:r,onChange:function(e,t){var a=t.value;n(a)}}))},T=n(419),F=n(416),I=n(421),D=function(e){var t=e.currentStack,n=E(t.type),a=k(t.type),r=t.stack.copy.filter((function(e){return null!==e})).reverse(),o=r.map((function(e,t){return c.a.createElement(T.a,{key:r.length-t,raised:!0,inverted:!0,secondary:!0,color:a,textAlign:"center"},e||"null")})),l=c.a.createElement(F.a,{error:!0,size:"small",icon:"crosshairs",header:"Empty Stack",content:"".concat(t.name.toUpperCase()," Stack is empty .")});return c.a.createElement(C,null,c.a.createElement(P.a,{as:"h2",color:a},c.a.createElement(z.a,{name:n}),c.a.createElement(P.a.Content,null,t.name.toUpperCase()," Stack",c.a.createElement(P.a.Subheader,null,"Type : ",t.type))),c.a.createElement(I.a.Group,{animation:"scale"},r.length>0?o:l))},U=n(413),G=n(412),q=function(e){var t=e.modalOpen,n=e.inputName,a=e.inputType,r=e.inputSize,o=e.icon,l=e.color,i=e.options,u=e.onModalToggle,s=e.onNameChange,m=e.onTypeChange,p=e.onSizeChange,d=e.onStackSubmit;return c.a.createElement(c.a.Fragment,null,c.a.createElement(C,{noScroll:!0},c.a.createElement(P.a,{size:"small"},c.a.createElement(z.a,{name:"paper plane"}),c.a.createElement(P.a.Content,null,"Create a New Stack",c.a.createElement(P.a.Subheader,null,"Initialise an Empty Stack with a Name"))),c.a.createElement(O,{icon:!0,fluid:!0,labelPosition:"right",onClick:u},c.a.createElement(z.a,{name:"upload"}),"Create an Empty Stack")),c.a.createElement(U.a,{dimmer:"blurring",open:t,centered:!1},c.a.createElement(U.a.Header,null,"Stack Creation Form"),c.a.createElement(U.a.Content,null,c.a.createElement(G.a,{onSubmit:d},c.a.createElement(G.a.Input,{type:"text",value:n,fluid:!0,label:"Stack Name",placeholder:"Enter a Stack Name ...",icon:c.a.createElement(z.a,{name:o,color:l,inverted:!0,circular:!0,link:!0}),onChange:s}),c.a.createElement(G.a.Input,{type:"number",value:r,fluid:!0,label:"Stack Size",placeholder:"Enter the Size of Stack ...",onChange:p}),c.a.createElement(G.a.Select,{value:a,options:i,onChange:m}),c.a.createElement(v.a.Group,{fluid:!0},c.a.createElement(v.a,{type:"button",negative:!0,onClick:u},"Close"),c.a.createElement(v.a.Or,null),c.a.createElement(v.a,{type:"submit",positive:!0},"Create"))))))},B=function(e){var t=e.handleStackCreate,n=Object(r.useState)(!1),a=Object(u.a)(n,2),o=a[0],l=a[1],i=Object(r.useState)(""),s=Object(u.a)(i,2),m=s[0],p=s[1],d=Object(r.useState)(0),h=Object(u.a)(d,2),b=h[0],g=h[1],v=Object(r.useState)(5),S=Object(u.a)(v,2),y=S[0],C=S[1],O=E(f[b]),x=k(f[b]),j=f.map((function(e,t){return{key:t,value:t,text:e.toUpperCase()}})),w={onModalToggle:function(){l(!o)},onNameChange:function(e,t){var n=t.value;p(n)},onTypeChange:function(e,t){var n=t.value;g(n)},onSizeChange:function(e,t){var n=t.value;C(Number(n))},onStackSubmit:function(){t(m,f[b],y),l(!1),p(""),g(0),C(5)}};return c.a.createElement(q,Object.assign({modalOpen:o,inputName:m,inputType:b,inputSize:y,icon:O,color:x,options:j},w))},H=function(e){var t,n=e.currentStack,a=e.handleStackPush,o=e.handleStackPop,l=Object(r.useState)(""),i=Object(u.a)(l,2),s=i[0],m=i[1],p=function(e,t){var n=t.value;m(n)};return t="boolean"===n.type?c.a.createElement(G.a.Select,{fluid:!0,value:s,placeholder:"Choosea Boolean Value",options:[{key:0,text:"TRUE",value:"true"},{key:1,text:"FALSE",value:"false"}],onChange:p}):c.a.createElement(G.a.Input,{fluid:!0,value:s,type:"text",placeholder:"Enter an element ...",onChange:p}),c.a.createElement(C,{noScroll:!0,outset:!0},c.a.createElement(P.a,{size:"small"},c.a.createElement(z.a,{name:"cog",loading:!0}),c.a.createElement(P.a.Content,null,"Stack Operations",c.a.createElement(P.a.Subheader,null,"Apply Push or Pop Operations on the Current Stack"))),c.a.createElement(G.a,null,c.a.createElement(G.a.Group,{widths:"equal"},t),c.a.createElement(G.a.Group,{widths:"equal"},c.a.createElement(O,{fluid:!0,icon:!0,labelPosition:"right",type:"button",onClick:function(){o(),m("")}},c.a.createElement(z.a,{name:"angle double down"}),"Pop"),c.a.createElement(O,{fluid:!0,icon:!0,labelPosition:"right",type:"button",onClick:function(){a(s),m("")}},c.a.createElement(z.a,{name:"angle double up"}),"Push"))))},J=function(e){var t=e.messageStack,n=e.archiveStack,a=e.emptyStack,r=e.messageOpen,o=e.archiveOpen,l=e.onClose,i=e.onMessageOpen,u=e.onArchiveOpen,s=e.onMessageArchive;return c.a.createElement(c.a.Fragment,null,c.a.createElement(C,{noScroll:!0,outset:!0},c.a.createElement(P.a,{size:"small"},c.a.createElement(z.a,{name:"settings"}),c.a.createElement(P.a.Content,null,"Messages",c.a.createElement(P.a.Subheader,null,"Checkout Messages collected"))),c.a.createElement(O,{floated:"right",icon:"fork",content:"Current Messages",label:{basic:!1,color:"grey",pointing:"left",content:t.length},onClick:i})),c.a.createElement(U.a,{open:r,centered:!1},c.a.createElement(U.a.Header,null,"Current Messages Collected"),c.a.createElement(U.a.Content,{scrolling:!0},c.a.createElement(U.a.Description,null,c.a.createElement(P.a,{floated:"right",size:"small"},"Check out all the Current Messages"),t.length>0?t:a)),c.a.createElement(U.a.Actions,null,c.a.createElement(v.a,{icon:!0,primary:!0,labelPosition:"right",onClick:s},c.a.createElement(z.a,{name:"chevron right"}),"Archive all the messages"),c.a.createElement(v.a,{icon:!0,positive:!0,labelPosition:"right",onClick:u},c.a.createElement(z.a,{name:"inbox"}),"Open Archived Messages"),c.a.createElement(v.a,{icon:!0,negative:!0,labelPosition:"right",onClick:l},c.a.createElement(z.a,{name:"close"}),"Close Messages"))),c.a.createElement(U.a,{open:o,centered:!1},c.a.createElement(U.a.Header,null,"Current Messages Archived"),c.a.createElement(U.a.Content,{scrolling:!0},c.a.createElement(U.a.Description,null,c.a.createElement(P.a,{floated:"right",size:"small"},"Check out all the Archived Messages"),n.length>0?n:a)),c.a.createElement(U.a.Actions,null,c.a.createElement(v.a,{icon:!0,negative:!0,labelPosition:"right",onClick:l},c.a.createElement(z.a,{name:"close"}),"Close Messages"))))},L=function(e){var t=e.collectedMessages,n=e.archivedMessages,a=e.handleMessageArchive,o=Object(r.useState)(!1),l=Object(u.a)(o,2),i=l[0],s=l[1],m=Object(r.useState)(!1),p=Object(u.a)(m,2),d=p[0],h=p[1],f=function(e){return e.map((function(e,t){return c.a.createElement(F.a,{key:t,error:!0===e.error,success:!0!==e.error,size:"small",icon:!0===e.error?"question":"star",header:e.head,content:e.body})}))},b=f(t),g=f(n),E=c.a.createElement(F.a,{warning:!0,icon:"inbox",size:"small",header:"No Messages Found",content:"No new Messages are found"});return c.a.createElement(J,{messageStack:b,archiveStack:g,emptyStack:E,messageOpen:i,archiveOpen:d,onClose:function(){s(!1),h(!1)},onMessageOpen:function(){s(!0),h(!1)},onArchiveOpen:function(){s(!1),h(!0)},onMessageArchive:function(){a()}})},V=function(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(s.a)([]),l=Object(u.a)(o,2),i=l[0],m=l[1],p=Object(s.a)([]),d=Object(u.a)(p,2),b=d[0],E=d[1],k=Object(s.a)([{name:"Default",type:"number",stack:new h},{name:"Default",type:"string",stack:new h},{name:"Default",type:"boolean",stack:new h}]),v=Object(u.a)(k,2),S=v[0],y=v[1];Object(r.useEffect)((function(){console.groupCollapsed("Current Stack Config ..."),console.log("Current Position :\t",n),console.log(S[n]),console.groupEnd()}),[S,n]),Object(r.useEffect)((function(){console.groupCollapsed("Current Messages ..."),console.log(i),console.log(b),console.groupEnd()}),[i,b]);return c.a.createElement(w,null,c.a.createElement(M,{area:"a"},c.a.createElement(N,{stackPos:n,stackCollection:S,handleStackChange:function(e){a(e)}})),c.a.createElement(M,{area:"b"},c.a.createElement(H,{currentStack:S[n],handleStackPush:function(e){var t=g(e,S[n].type);if(t.some((function(e){return!0===e.error})))m((function(e){return e.concat(t)}));else{var a=h.create(S[n].stack);!1===a.push(e)?m((function(e){e.push({head:"Stack is Full",body:"Cannot Push any more elements.",error:!0})})):(y((function(e){e[n].stack=a})),m((function(t){t.push({head:"Element Pushed Successfully",body:"Pushed element : ".concat(e),error:!1})})))}},handleStackPop:function(){var e=h.create(S[n].stack),t=e.pop();null===t?m((function(e){e.push({head:"Stack is Empty",body:"Cannot Pop any more elements.",error:!0})})):(y((function(t){t[n].stack=e})),m((function(e){e.push({head:"Element Popped Successfully",body:"Popped element : ".concat(t),error:!1})})))}})),c.a.createElement(M,{area:"c"},c.a.createElement(D,{currentStack:S[n]})),c.a.createElement(M,{area:"d"},c.a.createElement(B,{handleStackCreate:function(e,t,n){var a=function(e,t,n){var a=[];return(e.length<=0||e.length>20||"default"===e.toLowerCase())&&a.push({head:"Invalid Name for a Stack",body:'Enter a Valid Name that is not "Default" or ""',error:!0}),f.includes(t)||a.push({head:"Invlid Type for a Stack",body:"A Stack can only have a Type of Number, String or Boolean",error:!0}),(n<=0||n>20||Math.floor(n)!==Math.ceil(n))&&a.push({head:"Invlid Size for a Stack",body:"Size of Stack cannot Exceed 20 and cannot be a Floating Number",error:!0}),a}(e,t,n);a.some((function(e){return!0===e.error}))?m((function(e){return e.concat(a)})):(y((function(a){a.push({name:e,type:t,stack:new h(n)})})),m((function(n){n.push({head:"Stack Created Successfully",body:"Created Stack ".concat(e.toUpperCase()," of Type < ").concat(t," >"),error:!1})})))}})),c.a.createElement(M,{area:"e"},c.a.createElement(L,{collectedMessages:i,archivedMessages:b,handleMessageArchive:function(){E((function(e){return e.concat(i)})),m((function(){return[]}))}})))};function R(){var e=Object(a.a)(["\n   * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n   }\n\n   body {\n      width: 100vw;\n      height: 100vh;\n   }\n\n   #root {\n      width: 100%;\n      height: 100%;\n   }\n"]);return R=function(){return e},e}var $=Object(i.a)(R());l.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement($,null),c.a.createElement(V,null)),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.79bc109b.chunk.js.map