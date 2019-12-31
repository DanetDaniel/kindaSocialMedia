var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function a(){return f(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.data!==n&&(t.data=n)}let m;function h(t){m=t}function g(){if(!m)throw new Error("Function called outside component initialization");return m}const $=[],b=[],y=[],k=[],v=Promise.resolve();let x=!1;function _(t){y.push(t)}function w(){const t=new Set;do{for(;$.length;){const t=$.shift();h(t),E(t.$$)}for(;b.length;)b.pop()();for(let n=0;n<y.length;n+=1){const e=y[n];t.has(e)||(e(),t.add(e))}y.length=0}while($.length);for(;k.length;)k.pop()();x=!1}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const j=new Set;let A;function N(){A={r:0,c:[],p:A}}function C(){A.r||o(A.c),A=A.p}function P(t,n){t&&t.i&&(j.delete(t),t.i(n))}function B(t,n,e,o){if(t&&t.o){if(j.has(t))return;j.add(t),A.c.push(()=>{j.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function O(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let l=n.ctx;void 0!==r&&(l=l.slice(),l[r]=c);const u=t&&(n.current=t)(l);let i=!1;n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==o&&t&&(N(),B(t,1,1,()=>{n.blocks[e]=null}),C())}):n.block.d(1),u.c(),P(u,1),u.m(n.mount(),n.anchor),i=!0),n.block=u,n.blocks&&(n.blocks[o]=u),i&&w()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=g();if(t.then(t=>{h(e),o(n.then,1,n.value,t),h(null)},t=>{h(e),o(n.catch,2,n.error,t),h(null)}),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function S(t){t&&t.c()}function q(t,e,c){const{fragment:l,on_mount:u,on_destroy:i,after_update:s}=t.$$;l&&l.m(e,c),_(()=>{const e=u.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]}),s.forEach(_)}function z(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function D(t,n){-1===t.$$.dirty[0]&&($.push(t),x||(x=!0,v.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function F(n,r,c,l,u,i,s=[-1]){const f=m;h(n);const a=r.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:s};let p=!1;d.ctx=c?c(n,a,(t,e,o=e)=>(d.ctx&&u(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&D(n,t)),e)):[],d.update(),p=!0,o(d.before_update),d.fragment=!!l&&l(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&P(n.$$.fragment),q(n,r.target,r.anchor),w()),h(f)}class I{$destroy(){z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function M(n){let e,o,r,c,m,h,g,$,b,y;return{c(){e=s("div"),o=s("p"),r=f("Post ID: "),c=f(n[0]),m=a(),h=s("p"),g=f(n[1]),$=a(),b=s("p"),y=f(n[2]),d(o,"class","id svelte-7g754t"),d(h,"class","name svelte-7g754t"),d(b,"class","body svelte-7g754t"),d(e,"class","tweet svelte-7g754t")},m(t,n){u(t,e,n),l(e,o),l(o,r),l(o,c),l(e,m),l(e,h),l(h,g),l(e,$),l(e,b),l(b,y)},p(t,[n]){1&n&&p(c,t[0]),2&n&&p(g,t[1]),4&n&&p(y,t[2])},i:t,o:t,d(t){t&&i(e)}}}function T(t,n,e){let{id:o=" coming soon"}=n,{name:r="name not found"}=n,{body:c="404"}=n;return t.$set=t=>{"id"in t&&e(0,o=t.id),"name"in t&&e(1,r=t.name),"body"in t&&e(2,c=t.body)},[o,r,c]}class W extends I{constructor(t){super(),F(this,t,T,M,c,{id:0,name:1,body:2})}}function G(t,n,e){const o=t.slice();return o[1]=n[e],o}function H(n){let e,o,r,c=n[4].message+"";return{c(){var t,n,l;e=s("p"),o=f(c),r=a(),t="color",n="red",e.style.setProperty(t,n,l?"important":"")},m(t,n){u(t,e,n),l(e,o),u(t,r,n)},p(t,n){1&n&&c!==(c=t[4].message+"")&&p(o,c)},i:t,o:t,d(t){t&&i(e),t&&i(r)}}}function J(t){let n,e;const o=new W({props:{id:t[1].id,name:t[1].title,body:t[1].body}});return{c(){S(o.$$.fragment),n=a()},m(t,r){q(o,t,r),u(t,n,r),e=!0},p(t,n){const e={};1&n&&(e.id=t[1].id),1&n&&(e.name=t[1].title),1&n&&(e.body=t[1].body),o.$set(e)},i(t){e||(P(o.$$.fragment,t),e=!0)},o(t){B(o.$$.fragment,t),e=!1},d(t){z(o,t),t&&i(n)}}}function K(n){let e,o;return{c(){e=s("p"),e.textContent="Waiting...",o=a()},m(t,n){u(t,e,n),u(t,o,n)},p:t,i:t,o:t,d(t){t&&i(e),t&&i(o)}}}function L(t){let n,e,o,r={ctx:t,current:null,token:null,pending:K,then:J,catch:H,value:1,error:4,blocks:[,,,]};return O(e=t[1],r),{c(){n=f(""),r.block.c()},m(t,e){u(t,n,e),r.block.m(t,r.anchor=e),r.mount=()=>n.parentNode,r.anchor=n,o=!0},p(n,o){if(t=n,r.ctx=t,1&o&&e!==(e=t[1])&&O(e,r));else{const n=t.slice();n[1]=r.resolved,r.block.p(n,o)}},i(t){o||(P(r.block),o=!0)},o(t){for(let t=0;t<3;t+=1){B(r.blocks[t])}o=!1},d(t){t&&i(n),r.block.d(t),r.token=null,r=null}}}function Q(t){let n,e,o;const r=new W({});let c=t[0],f=[];for(let n=0;n<c.length;n+=1)f[n]=L(G(t,c,n));const d=t=>B(f[t],1,1,()=>{f[t]=null});return{c(){n=s("main"),S(r.$$.fragment),e=a();for(let t=0;t<f.length;t+=1)f[t].c()},m(t,c){u(t,n,c),q(r,n,null),l(n,e);for(let t=0;t<f.length;t+=1)f[t].m(n,null);o=!0},p(t,[e]){if(1&e){let o;for(c=t[0],o=0;o<c.length;o+=1){const r=G(t,c,o);f[o]?(f[o].p(r,e),P(f[o],1)):(f[o]=L(r),f[o].c(),P(f[o],1),f[o].m(n,null))}for(N(),o=c.length;o<f.length;o+=1)d(o);C()}},i(t){if(!o){P(r.$$.fragment,t);for(let t=0;t<c.length;t+=1)P(f[t]);o=!0}},o(t){B(r.$$.fragment,t),f=f.filter(Boolean);for(let t=0;t<f.length;t+=1)B(f[t]);o=!1},d(t){t&&i(n),z(r),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(f,t)}}}function R(t,n,e){let o=[];var r;return r=async function(){const t=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"),n=await t.json();e(0,o=n),console.log(o)},g().$$.on_mount.push(r),[o]}return new class extends I{constructor(t){super(),F(this,t,R,Q,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
