!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/rmotd/",t(t.s="./src/index.js")}({"./node_modules/preact/dist/preact.js":function(e,t,n){!function(e,n){n(t)}(0,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var r,o,i,s,a;for(a=arguments.length;a-- >2;)q.push(arguments[a]);for(n&&n.children&&(q.length||q.push(n.children),delete n.children);q.length;)if((i=q.pop())instanceof Array)for(a=i.length;a--;)q.push(i[a]);else null!=i&&i!==!0&&i!==!1&&("number"==typeof i&&(i=String(i)),s="string"==typeof i,s&&o?r[r.length-1]+=i:((r||(r=[])).push(i),o=s));var l=new t(e,n||void 0,r||A);return L.vnode&&L.vnode(l),l}function r(e,t){if(t)for(var n in t)e[n]=t[n];return e}function o(e){return r({},e)}function i(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function s(e){return"function"==typeof e}function a(e){return"string"==typeof e}function l(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function c(e,t){return n(e.nodeName,r(o(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function u(e,t,n){var r=t.split(".");return function(t){for(var o=t&&t.target||this,s={},l=s,c=a(n)?i(t,n):o.nodeName?o.type.match(/^che|rad/)?o.checked:o.value:t,u=0;u<r.length-1;u++)l=l[r[u]]||(l[r[u]]=!u&&e.state[r[u]]||{});l[r[u]]=c,e.setState(s)}}function f(e){!e._dirty&&(e._dirty=!0)&&1==Y.push(e)&&(L.debounceRendering||R)(p)}function p(){var e,t=Y;for(Y=[];e=t.pop();)e._dirty&&T(e)}function d(e){var t=e&&e.nodeName;return t&&s(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(_(e),t||V)}function m(e,t){return a(t)?e instanceof Text:a(t.nodeName)?!e._componentConstructor&&v(e,t.nodeName):s(t.nodeName)?!e._componentConstructor||e._componentConstructor===t.nodeName||d(t):void 0}function v(e,t){return e.normalizedNodeName===t||H(e.nodeName)===H(t)}function _(e){var t=o(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n,r,o){if("className"===t&&(t="class"),"class"===t&&r&&"object"==typeof r&&(r=l(r)),"key"===t);else if("class"!==t||o)if("style"===t){if((!r||a(r)||a(n))&&(e.style.cssText=r||""),r&&"object"==typeof r){if(!a(n))for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"!=typeof r[i]||K[i]?r[i]:r[i]+"px"}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var c=e._listeners||(e._listeners={});t=H(t.substring(2)),r?c[t]||e.addEventListener(t,x,!!J[t]):c[t]&&e.removeEventListener(t,x,!!J[t]),c[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)g(e,t,null==r?"":r),null!=r&&r!==!1||e.removeAttribute(t);else{var u=o&&t.match(/^xlink\:?(.+)/);null==r||r===!1?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",H(u[1])):e.removeAttribute(t):"object"==typeof r||s(r)||(u?e.setAttributeNS("http://www.w3.org/1999/xlink",H(u[1]),r):e.setAttribute(t,r))}else e.className=r||""}function g(e,t,n){try{e[t]=n}catch(e){}}function x(e){return this._listeners[e.type](L.event&&L.event(e)||e)}function N(e){if(y(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||H(e.nodeName);(Q[t]||(Q[t]=[])).push(e)}}function C(e,t){var n=H(e),r=Q[n]&&Q[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return r.normalizedNodeName=n,r}function w(){for(var e;e=X.pop();)L.afterMount&&L.afterMount(e),e.componentDidMount&&e.componentDidMount()}function k(e,t,n,r,o,i){Z++||($=o&&void 0!==o.ownerSVGElement,ee=e&&!(F in e));var s=M(e,t,n,r);return o&&s.parentNode!==o&&o.appendChild(s),--Z||(ee=!1,i||w()),s}function M(e,t,n,r){for(var o=t&&t.attributes&&t.attributes.ref;d(t);)t=h(t,n);if(null==t&&(t=""),a(t))return e&&e instanceof Text&&e.parentNode?e.nodeValue!=t&&(e.nodeValue=t):(e&&j(e),e=document.createTextNode(t)),e;if(s(t.nodeName))return D(e,t,n,r);var i=e,l=String(t.nodeName),c=$,u=t.children;if($="svg"===l||"foreignObject"!==l&&$,e){if(!v(e,l)){for(i=C(l,$);e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),j(e)}}else i=C(l,$);var f=i.firstChild,p=i[F];if(!p){i[F]=p={};for(var m=i.attributes,_=m.length;_--;)p[m[_].name]=m[_].value}return!ee&&u&&1===u.length&&"string"==typeof u[0]&&f&&f instanceof Text&&!f.nextSibling?f.nodeValue!=u[0]&&(f.nodeValue=u[0]):(u&&u.length||f)&&S(i,u,n,r,!!p.dangerouslySetInnerHTML),U(i,t.attributes,p),o&&(p.ref=o)(i),$=c,i}function S(e,t,n,r,o){var i,s,a,l,c=e.childNodes,u=[],f={},p=0,d=0,h=c.length,v=0,_=t&&t.length;if(h)for(var b=0;b<h;b++){var g=c[b],x=g[F],N=_?(s=g._component)?s.__key:x?x.key:null:null;null!=N?(p++,f[N]=g):(ee||o||x||g instanceof Text)&&(u[v++]=g)}if(_)for(var b=0;b<_;b++){a=t[b],l=null;var N=a.key;if(null!=N)p&&N in f&&(l=f[N],f[N]=void 0,p--);else if(!l&&d<v)for(i=d;i<v;i++)if((s=u[i])&&m(s,a)){l=s,u[i]=void 0,i===v-1&&v--,i===d&&d++;break}l=M(l,a,n,r),l&&l!==e&&(b>=h?e.appendChild(l):l!==c[b]&&(l===c[b+1]&&y(c[b]),e.insertBefore(l,c[b]||null)))}if(p)for(var b in f)f[b]&&j(f[b]);for(;d<=v;)(l=u[v--])&&j(l)}function j(e,t){var n=e._component;if(n)E(n,!t);else{e[F]&&e[F].ref&&e[F].ref(null),t||N(e);for(var r;r=e.lastChild;)j(r,t)}}function U(e,t,n){var r;for(r in n)t&&r in t||null==n[r]||b(e,r,n[r],n[r]=void 0,$);if(t)for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||b(e,r,n[r],n[r]=t[r],$)}function P(e){var t=e.constructor.name,n=te[t];n?n.push(e):te[t]=[e]}function O(e,t,n){var r=new e(t,n),o=te[e.name];if(W.call(r,t,n),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function B(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&L.syncComponentUpdates===!1&&e.base?f(e):T(e,1,o)),e.__ref&&e.__ref(e))}function T(e,t,n,i){if(!e._disable){var a,l,c,u,f=e.props,p=e.state,m=e.context,v=e.prevProps||f,y=e.prevState||p,b=e.prevContext||m,g=e.base,x=e.nextBase,N=g||x,C=e._component;if(g&&(e.props=v,e.state=y,e.context=b,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(f,p,m)===!1?a=!0:e.componentWillUpdate&&e.componentWillUpdate(f,p,m),e.props=f,e.state=p,e.context=m),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!a){for(e.render&&(l=e.render(f,p,m)),e.getChildContext&&(m=r(o(m),e.getChildContext()));d(l);)l=h(l,m);var M,S,U=l&&l.nodeName;if(s(U)){var P=_(l);c=C,c&&c.constructor===U&&P.key==c.__key?B(c,P,1,m):(M=c,c=O(U,P,m),c.nextBase=c.nextBase||x,c._parentComponent=e,e._component=c,B(c,P,0,m),T(c,1,n,!0)),S=c.base}else u=N,M=C,M&&(u=e._component=null),(N||1===t)&&(u&&(u._component=null),S=k(u,l,m,n||!g,N&&N.parentNode,!0));if(N&&S!==N&&c!==C){var D=N.parentNode;D&&S!==D&&(D.replaceChild(S,N),M||(N._component=null,j(N)))}if(M&&E(M,S!==N),e.base=S,S&&!i){for(var W=e,G=e;G=G._parentComponent;)(W=G).base=S;S._component=W,S._componentConstructor=W.constructor}}!g||n?X.unshift(e):a||(e.componentDidUpdate&&e.componentDidUpdate(v,y,b),L.afterUpdate&&L.afterUpdate(e));var q,A=e._renderCallbacks;if(A)for(;q=A.pop();)q.call(e);Z||i||w()}}function D(e,t,n,r){for(var o=e&&e._component,i=o,s=e,a=o&&e._componentConstructor===t.nodeName,l=a,c=_(t);o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;return o&&l&&(!r||o._component)?(B(o,c,3,n,r),e=o.base):(i&&!a&&(E(i,!0),e=s=null),o=O(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,s=null),B(o,c,1,n,r),e=o.base,s&&e!==s&&(s._component=null,j(s))),e}function E(e,t){L.beforeUnmount&&L.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;if(r)E(r,t);else if(n){n[F]&&n[F].ref&&n[F].ref(null),e.nextBase=n,t&&(y(n),P(e));for(var o;o=n.lastChild;)j(o,!t)}e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function W(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function G(e,t,n){return k(n,e,{},!1,t)}var L={},q=[],A=[],z={},H=function(e){return z[e]||(z[e]=e.toLowerCase())},I="undefined"!=typeof Promise&&Promise.resolve(),R=I?function(e){I.then(e)}:setTimeout,V={},F="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",K={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},J={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},Y=[],Q={},X=[],Z=0,$=!1,ee=!1,te={};r(W.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=u(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=o(n)),r(n,s(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(){T(this,2)},render:function(){}}),e.h=n,e.cloneElement=c,e.Component=W,e.render=G,e.rerender=p,e.options=L})},"./src/components/FloatingButton.js":function(e,t,n){"use strict";var r=n("./node_modules/preact/dist/preact.js"),o=(n.n(r),n("./src/styles/index.css"));n.n(o)},"./src/components/MinutesCounter.js":function(e,t,n){"use strict";var r=n("./node_modules/preact/dist/preact.js"),o=(n.n(r),n("./src/styles/index.css")),i=n.n(o),s=function(e){var t=e.children;return n.i(r.h)("div",{className:i.a["minutes-counter"]},t)};s.displayName="MinutesCounter",t.a=s},"./src/components/SquareGrid.js":function(e,t,n){"use strict";var r=n("./node_modules/preact/dist/preact.js"),o=(n.n(r),n("./src/styles/index.css")),i=n.n(o),s=function(){return n.i(r.h)("div",{className:i.a["square-grid"]},n.i(r.h)("svg",{width:"100%",height:"100%",viewBox:"0,0,100%,100%",xmlns:"http://www.w3.org/2000/svg"},n.i(r.h)("defs",null,n.i(r.h)("pattern",{id:"smallGrid",width:"1.388888888888889%",height:"5%",patternUnits:"userSpaceOnUse"},n.i(r.h)("path",{fill:"#2e99e5",d:"M0 0h960v960H0z",stroke:"gray","stroke-width":"0.5"})),n.i(r.h)("pattern",{id:"grid",width:"8.333333333333333%",height:"50%",patternUnits:"userSpaceOnUse"},n.i(r.h)("rect",{width:"100%",height:"100%",fill:"url(#smallGrid)"}),n.i(r.h)("path",{fill:"none",d:"M0 0h960v960H0z",stroke:"gray","stroke-width":"2"}))),n.i(r.h)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})))};s.displayName="SquareGrid",t.a=s},"./src/containers/MinutesContainer.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n("./node_modules/preact/dist/preact.js"),a=(n.n(s),n("./src/styles/index.css")),l=n.n(a),c=n("./src/components/MinutesCounter.js"),u=(n("./src/components/FloatingButton.js"),n("./src/components/SquareGrid.js")),f=function(e){return Intl.NumberFormat().format(e)},p=function(e){function t(){r(this,t);var n=o(this,e.call(this));return n.totalMinutes=1440,n.state={remainingMinutes:0},n}return i(t,e),t.prototype.componentDidMount=function(){var e=this;this.timer=setInterval(function(){var t=new Date,n=60*t.getHours()+t.getMinutes(),r=e.totalMinutes-n;e.setState({remainingMinutes:r})},1e3)},t.prototype.componentWillUnmount=function(){clearInterval(this.timer)},t.prototype.render=function(e,t){return n.i(s.h)("div",{className:l.a["minutes-container"]},n.i(s.h)(u.a,null),n.i(s.h)("h1",{className:l.a.header},"Remaining Minutes of the Day"),n.i(s.h)("blockquote",null,"We all have the exact same 1440 minutes per day. You don’t get more or less than Mother Teresa, Leonardo Da Vinci, Steve Jobs, or Martin Luther King Jr. Use it wisely."),n.i(s.h)(c.a,null,f(this.state.remainingMinutes)),n.i(s.h)("p",{className:l.a["minutes-description"]},"minutes left of the day"))},t}(s.Component);p.displayName="MinutesContainer",t.a=p},"./src/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/preact/dist/preact.js"),o=(n.n(r),n("./src/styles/index.css")),i=n.n(o),s=n("./src/containers/MinutesContainer.js"),a=function(){return n.i(r.h)("div",{className:i.a.content},n.i(r.h)(s.a,null))};n.i(r.render)(n.i(r.h)(a,null),document.body)},"./src/styles/index.css":function(e,t){e.exports={content:"YiYIRQah","minutes-container":"AQkwVXu8","minutes-description":"_-7hNU_NG","info-content":"_3P4S-AMJ","minutes-counter":"_1KB64g9B","floatig-button-container":"OOvE4KAG","floatig-button":"_3P20n8KD","square-grid":"p3dLZPUa","square-grid-square":"_6JvRjo3K",header:"_3d6hFvyq"}}});
//# sourceMappingURL=app.map.js