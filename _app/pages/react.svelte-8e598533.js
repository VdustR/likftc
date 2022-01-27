import{a6 as D,a7 as F,a8 as c,a9 as k,aa as q,S as A,i as B,s as _,_ as v,l as m,$ as R,g as y,O as t,d as r,w as C,k as T,x as d,m as H,y as h,q as E,o as g,B as $,v as J,t as V,h as z,e as K,c as W,a as b,b as I,E as M,ab as S,a0 as U}from"../chunks/vendor-41529c01.js";import{L as G}from"../chunks/index-80948b27.js";import{T as P,D as Q}from"../chunks/Demo-c3e45933.js";const w=new WeakMap,x=new WeakMap;function N(a){const s=x.get(a);!s||(x.delete(a),D({onUpdate:l=>{a.style.opacity=`${1-Number(l)}`},onComplete:s}))}const X=a=>{D({onUpdate:s=>{a.style.opacity=`${s}`}})},Y=a=>{w.set(a,!0)},Z=a=>{w.delete(a),N(a)},ss=(a,s,l)=>{x.set(a,l),w.get(a)||N(a)},j=async({hideEnteringElements:a,animateEnteringElements:s,animateExitingElements:l,animateFlippedElements:n})=>{a(),n(),l(),s()},ns=200,L=[[1,2,3],[2,3,4],[3,4,1],[4,1,2],[4,3,2],[2,3,4]];function O(){const[a,s]=F.exports.useState(0),l=F.exports.useMemo(()=>L[a],[a]);return F.exports.useEffect(()=>{let n;function p(){!n||(clearInterval(n),n=null)}return n=setInterval(()=>{s(o=>{const e=o+1;return e>=L.length-1&&p(),e})},ns),()=>{p()}},[]),l}function as(){const a=O();return c.createElement(k,{flipKey:a.join(","),handleEnterUpdateDelete:j},c.createElement("ul",null,a.map(s=>c.createElement(q,{key:s,flipId:s},c.createElement("li",null,s)))))}function ls(){const a=O(),{current:{get:s,sync:l}}=F.exports.useRef(G(a));F.exports.useEffect(()=>{l(a)},[a]);const n=F.exports.useMemo(()=>JSON.stringify(a.map(p=>({key:p,mapKey:s(p)}))),[a,s]);return c.createElement(k,{flipKey:n,handleEnterUpdateDelete:j},c.createElement("ul",null,a.map(p=>{const o=s(p);return c.createElement(q,{key:o,flipId:o,onAppear:X,onExit:ss,onStart:Y,onComplete:Z},c.createElement("li",null,p))})))}function ps(a){let s,l=`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> { ReactNode } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">react</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> React </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">react</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> { Flipped, Flipper } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">react-flip-toolkit</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> { handleEnterUpdateDelete } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./transition</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> useFrame </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./useFrame</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">React;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF79C6">export</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">default</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">With</span><span style="color: #F8F8F2">()</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">ReactNode</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> frame </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useFrame</span><span style="color: #F8F8F2">();</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FF79C6">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #8BE9FD; font-style: italic">Flipper</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #50FA7B; font-style: italic">flipKey</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{frame.</span><span style="color: #50FA7B">join</span><span style="color: #F8F8F2">(</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">,</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">)}</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #50FA7B; font-style: italic">handleEnterUpdateDelete</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{handleEnterUpdateDelete}</span></span>
<span class="line"><span style="color: #F8F8F2">    &gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">        {frame.</span><span style="color: #50FA7B">map</span><span style="color: #F8F8F2">((</span><span style="color: #FFB86C; font-style: italic">item</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">          &lt;</span><span style="color: #8BE9FD; font-style: italic">Flipped</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">key</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{item} </span><span style="color: #50FA7B; font-style: italic">flipId</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{item}&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">            &lt;</span><span style="color: #FF79C6">li</span><span style="color: #F8F8F2">&gt;{item}&lt;/</span><span style="color: #FF79C6">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">          &lt;/</span><span style="color: #8BE9FD; font-style: italic">Flipped</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">        ))}</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;/</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #8BE9FD; font-style: italic">Flipper</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  );</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre>`,n;return{c(){s=new v,n=m(),this.h()},l(p){s=R(p),n=m(),this.h()},h(){s.a=n},m(p,o){s.m(l,p,o),y(p,n,o)},p:t,i:t,o:t,d(p){p&&r(n),p&&s.d()}}}class os extends A{constructor(s){super();B(this,s,null,ps,_,{})}}function es(a){let s,l=`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> Likftc </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">@vdustr/likftc</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> React, { ReactNode, useEffect, useMemo, useRef } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">react</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> { Flipped, Flipper } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">react-flip-toolkit</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  handleEnterUpdateDelete,</span></span>
<span class="line"><span style="color: #F8F8F2">  onAppear,</span></span>
<span class="line"><span style="color: #F8F8F2">  onComplete,</span></span>
<span class="line"><span style="color: #F8F8F2">  onExit,</span></span>
<span class="line"><span style="color: #F8F8F2">  onStart,</span></span>
<span class="line"><span style="color: #F8F8F2">} </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./transition</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> useFrame </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./useFrame</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">React;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF79C6">export</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">default</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">With</span><span style="color: #F8F8F2">()</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">ReactNode</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> frame </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useFrame</span><span style="color: #F8F8F2">();</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #FFB86C; font-style: italic">current</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> { get, sync },</span></span>
<span class="line"><span style="color: #F8F8F2">  } </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useRef</span><span style="color: #F8F8F2">(</span><span style="color: #50FA7B">Likftc</span><span style="color: #F8F8F2">(frame));</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #50FA7B">useEffect</span><span style="color: #F8F8F2">(() </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #50FA7B">sync</span><span style="color: #F8F8F2">(frame);</span></span>
<span class="line"><span style="color: #F8F8F2">  }, [frame]);</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> flipKey </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useMemo</span><span style="color: #F8F8F2">(</span></span>
<span class="line"><span style="color: #F8F8F2">    () </span><span style="color: #FF79C6">=&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #BD93F9">JSON</span><span style="color: #F8F8F2">.</span><span style="color: #8BE9FD">stringify</span><span style="color: #F8F8F2">(</span></span>
<span class="line"><span style="color: #F8F8F2">        frame.</span><span style="color: #50FA7B">map</span><span style="color: #F8F8F2">((</span><span style="color: #FFB86C; font-style: italic">key</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> ({</span></span>
<span class="line"><span style="color: #F8F8F2">          key,</span></span>
<span class="line"><span style="color: #F8F8F2">          mapKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">get</span><span style="color: #F8F8F2">(key),</span></span>
<span class="line"><span style="color: #F8F8F2">        }))</span></span>
<span class="line"><span style="color: #F8F8F2">      ),</span></span>
<span class="line"><span style="color: #F8F8F2">    [frame, get]</span></span>
<span class="line"><span style="color: #F8F8F2">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #FF79C6">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #8BE9FD; font-style: italic">Flipper</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #50FA7B; font-style: italic">flipKey</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{flipKey}</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #50FA7B; font-style: italic">handleEnterUpdateDelete</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{handleEnterUpdateDelete}</span></span>
<span class="line"><span style="color: #F8F8F2">    &gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">        {frame.</span><span style="color: #50FA7B">map</span><span style="color: #F8F8F2">((</span><span style="color: #FFB86C; font-style: italic">item</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> mapKey </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">get</span><span style="color: #F8F8F2">(item);</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #FF79C6">return</span><span style="color: #F8F8F2"> (</span></span>
<span class="line"><span style="color: #F8F8F2">            &lt;</span><span style="color: #8BE9FD; font-style: italic">Flipped</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #50FA7B; font-style: italic">key</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{mapKey}</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #50FA7B; font-style: italic">flipId</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{mapKey}</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #50FA7B; font-style: italic">onAppear</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{onAppear}</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #50FA7B; font-style: italic">onExit</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{onExit}</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #50FA7B; font-style: italic">onStart</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{onStart}</span></span>
<span class="line"><span style="color: #F8F8F2">              </span><span style="color: #50FA7B; font-style: italic">onComplete</span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">{onComplete}</span></span>
<span class="line"><span style="color: #F8F8F2">            &gt;</span></span>
<span class="line"><span style="color: #F8F8F2">              &lt;</span><span style="color: #FF79C6">li</span><span style="color: #F8F8F2">&gt;{item}&lt;/</span><span style="color: #FF79C6">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">            &lt;/</span><span style="color: #8BE9FD; font-style: italic">Flipped</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">          );</span></span>
<span class="line"><span style="color: #F8F8F2">        })}</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;/</span><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #8BE9FD; font-style: italic">Flipper</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  );</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre>`,n;return{c(){s=new v,n=m(),this.h()},l(p){s=R(p),n=m(),this.h()},h(){s.a=n},m(p,o){s.m(l,p,o),y(p,n,o)},p:t,i:t,o:t,d(p){p&&r(n),p&&s.d()}}}class ts extends A{constructor(s){super();B(this,s,null,es,_,{})}}function Fs(a){let s="React Demo",l;return{c(){l=V(s)},l(n){l=z(n,s)},m(n,p){y(n,l,p)},p:t,d(n){n&&r(l)}}}function cs(a){let s;return{c(){s=K("div"),this.h()},l(l){s=W(l,"DIV",{slot:!0}),b(s).forEach(r),this.h()},h(){I(s,"slot","with")},m(l,n){y(l,s,n),a[5](s)},p:t,d(l){l&&r(s),a[5](null)}}}function rs(a){let s;return{c(){s=K("div"),this.h()},l(l){s=W(l,"DIV",{slot:!0}),b(s).forEach(r),this.h()},h(){I(s,"slot","without")},m(l,n){y(l,s,n),a[4](s)},p:t,d(l){l&&r(s),a[4](null)}}}function ys(a){let s,l;return s=new ts({props:{slot:"code-with"}}),{c(){C(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,p){h(s,n,p),l=!0},p:t,i(n){l||(E(s.$$.fragment,n),l=!0)},o(n){g(s.$$.fragment,n),l=!1},d(n){$(s,n)}}}function is(a){let s,l;return s=new os({props:{slot:"code-without"}}),{c(){C(s.$$.fragment)},l(n){d(s.$$.fragment,n)},m(n,p){h(s,n,p),l=!0},p:t,i(n){l||(E(s.$$.fragment,n),l=!0)},o(n){g(s.$$.fragment,n),l=!1},d(n){$(s,n)}}}function fs(a){let s,l,n,p;return s=new P({props:{$$slots:{default:[Fs]},$$scope:{ctx:a}}}),n=new Q({props:{$$slots:{"code-without":[is],"code-with":[ys],without:[rs],with:[cs]},$$scope:{ctx:a}}}),n.$on("refreshWith",a[2]),n.$on("refreshWithout",a[3]),{c(){C(s.$$.fragment),l=T(),C(n.$$.fragment)},l(o){d(s.$$.fragment,o),l=H(o),d(n.$$.fragment,o)},m(o,e){h(s,o,e),y(o,l,e),h(n,o,e),p=!0},p(o,[e]){const f={};e&64&&(f.$$scope={dirty:e,ctx:o}),s.$set(f);const u={};e&67&&(u.$$scope={dirty:e,ctx:o}),n.$set(u)},i(o){p||(E(s.$$.fragment,o),E(n.$$.fragment,o),p=!0)},o(o){g(s.$$.fragment,o),g(n.$$.fragment,o),p=!1},d(o){$(s,o),o&&r(l),$(n,o)}}}const hs=!0;function us(a,s,l){let n,p;async function o(){await M(),S.exports.render(F.exports.createElement(ls),n)}async function e(){await M(),S.exports.render(F.exports.createElement(as),p)}J(()=>{o(),e()});function f(i){U[i?"unshift":"push"](()=>{p=i,l(1,p)})}function u(i){U[i?"unshift":"push"](()=>{n=i,l(0,n)})}return[n,p,o,e,f,u]}class Es extends A{constructor(s){super();B(this,s,us,fs,_,{})}}export{Es as default,hs as prerender};
