"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[7029],{7029:(e,l,t)=>{t.r(l),t.d(l,{default:()=>y});var s=t(5530),a=t(9523),i=t(631),r=t(5598),u=t(6254),o=t(4469),n=t(2687),c=t(7924);const h=["/DailyRoutine.html","/Fitness.html","/","/blog.html","/intro.html","/posts/MOE.html","/posts/%E6%90%9C%E6%8E%A8_auc.html","/apps/Applist.html","/apps/Chrome.html","/apps/design.html","/apps/toolbox.html","/code/AutoHotkey.html","/code/Electron.html","/code/HTML.html","/code/Javascript.html","/code/Markdown.html","/code/Python.html","/code/","/code/Regex.html","/code/Vue.html","/deploy/CloudServices.html","/deploy/Cloudflare.html","/deploy/DNS.html","/deploy/GitHub.html","/deploy/MySQL.html","/deploy/Static.html","/deploy/VPS.html","/family/Coupon.html","/family/Diet.html","/family/Life.html","/web/Comments.html","/web/VuePress.html","/web/docsify.html","/apps/topic/","/apps/topic/topic01.html","/apps/topic/topic02anytitle.html","/404.html","/posts/","/apps/","/deploy/","/family/","/web/","/category/","/category/%E5%A4%A7%E6%A8%A1%E5%9E%8B/","/category/%E7%AE%97%E6%B3%95/","/category/%E5%B7%A5%E5%85%B7/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/tag/","/tag/deepseek/","/tag/base/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/article/","/star/","/timeline/"],v=(0,a.Mjh)("SLIMSEARCH_QUERY_HISTORY",[]),m=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:d}=n.o,p=(0,a.Mjh)("SLIMSEARCH_RESULT_HISTORY",[]);var y=(0,u.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const t=(0,o.rd)(),h=(0,o.Zv)(),y=(0,s.s5)(n.l),{enabled:g,addQueryHistory:E,queryHistories:f,removeQueryHistory:H}=(()=>{const{queryHistoryCount:e}=n.o,l=e>0;return{enabled:l,queryHistories:v,addQueryHistory:t=>{l&&(v.value=Array.from(new Set([t,...v.value.slice(0,e-1)])))},removeQueryHistory:e=>{v.value=[...v.value.slice(0,e),...v.value.slice(e+1)]}}})(),{enabled:k,resultHistories:A,addResultHistory:C,removeResultHistory:Q}=(()=>{const e=d>0;return{enabled:e,resultHistories:p,addResultHistory:l=>{if(e){const e={link:m(l),display:l.display};"header"in l&&(e.header=l.header),p.value=[e,...p.value.slice(0,d-1)]}},removeResultHistory:e=>{p.value=[...p.value.slice(0,e),...p.value.slice(e+1)]}}})(),w=g||k,S=(0,r.lW)(e,"queries"),{results:b,isSearching:R}=(e=>{const l=(0,n.u)(),t=(0,o.Zv)(),s=(0,o.BV)(),a=(0,r.KR)(0),c=(0,u.EW)((()=>a.value>0)),h=(0,r.IJ)([]);return(0,u.sV)((()=>{const{search:r,terminate:o}=(0,n.c)(),c=(0,i.Q0)((e=>{const{resultsFilter:i=e=>e,querySplitter:u,suggestionsFilter:o,...n}=l.value;e?(a.value+=1,r(e,t.value,n).then((l=>i(l,e,t.value,s.value))).then((e=>{a.value-=1,h.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(h.value=[])}))):h.value=[]}),n.o.searchDelay-n.o.suggestDelay,{maxWait:5e3});(0,i.T3)([e,t],(([e])=>c(e.join(" ")))),(0,u.hi)((()=>{o()}))})),{isSearching:c,results:h}})(S),D=(0,r.Kh)({isQuery:!0,index:0}),x=(0,r.KR)(0),q=(0,r.KR)(0),B=(0,u.EW)((()=>w&&(f.value.length>0||A.value.length>0))),M=(0,u.EW)((()=>b.value.length>0)),L=(0,u.EW)((()=>b.value[x.value]||null)),T=e=>e.map((e=>(0,s.Kg)(e)?e:(0,u.h)(e[0],e[1]))),F=e=>{if("customField"===e.type){const l=n.a[e.index]||"$content",[t,a=""]=(0,s.Qd)(l)?l[h.value].split("$content"):l.split("$content");return e.display.map((e=>(0,u.h)("div",T([t,...e,a]))))}return e.display.map((e=>(0,u.h)("div",T(e))))},W=()=>{x.value=0,q.value=0,l("updateQuery",""),l("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(M.value){if("ArrowUp"===s.key)q.value>0?q.value-=1:(x.value=x.value>0?x.value-1:b.value.length-1,q.value=L.value.contents.length-1);else if("ArrowDown"===s.key)q.value<L.value.contents.length-1?q.value+=1:(x.value=x.value<b.value.length-1?x.value+1:0,q.value=0);else if("Enter"===s.key){const l=L.value.contents[q.value];E(e.queries.join(" ")),C(l),t.push(m(l)),W()}}else if(k)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:l}=D;0===l?(D.isQuery=!e,D.index=e?A.value.length-1:f.value.length-1):D.index=l-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:l}=D;l===(e?f.value.length-1:A.value.length-1)?(D.isQuery=!e,D.index=0):D.index=l+1})();else if("Enter"===s.key){const{index:e}=D;D.isQuery?(l("updateQuery",f.value[e]),s.preventDefault()):(t.push(A.value[e].link),W())}})),(0,u.wB)([x,q],(()=>{document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,u.h)("div",{class:["slimsearch-result-wrapper",{empty:e.queries.length?!M.value:!B.value}],id:"slimsearch-results"},e.queries.length?R.value?(0,u.h)(c.S,{hint:y.value.searching}):M.value?(0,u.h)("ul",{class:"slimsearch-result-list"},b.value.map((({title:l,contents:t},s)=>{const a=x.value===s;return(0,u.h)("li",{class:["slimsearch-result-list-item",{active:a}]},[(0,u.h)("div",{class:"slimsearch-result-title"},l||y.value.defaultTitle),t.map(((l,t)=>{const s=a&&q.value===t;return(0,u.h)(o.Wt,{to:m(l),class:["slimsearch-result-item",{active:s,"aria-selected":s}],onClick:()=>{E(e.queries.join(" ")),C(l),W()}},(()=>["text"===l.type?null:(0,u.h)("title"===l.type?c.T:"heading"===l.type?c.H:c.a,{class:"slimsearch-result-type"}),(0,u.h)("div",{class:"slimsearch-result-content"},["text"===l.type&&l.header?(0,u.h)("div",{class:"content-header"},l.header):null,(0,u.h)("div",F(l))])]))}))])}))):y.value.emptyResult:w?B.value?[g?(0,u.h)("ul",{class:"slimsearch-result-list"},(0,u.h)("li",{class:"slimsearch-result-list-item"},[(0,u.h)("div",{class:"slimsearch-result-title"},y.value.queryHistory),f.value.map(((e,t)=>(0,u.h)("div",{class:["slimsearch-result-item",{active:D.isQuery&&D.index===t}],onClick:()=>{l("updateQuery",e)}},[(0,u.h)(c.b,{class:"slimsearch-result-type"}),(0,u.h)("div",{class:"slimsearch-result-content"},e),(0,u.h)("button",{class:"slimsearch-remove-icon",innerHTML:c.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),H(t)}})])))])):null,k?(0,u.h)("ul",{class:"slimsearch-result-list"},(0,u.h)("li",{class:"slimsearch-result-list-item"},[(0,u.h)("div",{class:"slimsearch-result-title"},y.value.resultHistory),A.value.map(((e,l)=>(0,u.h)(o.Wt,{to:e.link,class:["slimsearch-result-item",{active:!D.isQuery&&D.index===l}],onClick:()=>{W()}},(()=>[(0,u.h)(c.b,{class:"slimsearch-result-type"}),(0,u.h)("div",{class:"slimsearch-result-content"},[e.header?(0,u.h)("div",{class:"content-header"},e.header):null,(0,u.h)("div",e.display.map((e=>T(e))).flat())]),(0,u.h)("button",{class:"slimsearch-remove-icon",innerHTML:c.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),Q(l)}})]))))])):null]:y.value.emptyHistory:y.value.emptyResult)}})}}]);