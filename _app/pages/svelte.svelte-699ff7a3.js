import{P as ls,v as j,D as es,S as $,i as C,s as w,e as h,t as x,k as W,c as m,a as _,h as L,m as I,d as F,g as y,K as k,j as M,Q as S,R as T,T as R,U,V as v,n as V,W as H,p as K,q as d,o as g,N,O as f,X as O,Y as b,Z as P,_ as Q,l as q,$ as X,w as B,x as A,y as E,B as D,b as Y,E as Z,a0 as z}from"../chunks/vendor-41529c01.js";import{L as os}from"../chunks/index-80948b27.js";import{T as rs,D as ps}from"../chunks/Demo-c3e45933.js";const cs=200,G=[[1,2,3],[2,3,4],[3,4,1],[4,1,2],[4,3,2],[2,3,4]];function J(){const p=es(0),n=ls(p,s=>G[s]);return j(()=>{let s=setInterval(()=>{p.update(a=>a+1),p.subscribe(a=>{if(a>=G.length-1){t();return}})},cs);function t(){!s||(clearInterval(s),s=null)}return()=>{t()}}),n}function ss(p,n,s){const t=p.slice();return t[2]=n[s],t}function ns(p,n){let s,t=n[2]+"",a,r,c,l,e=f,o;return{key:p,first:null,c(){s=h("li"),a=x(t),r=W(),this.h()},l(i){s=m(i,"LI",{});var u=_(s);a=L(u,t),r=I(u),u.forEach(F),this.h()},h(){this.first=s},m(i,u){y(i,s,u),k(s,a),k(s,r),o=!0},p(i,u){n=i,(!o||u&1)&&t!==(t=n[2]+"")&&M(a,t)},r(){l=s.getBoundingClientRect()},f(){S(s),e(),T(s,l)},a(){e(),e=R(s,l,O,{duration:1e3})},i(i){o||(i&&U(()=>{c||(c=v(s,b,{duration:1e3},!0)),c.run(1)}),o=!0)},o(i){i&&(c||(c=v(s,b,{duration:1e3},!1)),c.run(0)),o=!1},d(i){i&&F(s),i&&c&&c.end()}}}function is(p){let n,s=[],t=new Map,a,r=p[0];const c=l=>l[2];for(let l=0;l<r.length;l+=1){let e=ss(p,r,l),o=c(e);t.set(o,s[l]=ns(o,e))}return{c(){n=h("ul");for(let l=0;l<s.length;l+=1)s[l].c()},l(l){n=m(l,"UL",{});var e=_(n);for(let o=0;o<s.length;o+=1)s[o].l(e);e.forEach(F)},m(l,e){y(l,n,e);for(let o=0;o<s.length;o+=1)s[o].m(n,null);a=!0},p(l,[e]){if(e&1){r=l[0],V();for(let o=0;o<s.length;o+=1)s[o].r();s=H(s,e,c,1,l,r,t,n,P,ns,null,ss);for(let o=0;o<s.length;o+=1)s[o].a();K()}},i(l){if(!a){for(let e=0;e<r.length;e+=1)d(s[e]);a=!0}},o(l){for(let e=0;e<s.length;e+=1)g(s[e]);a=!1},d(l){l&&F(n);for(let e=0;e<s.length;e+=1)s[e].d()}}}function Fs(p,n,s){let t;const a=J();return N(p,a,r=>s(0,t=r)),[t,a]}class us extends ${constructor(n){super();C(this,n,Fs,is,w,{})}}function ts(p,n,s){const t=p.slice();return t[4]=n[s],t}function as(p,n){let s,t=n[4]+"",a,r,c,l,e=f,o;return{key:p,first:null,c(){s=h("li"),a=x(t),r=W(),this.h()},l(i){s=m(i,"LI",{});var u=_(s);a=L(u,t),r=I(u),u.forEach(F),this.h()},h(){this.first=s},m(i,u){y(i,s,u),k(s,a),k(s,r),o=!0},p(i,u){n=i,(!o||u&1)&&t!==(t=n[4]+"")&&M(a,t)},r(){l=s.getBoundingClientRect()},f(){S(s),e(),T(s,l)},a(){e(),e=R(s,l,O,{duration:1e3})},i(i){o||(i&&U(()=>{c||(c=v(s,b,{duration:1e3},!0)),c.run(1)}),o=!0)},o(i){i&&(c||(c=v(s,b,{duration:1e3},!1)),c.run(0)),o=!1},d(i){i&&F(s),i&&c&&c.end()}}}function fs(p){let n,s=[],t=new Map,a,r=p[0];const c=l=>l[2](l[4]);for(let l=0;l<r.length;l+=1){let e=ts(p,r,l),o=c(e);t.set(o,s[l]=as(o,e))}return{c(){n=h("ul");for(let l=0;l<s.length;l+=1)s[l].c()},l(l){n=m(l,"UL",{});var e=_(n);for(let o=0;o<s.length;o+=1)s[o].l(e);e.forEach(F)},m(l,e){y(l,n,e);for(let o=0;o<s.length;o+=1)s[o].m(n,null);a=!0},p(l,[e]){if(e&1){r=l[0],V();for(let o=0;o<s.length;o+=1)s[o].r();s=H(s,e,c,1,l,r,t,n,P,as,null,ts);for(let o=0;o<s.length;o+=1)s[o].a();K()}},i(l){if(!a){for(let e=0;e<r.length;e+=1)d(s[e]);a=!0}},o(l){for(let e=0;e<s.length;e+=1)g(s[e]);a=!1},d(l){l&&F(n);for(let e=0;e<s.length;e+=1)s[e].d()}}}function ys(p,n,s){let t,a=J();N(p,a,l=>s(0,t=l));const{get:r,sync:c}=os(t);return p.$$.update=()=>{p.$$.dirty&1&&c(t)},[t,a,r]}class hs extends ${constructor(n){super();C(this,n,ys,fs,w,{})}}function ms(p){let n,s=`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #FF79C6">script</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">lang</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">&quot;</span><span style="color: #50FA7B; font-style: italic">ts</span><span style="color: #F8F8F2">&quot;&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  import { flip } from &quot;svelte/animate&quot;;</span></span>
<span class="line"><span style="color: #F8F8F2">  import { fade } from &quot;svelte/transition&quot;;</span></span>
<span class="line"><span style="color: #F8F8F2">  import useFrame from &quot;./useFrame&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  const frame = useFrame();</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #FF79C6">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  {</span><span style="color: #FF79C6">#each</span><span style="color: #F8F8F2"> $frame </span><span style="color: #FF79C6">as</span><span style="color: #F8F8F2"> item (item)}</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #FF79C6">li</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FF79C6">animate:</span><span style="color: #F8F8F2">flip</span><span style="color: #FF79C6">=</span><span style="color: #F1FA8C">{{</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">duration</span><span style="color: #F8F8F2">: 1000 }}</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FF79C6">transition:</span><span style="color: #8BE9FD; font-style: italic">fade</span><span style="color: #F8F8F2">|</span><span style="color: #8BE9FD">local</span><span style="color: #FF79C6">=</span><span style="color: #F1FA8C">{{</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">duration</span><span style="color: #F8F8F2">: 1000 }}</span></span>
<span class="line"><span style="color: #F8F8F2">    &gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      {item}</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #FF79C6">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  {</span><span style="color: #FF79C6">/each</span><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre>`,t;return{c(){n=new Q,t=q(),this.h()},l(a){n=X(a),t=q(),this.h()},h(){n.a=t},m(a,r){n.m(s,a,r),y(a,t,r)},p:f,i:f,o:f,d(a){a&&F(t),a&&n.d()}}}class _s extends ${constructor(n){super();C(this,n,null,ms,w,{})}}function ds(p){let n,s=`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #FF79C6">script</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">lang</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">&quot;</span><span style="color: #50FA7B; font-style: italic">ts</span><span style="color: #F8F8F2">&quot;&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  import Likftc from &quot;@vdustr/likftc&quot;;</span></span>
<span class="line"><span style="color: #F8F8F2">  import { flip } from &quot;svelte/animate&quot;;</span></span>
<span class="line"><span style="color: #F8F8F2">  import { fade } from &quot;svelte/transition&quot;;</span></span>
<span class="line"><span style="color: #F8F8F2">  import useFrame from &quot;./useFrame&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  let frame = useFrame();</span></span>
<span class="line"><span style="color: #F8F8F2">  const { get, sync } = Likftc($frame);</span></span>
<span class="line"><span style="color: #F8F8F2">  $: {</span></span>
<span class="line"><span style="color: #F8F8F2">    sync($frame);</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #FF79C6">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  {</span><span style="color: #FF79C6">#each</span><span style="color: #F8F8F2"> $frame </span><span style="color: #FF79C6">as</span><span style="color: #F8F8F2"> item (get(item))}</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #FF79C6">li</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FF79C6">animate:</span><span style="color: #F8F8F2">flip</span><span style="color: #FF79C6">=</span><span style="color: #F1FA8C">{{</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">duration</span><span style="color: #F8F8F2">: 1000 }}</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #FF79C6">transition:</span><span style="color: #8BE9FD; font-style: italic">fade</span><span style="color: #F8F8F2">|</span><span style="color: #8BE9FD">local</span><span style="color: #FF79C6">=</span><span style="color: #F1FA8C">{{</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">duration</span><span style="color: #F8F8F2">: 1000 }}</span></span>
<span class="line"><span style="color: #F8F8F2">    &gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      {item}</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #FF79C6">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  {</span><span style="color: #FF79C6">/each</span><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre>`,t;return{c(){n=new Q,t=q(),this.h()},l(a){n=X(a),t=q(),this.h()},h(){n.a=t},m(a,r){n.m(s,a,r),y(a,t,r)},p:f,i:f,o:f,d(a){a&&F(t),a&&n.d()}}}class gs extends ${constructor(n){super();C(this,n,null,ds,w,{})}}function $s(p){let n="Svelte Demo",s;return{c(){s=x(n)},l(t){s=L(t,n)},m(t,a){y(t,s,a)},p:f,d(t){t&&F(s)}}}function Cs(p){let n;return{c(){n=h("div"),this.h()},l(s){n=m(s,"DIV",{slot:!0}),_(n).forEach(F),this.h()},h(){Y(n,"slot","with")},m(s,t){y(s,n,t),p[5](n)},p:f,d(s){s&&F(n),p[5](null)}}}function ws(p){let n;return{c(){n=h("div"),this.h()},l(s){n=m(s,"DIV",{slot:!0}),_(n).forEach(F),this.h()},h(){Y(n,"slot","without")},m(s,t){y(s,n,t),p[4](n)},p:f,d(s){s&&F(n),p[4](null)}}}function ks(p){let n,s;return n=new gs({props:{slot:"code-with"}}),{c(){B(n.$$.fragment)},l(t){A(n.$$.fragment,t)},m(t,a){E(n,t,a),s=!0},p:f,i(t){s||(d(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){D(n,t)}}}function vs(p){let n,s;return n=new _s({props:{slot:"code-without"}}),{c(){B(n.$$.fragment)},l(t){A(n.$$.fragment,t)},m(t,a){E(n,t,a),s=!0},p:f,i(t){s||(d(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){D(n,t)}}}function bs(p){let n,s,t,a;return n=new rs({props:{$$slots:{default:[$s]},$$scope:{ctx:p}}}),t=new ps({props:{$$slots:{"code-without":[vs],"code-with":[ks],without:[ws],with:[Cs]},$$scope:{ctx:p}}}),t.$on("refreshWith",p[2]),t.$on("refreshWithout",p[3]),{c(){B(n.$$.fragment),s=W(),B(t.$$.fragment)},l(r){A(n.$$.fragment,r),s=I(r),A(t.$$.fragment,r)},m(r,c){E(n,r,c),y(r,s,c),E(t,r,c),a=!0},p(r,[c]){const l={};c&64&&(l.$$scope={dirty:c,ctx:r}),n.$set(l);const e={};c&67&&(e.$$scope={dirty:c,ctx:r}),t.$set(e)},i(r){a||(d(n.$$.fragment,r),d(t.$$.fragment,r),a=!0)},o(r){g(n.$$.fragment,r),g(t.$$.fragment,r),a=!1},d(r){D(n,r),r&&F(s),D(t,r)}}}const Ds=!0;function qs(p,n,s){let t,a;async function r(){await Z(),new hs({target:t})}async function c(){await Z(),new us({target:a})}j(()=>{r(),c()});function l(o){z[o?"unshift":"push"](()=>{a=o,s(1,a)})}function e(o){z[o?"unshift":"push"](()=>{t=o,s(0,t)})}return[t,a,r,c,l,e]}class xs extends ${constructor(n){super();C(this,n,qs,bs,w,{})}}export{xs as default,Ds as prerender};