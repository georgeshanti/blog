(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{10:function(e,t,n){e.exports={"post-container":"styles_post-container__2qd3I",back:"styles_back__2HTr3",post:"styles_post__11nBO",content:"styles_content__1zCbM",footer:"styles_footer__1zQm_",name:"styles_name__2Kac9",designation:"styles_designation__1lU6F"}},14:function(e,t,n){e.exports={"post-card":"styles_post-card__10CLf",post:"styles_post__Da1dy",description:"styles_description__1xKdP"}},16:function(e,t,n){e.exports={index:"styles_index__1Y_7R",list:"styles_list__2zl3S"}},25:function(e,t,n){e.exports=n(38)},30:function(e,t,n){},31:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(21),c=n.n(s),r=(n(30),n(31),n(32),n(11)),l=n(9),i=n(5),m=n(6),u=n(7),p=n(8),d=n(16),h=n.n(d),f=n(14),g=n.n(f),_=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return console.log({backgroundImage:this.props.img}),o.a.createElement(r.b,{to:"/post/"+this.props.tag},o.a.createElement("div",{className:g.a["post-card"]+" "+["col-xl-3","col-lg-4","col-md-6","col-sm-6","col-12"].join(" ")},o.a.createElement("div",{className:g.a.post},o.a.createElement("img",{src:this.props.img}),o.a.createElement("div",{className:g.a.description},o.a.createElement("h4",null,this.props.title),o.a.createElement("h7",null,this.props.date)))))}}]),n}(o.a.Component),v=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={posts:[]},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/blog/posts.json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({posts:t})}))}},{key:"render",value:function(){var e=this.state.posts.map((function(e){return o.a.createElement(_,{title:e.title,date:e.date,img:e.img,tag:e.tag})}));return o.a.createElement("div",{className:h.a.index},o.a.createElement("h1",null,"George Thomas Shanti - Blog"),o.a.createElement("div",{className:h.a.list+" col-11"},e))}}]),n}(o.a.Component),b=n(24),E=n(10),y=n.n(E),j=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={title:"",date:"",content:"",img:""},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.tag;fetch("/blog/posts/".concat(t,".html")).then((function(e){return e.text()})).then((function(t){e.setState({content:t})})),fetch("/blog/posts.json").then((function(e){return e.json()})).then((function(n){var a,o=Object(b.a)(n);try{for(o.s();!(a=o.n()).done;){var s=a.value;if(console.log(s),s.tag==t){e.setState({title:s.title,date:s.date,img:s.img});break}}}catch(c){o.e(c)}finally{o.f()}}))}},{key:"render",value:function(){return o.a.createElement("div",{className:y.a["post-container"]},o.a.createElement("span",{className:y.a.back},o.a.createElement(r.b,{to:"/"},"\u2190")),o.a.createElement("div",{className:y.a.post},o.a.createElement("img",{src:this.state.img}),o.a.createElement("div",{className:y.a.content},o.a.createElement("h1",null,this.state.title),o.a.createElement("h7",null,this.state.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.content}}),o.a.createElement("br",null),o.a.createElement("div",{className:y.a.footer},o.a.createElement("div",{className:y.a.name},"George Thomas Shanti",o.a.createElement("br",null),o.a.createElement("span",{className:y.a.designation},"Software Engineer, Savemo")),o.a.createElement("img",{src:"/blog/george.jpg"})))))}}]),n}(o.a.Component),O=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(o.a.Component),k=Object(l.f)(O);var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(r.a,null,o.a.createElement(k,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/post/:tag",component:j}),o.a.createElement(l.a,{path:"/",component:v})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.1b20618d.chunk.js.map