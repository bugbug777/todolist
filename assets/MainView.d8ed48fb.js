import{o as l,c as d,a as e,b as h,w as O,n as B,u as n,t as y,d as w,e as L,f as N,r as k,g as R,s as V,h as v,v as D,i as z,j as A,F as $,k as C,l as S,m as q,p as G}from"./index.5ca2f347.js";import{_ as H,s as g,r as _,e as p}from"./axios.63f5d776.js";const J={class:"container py-4 px-8 mx-auto"},K={class:"flex justify-between items-center"},P=L("ONLINE TODO LIST"),Q={class:"flex"},W={class:"hidden md:block font-bold mr-6"},X=["onClick"],Y={__name:"NavbarComponent",props:{user:Object},setup(t){const o=N(),a=()=>{localStorage.removeItem("token"),g("\u6210\u529F\u767B\u51FA\uFF01"),o.push("/login")};return(r,i)=>{const c=k("router-link");return l(),d("nav",J,[e("div",K,[e("h1",null,[h(c,{to:"/",style:B({backgroundImage:`url(${n(H)})`}),class:"block w-[255px] h-[38.45px] bg-no-repeat bg-center bg-cover indent-[101%] whitespace-nowrap overflow-hidden"},{default:O(()=>[P]),_:1},8,["style"])]),e("ul",Q,[e("li",W,y(`${t.user.name} \u7684\u5F85\u8FA6`),1),e("li",null,[e("a",{onClick:w(a,["prevent"]),href:"#"},"\u767B\u51FA",8,X)])])])])}}},j=R("todoStore",{state(){return{status:"\u5168\u90E8",todos:[],content:""}},getters:{tempTodos:t=>t.status==="\u5168\u90E8"?t.todos:t.status==="\u5F85\u5B8C\u6210"?t.todos.filter(o=>o.status===!1):t.todos.filter(o=>o.status===!0),todoNum:t=>t.todos.filter(o=>o.status===!1).length},actions:{updateStatus(t){this.status=t.target.textContent},async getTodos(){try{const t=await _("/todos","get");this.todos=t.data.todos}catch{p("\u4E0D\u597D\u610F\u601D\uFF0C\u4F3A\u670D\u5668\u525B\u525B\u4E0D\u5C0F\u5FC3\u7761\u8457\u4E86\uFF01")}},async addTodo(){try{await _("/todos","post",{content:this.content}),this.content="",g("\u65B0\u589E\u6210\u529F\uFF01"),this.getTodos()}catch{p("\u65B0\u589E\u5931\u6557")}},async editTodoStatus(t,{status:o,content:a}){try{await _(`/todos/${t}`,"put",{status:o,content:a}),this.getTodos()}catch(r){console.dir(r),p("\u4FEE\u6539\u5931\u6557\uFF01")}},async editTodo(t,o){try{await _(`/todos/${t}`,"put",{content:o.target.value}),this.getTodos()}catch{p("\u4FEE\u6539\u5931\u6557\uFF01")}},async deleteTodo(t){try{await _(`/todos/${t}`,"delete"),g("\u522A\u9664\u6210\u529F\uFF01"),this.getTodos()}catch{p("\u522A\u9664\u5931\u6557")}},async deleteTodos(){try{await _("/todos?status=true","delete"),g("\u6E05\u9664\u6240\u6709\u5DF2\u5B8C\u6210\u4E8B\u9805\uFF01"),this.getTodos()}catch{p("\u522A\u9664\u5931\u6557")}}}}),Z={class:"relative"},tt={__name:"TodobarComponent",setup(t){const o=j(),{content:a}=V(o),{addTodo:r}=o;return(i,c)=>{const b=k("font-awesome-icon");return l(),d("div",Z,[v(e("input",{"onUpdate:modelValue":c[0]||(c[0]=m=>z(a)?a.value=m:null),class:"block w-full rounded-[10px] py-3 px-4 placeholder-shown:text-[#9F9A91]",type:"text",placeholder:"\u65B0\u589E\u5F85\u8FA6\u4E8B\u9805"},null,512),[[D,n(a)]]),e("button",{onClick:c[1]||(c[1]=(...m)=>n(r)&&n(r)(...m)),class:"absolute top-0 right-0 bottom-0 flex justify-center items-center rounded-[10px] text-white p-[10px] m-1 bg-[#333]",type:"button"},[h(b,{icon:"fa-solid fa-plus","fixed-width":""})])])}}},et="/todolist/assets/empty.b0a76301.png",ot={key:0,class:"rounded-[10px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)]"},st={class:"flex"},nt={class:"p-6"},at={class:"mb-4"},rt={class:"flex"},ct=["onChange","onUpdate:modelValue","name","id"],lt=["onChange","onUpdate:modelValue","disabled"],dt=["onClick"],it={class:"flex justify-between"},ut={class:"text-[14px]"},_t={key:1,class:"text-center pt-11"},pt=e("p",{class:"mb-4"},"\u76EE\u524D\u5C1A\u7121\u5F85\u8FA6\u4E8B\u9805",-1),ht=e("img",{class:"block max-w-full mx-auto",src:et,alt:"No Todos"},null,-1),mt=[pt,ht],ft={__name:"TodolistComponent",setup(t){const o=["\u5168\u90E8","\u5F85\u5B8C\u6210","\u5DF2\u5B8C\u6210"],a=j(),{status:r,todos:i,tempTodos:c,todoNum:b}=V(a),{getTodos:m,editTodoStatus:E,editTodo:M,deleteTodo:U,deleteTodos:T,updateStatus:F}=a;return A(()=>m()),(yt,f)=>{const I=k("font-awesome-icon");return n(i).length?(l(),d("div",ot,[e("ul",st,[(l(),d($,null,C(o,s=>e("li",{key:s,class:"grow"},[e("a",{onClick:f[0]||(f[0]=w((...x)=>n(F)&&n(F)(...x),["prevent"])),class:S([{active:n(r)===s},"block text-center font-bold text-[14px] text-[#9F9A91] py-4"]),href:"#"},y(s),3)])),64))]),e("div",nt,[e("ul",at,[(l(!0),d($,null,C(n(c),(s,x)=>(l(),d("li",{key:s._id,class:"border-b border-[#E5E5E5] pb-[15px] mb-4"},[e("div",rt,[v(e("input",{onChange:u=>n(E)(s._id,s),"onUpdate:modelValue":u=>s.status=u,class:"mr-4",type:"checkbox",name:`todo${x}`,id:`todo${x}`},null,40,ct),[[q,s.status]]),v(e("input",{onChange:u=>n(M)(s._id,u),"onUpdate:modelValue":u=>s.content=u,class:S([{done:s.status},"grow focus-visible:outline-none"]),disabled:s.status},null,42,lt),[[D,s.content]]),e("button",{onClick:u=>n(U)(s._id),type:"button"},[h(I,{icon:"fa-solid fa-xmark","fixed-width":""})],8,dt)])]))),128))]),e("div",it,[e("p",ut,y(n(b))+" \u500B\u5F85\u5B8C\u6210\u9805\u76EE",1),e("a",{onClick:f[1]||(f[1]=w((...s)=>n(T)&&n(T)(...s),["prevent"])),class:"text-[14px] text-[#9F9A91]",href:"#"},"\u6E05\u9664\u5DF2\u5B8C\u6210\u9805\u76EE")])])])):(l(),d("div",_t,mt))}}},xt={class:"h-screen bg-[#FFD370] md:bg-[linear-gradient(172.7deg,#FFD370_5.12%,#FFD370_53.33%,#FFD370_53.44%,#FFFFFF_53.45%,#FFFFFF_94.32%)]"},gt={class:"container md:py-6 px-8 mx-auto"},bt={class:"md:w-[500px] mx-auto"},kt={__name:"MainView",setup(t){const o=N(),a=G({}),r=async()=>{try{const i=await _("/users/check","get");a.value=i.data.user}catch{p("\u60A8\u5C1A\u672A\u767B\u5165\uFF01"),o.push("/login")}};return A(()=>{r()}),(i,c)=>(l(),d("div",xt,[h(Y,{user:a.value},null,8,["user"]),e("div",gt,[e("div",bt,[h(tt,{class:"mb-4"}),h(ft)])])]))}};export{kt as default};