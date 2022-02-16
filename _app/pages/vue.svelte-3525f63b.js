import{ab as Ms,ac as Os,ad as Ps,ae as Us,af as Es,ag as T,ah as qs,ai as ks,aj as Z,ak as vs,al as _s,am as Bs,an as ws,ao as bs,ap as Gs,a2 as Js,S as ss,i as ls,s as ts,a0 as j,l as as,a1 as M,g as r,M as g,d as p,F as Rs,e as C,t as _,k as d,c as A,a as E,h as $,m as h,b as ns,J as i,G as zs,H as Ks,I as Ns,q as B,o as w,w as D,x,y as L,B as W,v as Qs,E as Ds,aq as xs,a3 as Ls}from"../chunks/vendor-01245463.js";import{L as Xs,S as Ys,T as Zs,A as sl}from"../chunks/index-c5dc1599.js";import{D as ll}from"../chunks/Demo-4d48abb6.js";const tl=200,Ws=[[1,2,3],[2,3,4],[3,4,1],[4,1,2],[4,3,2],[2,3,4]];function Is(){const o=Ms(0),s=Os(()=>Ws[o.value]);let a;function l(){!a||(clearInterval(a),a=null)}return Ps(()=>{a=setInterval(()=>{if(o.value++,o.value>=Ws.length-1){l();return}},tl)}),Us(l),s}var Ss=(o,s)=>{const a=o.__vccOpts||o;for(const[l,n]of s)a[l]=n;return a};const al=Es({setup(o){const s=Is();return(a,l)=>(T(),qs(ws,{name:"list-complete",tag:"ul"},{default:ks(()=>[(T(!0),Z(Bs,null,vs(_s(s),n=>(T(),Z("li",{key:n,class:"list-complete-item"},bs(n),1))),128))]),_:1}))}});var nl=Ss(al,[["__scopeId","data-v-2e3552a6"]]);function ol(o,s){const{get:a,sync:l}=Xs(typeof o=="function"?o():o.value,s);return Gs(o,n=>{l(n)}),{get:a}}const el=Es({setup(o){let s=Is();const{get:a}=ol(s,Js);return(l,n)=>(T(),qs(ws,{name:"list-complete",tag:"ul"},{default:ks(()=>[(T(!0),Z(Bs,null,vs(_s(s),F=>(T(),Z("li",{key:_s(a)(F),class:"list-complete-item"},bs(F),1))),128))]),_:1}))}});var pl=Ss(el,[["__scopeId","data-v-172efdf6"]]);function Fl(o){let s,a=`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #FF79C6">script</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">ts</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">setup</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> useFrame </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./useFrame</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> frame </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useFrame</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #FF79C6">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #FF79C6">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #50FA7B; font-style: italic">transition-group</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">name</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">list-complete</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">tag</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">ul</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #50FA7B; font-style: italic">li</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">v-for</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">item in frame</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2"> :</span><span style="color: #50FA7B; font-style: italic">key</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">item</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">class</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">list-complete-item</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      {{ </span><span style="color: #50FA7B; font-style: italic">item</span><span style="color: #F8F8F2"> }}</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #50FA7B; font-style: italic">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #50FA7B; font-style: italic">transition-group</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #FF79C6">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #FF79C6">style</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">scoped</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">css</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">src</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./style.css</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">&gt;&lt;/</span><span style="color: #FF79C6">style</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre>`,l;return{c(){s=new j,l=as(),this.h()},l(n){s=M(n),l=as(),this.h()},h(){s.a=l},m(n,F){s.m(a,n,F),r(n,l,F)},p:g,i:g,o:g,d(n){n&&p(l),n&&s.d()}}}class cl extends ss{constructor(s){super();ls(this,s,null,Fl,ts,{})}}function rl(o){let s,a=`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #FF79C6">script</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">ts</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">setup</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> useLikftc </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">@likftc/vue</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> useFrame </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./useFrame</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> { v4 } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">uuid</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF79C6">let</span><span style="color: #F8F8F2"> frame </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useFrame</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> { get } </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useLikftc</span><span style="color: #F8F8F2">(frame, v4);</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #FF79C6">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #FF79C6">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #50FA7B; font-style: italic">transition-group</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">name</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">list-complete</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">tag</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">ul</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #50FA7B; font-style: italic">li</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">v-for</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">item in frame</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2"> :</span><span style="color: #50FA7B; font-style: italic">key</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">get(item)</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">class</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">list-complete-item</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      {{ </span><span style="color: #50FA7B; font-style: italic">item</span><span style="color: #F8F8F2"> }}</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #50FA7B; font-style: italic">li</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #50FA7B; font-style: italic">transition-group</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #FF79C6">template</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #FF79C6">style</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">scoped</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">css</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B; font-style: italic">src</span><span style="color: #F8F8F2">=</span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">./style.css</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">&gt;&lt;/</span><span style="color: #FF79C6">style</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span></code></pre>`,l;return{c(){s=new j,l=as(),this.h()},l(n){s=M(n),l=as(),this.h()},h(){s.a=l},m(n,F){s.m(a,n,F),r(n,l,F)},p:g,i:g,o:g,d(n){n&&p(l),n&&s.d()}}}class yl extends ss{constructor(s){super();ls(this,s,null,rl,ts,{})}}const il=o=>({}),Vs=o=>({});function ul(o){let s,a,l,n,F='<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #F8F8F2">npm install @likftc/core @likftc/vue</span></span></code></pre>',u,e,y,f,k,Hs=`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> { get } </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useLikftc</span><span style="color: #F8F8F2">(keys);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #6272A4">// custom generator</span></span>
<span class="line"><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> { v4 } </span><span style="color: #FF79C6">from</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">&quot;</span><span style="color: #F1FA8C">uuid</span><span style="color: #E9F284">&quot;</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">generator</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">v4</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> { get } </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">useLikftc</span><span style="color: #F8F8F2">(keys, generator);</span></span></code></pre>`,O,I,os,K,P,Ts=`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">keys</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">WatchSource</span><span style="color: #F8F8F2">&lt;(</span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">)[]&gt;;</span></span>
<span class="line"><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">generator</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> (() </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">;</span></span></code></pre>`,U,q,es,G,ps,Fs,J,cs,rs,N,R,js=`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #F8F8F2">  &lt;transition-group name=&quot;list-complete&quot; tag=&quot;ul&quot;&gt;</span></span>
<span class="line"><span style="color: #FF5555">-   &lt;li v-for=&quot;key in keys&quot; :key=&quot;key&quot; class=&quot;list-complete-item&quot;&gt;</span></span>
<span class="line"><span style="color: #50FA7B">+   &lt;li v-for=&quot;key in keys&quot; :key=&quot;get(key)&quot; class=&quot;list-complete-item&quot;&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      {{ key }}</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/li&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/transition-group&gt;</span></span></code></pre>`,z,S,ys,Q,X,v,is,b,us,fs,V;const ms=o[1].demo,m=Rs(ms,o,o[0],Vs);return{c(){s=C("h2"),a=_("Setup"),l=d(),n=new j,u=d(),e=C("h2"),y=_("Usage"),f=d(),k=new j,O=d(),I=C("p"),os=_("Types:"),K=d(),P=new j,U=d(),q=C("p"),es=_("and replace the "),G=C("code"),ps=_("key"),Fs=_(" with "),J=C("code"),cs=_("get(key)"),rs=_(":"),N=d(),R=new j,z=d(),S=C("h2"),ys=_("Demo"),Q=d(),m&&m.c(),X=d(),v=C("p"),is=_("Check the full demo code "),b=C("a"),us=_("here"),fs=_("."),this.h()},l(t){s=A(t,"H2",{});var c=E(s);a=$(c,"Setup"),c.forEach(p),l=h(t),n=M(t),u=h(t),e=A(t,"H2",{});var $s=E(e);y=$($s,"Usage"),$s.forEach(p),f=h(t),k=M(t),O=h(t),I=A(t,"P",{});var ds=E(I);os=$(ds,"Types:"),ds.forEach(p),K=h(t),P=M(t),U=h(t),q=A(t,"P",{});var H=E(q);es=$(H,"and replace the "),G=A(H,"CODE",{});var hs=E(G);ps=$(hs,"key"),hs.forEach(p),Fs=$(H," with "),J=A(H,"CODE",{});var gs=E(J);cs=$(gs,"get(key)"),gs.forEach(p),rs=$(H,":"),H.forEach(p),N=h(t),R=M(t),z=h(t),S=A(t,"H2",{});var Cs=E(S);ys=$(Cs,"Demo"),Cs.forEach(p),Q=h(t),m&&m.l(t),X=h(t),v=A(t,"P",{});var Y=E(v);is=$(Y,"Check the full demo code "),b=A(Y,"A",{href:!0,rel:!0});var As=E(b);us=$(As,"here"),As.forEach(p),fs=$(Y,"."),Y.forEach(p),this.h()},h(){n.a=u,k.a=O,P.a=U,R.a=z,ns(b,"href","https://github.com/VdustR/likftc/tree/main/packages/doc/src/lib/demo/vue"),ns(b,"rel","nofollow")},m(t,c){r(t,s,c),i(s,a),r(t,l,c),n.m(F,t,c),r(t,u,c),r(t,e,c),i(e,y),r(t,f,c),k.m(Hs,t,c),r(t,O,c),r(t,I,c),i(I,os),r(t,K,c),P.m(Ts,t,c),r(t,U,c),r(t,q,c),i(q,es),i(q,G),i(G,ps),i(q,Fs),i(q,J),i(J,cs),i(q,rs),r(t,N,c),R.m(js,t,c),r(t,z,c),r(t,S,c),i(S,ys),r(t,Q,c),m&&m.m(t,c),r(t,X,c),r(t,v,c),i(v,is),i(v,b),i(b,us),i(v,fs),V=!0},p(t,[c]){m&&m.p&&(!V||c&1)&&zs(m,ms,t,t[0],V?Ns(ms,t[0],c,il):Ks(t[0]),Vs)},i(t){V||(B(m,t),V=!0)},o(t){w(m,t),V=!1},d(t){t&&p(s),t&&p(l),t&&n.d(),t&&p(u),t&&p(e),t&&p(f),t&&k.d(),t&&p(O),t&&p(I),t&&p(K),t&&P.d(),t&&p(U),t&&p(q),t&&p(N),t&&R.d(),t&&p(z),t&&p(S),t&&p(Q),m&&m.d(t),t&&p(X),t&&p(v)}}}function fl(o,s,a){let{$$slots:l={},$$scope:n}=s;return o.$$set=F=>{"$$scope"in F&&a(0,n=F.$$scope)},[n,l]}class ml extends ss{constructor(s){super();ls(this,s,fl,ul,ts,{})}}function _l(o){let s="Vue",a;return{c(){a=_(s)},l(l){a=$(l,s)},m(l,n){r(l,a,n)},p:g,d(l){l&&p(a)}}}function $l(o){let s;return{c(){s=C("div"),this.h()},l(a){s=A(a,"DIV",{slot:!0}),E(s).forEach(p),this.h()},h(){ns(s,"slot","with")},m(a,l){r(a,s,l),o[5](s)},p:g,d(a){a&&p(s),o[5](null)}}}function dl(o){let s;return{c(){s=C("div"),this.h()},l(a){s=A(a,"DIV",{slot:!0}),E(s).forEach(p),this.h()},h(){ns(s,"slot","without")},m(a,l){r(a,s,l),o[4](s)},p:g,d(a){a&&p(s),o[4](null)}}}function hl(o){let s,a;return s=new yl({props:{slot:"code-with"}}),{c(){D(s.$$.fragment)},l(l){x(s.$$.fragment,l)},m(l,n){L(s,l,n),a=!0},p:g,i(l){a||(B(s.$$.fragment,l),a=!0)},o(l){w(s.$$.fragment,l),a=!1},d(l){W(s,l)}}}function gl(o){let s,a;return s=new cl({props:{slot:"code-without"}}),{c(){D(s.$$.fragment)},l(l){x(s.$$.fragment,l)},m(l,n){L(s,l,n),a=!0},p:g,i(l){a||(B(s.$$.fragment,l),a=!0)},o(l){w(s.$$.fragment,l),a=!1},d(l){W(s,l)}}}function Cl(o){let s,a;return s=new ll({props:{slot:"demo",$$slots:{"code-without":[gl],"code-with":[hl],without:[dl],with:[$l]},$$scope:{ctx:o}}}),s.$on("refreshWith",o[2]),s.$on("refreshWithout",o[3]),{c(){D(s.$$.fragment)},l(l){x(s.$$.fragment,l)},m(l,n){L(s,l,n),a=!0},p(l,n){const F={};n&67&&(F.$$scope={dirty:n,ctx:l}),s.$set(F)},i(l){a||(B(s.$$.fragment,l),a=!0)},o(l){w(s.$$.fragment,l),a=!1},d(l){W(s,l)}}}function Al(o){let s,a;return s=new ml({props:{$$slots:{demo:[Cl]},$$scope:{ctx:o}}}),{c(){D(s.$$.fragment)},l(l){x(s.$$.fragment,l)},m(l,n){L(s,l,n),a=!0},p(l,n){const F={};n&67&&(F.$$scope={dirty:n,ctx:l}),s.$set(F)},i(l){a||(B(s.$$.fragment,l),a=!0)},o(l){w(s.$$.fragment,l),a=!1},d(l){W(s,l)}}}function El(o){let s,a,l,n,F,u;return s=new Ys({props:{title:"Vue",description:"List item keys for Vue transition components."}}),l=new Zs({props:{$$slots:{default:[_l]},$$scope:{ctx:o}}}),F=new sl({props:{$$slots:{default:[Al]},$$scope:{ctx:o}}}),{c(){D(s.$$.fragment),a=d(),D(l.$$.fragment),n=d(),D(F.$$.fragment)},l(e){x(s.$$.fragment,e),a=h(e),x(l.$$.fragment,e),n=h(e),x(F.$$.fragment,e)},m(e,y){L(s,e,y),r(e,a,y),L(l,e,y),r(e,n,y),L(F,e,y),u=!0},p(e,[y]){const f={};y&64&&(f.$$scope={dirty:y,ctx:e}),l.$set(f);const k={};y&67&&(k.$$scope={dirty:y,ctx:e}),F.$set(k)},i(e){u||(B(s.$$.fragment,e),B(l.$$.fragment,e),B(F.$$.fragment,e),u=!0)},o(e){w(s.$$.fragment,e),w(l.$$.fragment,e),w(F.$$.fragment,e),u=!1},d(e){W(s,e),e&&p(a),W(l,e),e&&p(n),W(F,e)}}}function ql(o,s,a){let l,n;async function F(){await Ds(),xs(pl).mount(l)}async function u(){await Ds(),xs(nl).mount(n)}Qs(()=>{F(),u()});function e(f){Ls[f?"unshift":"push"](()=>{n=f,a(1,n)})}function y(f){Ls[f?"unshift":"push"](()=>{l=f,a(0,l)})}return[l,n,F,u,e,y]}class wl extends ss{constructor(s){super();ls(this,s,ql,El,ts,{})}}export{wl as default};
