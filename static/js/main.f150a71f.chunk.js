(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var c=s(8),a=s.n(c),n=s(2),i=s(1),l=(s(13),s(14),s(15),s(3)),o=s.n(l),r=s(0),d=function(e){var t=e.postId,s=e.setPostId,c=e.posts;return Object(r.jsxs)("div",{"data-cy":"PostsList",children:[Object(r.jsx)("p",{className:"title",children:"Posts:"}),Object(r.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"has-background-link-light",children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:null===c||void 0===c?void 0:c.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"Post",children:[Object(r.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(r.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{type:"button","data-cy":"PostButton",className:o()("button is-link",{"is-light":t!==e.id}),onClick:function(){t===e.id?s(0):s(e.id)},children:t!==e.id?"Open":"Close"})})]},e.id)}))})]})]})},j=s(6),m=(s(17),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),b="https://mate.academy/students-api";function u(e){return new Promise((function(t){setTimeout(t,e)}))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),u(300).then((function(){return fetch(b+e,c)})).then((function(e){return e.json()}))}var O=function(e){return h(e)},x=function(e,t){return h(e,"POST",t)},f=function(e){return h(e,"DELETE")},p=function(e){var t=e.setComments,s=e.POST_ID,c=e.setCommentError,a=e.comments,l=Object(i.useState)(!1),d=Object(n.a)(l,2),m=d[0],b=d[1],u=Object(i.useState)(""),h=Object(n.a)(u,2),O=h[0],f=h[1],p=Object(i.useState)(""),v=Object(n.a)(p,2),N=v[0],y=v[1],g=Object(i.useState)(""),S=Object(n.a)(g,2),C=S[0],I=S[1],E=Object(i.useState)(!1),w=Object(n.a)(E,2),k=w[0],P=w[1],T=Object(i.useState)(!1),F=Object(n.a)(T,2),D=F[0],B=F[1],L=Object(i.useState)(!1),_=Object(n.a)(L,2),M=_[0],U=_[1];return Object(r.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault(),b(!0),P(!1),B(!1),U(!1),O.trim()||(P(!0),b(!1)),N.trim()||(B(!0),b(!1)),C.trim()?function(e){var t=e.postId,s=e.body,c=e.name,a=e.email;return x("/comments",{postId:t,body:s,name:c,email:a})}({postId:s,body:C.trim(),name:O.trim(),email:N.trim()}).then((function(e){t(a?[].concat(Object(j.a)(a),[e]):[e]),I("")})).catch((function(){c(!0)})).finally((function(){b(!1)})):(U(!0),b(!1))},onReset:function(e){e.preventDefault(),f(""),y(""),I("")},children:[Object(r.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(r.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(r.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:o()("input",{"is-danger":k}),value:O,onChange:function(e){return f(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-small is-left",children:Object(r.jsx)("i",{className:"fas fa-user"})}),k&&Object(r.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(r.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),k&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(r.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(r.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(r.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:o()("input",{"is-danger":D}),value:N,onChange:function(e){return y(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-small is-left",children:Object(r.jsx)("i",{className:"fas fa-envelope"})}),D&&Object(r.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(r.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),D&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(r.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:o()("textarea",{"is-danger":M}),value:C,onChange:function(e){return I(e.target.value)}})}),M&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit",className:o()("button is-link",{"is-loading":m}),children:"Add"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"reset",className:"button is-link is-light",children:"Clear"})})]})]})},v=function(e){var t=e.postId,s=e.posts,c=Object(i.useState)(!1),a=Object(n.a)(c,2),l=a[0],o=a[1],d=Object(i.useState)(null),b=Object(n.a)(d,2),u=b[0],h=b[1],x=Object(i.useState)(!1),v=Object(n.a)(x,2),N=v[0],y=v[1],g=Object(i.useState)(!1),S=Object(n.a)(g,2),C=S[0],I=S[1],E=Object(i.useState)(!1),w=Object(n.a)(E,2),k=w[0],P=w[1],T=null===s||void 0===s?void 0:s.find((function(e){return e.id===t}));Object(i.useEffect)((function(){y(!1),o(!0),function(e){return O("/comments?postId=".concat(e))}(t).then(h).catch((function(){y(!0)})).finally((function(){return o(!1)}))}),[t]);var F=function(e){var t;o(!0),(t=e,f("/comments/".concat(t))).then((function(){var t=null===u||void 0===u?void 0:u.findIndex((function(t){return t.id===e}));if(t&&-1!==t&&u){var s=Object(j.a)(u);s.splice(t,1),h(s)}})).catch((function(){y(!0)})).finally((function(){return o(!1)}))};return Object(r.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(r.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(r.jsxs)("div",{className:"block",children:[Object(r.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===T||void 0===T?void 0:T.id,": ").concat(null===T||void 0===T?void 0:T.title)}),Object(r.jsx)("p",{"data-cy":"PostBody",children:null===T||void 0===T?void 0:T.body})]}),Object(r.jsxs)("div",{className:"block",children:[l&&Object(r.jsx)(m,{}),(N||C)&&Object(r.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),0===(null===u||void 0===u?void 0:u.length)&&Object(r.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),Object(r.jsx)("p",{className:"title is-4",children:"Comments:"}),null===u||void 0===u?void 0:u.map((function(e){return Object(r.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(r.jsxs)("div",{className:"message-header",children:[Object(r.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(r.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return F(e.id)},children:"delete button"})]}),Object(r.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]})})),!k&&Object(r.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return P(!0)},children:"Write a comment"})]}),k&&Object(r.jsx)(p,{setComments:h,POST_ID:t,setCommentError:I,comments:u})]})})},N=function(e){var t=e.users,s=e.userId,c=e.setUserId,a=Object(i.useState)(!1),l=Object(n.a)(a,2),d=l[0],j=l[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{"data-cy":"UserSelector",className:o()("dropdown",{"is-active":d}),children:[Object(r.jsx)("div",{className:"dropdown-trigger",children:Object(r.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return j(!d)},children:[Object(r.jsx)("span",{children:"Choose a user"}),Object(r.jsx)("span",{className:"icon is-small",children:Object(r.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(r.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(r.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(r.jsx)("a",{href:"#user-".concat(e.id),onClick:function(){c(e.id),j(!1)},className:o()("dropdown-item",{"is-active":s===e.id}),children:e.name},e.id)}))})})]})})},y=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)(0),l=Object(n.a)(a,2),j=l[0],b=l[1],u=Object(i.useState)(0),h=Object(n.a)(u,2),x=h[0],f=h[1],p=Object(i.useState)(!1),y=Object(n.a)(p,2),g=y[0],S=y[1],C=Object(i.useState)(!1),I=Object(n.a)(C,2),E=I[0],w=I[1],k=Object(i.useState)(null),P=Object(n.a)(k,2),T=P[0],F=P[1];return Object(i.useEffect)((function(){O("/users").then(c)}),[]),Object(i.useEffect)((function(){w(!1),S(!0),function(e){return O("/posts?userId=".concat(e))}(j).then(F).catch((function(){w(!0)})).finally((function(){return S(!1)}))}),[j]),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"tile is-ancestor",children:[Object(r.jsx)("div",{className:"tile is-parent",children:Object(r.jsxs)("div",{className:"tile is-child box is-success",children:[Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(N,{users:s,userId:j,setUserId:b})}),Object(r.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!j&&Object(r.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),g&&j>0&&Object(r.jsx)(m,{}),E&&Object(r.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),0===(null===T||void 0===T?void 0:T.length)&&Object(r.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),j>0&&Object(r.jsx)(d,{postId:x,setPostId:f,posts:T})]})]})}),x>0&&Object(r.jsx)("div",{"data-cy":"Sidebar",className:o()("tile","is-parent","is-8-desktop","Sidebar","Sidebar--open"),children:Object(r.jsx)("div",{className:"tile is-child box is-success ",children:Object(r.jsx)(v,{postId:x,posts:T})})})]})})})};a.a.render(Object(r.jsx)(y,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f150a71f.chunk.js.map