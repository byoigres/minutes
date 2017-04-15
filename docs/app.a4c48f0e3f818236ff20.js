webpackJsonp([3],{"./src/Messages.js":function(n,t,e){"use strict";var o=e("./node_modules/react-intl/locale-data/en.js"),s=e.n(o),a=e("./node_modules/react-intl/locale-data/es.js"),r=e.n(a),c=e("./node_modules/react-intl/lib/index.es.js"),i=e("./src/locales/en.json"),u=e.n(i),l=e("./src/locales/es.json"),p=e.n(l),d=e("./src/markdown/what-is-this.en.md"),m=e.n(d),f=e("./src/markdown/what-is-this.es.md"),h=e.n(f),b=e("./src/markdown/about.en.md"),j=e.n(b),y=e("./src/markdown/about.es.md"),v=e.n(y);u.a["content.what-is-this"]=m.a,u.a["content.about"]=j.a,p.a["content.what-is-this"]=h.a,p.a["content.about"]=v.a,e.i(c.addLocaleData)(s.a),e.i(c.addLocaleData)(r.a);var _={en:u.a,es:p.a};t.a=_},"./src/Routes.js":function(n,t,e){"use strict";var o=e("./node_modules/preact/dist/preact.js"),s=(e.n(o),e("./node_modules/react-router-dom/es/index.js")),a=e("./src/containers/ScrollToTop/index.js"),r=e("./src/containers/MainLayout/index.js"),c=e("./src/containers/AsyncComponent/index.js");t.a=e.i(o.h)(a.a,null,e.i(o.h)(s.Switch,null,e.i(o.h)(s.Route,{exact:!0,path:"/",component:e.i(c.a)(function(){return e.e(0).then(e.bind(null,"./src/pages/Home.js")).then(function(n){return n.default})})}),e.i(o.h)(r.a,null,e.i(o.h)(s.Route,{exact:!0,path:"/what-is-this",component:e.i(c.a)(function(){return e.e(1).then(e.bind(null,"./src/pages/WhatIsThis.js")).then(function(n){return n.default})})}),e.i(o.h)(s.Route,{exact:!0,path:"/about",component:e.i(c.a)(function(){return e.e(2).then(e.bind(null,"./src/pages/About.js")).then(function(n){return n.default})})}))))},"./src/components/Footer/Footer.js":function(n,t,e){"use strict";var o=e("./node_modules/preact/dist/preact.js"),s=(e.n(o),e("./node_modules/react-intl/lib/index.es.js")),a=e("./src/components/Footer/styles.css"),r=e.n(a),c=e("./src/components/LanguageSelector/index.js"),i=function(){return e.i(o.h)("div",{className:r.a.footer},e.i(o.h)("div",{className:r.a["footer-container"]},e.i(o.h)(s.FormattedHTMLMessage,{id:"app.footer.text"}),e.i(o.h)(c.a,null)))};i.displayName="Footer",t.a=i},"./src/components/Footer/index.js":function(n,t,e){"use strict";var o=e("./src/components/Footer/Footer.js");e.d(t,"a",function(){return o.a})},"./src/components/Footer/styles.css":function(n,t){n.exports={footer:"_2r78udqe","footer-container":"hs0ndIsW"}},"./src/components/LanguageSelector/LanguageSelector.js":function(n,t,e){"use strict";var o=e("./node_modules/preact/dist/preact.js"),s=(e.n(o),e("./src/components/LanguageSelector/styles.css")),a=e.n(s),r=function(n){localStorage.setItem("__minutes_display_locale__",n),window.location.reload()},c=function(){return r("en")},i=function(){return r("es")},u=function(){return e.i(o.h)("div",{className:a.a["language-selector"]},e.i(o.h)("span",{onClick:i},"Español")," | ",e.i(o.h)("span",{onClick:c},"Ingles"))};u.displayName="LanguageSelector",t.a=u},"./src/components/LanguageSelector/index.js":function(n,t,e){"use strict";var o=e("./src/components/LanguageSelector/LanguageSelector.js");e.d(t,"a",function(){return o.a})},"./src/components/LanguageSelector/styles.css":function(n,t){n.exports={"language-selector":"_1bsnIXNk"}},"./src/components/Navbar/Navbar.js":function(n,t,e){"use strict";var o=e("./node_modules/preact/dist/preact.js"),s=(e.n(o),e("./node_modules/react-router-dom/es/index.js")),a=e("./node_modules/react-intl/lib/index.es.js"),r=e("./src/components/Navbar/styles.css"),c=e.n(r),i=function(n){var t=n.brandText,r=n.isTransparent;return e.i(o.h)("div",{className:c.a.navbar+" "+(r?c.a["navbar-transparent"]:"")},e.i(o.h)("div",{className:c.a["navbar-container"]},e.i(o.h)("div",{className:c.a["navbar-brand"]},e.i(o.h)(s.Link,{to:"/"},t)),e.i(o.h)("div",{className:c.a["navbar-list"]},e.i(o.h)(s.Link,{to:"/what-is-this",className:c.a["navbar-item"]},e.i(o.h)(a.FormattedMessage,{id:"app.menu.what-is-this"})),e.i(o.h)(s.Link,{to:"/about",className:c.a["navbar-item"]},e.i(o.h)(a.FormattedMessage,{id:"app.menu.about"})))))};i.displayName="Navbar",t.a=i},"./src/components/Navbar/index.js":function(n,t,e){"use strict";var o=e("./src/components/Navbar/Navbar.js");e.d(t,"a",function(){return o.a})},"./src/components/Navbar/styles.css":function(n,t){n.exports={navbar:"_29MW1nOE","navbar-transparent":"_1DVTRkHB","navbar-container":"_2uv2UN06","navbar-brand":"DqQMcCL6","navbar-list":"_2q4-FjFt","navbar-item":"_2sKSVaLI","navbar-link":"_1jUW6pDB"}},"./src/containers/App/App.js":function(n,t,e){"use strict";var o=e("./node_modules/preact/dist/preact.js"),s=(e.n(o),e("./node_modules/react-router-dom/es/index.js")),a=e("./node_modules/react-intl/lib/index.es.js"),r=e("./src/containers/App/styles.css"),c=(e.n(r),e("./src/Routes.js")),i=e("./src/Messages.js"),u=function(){return e.i(o.h)(a.IntlProvider,{locale:navigator.language,messages:i.a[localStorage.getItem("__minutes_display_locale__")||"en"]},e.i(o.h)(s.HashRouter,{hashType:"hashbang"},c.a))};t.a=u},"./src/containers/App/index.js":function(n,t,e){"use strict";var o=e("./src/containers/App/App.js");e.d(t,"a",function(){return o.a})},"./src/containers/App/styles.css":function(n,t){n.exports={container:"_24SDnMsR"}},"./src/containers/AsyncComponent/AsyncComponent.js":function(n,t,e){"use strict";function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function s(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function a(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}var r=e("./node_modules/preact/dist/preact.js"),c=(e.n(r),Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n});t.a=function(n,t){return function(i){function u(n){o(this,u);var t=s(this,i.call(this,n));return t.Component=null,t.state={Component:u.Component},t}return a(u,i),u.prototype.componentWillMount=function(){var t=this;this.state.Component||n().then(function(n){u.Component=n,t.setState({Component:n})})},u.prototype.render=function(){return this.state.Component?e.i(r.h)(this.state.Component,c({},this.props,t)):null},u}(r.Component)}},"./src/containers/AsyncComponent/index.js":function(n,t,e){"use strict";var o=e("./src/containers/AsyncComponent/AsyncComponent.js");e.d(t,"a",function(){return o.a})},"./src/containers/MainLayout/MainLayout.js":function(n,t,e){"use strict";var o=e("./node_modules/preact/dist/preact.js"),s=(e.n(o),e("./node_modules/react-intl/lib/index.es.js")),a=e("./src/containers/MainLayout/styles.css"),r=e.n(a),c=e("./src/components/Navbar/index.js"),i=e("./src/components/Footer/index.js"),u=function(n){var t=n.children;return e.i(o.h)("div",{className:r.a["main-layout"]},e.i(o.h)(c.a,{brandText:e.i(o.h)(s.FormattedMessage,{id:"app.brand-text"})}),e.i(o.h)("div",{className:r.a.container},t),e.i(o.h)(i.a,null))};t.a=u},"./src/containers/MainLayout/index.js":function(n,t,e){"use strict";var o=e("./src/containers/MainLayout/MainLayout.js");e.d(t,"a",function(){return o.a})},"./src/containers/MainLayout/styles.css":function(n,t){n.exports={"main-layout":"_48K-x7LV"}},"./src/containers/ScrollToTop/ScrollToTop.js":function(n,t,e){"use strict";function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function s(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function a(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}var r=e("./node_modules/preact/dist/preact.js"),c=(e.n(r),e("./node_modules/react-router-dom/es/index.js")),i=e("./src/containers/ScrollToTop/styles.css"),u=e.n(i),l=function(n){function t(){return o(this,t),s(this,n.apply(this,arguments))}return a(t,n),t.prototype.componentDidUpdate=function(n){this.props.location!==n.location&&window.scrollTo(0,0)},t.prototype.render=function(n){var t=n.children;return e.i(r.h)("div",{className:u.a["scroll-to-top"]},t)},t}(r.Component);t.a=e.i(c.withRouter)(l)},"./src/containers/ScrollToTop/index.js":function(n,t,e){"use strict";var o=e("./src/containers/ScrollToTop/ScrollToTop.js");e.d(t,"a",function(){return o.a})},"./src/containers/ScrollToTop/styles.css":function(n,t){n.exports={"scroll-to-top":"_2b_u5lvR"}},"./src/index.js":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("./node_modules/preact/dist/preact.js"),s=(e.n(o),e("./src/containers/App/index.js"));e.i(o.render)(e.i(o.h)(s.a,null),document.body)},"./src/locales/en.json":function(n,t){n.exports={"app.title":"Remaining minutes of the day","app.brand-text":"Minutes","app.menu.what-is-this":"What is this?","app.menu.about":"About","app.footer.text":'Made with ❤️ by <a href="http://twitter.com/byoigres">@byoigres</a>'}},"./src/locales/es.json":function(n,t){n.exports={"app.title":"Minutos restantes del dia","app.brand-text":"Minutos","app.menu.what-is-this":"¿Qué es esto?","app.menu.about":"Acerca de","app.footer.text":'Hecho con ❤️ por <a href="http://twitter.com/byoigres">@byoigres</a>'}}},["./src/index.js"]);