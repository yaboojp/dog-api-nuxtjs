(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(t,e,n){"use strict";var r=n(148),c=n(149),o=n(150),l=n.n(o),f=new(function(){function t(){Object(r.a)(this,t),this.apiBase="https://dog.ceo/api"}return Object(c.a)(t,[{key:"breeds",value:function(){return l.a.get("".concat(this.apiBase,"/breeds/list/all")).then(function(t){return t.data.message}).catch(function(t){return{error:t}})}},{key:"dogs",value:function(t){return l.a.get("".concat(this.apiBase,"/breed/").concat(t,"/images")).then(function(t){return t.data.message.map(function(t){return{url:t,like:0}})}).catch(function(t){return{error:t}})}}]),t}());e.a=f},175:function(t,e,n){"use strict";n.r(e);n(46);var r=n(6),c=n(146),o=n(32),l={fetch:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,t.next=3,c.a.breeds();case 3:r=t.sent,n.commit("breed_list_update",r);case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),computed:Object(o.b)(["breed_list"])},f=n(15),component=Object(f.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"columns is-multiline"},t._l(t.breed_list,function(e,i){return n("div",{key:i,staticClass:"column is-2"},[n("nuxt-link",{staticClass:"button",attrs:{to:{path:"dogs/"+i}}},[t._v(t._s(i))])],1)}),0)])},[],!1,null,null,null);e.default=component.exports}}]);