(this["webpackJsonpcodeial-final-live"]=this["webpackJsonpcodeial-final-live"]||[]).push([[0],{104:function(e,t){},107:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),c=a.n(s),o=a(6),i=(a(73),a(2)),l=a(3),u=a(5),m=a(4),d=a(14),p=a(8),h="https://codeial.codingninjas.com:8000/api/v2",f=function(){return"".concat(h,"/users/login")},E=function(){return"".concat(h,"/users/signup")},v=function(){return"".concat(h,"/users/edit")},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return"".concat(h,"/posts?page=").concat(e,"&limit=").concat(t)},b=function(e){return"".concat(h,"/users/").concat(e)},S=function(){return"".concat(h,"/friendship/fetch_user_friends")},C=function(e){return"".concat(h,"/friendship/create_friendship?user_id=").concat(e)},O=function(e){return"".concat(h,"/friendship/remove_friendship?user_id=").concat(e)},N=function(){return"".concat(h,"/posts/create")},_=function(){return"".concat(h,"/comments/")},j=function(e,t){return"".concat(h,"/likes/toggle?likeable_id=").concat(e,"&likeable_type=").concat(t)},y=function(e){return"".concat(h,"/users/search?text=").concat(e)};function w(e){var t=[];for(var a in e){var n=encodeURIComponent(a),r=encodeURIComponent(e[a]);t.push(n+"="+r)}return t.join("&")}function k(){return localStorage.getItem("token")}function I(){return function(e){var t=g();fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e({type:"UPDATE_POSTS",posts:t.data.posts})}))}}function T(e,t){return function(a){var n=_();fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(k())},body:w({content:e,post_id:t})}).then((function(e){return e.json()})).then((function(e){e.success&&a(function(e,t){return{type:"ADD_COMMENT",comment:e,postId:t}}(e.data.comment,t))}))}}function A(e,t,a){return function(n){var r=j(e,t);fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(k())}}).then((function(e){return e.json()})).then((function(t){console.log("LIKE DATA",t),t.success&&n(function(e,t){return{type:"UPDATE_POST_LIKE",postId:e,userId:t}}(e,a))}))}}var L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.posts;return r.a.createElement("div",{className:"posts-list"},r.a.createElement(ne,null),e.map((function(e){return r.a.createElement(se,{post:e,key:e._id})})))}}]),a}(n.Component);function P(e,t,a,n){return function(r){var s=E();fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:w({email:e,password:t,confirm_password:a,name:n})}).then((function(e){return e.json()})).then((function(e){if(e.success)return localStorage.setItem("token",e.data.token),void r((t=e.data.user,{type:"SIGNUP_SUCCESS",user:t}));var t;r({type:"SIGNUP_FAILED",error:e.message})}))}}function U(e){return function(t){var a=y(e);fetch(a,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(k())}}).then((function(e){return e.json()})).then((function(e){console.log("SEARCH data",e),e.success?t(R(e.data.users)):t(R([]))}))}}function R(e){return{type:"FETCH_SEARCH_RESULTS_SUCCESS",users:e}}var F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).logOut=function(){localStorage.removeItem("token"),e.props.dispatch({type:"LOG_OUT"})},e.handleSearch=function(t){var a=t.target.value;e.props.dispatch(U(a))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.results;return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"left-div"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:"https://ninjasfiles.s3.amazonaws.com/0000000000003454.png",alt:"logo"}))),r.a.createElement("div",{className:"search-container"},r.a.createElement("img",{className:"search-icon",src:"https://cdn-icons-png.flaticon.com/512/54/54481.png",alt:"search-icon"}),r.a.createElement("input",{placeholder:"Search",onChange:this.handleSearch}),a.length>0&&r.a.createElement("div",{className:"search-results"},r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{className:"search-results-row",key:e._id},r.a.createElement(p.b,{to:"/user/".concat(e._id)},r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"user-dp"}),r.a.createElement("span",null,e.name)))}))))),r.a.createElement("div",{className:"right-nav"},t.isLoggedin&&r.a.createElement("div",{className:"user"},r.a.createElement(p.b,{to:"/settings"},r.a.createElement("img",{src:"https://picsum.photos/200/200",alt:"user-dp",id:"user-dp"})),r.a.createElement("span",null,t.user.name)),r.a.createElement("div",{className:"nav-links"},r.a.createElement("ul",null,!t.isLoggedin&&r.a.createElement("li",null,r.a.createElement(p.b,{to:"/login"},"Log in")),t.isLoggedin&&r.a.createElement("li",{onClick:this.logOut},"Log out"),!t.isLoggedin&&r.a.createElement("li",null,r.a.createElement(p.b,{to:"/signup"},"Register"))))))}}]),a}(r.a.Component);var D=Object(o.b)((function(e){return{auth:e.auth,results:e.search.results}}))(F),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.posts,a=e.friends,n=e.isLoggedin;return r.a.createElement("div",{className:"home"},r.a.createElement(L,{posts:t}),n&&r.a.createElement(ee,{friends:a}),n&&r.a.createElement(de,null))}}]),a}(n.Component);var M=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Wittygramm! Visit the home page to enter our network-> "),r.a.createElement("br",null),r.a.createElement("h3",null,"Login/Sign up to get started! "),r.a.createElement("br",null),r.a.createElement("p",null,"If this page keeps popping up, it's most probably your own fault! ;) "))},H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleEmailChange=function(e){n.setState({email:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.handleFormSubmit=function(e){e.preventDefault(),console.log("this.state",n.state);var t=n.state,a=t.email,r=t.password;a&&r&&n.props.dispatch(function(e,t){return function(a){a({type:"LOGIN_START"});var n=f();fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:w({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(console.log("data",e),e.success)return localStorage.setItem("token",e.data.token),void a((t=e.data.user,{type:"LOGIN_SUCCESS",user:t}));var t;a({type:"LOGIN_FAILED",error:e.message})}))}}(a,r))},n.state={email:"",password:""},n}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_AUTH_STATE"})}},{key:"render",value:function(){var e=this.props.auth,t=e.error,a=e.inProgress,n=e.isLoggedin,s=(this.props.location.state||{from:{pathname:"/"}}).from;return n?r.a.createElement(d.a,{to:s}):r.a.createElement("form",{className:"login-form"},r.a.createElement("span",{className:"login-signup-header"},"Log In"),t&&r.a.createElement("div",{className:"alert error-dailog"},t),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"email",placeholder:"Email",required:!0,onChange:this.handleEmailChange,value:this.state.email})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"password",placeholder:"Password",required:!0,onChange:this.handlePasswordChange,value:this.state.password})),r.a.createElement("div",{className:"field"},a?r.a.createElement("button",{onClick:this.handleFormSubmit,disabled:a},"Logging in..."):r.a.createElement("button",{onClick:this.handleFormSubmit,disabled:a},"Log In")))}}]),a}(n.Component);var G=Object(o.b)((function(e){return{auth:e.auth}}))(H),B=a(18),z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e,t){n.setState(Object(B.a)({},e,t))},n.onFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.email,r=t.password,s=t.confirmPassword,c=t.name;a&&r&&s&&c&&(n.props.dispatch({type:"SIGNUP_START"}),n.props.dispatch(P(a,r,s,c)))},n.state={email:"",password:"",name:"",confirmPassword:""},n}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_AUTH_STATE"})}},{key:"render",value:function(){var e=this,t=this.props.auth,a=t.inProgress,n=t.error;return t.isLoggedin?r.a.createElement(d.a,{to:"/"}):r.a.createElement("form",{className:"login-form"},r.a.createElement("span",{className:"login-signup-header"}," Signup"),n&&r.a.createElement("div",{className:"alert error-dailog"},n),r.a.createElement("div",{className:"field"},r.a.createElement("input",{placeholder:"Name",type:"text",required:!0,onChange:function(t){return e.handleInputChange("name",t.target.value)}})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{placeholder:"Email",type:"email",required:!0,onChange:function(t){return e.handleInputChange("email",t.target.value)}})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{placeholder:"Confirm password",type:"password",required:!0,onChange:function(t){return e.handleInputChange("confirmPassword",t.target.value)}})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{placeholder:"Password",type:"password",required:!0,onChange:function(t){return e.handleInputChange("password",t.target.value)}})),r.a.createElement("div",{className:"field"},r.a.createElement("button",{onClick:this.onFormSubmit,disabled:a},"Signup")))}}]),a}(n.Component),q=Object(o.b)((function(e){return{auth:e.auth}}))(z),W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState(Object(B.a)({},e,t))},n.handleSave=function(){var e=n.state,t=e.password,a=e.confirmPassword,r=e.name,s=n.props.auth.user;n.props.dispatch(function(e,t,a,n){return function(r){var s=v();fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(k())},body:w({name:e,password:t,confirm_password:a,id:n})}).then((function(e){return e.json()})).then((function(e){if(console.log("EDIT PROFIle data",e),e.success)return r({type:"EDIT_USER_SUCCESSFUL",user:e.data.user}),void(e.data.token&&localStorage.setItem("token",e.data.token));r({type:"EDIT_USER_SUCCESSFUL",error:e.message})}))}}(r,t,a,s._id))},n.state={name:e.auth.user.name,password:"",confirmPassword:"",editMode:!1},n}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_AUTH_STATE"})}},{key:"render",value:function(){var e=this,t=this.props.auth,a=t.user,n=t.error,s=this.state.editMode;return r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:"https://picsum.photos/200/200",alt:"user-dp"})),n&&r.a.createElement("div",{className:"alert error-dailog"},n),!1===n&&r.a.createElement("div",{className:"alert success-dailog"},"Successfully updated profile!"),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Email"),r.a.createElement("div",{className:"field-value"},a.email)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Name"),s?r.a.createElement("input",{type:"text",onChange:function(t){return e.handleChange("name",t.target.value)},value:this.state.name}):r.a.createElement("div",{className:"field-value"},a.name)),s&&r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"New password"),r.a.createElement("input",{type:"password",onChange:function(t){return e.handleChange("password",t.target.value)},value:this.state.password})),s&&r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Confirm password"),r.a.createElement("input",{type:"password",onChange:function(t){return e.handleChange("confirmPassword",t.target.value)},value:this.state.confirmPassword})),r.a.createElement("div",{className:"btn-grp"},s?r.a.createElement("button",{className:"button save-btn",onClick:this.handleSave},"Save"):r.a.createElement("button",{className:"button edit-btn",onClick:function(){return e.handleChange("editMode",!0)}},"Edit profile"),s&&r.a.createElement("div",{className:"go-back",onClick:function(){return e.handleChange("editMode",!1)}},"Go back")))}}]),a}(n.Component);var K=Object(o.b)((function(e){return{auth:e.auth}}))(W),J=a(20),V=a.n(J),Q=a(40);function X(e){return function(t){t({type:"FETCH_USER_PROFILE"});var a=b(e);fetch(a,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(k())}}).then((function(e){return e.json()})).then((function(e){t({type:"USER_PROFILE_SUCCESS",user:e.data.user})}))}}function Y(e){return function(t){var a=S(e);fetch(a,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(k())}}).then((function(e){return e.json()})).then((function(e){console.log("data",e),t({type:"FETCH_FRIENDS_SUCCESS",friends:e.data.friends})}))}}var Z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).checkIfUserIsAFriend=function(){console.log("this.props",n.props);var e=n.props,t=e.match,a=e.friends,r=t.params.userId;return-1!==a.map((function(e){return e.to_user._id})).indexOf(r)},n.handleAddFriendClick=Object(Q.a)(V.a.mark((function e(){var t,a,r,s,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.userId,a=C(t),r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(k())}},e.next=5,fetch(a,r);case 5:return s=e.sent,e.next=8,s.json();case 8:(c=e.sent).success?(n.setState({success:!0,successMessage:"Added friend successfully!"}),n.props.dispatch({type:"ADD_FRIEND",friend:c.data.friendship})):n.setState({success:null,error:c.message});case 10:case"end":return e.stop()}}),e)}))),n.handleRemoveFriendClick=Object(Q.a)(V.a.mark((function e(){var t,a,r,s,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match,a=O(t.params.userId),r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(k())}},e.next=5,fetch(a,r);case 5:return s=e.sent,e.next=8,s.json();case 8:c=e.sent,console.log("await data",c),c.success?(n.setState({success:!0,successMessage:"Removed friends successfully!"}),n.props.dispatch({type:"REMOVE_FRIEND",userId:t.params.userId})):n.setState({success:null,error:c.message});case 11:case"end":return e.stop()}}),e)}))),n.state={success:null,error:null,successMessage:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match;e.params.userId&&this.props.dispatch(X(e.params.userId))}},{key:"componentDidUpdate",value:function(e){var t=e.match.params,a=this.props.match.params;t&&a&&t.userId!==a.userId&&this.props.dispatch(X(a.userId))}},{key:"render",value:function(){var e=this.props,t=e.match.params,a=e.profile;console.log("this.props",t);var n=a.user;if(a.inProgress)return r.a.createElement("h1",null,"Loading!");var s=this.checkIfUserIsAFriend(),c=this.state,o=c.success,i=c.error,l=c.successMessage;return r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:"https://picsum.photos/200",alt:"user-dp"})),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Name"),r.a.createElement("div",{className:"field-value"},n.name)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Email"),r.a.createElement("div",{className:"field-value"},n.email)),r.a.createElement("div",{className:"btn-grp"},s?r.a.createElement("button",{className:"button save-btn",onClick:this.handleRemoveFriendClick},"Remove Friend"):r.a.createElement("button",{className:"button save-btn",onClick:this.handleAddFriendClick},"Add Friend"),o&&r.a.createElement("div",{className:"alert success-dailog"},l),i&&r.a.createElement("div",{className:"alert error-dailog"},i)))}}]),a}(n.Component);var $=Object(o.b)((function(e){return{profile:e.profile,friends:e.friends}}))(Z),ee=function(e){return r.a.createElement("div",{className:"friends-list"},r.a.createElement("div",{className:"header"},"Friends"),e.friends&&0===e.friends.length&&r.a.createElement("div",{className:"no-friends"},"No friends found!"),e.friends&&e.friends.map((function(e){return r.a.createElement(te,{friend:e.to_user,key:e._id})})))};var te=function(e){return r.a.createElement("div",null,r.a.createElement(p.b,{className:"friends-item",to:"user/".concat(e.friend._id)},r.a.createElement("div",{className:"friends-img"},r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"user-pic"})),r.a.createElement("div",{className:"friends-name"},e.friend.email)))},ae=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleOnClick=function(){var e;n.props.dispatch((e=n.state.content,function(t){var a=N();fetch(a,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(k())},body:w({content:e})}).then((function(e){return e.json()})).then((function(e){console.log("dATA",e),e.success&&t({type:"ADD_POST",post:e.data.post})}))}))},n.handleChange=function(e){n.setState({content:e.target.value})},n.state={content:""},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"create-post"},r.a.createElement("textarea",{className:"add-post",value:this.state.content,onChange:this.handleChange,placeholder:"Share with your network"}),r.a.createElement("div",null,r.a.createElement("button",{id:"add-post-btn",onClick:this.handleOnClick},"Add Post")))}}]),a}(n.Component),ne=Object(o.b)()(ae),re=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleAddComment=function(e){var t=n.state.comment,a=n.props.post;"Enter"===e.key&&(n.props.dispatch(T(t,a._id)),n.setState({comment:""}))},n.handleOnCommentChange=function(e){n.setState({comment:e.target.value})},n.handlePostLike=function(){var e=n.props,t=e.post,a=e.user;n.props.dispatch(A(t._id,"Post",a._id))},n.state={comment:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.post,a=e.user,n=this.state.comment,s=t.likes.includes(a._id);return r.a.createElement("div",{className:"post-wrapper",key:t._id},r.a.createElement("div",{className:"post-header"},r.a.createElement("div",{className:"post-avatar"},r.a.createElement(p.b,{to:"/user/".concat(t.user._id)},r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"user-pic"})),r.a.createElement("div",null,r.a.createElement("span",{className:"post-author"},t.user.name),r.a.createElement("span",{className:"post-time"},"a minute ago"))),r.a.createElement("div",{className:"post-content"},t.content),r.a.createElement("div",{className:"post-actions"},r.a.createElement("button",{className:"post-like no-btn",onClick:this.handlePostLike},s?r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/1076/1076984.png",alt:"like post"}):r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/1077/1077035.png",alt:"likes-icon"}),r.a.createElement("span",null,t.likes.length)),r.a.createElement("div",{className:"post-comments-icon"},r.a.createElement("img",{src:"https://cdn-icons.flaticon.com/png/512/3114/premium/3114810.png?token=exp=1659082588~hmac=a81cc15f217b525b32778fd931d89aa4",alt:"comments-icon"}),r.a.createElement("span",null,t.comments.length))),r.a.createElement("div",{className:"post-comment-box"},r.a.createElement("input",{placeholder:"Start typing a comment",onChange:this.handleOnCommentChange,onKeyPress:this.handleAddComment,value:n})),r.a.createElement("div",{className:"post-comments-list"},t.comments.map((function(e){return r.a.createElement(ce,{comment:e,key:e._id,postId:t._id})})))))}}]),a}(n.Component);var se=Object(o.b)((function(e){return{user:e.auth.user}}))(re);var ce=function(e){var t=e.comment;return r.a.createElement("div",{className:"post-comment-item"},r.a.createElement("div",{className:"post-comment-header"},r.a.createElement("span",{className:"post-comment-author"},t.user.name),r.a.createElement("span",{className:"post-comment-time"},"a minute ago"),r.a.createElement("span",{className:"post-comment-likes"},t.likes.length," likes")),r.a.createElement("div",{className:"post-comment-content"},t.content))},oe=a(13),ie=a(28),le=a(60),ue=a.n(le),me=(a(107),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setupConnections=function(){var e=n.socket,t=Object(ie.a)(n);n.socket.on("connect",(function(){console.log("CONNECTION ESTABLISHED"),e.emit("join_room",{user_email:this.userEmail,chatroom:"codeial"}),e.on("user_joined",(function(e){console.log("NE USER JOINED",e)}))})),n.socket.on("receive_message",(function(e){var a=t.state.messages,n={};n.content=e.message,e.user_email===t.userEmail&&(n.self=!0),t.setState({messages:[].concat(Object(oe.a)(a),[n]),typedMessage:""})}))},n.handleSubmit=function(){var e=n.state.typedMessage;e&&n.userEmail&&n.socket.emit("send_message",{message:e,user_email:n.userEmail,chatroom:"codeial"})},n.state={messages:[],typedMessage:""},n.socket=ue.a.connect("http://54.237.158.65:5000"),n.userEmail=e.user.email,n.userEmail&&n.setupConnections(),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.typedMessage,n=t.messages;return r.a.createElement("div",{className:"chat-container"},r.a.createElement("div",{className:"chat-header"},"Chat",r.a.createElement("img",{src:"https://www.iconsdb.com/icons/preview/white/minus-5-xxl.png",alt:"",height:17})),r.a.createElement("div",{className:"chat-messages"},n.map((function(e){return r.a.createElement("div",{className:e.self?"chat-bubble self-chat":"chat-bubble other-chat"},e.content)}))),r.a.createElement("div",{className:"chat-footer"},r.a.createElement("input",{type:"text",value:a,onChange:function(t){return e.setState({typedMessage:t.target.value})}}),r.a.createElement("button",{onClick:this.handleSubmit},"Submit")))}}]),a}(n.Component));var de=Object(o.b)((function(e){return{user:e.auth.user}}))(me),pe=a(61),he=function(e){var t=e.isLoggedin,a=e.path,n=e.component;return r.a.createElement(d.b,{path:a,render:function(e){return console.log("props",e),console.log("isLoggedin",t),t?r.a.createElement(n,e):r.a.createElement(d.a,{to:{pathname:"/login",state:{from:e.location}}})}})},fe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(I());var e=k();if(e){var t=pe(e);console.log("user",t),this.props.dispatch(function(e){return{type:"AUTHENTICATE_USER",user:e}}({email:t.email,_id:t._id,name:t.name})),this.props.dispatch(Y())}}},{key:"render",value:function(){var e=this.props,t=e.posts,a=e.auth,n=e.friends;return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(x,Object.assign({},e,{posts:t,friends:n,isLoggedin:a.isLoggedin}))}}),r.a.createElement(d.b,{path:"/login",component:G}),r.a.createElement(d.b,{path:"/signup",component:q}),r.a.createElement(he,{path:"/settings",component:K,isLoggedin:a.isLoggedin}),r.a.createElement(he,{path:"/user/:userId",component:$,isLoggedin:a.isLoggedin}),r.a.createElement(d.b,{component:M}))))}}]),a}(r.a.Component);var Ee=Object(o.b)((function(e){return{posts:e.posts,auth:e.auth,friends:e.friends}}))(fe),ve=a(15),ge=a(62),be=a(63),Se=a.n(be),Ce=a(7);var Oe={user:{},error:null,isLoggedin:!1,inProgress:!1};var Ne={user:{},error:null,success:null,inProgress:!1};var _e=[];var je={results:[]};var ye=Object(ve.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_POSTS":return t.posts;case"ADD_POST":return[t.post].concat(Object(oe.a)(e));case"ADD_COMMENT":var a=e.map((function(e){return e._id===t.postId?Object(Ce.a)({},e,{comments:[t.comment].concat(Object(oe.a)(e.comments))}):e}));return a;case"UPDATE_POST_LIKE":var n=e.map((function(e){return e._id===t.postId?Object(Ce.a)({},e,{likes:[].concat(Object(oe.a)(e.likes),[t.userId])}):e}));return n;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_AUTH_STATE":return Object(Ce.a)({},e,{error:null});case"LOGIN_START":case"SIGNUP_START":return Object(Ce.a)({},e,{inProgress:!0});case"LOGIN_SUCCESS":case"SIGNUP_SUCCESS":return Object(Ce.a)({},e,{user:t.user,isLoggedin:!0,inProgress:!1,error:null});case"LOGIN_FAILED":case"SIGNUP_FAILED":return Object(Ce.a)({},e,{inProgress:!1,error:t.error});case"AUTHENTICATE_USER":return Object(Ce.a)({},e,{user:t.user,isLoggedin:!0});case"LOG_OUT":return Object(Ce.a)({},e,{user:{},isLoggedin:!1});case"EDIT_USER_SUCCESSFUL":return Object(Ce.a)({},e,{user:t.user,error:!1});case"EDIT_USER_FAILED":return Object(Ce.a)({},e,{error:t.error});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_PROFILE_SUCCESS":return Object(Ce.a)({},e,{success:!0,user:t.user,inProgress:!1});case"USER_PROFILE_FAILURE":return Object(Ce.a)({},e,{error:t.error,inProgress:!1});case"FETCH_USER_PROFILE":return Object(Ce.a)({},e,{inProgress:!0});default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FRIENDS_SUCCESS":return Object(oe.a)(t.friends);case"ADD_FRIEND":return e.concat(t.friend);case"REMOVE_FRIEND":var a=e.filter((function(e){return e.to_user._id!==t.userId}));return a;default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SEARCH_RESULTS_SUCCESS":return Object(Ce.a)({},e,{results:t.users});default:return e}}});var we=Object(ve.d)(ye,Object(ve.a)(ge.a,Se.a));c.a.render(r.a.createElement(o.a,{store:we},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null))),document.getElementById("root"))},64:function(e,t,a){e.exports=a(110)},73:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.ebea3882.chunk.js.map