import{A as R,p as $,d as _,u as x,o as n,c as l,b as r,n as A,G as p,C as a,t as d,_ as E,y as v,J as g,E as T,a as B,F as k,R as L,D as b,j as z,Q as D,H as G,a3 as N,a4 as U,a5 as Y,a6 as Q,a7 as Z,a8 as K,a9 as X,aa as tt,ab as et,ac as st,ad as at,M as ot,k as rt,q as nt,ae as lt,af as ct,ag as it}from"./chunks/framework.4bfe0024.js";import{t as j}from"./chunks/theme.9408c125.js";const y=JSON.parse(`[{"title":"Address lookup - Part 2b: Messing around","author":"Martin Erpicum","url":"/blog/posts/2024/address_lookup-part2b-messing-around.html","excerpt":"<p><em>Executive summary</em>: In Belgium, a collaborative effort between regional and federal authorities has led to the creation of a unified service that aggregates all Belgian addresses into a comprehensive dataset. This dataset is called <a href=\\"https://bosa.belgium.be/fr/services/best-address-services\\" target=\\"_blank\\" rel=\\"noreferrer\\">BeStAddress</a>.</p>\\n","tags":["data","exploration"],"category":"Exploration","date":{"raw":"2024-12-03","time":1733227200000,"formatted":"December 3, 2024","since":"1 day ago"}},{"title":"Address lookup - Part 2 - Sourcing","author":"Martin Erpicum","url":"/blog/posts/2024/address_lookup-part2-sourcing.html","excerpt":"<p><em>Executive summary</em>: In Belgium, a collaborative effort between regional and federal authorities has led to the creation of a unified service that aggregates all Belgian addresses into a comprehensive dataset. This dataset is called <a href=\\"https://bosa.belgium.be/fr/services/best-address-services\\" target=\\"_blank\\" rel=\\"noreferrer\\">BeStAddress</a>.</p>\\n","tags":["data_model","data_analysis","orchestrator"],"category":"Exploration","date":{"raw":"2024-11-01","time":1730462400000,"formatted":"November 1, 2024","since":"about 1 month ago"}},{"title":"Tax brackets proposition","author":"Martin Erpicum","url":"/blog/posts/2024/tax_brackets_proposition.html","excerpt":"<p><strong>Executive summary</strong>: The Belgian tax system is notably intricate, characterized by numerous tax brackets that determine the tax liability based on an individual's income. We take a look at the proposed changes to the tax brackets proposed by Bart De Wever in the latest version of the Super Nota (202410).</p>\\n","tags":["data exploration"],"category":"Data exploration","date":{"raw":"2024-10-27","time":1730030400000,"formatted":"October 27, 2024","since":"about 1 month ago"}},{"title":"Address lookup - Part 1 - Analysis","author":"Martin Erpicum","url":"/blog/posts/2024/address_lookup-part1-problematic.html","excerpt":"<p><em>Executive summary</em>: In Belgium, a collaborative effort between regional and federal authorities has led to the creation of a unified service that aggregates all Belgian addresses into a comprehensive dataset. This dataset is called <a href=\\"https://bosa.belgium.be/fr/services/best-address-services\\" target=\\"_blank\\" rel=\\"noreferrer\\">BeStAddress</a>.</p>\\n","tags":["data_model","data_analysis","orchestrator"],"category":"Exploration","date":{"raw":"2024-10-03","time":1727956800000,"formatted":"October 3, 2024","since":"2 months ago"}},{"title":"Hello World","author":"Martin Erpicum","url":"/blog/posts/2024/hello_world.html","excerpt":"<h3 id=\\"executive-summary\\" tabindex=\\"-1\\">Executive summary <a class=\\"header-anchor\\" href=\\"#executive-summary\\" aria-label=\\"Permalink to &quot;Executive summary&quot;\\">&ZeroWidthSpace;</a></h3>\\n<p>I have been thinking about it for a while, and I finally decided to start writing about my work and my interests. I will try to post regularly, but I am not sure I will be able to keep up with it. We will see.</p>\\n","tags":["blog"],"category":"Article","date":{"raw":"2024-09-21","time":1726920000000,"formatted":"September 21, 2024","since":"2 months ago"}}]`);function w(){const o=R(),t=o.path;function e(){const u=y.findIndex(m=>m.url===o.path);return u===-1&&console.error(`blog post missing: ${o.path}`),u}const s=$(()=>y[e()]),c=$(()=>y[e()-1]),i=$(()=>y[e()+1]);return{posts:y,post:s,nextPost:c,prevPost:i,path:t}}const dt=_({__name:"VPBPostCategory",props:{category:{}},setup(o){const{theme:t}=x();return(e,s)=>{var c;return n(),l("div",null,[(c=r(t).blog)!=null&&c.categoryIcons&&r(t).blog.categoryIcons[e.category.toLowerCase()]?(n(),l("div",{key:0,class:A([r(t).blog.categoryIcons[e.category.toLowerCase()],"mr-2"])},null,2)):p("",!0),a("span",null,d(e.category),1)])}}});const M=E(dt,[["__scopeId","data-v-262d93ff"]]),C=JSON.parse('[{"name":"Martin Erpicum","avatar":null,"gravatar":"4f70a53dd35d6ef71c47711614e1b40a","twitter":"@tintamarre","url":"/blog/authors/martin-erpicum.html","excerpt":""}]');function O(){const o=R(),t=o.path;function e(m){return C.find(h=>h.name===m)}function s(){const m=C.findIndex(h=>h.url===o.path);return m===-1&&console.error(`author page missing: ${o.path}`),m}const c=$(()=>C[s()]),i=$(()=>C[s()-1]),u=$(()=>C[s()+1]);return{authors:C,author:c,nextAuthor:i,prevAuthor:u,findByName:e,path:t}}const ut={key:0,class:"flex items-center space-x-4"},pt=["src","alt"],_t=["src","alt"],ht=["href"],mt={class:"font-medium dark:text-white"},gt={key:1},vt=_({__name:"VPBHomeAuthor",props:{name:{}},setup(o){const t=o;x();const{findByName:e}=O(),s=$(()=>e(t.name));return(c,i)=>s.value?(n(),l("div",ut,[s.value.avatar?(n(),l("img",{key:0,class:"h-7 w-7 rounded-full",src:s.value.avatar,alt:s.value.name},null,8,pt)):s.value.gravatar?(n(),l("img",{key:1,class:"h-7 w-7 rounded-full",src:`https://gravatar.com/avatar/${s.value.gravatar}`,alt:s.value.name},null,8,_t)):p("",!0),a("a",{href:r(v)(s.value.url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"},[a("span",mt,d(s.value.name),1)],8,ht)])):(n(),l("div",gt))}}),xt={class:"rounded-lg border border-[color:var(--vp-c-brand-light)] p-6 shadow-md dark:border-[color:var(--vp-c-brand-dark)]"},ft={class:"mb-5 flex items-center justify-between text-gray-500"},bt={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},yt={class:"text-sm"},kt={class:"mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},$t=["href"],wt=["innerHTML"],Pt={class:"flex items-center justify-between"},Bt=["href"],q=_({__name:"VPBHomePost",props:{post:{}},setup(o){return(t,e)=>(n(),l("article",xt,[a("div",ft,[a("span",bt,[g(M,{category:t.post.category},{default:T(()=>[a("span",yt,d(t.post.date.since),1)]),_:1},8,["category"])])]),a("h2",kt,[a("a",{href:t.post.url},d(t.post.title),9,$t)]),a("div",{class:"mb-5 font-light",innerHTML:t.post.excerpt},null,8,wt),a("div",Pt,[g(vt,{name:t.post.author},null,8,["name"]),a("a",{href:t.post.url,class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"},e[0]||(e[0]=[B(" Read more "),a("div",{class:"i-[bx/right-arrow-alt] ml-2"},null,-1)]),8,Bt)])]))}}),At={class:"mx-auto max-w-screen-xl lg:px-6 lg:py-16"},Vt={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},Ct={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},Tt={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},It={class:"grid gap-6 p-2 lg:grid-cols-2"},Lt=_({__name:"VPBHome",setup(o){const{posts:t}=w(),{theme:e}=x();return(s,c)=>{var i,u;return n(),l("div",At,[a("div",Vt,[a("h2",Ct,d((i=r(e).blog)==null?void 0:i.title),1),a("p",Tt,d((u=r(e).blog)==null?void 0:u.description),1)]),a("div",It,[(n(!0),l(k,null,L(r(t),m=>(n(),l("div",{key:m.url},[g(q,{post:m},null,8,["post"])]))),128))])])}}}),Et={class:"text-base font-medium leading-6 text-gray-500 dark:text-gray-300"},Dt=["datetime"],St=_({__name:"VPBPostDate",setup(o){const{post:t}=w();function e(){return new Date(t.value.date.time).toISOString()}return(s,c)=>(n(),l("dl",null,[c[0]||(c[0]=a("dt",{class:"sr-only"},"Published on",-1)),a("dd",Et,[a("time",{datetime:e()},d(r(t).date.formatted),9,Dt)])]))}}),jt={class:"flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"},Ht={key:0,class:"flex items-center space-x-2"},Mt=["src"],Ot=["src"],Rt={class:"whitespace-nowrap text-sm font-medium leading-5"},Nt={class:"text-gray-900 dark:text-white"},qt=["href"],Ft={key:0,class:"sr-only"},Wt={key:1},Jt=["href"],zt=_({__name:"VPBPostAuthor",props:{insideDoc:{type:Boolean}},setup(o){const{findByName:t}=O(),{post:e}=w(),s=$(()=>t(e.value.author));return(c,i)=>(n(),l("dl",{class:A(["pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 dark:xl:border-slate-200/5",{"xs:show xl:hidden":c.insideDoc}])},[i[1]||(i[1]=a("dt",{class:"sr-only"},"Authors",-1)),a("dd",null,[a("ul",jt,[s.value?(n(),l("li",Ht,[s.value.gravatar?(n(),l("img",{key:0,src:`https://gravatar.com/avatar/${s.value.gravatar}`,alt:"author image",class:"h-10 w-10 rounded-full"},null,8,Mt)):s.value.avatar?(n(),l("img",{key:1,src:s.value.avatar,alt:"author image",class:"h-10 w-10 rounded-full"},null,8,Ot)):p("",!0),a("dl",Rt,[i[0]||(i[0]=a("dt",{class:"sr-only"},"Name",-1)),a("dd",Nt,[a("a",{href:r(v)(s.value.url),class:"text-lg text-gray-900 hover:text-[color:var(--vp-c-brand-light)] dark:text-white dark:hover:text-[color:var(--vp-c-brand-dark)]"},d(s.value.name),9,qt)]),s.value.twitter?(n(),l("dt",Ft,"Twitter")):p("",!0),s.value.twitter?(n(),l("dd",Wt,[a("a",{href:`https://twitter.com/${s.value.twitter}`,target:"_blank",rel:"noopener noreferrer"},d(s.value.twitter),9,Jt)])):p("",!0)])])):p("",!0)])])],2))}});const F=E(zt,[["__scopeId","data-v-f51709bc"]]),Gt={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium"},Ut=_({__name:"VPBPostDetails",props:{insideDoc:{type:Boolean}},setup(o){const{post:t}=w();return(e,s)=>(n(),l(k,null,[a("div",{class:A(["flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",{"xs:show xl:hidden":e.insideDoc}])},[a("span",Gt,[g(M,{category:r(t).category},null,8,["category"])])],2),g(F,{"inside-doc":""})],64))}}),Yt={class:"space-y-1 pt-6 text-center xl:pb-10"},Qt={class:"md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-[color:var(--vp-c-brand-dark)] dark:text-[color:var(--vp-c-brand-light)] sm:text-4xl sm:leading-10 md:text-5xl"},Zt=_({__name:"VPBLayoutPostTop",setup(o){const{post:t}=w();return(e,s)=>(n(),l(k,null,[a("header",Yt,[g(St),a("h1",Qt,d(r(t).title),1)]),g(Ut,{"inside-doc":""})],64))}}),Kt={key:0,class:"py-3"},Xt={class:"link"},te=["href"],ee={key:1,class:"py-3"},se={class:"link"},ae=["href"],oe={class:"pt-3"},re=["href"],ne=_({__name:"VPBPostLinks",props:{insideDoc:{type:Boolean}},setup(o){var u;const{site:t}=x(),{nextPost:e,prevPost:s}=w(),c=t.value.themeConfig,i=v(((u=c.blog)==null?void 0:u.path)??"/blog/");return(m,h)=>(n(),l("footer",{class:A(["mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5",{"xs:show lg:hidden":m.insideDoc}])},[r(e)?(n(),l("div",Kt,[h[0]||(h[0]=a("h2",{class:"text-xs uppercase tracking-wide text-gray-500 dark:text-white"}," Next Article ",-1)),a("div",Xt,[a("a",{href:`${r(e).url}`},d(r(e).title),9,te)])])):p("",!0),r(s)?(n(),l("div",ee,[h[1]||(h[1]=a("h2",{class:"text-xs uppercase tracking-wide text-gray-500 dark:text-white"}," Previous Article ",-1)),a("div",se,[a("a",{href:`${r(s).url}`},d(r(s).title),9,ae)])])):p("",!0),a("div",oe,[a("a",{class:"link",href:r(v)(r(i))},"← Back to the blog",8,re)])],2))}});const W=E(ne,[["__scopeId","data-v-2f3a5683"]]),le=_({__name:"VPBLayoutPostBottom",setup(o){return(t,e)=>(n(),b(W,{"inside-doc":""}))}}),H=_({__name:"VPBTagIcon",props:{tag:{}},setup(o){const{theme:t}=x();return(e,s)=>{var c;return(c=r(t).blog)!=null&&c.tagIcons&&r(t).blog.tagIcons[e.tag.toLowerCase()]?(n(),l("div",{key:0,class:A([r(t).blog.tagIcons[e.tag.toLowerCase()],"mr-2"])},null,2)):p("",!0)}}}),ce={class:"bg-primary-100 inline-flex items-center rounded text-sm font-medium"},ie={class:"bg-primary-100 inline-flex rounded text-sm font-medium"},de={class:"flex flex-wrap gap-2 py-5"},ue=["href"],pe=_({__name:"VPBLayoutPostAsideTop",setup(o){var i;const{site:t}=x(),{post:e}=w(),s=t.value.themeConfig,c=v(((i=s.blog)==null?void 0:i.tagsPath)??"/blog/tags");return(u,m)=>(n(),l(k,null,[a("span",ce,[g(M,{category:r(e).category},null,8,["category"])]),a("span",ie,[a("div",de,[(n(!0),l(k,null,L(r(e).tags,h=>(n(),l("a",{key:h,class:"rounded-sm bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600",href:`${r(c)}?init=${h}`},[g(H,{tag:h},null,8,["tag"]),B(" "+d(h),1)],8,ue))),128))])]),g(F)],64))}}),_e=_({__name:"VPBLayoutPostAsideBottom",setup(o){return(t,e)=>(n(),b(W))}}),he={class:"mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5"},me={class:"pt-3"},ge=["href"],ve=_({__name:"VPBLayoutAuthorAsideBottom",setup(o){var c;const{site:t}=x(),e=t.value.themeConfig,s=v(((c=e.blog)==null?void 0:c.path)??"/blog/");return(i,u)=>(n(),l("footer",he,[a("div",me,[a("a",{class:"link",href:r(v)(r(s))},"← Back to the blog",8,ge)])]))}});const xe=E(ve,[["__scopeId","data-v-0739fb2a"]]),fe={class:"mb-1 flex items-center justify-between text-gray-500"},be=["src"],ye=["src"],ke={class:"ml-4 text-4xl text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},$e={class:"mt-4 flex items-center justify-between text-gray-500"},we=["href"],Pe={key:1},Be=["href"],Ae=_({__name:"VPBLayoutAuthorTop",setup(o){const{author:t,prevAuthor:e,nextAuthor:s}=O();return(c,i)=>(n(),l("div",null,[a("div",fe,[r(t).gravatar?(n(),l("img",{key:0,src:`https://gravatar.com/avatar/${r(t).gravatar}`,alt:"author image",class:"h-20 w-20 rounded-full"},null,8,be)):r(t).avatar?(n(),l("img",{key:1,src:r(t).avatar,alt:"author image",class:"h-20 w-20 rounded-full"},null,8,ye)):p("",!0),a("span",ke,d(r(t).name),1)]),a("div",$e,[r(e)?(n(),l("a",{key:0,href:r(v)(r(e).url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)] dark:text-white"},i[0]||(i[0]=[a("div",{class:"i-[bx/arrow-back] mr-2"},null,-1),a("span",null,"Previous Author",-1)]),8,we)):p("",!0),r(e)?p("",!0):(n(),l("div",Pe)),r(s)?(n(),l("a",{key:2,href:r(v)(r(s).url),class:"inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)] dark:text-white"},i[1]||(i[1]=[a("span",null,"Next Author",-1),a("div",{class:"i-[bx/right-arrow-alt] ml-2"},null,-1)]),8,Be)):p("",!0)])]))}}),Ve=_({__name:"VPBLayout",setup(o){const{Layout:t}=j,{frontmatter:e}=x();return(s,c)=>(n(),b(r(t),null,{"doc-before":T(()=>[r(e).blog==="post"?(n(),b(Zt,{key:0})):p("",!0),r(e).blog==="author"?(n(),b(Ae,{key:1})):p("",!0)]),"doc-footer-before":T(()=>[r(e).blog==="post"?(n(),b(le,{key:0})):p("",!0)]),"aside-top":T(()=>[r(e).blog==="post"?(n(),b(pe,{key:0})):p("",!0)]),"aside-bottom":T(()=>[r(e).blog==="post"?(n(),b(_e,{key:0})):p("",!0),r(e).blog==="author"?(n(),b(xe,{key:1})):p("",!0)]),_:1}))}});function Ce(){const o=[];let t="0",e=-1;for(let s=0;s<y.length;s++){const c=y[s];if(c.date){const i=c.date.raw.split("-")[0];i===t?o[e].push(c):(e++,o[e]=[],o[e].push(c),t=i)}}return{postsByYear:o}}const Te={class:"mx-auto max-w-screen-xl px-6 lg:px-16 lg:py-16"},Ie={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},Le={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},Ee={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},De={class:"px-0 pb-2 pt-4 text-xl font-semibold leading-6 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},Se=["href"],je={class:"cursor-pointer leading-6"},He={class:"cursor-pointer font-sans leading-6"},Me=_({__name:"VPBArchives",setup(o){const{postsByYear:t}=Ce(),{theme:e}=x();return(s,c)=>{var i,u;return n(),l("div",Te,[a("div",Ie,[a("h2",Le,d((i=r(e).blog)==null?void 0:i.title)+" Archives ",1),a("p",Ee,d((u=r(e).blog)==null?void 0:u.description),1)]),(n(!0),l(k,null,L(r(t),(m,h)=>(n(),l("div",{key:h},[a("div",De,d(m[0].date.raw.split("-")[0]),1),(n(!0),l(k,null,L(m,(V,P)=>(n(),l("a",{key:P,href:r(v)(V.url),class:"m-2 flex cursor-pointer items-center justify-between leading-6 hover:text-[color:var(--vp-c-brand-dark)] dark:hover:text-[color:var(--vp-c-brand-light)]"},[a("div",je,[c[0]||(c[0]=a("div",{class:"title-o"},null,-1)),B(" "+d(V.title),1)]),a("div",He,d(V.date.raw.slice(5)),1)],8,Se))),128))]))),128))])}}});function Oe(){const o={};for(let t=0;t<y.length;t++){const e=y[t],s=e.tags;Array.isArray(s)&&s.forEach(c=>{o[c]||(o[c]=[]),o[c].push(e)})}return{postsByTag:o}}const Re={class:"mx-auto max-w-screen-xl px-6 lg:px-16 lg:py-16"},Ne={class:"mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"},qe={class:"mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"},Fe={class:"font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"},We={class:"flex flex-wrap justify-center gap-2 p-4"},Je=["onClick"],ze={key:0},Ge={class:"px-0 pb-2 pt-4 text-xl font-semibold leading-6 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"},Ue={class:"text-xs"},Ye=["href"],Qe={class:"cursor-pointer leading-6"},Ze={class:"cursor-pointer font-sans leading-6"},Ke=_({__name:"VPBTags",setup(o){const{postsByTag:t}=Oe(),{theme:e}=x(),s=z("");function c(i){s.value=i}if(D){const u=new URLSearchParams(window.location.search).get("init");u&&c(u)}return(i,u)=>{const m=G("ClientOnly");return n(),b(m,null,{default:T(()=>{var h,V;return[a("div",Re,[a("div",Ne,[a("h2",qe,d((h=r(e).blog)==null?void 0:h.title)+" Tags ",1),a("p",Fe,d((V=r(e).blog)==null?void 0:V.description),1)]),a("div",We,[(n(!0),l(k,null,L(r(t),(P,f)=>(n(),l("div",{key:f,class:A({"cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600":s.value!==f,"rounded-full bg-[color:var(--vp-c-brand-light)] px-3 py-1 text-sm font-semibold text-gray-100 dark:bg-[color:var(--vp-c-brand-dark)]":s.value===f}),onClick:vs=>c(f)},[g(H,{tag:f},null,8,["tag"]),B(" "+d(f)+" ",1),a("span",{class:A({"ml-3 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]":s.value!==f,"ml-3 text-[color:var(--vp-c-brand-dark)] dark:text-[color:var(--vp-c-brand-light)]":s.value===f})},d(P.length),3)],10,Je))),128))]),s.value?(n(),l("div",ze,[a("div",Ge,[g(H,{tag:s.value},null,8,["tag"]),B(d(s.value)+" ",1),a("span",Ue," ( "+d(r(t)[s.value].length)+" )",1)]),(n(!0),l(k,null,L(r(t)[s.value],(P,f)=>(n(),l("a",{key:f,href:r(v)(P.url),class:"m-2 flex cursor-pointer items-center justify-between leading-6"},[a("div",Qe,[u[0]||(u[0]=a("div",{class:"title-o"},null,-1)),B(" "+d(P.title),1)]),a("div",Ze,d(P.date.raw),1)],8,Ye))),128))])):p("",!0)])]}),_:1})}}}),Xe={},ts={class:"theme-style-div"};function es(o,t){return n(),l("div",ts,"This is a test theme component")}const ss=E(Xe,[["render",es]]),S={...j,Layout:Ve,enhanceApp({app:o,router:t,siteData:e}){j.enhanceApp({app:o,router:t,siteData:e}),o.component("VPBHome",Lt),o.component("VPBArchives",Me),o.component("VPBTags",Ke),o.component("VPBTestComponent",ss),o.component("VPBHomePost",q)}};const as={class:"w-full text-blue-800"},os=_({__name:"CustomBlogHeader",setup(o){const t=w();return(e,s)=>(n(),l("div",as,[s[0]||(s[0]=a("h1",{class:""},"grenier",-1)),B(" Newest Content: "+d(r(t).posts[0].title),1)]))}}),rs={name:"ImageCenter",props:{src:{type:String,required:!0},alt:{type:String,required:!0},width:{type:String,default:"100%"}}},ns={align:"center",class:""},ls=["src","alt","width"],cs={class:"inline-flex items-center"},is={class:"text-gray-600 dark:text-gray-400"};function ds(o,t,e,s,c,i){return n(),l("div",ns,[a("img",{src:e.src,alt:e.alt,width:e.width,class:"rounded object-cover"},null,8,ls),a("div",cs,[a("span",is,d(e.alt),1)])])}const us=E(rs,[["render",ds]]),ps={...S,Layout:()=>N(S.Layout,null,{}),enhanceApp({app:o,router:t,siteData:e}){S.enhanceApp({app:o,router:t,siteData:e}),o.component("CustomBlogHeader",os),o.component("ImageCenter",us)}};function J(o){if(o.extends){const t=J(o.extends);return{...t,...o,async enhanceApp(e){t.enhanceApp&&await t.enhanceApp(e),o.enhanceApp&&await o.enhanceApp(e)}}}return o}const I=J(ps),_s=_({name:"VitePressApp",setup(){const{site:o}=x();return rt(()=>{nt(()=>{document.documentElement.lang=o.value.lang,document.documentElement.dir=o.value.dir})}),lt(),ct(),it(),I.setup&&I.setup(),()=>N(I.Layout)}});async function hs(){const o=gs(),t=ms();t.provide(Y,o);const e=Q(o.route);return t.provide(Z,e),t.component("Content",K),t.component("ClientOnly",X),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return e.frontmatter.value}},$params:{get(){return e.page.value.params}}}),I.enhanceApp&&await I.enhanceApp({app:t,router:o,siteData:tt}),{app:t,router:o,data:e}}function ms(){return et(_s)}function gs(){let o=D,t;return st(e=>{let s=at(e);return o&&(t=s),(o||t===s)&&(s=s.replace(/\.js$/,".lean.js")),D&&(o=!1),ot(()=>import(s),[])},I.NotFound)}D&&hs().then(({app:o,router:t,data:e})=>{t.go().then(()=>{U(t.route,e.site),o.mount("#app")})});export{hs as createApp};
