(this.webpackJsonpfinstagram=this.webpackJsonpfinstagram||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},67:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(19),o=a.n(s),r=(a(67),a(18)),i=a(29),l=i.a.initializeApp({apiKey:"AIzaSyAyfJGxjNgZCwNDeG3kTwl6NO0Nh6DlDuI",authDomain:"finstagram-91090.firebaseapp.com",projectId:"finstagram-91090",storageBucket:"finstagram-91090.appspot.com",messagingSenderId:"606272048412",appId:"1:606272048412:web:dbf7df62723a002a83bed9",measurementId:"G-HK64R382FF"}),u=l.firestore(),d=l.auth(),p=l.storage(),j=a(102),m=a(103),b=a(99),g=a(101),h=a(100),f=(a(49),a(50),a(105)),O=a(98),x=a(55),v=a.n(x),y=a(5);var _=function(e){var t=e.username,a=e.avatar,c=e.imageUrl,s=e.caption,o=e.postId,l=e.user,d=Object(n.useState)([]),p=Object(r.a)(d,2),j=p[0],m=p[1],b=Object(n.useState)(""),g=Object(r.a)(b,2),h=g[0],x=g[1];return Object(n.useEffect)((function(){var e;return o&&(e=u.collection("posts").doc(o).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){m(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[o]),Object(y.jsxs)("div",{className:"posts",children:[Object(y.jsxs)("div",{className:"posts_header",children:[Object(y.jsx)(f.a,{src:a,alt:"goku",className:"posts_header_avatar"}),Object(y.jsxs)("h3",{className:"posts_header_username",children:[" ",t," "]})]}),Object(y.jsx)("img",{className:"posts_image",src:c,alt:"React logo"}),Object(y.jsxs)("h4",{className:"posts_captions",children:[Object(y.jsxs)("strong",{children:[" ",t,": "]})," ",s," "]}),Object(y.jsx)("div",{className:"comments_body",children:j.map((function(e){return Object(y.jsxs)("p",{children:[Object(y.jsx)("strong",{children:e.username})," ",e.text]})}))}),l?Object(y.jsxs)("form",{className:"post_comment",children:[Object(y.jsx)("input",{className:"post_comment_input",type:"text",placeholder:"add a comment....",value:h,onChange:function(e){return x(e.target.value)}}),Object(y.jsx)(O.a,{className:"app_iconButton",disabled:!h,variant:"contained",color:"secondary",type:"submit",onClick:function(e){e.preventDefault(),console.log(h),u.collection("posts").doc(o).collection("comments").add({text:h,username:l.displayName,timestamp:i.a.firestore.FieldValue.serverTimestamp()}),x("")},children:Object(y.jsx)(v.a,{})})]}):Object(y.jsx)("h3",{children:" Please Sign in to post a Comment.."})]})};var N=function(e){var t=e.username,a=Object(n.useState)(null),c=Object(r.a)(a,2),s=c[0],o=c[1],l=Object(n.useState)(0),d=Object(r.a)(l,2),j=d[0],m=d[1],g=Object(n.useState)(""),h=Object(r.a)(g,2),f=h[0],O=h[1];return Object(y.jsxs)("div",{className:"imageUpload",children:[Object(y.jsx)("progress",{value:j,max:"100"}),Object(y.jsx)("input",{value:f,onChange:function(e){return O(e.target.value)},className:"caption",type:"text",placeholder:"Enter a caption...."}),Object(y.jsx)("input",{className:"uploader",type:"file",onChange:function(e){e.target.files[0]&&o(e.target.files[0])}}),Object(y.jsx)(b.a,{variant:"contained",color:"secondary",onClick:function(){p.ref("images/".concat(s.name)).put(s).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);m(t)}),(function(e){console.log(e),alert(e.message)}),(function(){p.ref("images").child(s.name).getDownloadURL().then((function(e){u.collection("posts").add({timestamp:i.a.firestore.FieldValue.serverTimestamp(),captions:f,imageUrl:e,username:t}),m(0),console.log("progress is changed"),o(null),console.log("image is changed"),O(""),console.log("caption is changed")}))}))},children:"Upload"})]})};function w(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var C=Object(h.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var S=function(){var e=C(),t=Object(n.useState)(w),a=Object(r.a)(t,1)[0],c=Object(n.useState)([]),s=Object(r.a)(c,2),o=s[0],i=s[1],l=Object(n.useState)(!1),p=Object(r.a)(l,2),h=p[0],f=p[1],O=Object(n.useState)(""),x=Object(r.a)(O,2),v=x[0],S=x[1],I=Object(n.useState)(""),k=Object(r.a)(I,2),U=k[0],D=k[1],F=Object(n.useState)(""),P=Object(r.a)(F,2),B=P[0],E=P[1],A=Object(n.useState)(null),T=Object(r.a)(A,2),L=T[0],R=T[1],G=Object(n.useState)(!1),J=Object(r.a)(G,2),z=J[0],K=J[1];return Object(n.useEffect)((function(){var e=d.onAuthStateChanged((function(e){R(e||null)}));return function(){e()}}),[L,v]),Object(n.useEffect)((function(){u.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){i(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)(j.a,{open:h,onClose:function(){return f(!1)},children:Object(y.jsx)("div",{style:a,className:e.paper,children:Object(y.jsx)("form",{className:"app_modal",children:Object(y.jsxs)("center",{children:[Object(y.jsx)("img",{className:"app_headerImage",src:"http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"finstagram"}),Object(y.jsx)(m.a,{placeholder:"username",type:"text",value:v,onChange:function(e){return S(e.target.value)}}),Object(y.jsx)(m.a,{placeholder:"email",type:"email",value:U,onChange:function(e){return D(e.target.value)}}),Object(y.jsx)(m.a,{placeholder:"password",type:"password",value:B,onChange:function(e){return E(e.target.value)}}),Object(y.jsx)(b.a,{type:"submit",className:"app_modal_button",variant:"contained",color:"secondary",onClick:function(e){e.preventDefault(),d.createUserWithEmailAndPassword(U,B).then((function(e){return e.user.updateProfile({displayName:v})})).catch((function(e){return alert(e.message)})),S(""),D(""),E(""),f(!1)},children:"Sign Up"})]})})})}),Object(y.jsx)(j.a,{open:z,onClose:function(){return K(!1)},children:Object(y.jsx)("div",{style:a,className:e.paper,children:Object(y.jsx)("form",{className:"app_modal",children:Object(y.jsxs)("center",{children:[Object(y.jsx)("img",{className:"app_headerImage",src:"http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"finstagram"}),Object(y.jsx)(m.a,{placeholder:"email",type:"text",value:U,onChange:function(e){return D(e.target.value)}}),Object(y.jsx)(m.a,{placeholder:"password",type:"password",value:B,onChange:function(e){return E(e.target.value)}}),Object(y.jsx)(b.a,{type:"submit",className:"app_modal_button",variant:"contained",color:"secondary",onClick:function(e){e.preventDefault(),d.signInWithEmailAndPassword(U,B).catch((function(e){return alert(e.message)})),S(""),D(""),E(""),K(!1)},children:"Sign Up"})]})})})}),Object(y.jsxs)("div",{className:"app_header",children:[Object(y.jsx)("img",{className:"app_headerImage",src:"http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"finstagram"}),L?Object(y.jsx)("div",{className:"app_header_buttonContainer",children:Object(y.jsx)(b.a,{variant:"contained",color:"secondary",onClick:function(){return d.signOut()},children:"Logout"})}):Object(y.jsxs)("div",{className:"app_header_buttonContainer",children:[Object(y.jsx)(b.a,{variant:"contained",color:"secondary",onClick:function(){return f(!0)},children:"Register"}),Object(y.jsx)(g.a,{m:1}),Object(y.jsx)(b.a,{variant:"contained",color:"secondary",onClick:function(){return K(!0)},children:"Sign In"})]})]}),o.map((function(e){return Object(y.jsx)("center",{children:Object(y.jsx)(_,{postId:e.id,user:L,username:e.post.username,imageUrl:e.post.imageUrl,caption:e.post.captions},e.id)})})),Object(y.jsx)("center",{children:(null===L||void 0===L?void 0:L.displayName)?Object(y.jsx)(N,{username:L.displayName}):Object(y.jsx)("h3",{className:"footer",children:" Please Login to Upload Posts.."})})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,107)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(S,{})}),document.getElementById("root")),I()}},[[81,1,2]]]);
//# sourceMappingURL=main.8705cc7c.chunk.js.map