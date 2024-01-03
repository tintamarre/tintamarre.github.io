import{A as F,m as k,d as u,u as v,o as n,c,b as s,n as B,G as _,C as r,t as i,_ as D,y as g,I as x,E as C,a as L,F as $,R as I,S as M,U as J,D as y,h as K,Q as S,J as W,a5 as N,a6 as X,q as Z,k as tt,a7 as et,a8 as st,a9 as ot,aa as at,ab as rt,ac as nt,ad as ct,ae as lt,af as it,ag as dt,ah as _t,ai as ut,M as ht}from"./chunks/framework.41330901.js";import{t as R}from"./chunks/theme.7ef0218d.js";const b=JSON.parse("[]");function w(){const t=F(),e=t.path;function o(){const h=b.findIndex(p=>p.url===t.path);return h===-1&&console.error(`blog post missing: ${t.path}`),h}const a=k(()=>b[o()]),l=k(()=>b[o()-1]),d=k(()=>b[o()+1]);return{posts:b,post:a,nextPost:l,prevPost:d,path:e}}const pt=u({__name:"VPBPostCategory",props:{category:null},setup(t){const{theme:e}=v();return(o,a)=>{var l;return n(),c("div",null,[(l=s(e).blog)!=null&&l.categoryIcons&&s(e).blog.categoryIcons[t.category.toLowerCase()]?(n(),c("div",{key:0,class:B([s(e).blog.categoryIcons[t.category.toLowerCase()],"mr-2"])},null,2)):_("",!0),r("span",null,i(t.category),1)])}}});const H=D(pt,[["__scopeId","data-v-262d93ff"]]),V=JSON.parse('[{"name":"Martin Erpicum","avatar":null,"gravatar":"4f70a53dd35d6ef71c47711614e1b40a","twitter":"@tintamarre","url":"/blog/authors/martin-erpicum.html","excerpt":""}]');function O(){const t=F(),e=t.path;function o(p){return V.find(m=>m.name===p)}function a(){const p=V.findIndex(m=>m.url===t.path);return p===-1&&console.error(`author page missing: ${t.path}`),p}const l=k(()=>V[a()]),d=k(()=>V[a()-1]),h=k(()=>V[a()+1]);return{authors:V,author:l,nextAuthor:d,prevAuthor:h,findByName:o,path:e}}const mt={key:0,class:"flex items-center space-x-4"},xt=["src","alt"],gt=["src","alt"],vt=["href"],ft={class:"font-medium dark:text-white"},yt={key:1},bt=u({__name:"VPBHomeAuthor",props:{name:null},setup(t){const e=t;v();const{findByName:o}=O(),a=k(()=>o(e.name));return(l,d)=>s(a)?(n(),c("div",mt,[s(a).avatar?(n(),c("img",{key:0,class:"h-7 w-7 rounded-full",src:s(a).avatar,alt:s(a).name},null,8,xt)):s(a).gravatar?(n(),c("img",{key:1,class:"h-7 w-7 rounded-full",src:`https://gravatar.com/avatar/${s(a).gravatar}`,alt:s(a).name},null,8,gt)):_("",!0),r("a",{href:s(g)(s(a).url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"},[r("span",ft,i(s(a).name),1)],8,vt)])):(n(),c("div",yt))}}),$t={class:"rounded-lg border border-[color:var(--vp-c-brand-light)] p-6 shadow-md dark:border-[color:var(--vp-c-brand-dark)]"},kt={class:"mb-5 flex items-center justify-between text-gray-500"},wt={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},Pt={class:"text-sm"},Bt={class:"mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},At=["href"],Vt=["innerHTML"],Ct={class:"flex items-center justify-between"},Lt=["href"],Tt=r("div",{class:"i-[bx/right-arrow-alt] ml-2"},null,-1),U=u({__name:"VPBHomePost",props:{post:null},setup(t){return(e,o)=>(n(),c("article",$t,[r("div",kt,[r("span",wt,[x(H,{category:t.post.category},{default:C(()=>[r("span",Pt,i(t.post.date.since),1)]),_:1},8,["category"])])]),r("h2",Bt,[r("a",{href:t.post.url},i(t.post.title),9,At)]),r("div",{class:"mb-5 font-light",innerHTML:t.post.excerpt},null,8,Vt),r("div",Ct,[x(bt,{name:t.post.author},null,8,["name"]),r("a",{href:t.post.url,class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"},[L(" Read more "),Tt],8,Lt)])]))}}),It={class:"mx-auto max-w-screen-xl lg:px-6 lg:py-16"},Dt={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},St={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},jt={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},Rt={class:"grid gap-6 p-2 lg:grid-cols-2"},Et=u({__name:"VPBHome",setup(t){const{posts:e}=w(),{theme:o}=v();return(a,l)=>{var d,h;return n(),c("div",It,[r("div",Dt,[r("h2",St,i((d=s(o).blog)==null?void 0:d.title),1),r("p",jt,i((h=s(o).blog)==null?void 0:h.description),1)]),r("div",Rt,[(n(!0),c($,null,I(s(e),p=>(n(),c("div",{key:p.url},[x(U,{post:p},null,8,["post"])]))),128))])])}}}),Ht=r("dt",{class:"sr-only"},"Published on",-1),Ot={class:"text-base font-medium leading-6 text-gray-500 dark:text-gray-300"},Ft=["datetime"],Mt=u({__name:"VPBPostDate",setup(t){const{post:e}=w();function o(){return new Date(e.value.date.time).toISOString()}return(a,l)=>(n(),c("dl",null,[Ht,r("dd",Ot,[r("time",{datetime:o()},i(s(e).date.formatted),9,Ft)])]))}}),G=t=>(M("data-v-f51709bc"),t=t(),J(),t),Jt=G(()=>r("dt",{class:"sr-only"},"Authors",-1)),Nt={class:"flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"},Ut={key:0,class:"flex items-center space-x-2"},Gt=["src"],Yt=["src"],qt={class:"whitespace-nowrap text-sm font-medium leading-5"},zt=G(()=>r("dt",{class:"sr-only"},"Name",-1)),Qt={class:"text-gray-900 dark:text-white"},Kt=["href"],Wt={key:0,class:"sr-only"},Xt={key:1},Zt=["href"],te=u({__name:"VPBPostAuthor",props:{insideDoc:{type:Boolean}},setup(t){const{findByName:e}=O(),{post:o}=w(),a=k(()=>e(o.value.author));return(l,d)=>(n(),c("dl",{class:B(["pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 dark:xl:border-slate-200/5",{"xs:show xl:hidden":t.insideDoc}])},[Jt,r("dd",null,[r("ul",Nt,[s(a)?(n(),c("li",Ut,[s(a).gravatar?(n(),c("img",{key:0,src:`https://gravatar.com/avatar/${s(a).gravatar}`,alt:"author image",class:"h-10 w-10 rounded-full"},null,8,Gt)):s(a).avatar?(n(),c("img",{key:1,src:s(a).avatar,alt:"author image",class:"h-10 w-10 rounded-full"},null,8,Yt)):_("",!0),r("dl",qt,[zt,r("dd",Qt,[r("a",{href:s(g)(s(a).url),class:"text-lg text-gray-900 hover:text-[color:var(--vp-c-brand-light)] dark:text-white dark:hover:text-[color:var(--vp-c-brand-dark)]"},i(s(a).name),9,Kt)]),s(a).twitter?(n(),c("dt",Wt,"Twitter")):_("",!0),s(a).twitter?(n(),c("dd",Xt,[r("a",{href:`https://twitter.com/${s(a).twitter}`,target:"_blank",rel:"noopener noreferrer"},i(s(a).twitter),9,Zt)])):_("",!0)])])):_("",!0)])])],2))}});const Y=D(te,[["__scopeId","data-v-f51709bc"]]),ee={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium"},se=u({__name:"VPBPostDetails",props:{insideDoc:{type:Boolean}},setup(t){const{post:e}=w();return(o,a)=>(n(),c($,null,[r("div",{class:B(["flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",{"xs:show xl:hidden":t.insideDoc}])},[r("span",ee,[x(H,{category:s(e).category},null,8,["category"])])],2),x(Y,{"inside-doc":""})],64))}}),oe={class:"space-y-1 pt-6 text-center xl:pb-10"},ae={class:"md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-[color:var(--vp-c-brand-dark)] dark:text-[color:var(--vp-c-brand-light)] sm:text-4xl sm:leading-10 md:text-5xl"},re=u({__name:"VPBLayoutPostTop",setup(t){const{post:e}=w();return(o,a)=>(n(),c($,null,[r("header",oe,[x(Mt),r("h1",ae,i(s(e).title),1)]),x(se,{"inside-doc":""})],64))}}),q=t=>(M("data-v-2f3a5683"),t=t(),J(),t),ne={key:0,class:"py-3"},ce=q(()=>r("h2",{class:"text-xs uppercase tracking-wide text-gray-500 dark:text-white"}," Next Article ",-1)),le={class:"link"},ie=["href"],de={key:1,class:"py-3"},_e=q(()=>r("h2",{class:"text-xs uppercase tracking-wide text-gray-500 dark:text-white"}," Previous Article ",-1)),ue={class:"link"},he=["href"],pe={class:"pt-3"},me=["href"],xe=u({__name:"VPBPostLinks",props:{insideDoc:{type:Boolean}},setup(t){var h;const{site:e}=v(),{nextPost:o,prevPost:a}=w(),l=e.value.themeConfig,d=g(((h=l.blog)==null?void 0:h.path)??"/blog/");return(p,m)=>(n(),c("footer",{class:B(["mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5",{"xs:show lg:hidden":t.insideDoc}])},[s(o)?(n(),c("div",ne,[ce,r("div",le,[r("a",{href:`${s(o).url}`},i(s(o).title),9,ie)])])):_("",!0),s(a)?(n(),c("div",de,[_e,r("div",ue,[r("a",{href:`${s(a).url}`},i(s(a).title),9,he)])])):_("",!0),r("div",pe,[r("a",{class:"link",href:s(g)(s(d))},"← Back to the blog",8,me)])],2))}});const z=D(xe,[["__scopeId","data-v-2f3a5683"]]),ge=u({__name:"VPBLayoutPostBottom",setup(t){return(e,o)=>(n(),y(z,{"inside-doc":""}))}}),E=u({__name:"VPBTagIcon",props:{tag:null},setup(t){const{theme:e}=v();return(o,a)=>{var l;return(l=s(e).blog)!=null&&l.tagIcons&&s(e).blog.tagIcons[t.tag.toLowerCase()]?(n(),c("div",{key:0,class:B([s(e).blog.tagIcons[t.tag.toLowerCase()],"mr-2"])},null,2)):_("",!0)}}}),ve={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium"},fe={class:"bg-primary-100 inline-flex rounded text-sm font-medium"},ye={class:"flex flex-wrap gap-2 py-5"},be=["href"],$e=u({__name:"VPBLayoutPostAsideTop",setup(t){var d;const{site:e}=v(),{post:o}=w(),a=e.value.themeConfig,l=g(((d=a.blog)==null?void 0:d.tagsPath)??"/blog/tags");return(h,p)=>(n(),c($,null,[r("span",ve,[x(H,{category:s(o).category},null,8,["category"])]),r("span",fe,[r("div",ye,[(n(!0),c($,null,I(s(o).tags,m=>(n(),c("a",{key:m,class:"rounded-sm bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600",href:`${s(l)}?init=${m}`},[x(E,{tag:m},null,8,["tag"]),L(" "+i(m),1)],8,be))),128))])]),x(Y)],64))}}),ke=u({__name:"VPBLayoutPostAsideBottom",setup(t){return(e,o)=>(n(),y(z))}}),we={class:"mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5"},Pe={class:"pt-3"},Be=["href"],Ae=u({__name:"VPBLayoutAuthorAsideBottom",setup(t){var l;const{site:e}=v(),o=e.value.themeConfig,a=g(((l=o.blog)==null?void 0:l.path)??"/blog/");return(d,h)=>(n(),c("footer",we,[r("div",Pe,[r("a",{class:"link",href:s(g)(s(a))},"← Back to the blog",8,Be)])]))}});const Ve=D(Ae,[["__scopeId","data-v-0739fb2a"]]),Ce={class:"mb-1 flex items-center justify-between text-gray-500"},Le=["src"],Te=["src"],Ie={class:"ml-4 text-4xl text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},De={class:"mt-4 flex items-center justify-between text-gray-500"},Se=["href"],je=r("div",{class:"i-[bx/arrow-back] mr-2"},null,-1),Re=r("span",null,"Previous Author",-1),Ee=[je,Re],He={key:1},Oe=["href"],Fe=r("span",null,"Next Author",-1),Me=r("div",{class:"i-[bx/right-arrow-alt] ml-2"},null,-1),Je=[Fe,Me],Ne=u({__name:"VPBLayoutAuthorTop",setup(t){const{author:e,prevAuthor:o,nextAuthor:a}=O();return(l,d)=>(n(),c("div",null,[r("div",Ce,[s(e).gravatar?(n(),c("img",{key:0,src:`https://gravatar.com/avatar/${s(e).gravatar}`,alt:"author image",class:"h-20 w-20 rounded-full"},null,8,Le)):s(e).avatar?(n(),c("img",{key:1,src:s(e).avatar,alt:"author image",class:"h-20 w-20 rounded-full"},null,8,Te)):_("",!0),r("span",Ie,i(s(e).name),1)]),r("div",De,[s(o)?(n(),c("a",{key:0,href:s(g)(s(o).url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)] dark:text-white"},Ee,8,Se)):_("",!0),s(o)?_("",!0):(n(),c("div",He)),s(a)?(n(),c("a",{key:2,href:s(g)(s(a).url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)] dark:text-white"},Je,8,Oe)):_("",!0)])]))}}),Ue=u({__name:"VPBLayout",setup(t){const{Layout:e}=R,{frontmatter:o}=v();return(a,l)=>(n(),y(s(e),null,{"doc-before":C(()=>[s(o).blog==="post"?(n(),y(re,{key:0})):_("",!0),s(o).blog==="author"?(n(),y(Ne,{key:1})):_("",!0)]),"doc-footer-before":C(()=>[s(o).blog==="post"?(n(),y(ge,{key:0})):_("",!0)]),"aside-top":C(()=>[s(o).blog==="post"?(n(),y($e,{key:0})):_("",!0)]),"aside-bottom":C(()=>[s(o).blog==="post"?(n(),y(ke,{key:0})):_("",!0),s(o).blog==="author"?(n(),y(Ve,{key:1})):_("",!0)]),_:1}))}});function Ge(){const t=[];let e="0",o=-1;for(let a=0;a<b.length;a++){const l=b[a];if(l.date){const d=l.date.raw.split("-")[0];d===e?t[o].push(l):(o++,t[o]=[],t[o].push(l),e=d)}}return{postsByYear:t}}const Ye={class:"mx-auto max-w-screen-xl px-6 lg:px-16 lg:py-16"},qe={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},ze={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},Qe={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},Ke={class:"px-0 pb-2 pt-4 text-xl font-semibold leading-6 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},We=["href"],Xe={class:"cursor-pointer leading-6"},Ze=r("div",{class:"title-o"},null,-1),ts={class:"cursor-pointer font-sans leading-6"},es=u({__name:"VPBArchives",setup(t){const{postsByYear:e}=Ge(),{theme:o}=v();return(a,l)=>{var d,h;return n(),c("div",Ye,[r("div",qe,[r("h2",ze,i((d=s(o).blog)==null?void 0:d.title)+" Archives ",1),r("p",Qe,i((h=s(o).blog)==null?void 0:h.description),1)]),(n(!0),c($,null,I(s(e),(p,m)=>(n(),c("div",{key:m},[r("div",Ke,i(p[0].date.raw.split("-")[0]),1),(n(!0),c($,null,I(p,(A,P)=>(n(),c("a",{key:P,href:s(g)(A.url),class:"m-2 flex cursor-pointer items-center justify-between leading-6 hover:text-[color:var(--vp-c-brand-dark)] dark:hover:text-[color:var(--vp-c-brand-light)]"},[r("div",Xe,[Ze,L(" "+i(A.title),1)]),r("div",ts,i(A.date.raw.slice(5)),1)],8,We))),128))]))),128))])}}});function ss(){const t={};for(let e=0;e<b.length;e++){const o=b[e],a=o.tags;Array.isArray(a)&&a.forEach(l=>{t[l]||(t[l]=[]),t[l].push(o)})}return{postsByTag:t}}const os={class:"mx-auto max-w-screen-xl px-6 lg:px-16 lg:py-16"},as={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},rs={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},ns={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},cs={class:"flex flex-wrap justify-center gap-2 p-4"},ls=["onClick"],is={key:0},ds={class:"px-0 pb-2 pt-4 text-xl font-semibold leading-6 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},_s={class:"text-xs"},us=["href"],hs={class:"cursor-pointer leading-6"},ps=r("div",{class:"title-o"},null,-1),ms={class:"cursor-pointer font-sans leading-6"},xs=u({__name:"VPBTags",setup(t){const{postsByTag:e}=ss(),{theme:o}=v(),a=K("");function l(d){a.value=d}if(S){const h=new URLSearchParams(window.location.search).get("init");h&&l(h)}return(d,h)=>{const p=W("ClientOnly");return n(),y(p,null,{default:C(()=>{var m,A;return[r("div",os,[r("div",as,[r("h2",rs,i((m=s(o).blog)==null?void 0:m.title)+" Tags ",1),r("p",ns,i((A=s(o).blog)==null?void 0:A.description),1)]),r("div",cs,[(n(!0),c($,null,I(s(e),(P,f)=>(n(),c("div",{key:f,class:B({"cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600":a.value!==f,"rounded-full bg-[color:var(--vp-c-brand-light)] px-3 py-1 text-sm font-semibold text-gray-100 dark:bg-[color:var(--vp-c-brand-dark)]":a.value===f}),onClick:Vs=>l(f)},[x(E,{tag:f},null,8,["tag"]),L(" "+i(f)+" ",1),r("span",{class:B({"ml-3 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]":a.value!==f,"ml-3 text-[color:var(--vp-c-brand-dark)] dark:text-[color:var(--vp-c-brand-light)]":a.value===f})},i(P.length),3)],10,ls))),128))]),a.value?(n(),c("div",is,[r("div",ds,[x(E,{tag:a.value},null,8,["tag"]),L(i(a.value)+" ",1),r("span",_s," ( "+i(s(e)[a.value].length)+" )",1)]),(n(!0),c($,null,I(s(e)[a.value],(P,f)=>(n(),c("a",{key:f,href:s(g)(P.url),class:"m-2 flex cursor-pointer items-center justify-between leading-6"},[r("div",hs,[ps,L(" "+i(P.title),1)]),r("div",ms,i(P.date.raw),1)],8,us))),128))])):_("",!0)])]}),_:1})}}}),gs={},vs={class:"theme-style-div"};function fs(t,e){return n(),c("div",vs,"This is a test theme component")}const ys=D(gs,[["render",fs]]),j={...R,Layout:Ue,enhanceApp({app:t,router:e,siteData:o}){R.enhanceApp({app:t,router:e,siteData:o}),t.component("VPBHome",Et),t.component("VPBArchives",es),t.component("VPBTags",xs),t.component("VPBTestComponent",ys),t.component("VPBHomePost",U)}};const bs={class:"w-full text-blue-800"},$s=u({__name:"CustomBlogHeader",setup(t){return w(),(e,o)=>(n(),c("div",bs))}}),ks={...j,Layout:()=>N(j.Layout,null,{}),enhanceApp({app:t,router:e,siteData:o}){j.enhanceApp({app:t,router:e,siteData:o}),t.component("CustomBlogHeader",$s)}};function Q(t){if(t.extends){const e=Q(t.extends);return{...e,...t,async enhanceApp(o){e.enhanceApp&&await e.enhanceApp(o),t.enhanceApp&&await t.enhanceApp(o)}}}return t}const T=Q(ks),ws=u({name:"VitePressApp",setup(){const{site:t}=v();return Z(()=>{tt(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),et(),st(),ot(),T.setup&&T.setup(),()=>N(T.Layout)}});async function Ps(){const t=As(),e=Bs();e.provide(at,t);const o=rt(t.route);return e.provide(nt,o),e.component("Content",ct),e.component("ClientOnly",lt),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),T.enhanceApp&&await T.enhanceApp({app:e,router:t,siteData:it}),{app:e,router:t,data:o}}function Bs(){return dt(ws)}function As(){let t=S,e;return _t(o=>{let a=ut(o);return t&&(e=a),(t||e===a)&&(a=a.replace(/\.js$/,".lean.js")),S&&(t=!1),ht(()=>import(a),[])},T.NotFound)}S&&Ps().then(({app:t,router:e,data:o})=>{e.go().then(()=>{X(e.route,o.site),t.mount("#app")})});export{Ps as createApp};