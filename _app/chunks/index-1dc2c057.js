import{S as u,i as c,s as f,F as _,e as m,c as d,a as h,d as r,b as p,g,G as $,H as y,I as b,q as k,o as v}from"./vendor-074a1651.js";function w(o){let s,n;const l=o[1].default,e=_(l,o,o[0],null);return{c(){s=m("h1"),e&&e.c(),this.h()},l(t){s=d(t,"H1",{class:!0});var a=h(s);e&&e.l(a),a.forEach(r),this.h()},h(){p(s,"class","mr-auto ml-auto mt-6 mb-4 text-size-3rem")},m(t,a){g(t,s,a),e&&e.m(s,null),n=!0},p(t,[a]){e&&e.p&&(!n||a&1)&&$(e,l,t,t[0],n?b(l,t[0],a,null):y(t[0]),null)},i(t){n||(k(e,t),n=!0)},o(t){v(e,t),n=!1},d(t){t&&r(s),e&&e.d(t)}}}function K(o,s,n){let{$$slots:l={},$$scope:e}=s;return o.$$set=t=>{"$$scope"in t&&n(0,e=t.$$scope)},[e,l]}class q extends u{constructor(s){super();c(this,s,K,w,f,{})}}const M=()=>Math.random().toString(16).substring(2);function E(o=[],s=M){let n=new Map(o.map(t=>[t,s()]));function l(t){const a=n.get(t);if(a)return a;const i=s();return n.set(t,i),i}function e(t){n.forEach((a,i)=>{t.includes(i)||n.delete(i)})}return{get:l,sync:e}}export{E as L,q as T};
