import{a5 as c,a6 as F,a7 as x,a8 as q,S as A,i as B,s as w,a0 as v,l as m,a1 as k,g as i,M as e,d as r,w as d,k as O,x as C,m as S,y as h,q as E,o as $,B as g,v as H,t as V,h as P,e as D,c as I,a as L,b as W,E as b,a9 as R,a2 as K}from"../chunks/vendor-64951b7f.js";import{L as z,T as G}from"../chunks/index-59f88ceb.js";import{D as J}from"../chunks/Demo-791c984f.js";const _=new WeakMap,j=l=>{l.classList.add("animated","fadeIn"),_.set(l,!0),l.addEventListener("animationend",()=>{_.delete(l),l.classList.remove("animated","fadeIn","slow")})},M=(l,s,a)=>{(_.get(l)||!1)&&(l.classList.remove("fadeOut"),_.delete(l)),l.classList.add("animated","fadeOut","slow");const o=()=>{a(),l.removeEventListener("animationend",o)};l.addEventListener("animationend",o)},Q=200,N=[[1,2,3],[2,3,4],[3,4,1],[4,1,2],[4,3,2],[2,3,4]];function T(){const[l,s]=c.exports.useState(0),a=c.exports.useMemo(()=>N[l],[l]);return c.exports.useEffect(()=>{let n;function o(){!n||(clearInterval(n),n=null)}return n=setInterval(()=>{s(t=>{const p=t+1;return p>=N.length-1&&o(),p})},Q),()=>{o()}},[]),a}function U(){const l=T();return F.createElement(x,{flipKey:l.join(",")},F.createElement("ul",null,l.map(s=>F.createElement(q,{key:s,flipId:s,onAppear:j,onExit:M},F.createElement("li",null,s)))))}function X(l){const{current:{get:s,sync:a}}=c.exports.useRef(z(l));return c.exports.useEffect(()=>{a(l)},[l,a]),{get:s}}function Y(){const l=T(),{get:s}=X(l);return F.createElement(x,{flipKey:l.join(",")},F.createElement("ul",null,l.map(a=>{const n=s(a);return F.createElement(q,{key:n,flipId:n,onAppear:j,onExit:M},F.createElement("li",null,a))})))}function Z(l){let s,a=`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> { ReactNode } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">react</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> React </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">react</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> { Flipped, Flipper } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">react-flip-toolkit</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> { onAppear, onExit } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./transition</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> useFrame </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./useFrame</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF79C6">export</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">default</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">With</span><span style="color: #F8F8F2">()</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">ReactNode</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> frame </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useFrame</span><span style="color: #F8F8F2">();</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FF79C6">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #8BE9FD; font-style: italic">Flipper</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">flipKey</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{frame.</span><span style="color: #50FA7B">join</span><span style="color: #F8F8F2">(</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">,</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">)}&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">        {frame.</span><span style="color: #50FA7B">map</span><span style="color: #F8F8F2">((</span><span style="color: #FFB86C; font-style: italic">item</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">          &lt;</span><span style="color: #8BE9FD; font-style: italic">Flipped</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">key</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{item} </span><span style="color: #50FA7B; font-style: italic">flipId</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{item} </span><span style="color: #50FA7B; font-style: italic">onAppear</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{onAppear} </span><span style="color: #50FA7B; font-style: italic">onExit</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{onExit}&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">            &lt;</span><span style="color: #FF79C6">li</span><span style="color: #F8F8F2">&gt;{item}&lt;/</span><span style="color: #FF79C6">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">          &lt;/</span><span style="color: #8BE9FD; font-style: italic">Flipped</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">        ))}</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;/</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #8BE9FD; font-style: italic">Flipper</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  );</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre>`,n;return{c(){s=new v,n=m(),this.h()},l(o){s=k(o),n=m(),this.h()},h(){s.a=n},m(o,t){s.m(a,o,t),i(o,n,t)},p:e,i:e,o:e,d(o){o&&r(n),o&&s.d()}}}class ss extends A{constructor(s){super();B(this,s,null,Z,w,{})}}function ns(l){let s,a=`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> useLikftc </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">@likftc/react</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> React, { ReactNode } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">react</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> { Flipped, Flipper } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">react-flip-toolkit</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> { onAppear, onExit } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./transition</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> useFrame </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./useFrame</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF79C6">export</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">default</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">With</span><span style="color: #F8F8F2">()</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">ReactNode</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> frame </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useFrame</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> { get } </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useLikftc</span><span style="color: #F8F8F2">(frame);</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FF79C6">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #8BE9FD; font-style: italic">Flipper</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">flipKey</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{frame.</span><span style="color: #50FA7B">join</span><span style="color: #F8F8F2">(</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">,</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">)}&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">        {frame.</span><span style="color: #50FA7B">map</span><span style="color: #F8F8F2">((</span><span style="color: #FFB86C; font-style: italic">item</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> mapKey </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">get</span><span style="color: #F8F8F2">(item);</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #FF79C6">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">            &lt;</span><span style="color: #8BE9FD; font-style: italic">Flipped</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #50FA7B; font-style: italic">key</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{mapKey}</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #50FA7B; font-style: italic">flipId</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{mapKey}</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #50FA7B; font-style: italic">onAppear</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{onAppear}</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #50FA7B; font-style: italic">onExit</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{onExit}</span></span>
<span class="line"><span style="color: #F8F8F2">            &gt;</span></span>
<span class="line"><span style="color: #F8F8F2">              &lt;</span><span style="color: #FF79C6">li</span><span style="color: #F8F8F2">&gt;{item}&lt;/</span><span style="color: #FF79C6">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">            &lt;/</span><span style="color: #8BE9FD; font-style: italic">Flipped</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">          );</span></span>
<span class="line"><span style="color: #F8F8F2">        })}</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;/</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #8BE9FD; font-style: italic">Flipper</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  );</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre>`,n;return{c(){s=new v,n=m(),this.h()},l(o){s=k(o),n=m(),this.h()},h(){s.a=n},m(o,t){s.m(a,o,t),i(o,n,t)},p:e,i:e,o:e,d(o){o&&r(n),o&&s.d()}}}class as extends A{constructor(s){super();B(this,s,null,ns,w,{})}}function ls(l){let s="React FLIP Toolkit Demo",a;return{c(){a=V(s)},l(n){a=P(n,s)},m(n,o){i(n,a,o)},p:e,d(n){n&&r(a)}}}function os(l){let s;return{c(){s=D("div"),this.h()},l(a){s=I(a,"DIV",{slot:!0}),L(s).forEach(r),this.h()},h(){W(s,"slot","with")},m(a,n){i(a,s,n),l[5](s)},p:e,d(a){a&&r(s),l[5](null)}}}function ts(l){let s;return{c(){s=D("div"),this.h()},l(a){s=I(a,"DIV",{slot:!0}),L(s).forEach(r),this.h()},h(){W(s,"slot","without")},m(a,n){i(a,s,n),l[4](s)},p:e,d(a){a&&r(s),l[4](null)}}}function ps(l){let s,a;return s=new as({props:{slot:"code-with"}}),{c(){d(s.$$.fragment)},l(n){C(s.$$.fragment,n)},m(n,o){h(s,n,o),a=!0},p:e,i(n){a||(E(s.$$.fragment,n),a=!0)},o(n){$(s.$$.fragment,n),a=!1},d(n){g(s,n)}}}function es(l){let s,a;return s=new ss({props:{slot:"code-without"}}),{c(){d(s.$$.fragment)},l(n){C(s.$$.fragment,n)},m(n,o){h(s,n,o),a=!0},p:e,i(n){a||(E(s.$$.fragment,n),a=!0)},o(n){$(s.$$.fragment,n),a=!1},d(n){g(s,n)}}}function Fs(l){let s,a,n,o;return s=new G({props:{$$slots:{default:[ls]},$$scope:{ctx:l}}}),n=new J({props:{$$slots:{"code-without":[es],"code-with":[ps],without:[ts],with:[os]},$$scope:{ctx:l}}}),n.$on("refreshWith",l[2]),n.$on("refreshWithout",l[3]),{c(){d(s.$$.fragment),a=O(),d(n.$$.fragment)},l(t){C(s.$$.fragment,t),a=S(t),C(n.$$.fragment,t)},m(t,p){h(s,t,p),i(t,a,p),h(n,t,p),o=!0},p(t,[p]){const u={};p&64&&(u.$$scope={dirty:p,ctx:t}),s.$set(u);const f={};p&67&&(f.$$scope={dirty:p,ctx:t}),n.$set(f)},i(t){o||(E(s.$$.fragment,t),E(n.$$.fragment,t),o=!0)},o(t){$(s.$$.fragment,t),$(n.$$.fragment,t),o=!1},d(t){g(s,t),t&&r(a),g(n,t)}}}const us=!0;function rs(l,s,a){let n,o;async function t(){await b(),R.exports.render(c.exports.createElement(Y),n)}async function p(){await b(),R.exports.render(c.exports.createElement(U),o)}H(()=>{t(),p()});function u(y){K[y?"unshift":"push"](()=>{o=y,a(1,o)})}function f(y){K[y?"unshift":"push"](()=>{n=y,a(0,n)})}return[n,o,t,p,u,f]}class fs extends A{constructor(s){super();B(this,s,rs,Fs,w,{})}}export{fs as default,us as prerender};
