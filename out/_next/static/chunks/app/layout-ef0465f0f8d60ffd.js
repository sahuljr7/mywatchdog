(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8634:function(e,t,r){Promise.resolve().then(r.t.bind(r,8877,23)),Promise.resolve().then(r.bind(r,6097)),Promise.resolve().then(r.t.bind(r,3247,23))},6097:function(e,t,r){"use strict";r.r(t),r.d(t,{Navbar:function(){return g}});var n=r(7437),s=r(2265),a=r(1396),i=r.n(a),o=r(4033),l=r(1827),d=r(2549),c=r(8004),u=r(3023),f=r(1908),m=r(9311),h=r(6110);let x=[{title:"System Monitoring",description:"Real-time monitoring of your system's performance and health."},{title:"Alert Configuration",description:"Set up custom alerts and notifications for your systems."},{title:"Dashboard Customization",description:"Create personalized dashboards with key metrics and insights."},{title:"API Documentation",description:"Comprehensive guide to integrating with our monitoring API."},{title:"Pricing Plans",description:"Compare our different pricing plans and features."}];function p(e){let{query:t,onClose:r}=e,a=(0,s.useRef)(null);(0,s.useEffect)(()=>{function e(e){a.current&&!a.current.contains(e.target)&&r()}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[r]);let i=x.filter(e=>e.title.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase()));return 0===t.length?null:(0,n.jsx)(h.Zb,{ref:a,className:"absolute top-full mt-2 w-full bg-white shadow-lg rounded-md overflow-hidden z-50",children:(0,n.jsx)("div",{className:"max-h-96 overflow-y-auto",children:i.length>0?(0,n.jsx)("div",{className:"p-2 space-y-2",children:i.map((e,t)=>(0,n.jsxs)("div",{className:"p-2 hover:bg-gray-50 rounded cursor-pointer",onClick:()=>{r()},children:[(0,n.jsx)("h4",{className:"font-medium",children:e.title}),(0,n.jsx)("p",{className:"text-sm text-gray-600",children:e.description})]},t))}):(0,n.jsxs)("div",{className:"p-4 text-center text-gray-500",children:['No results found for "',t,'"']})})})}function g(){let[e,t]=(0,s.useState)(!1),[r,a]=(0,s.useState)(!1),[h,x]=(0,s.useState)(""),[g,v]=(0,s.useState)(!1),b=(0,o.usePathname)(),y=[{href:"/",label:"Home"},{href:"/features",label:"Features"},{href:"/pricing",label:"Pricing"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}];return(0,s.useEffect)(()=>{let e=()=>{a(window.scrollY>0)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsx)("nav",{className:(0,m.cn)("fixed top-0 w-full z-50 transition-all duration-300",r?"bg-white shadow-md":"bg-transparent"),children:(0,n.jsxs)("div",{className:"container mx-auto px-4",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,n.jsx)(i(),{href:"/",className:"text-2xl font-bold text-primary",children:"MyWatchdog"}),(0,n.jsxs)("div",{className:"hidden md:flex items-center space-x-8",children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(f.I,{type:"search",placeholder:"Search...",className:"w-64",value:h,onChange:e=>{x(e.target.value),v(e.target.value.length>0)}}),(0,n.jsx)(l.Z,{className:"absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),g&&(0,n.jsx)(p,{query:h,onClose:()=>v(!1)})]}),y.map(e=>(0,n.jsx)(i(),{href:e.href,className:(0,m.cn)("text-sm font-medium transition-colors hover:text-primary",b===e.href?"text-primary":"text-gray-600"),children:e.label},e.href)),(0,n.jsx)(u.z,{children:"Get Started"})]}),(0,n.jsx)("button",{className:"md:hidden",onClick:()=>t(!e),children:e?(0,n.jsx)(d.Z,{}):(0,n.jsx)(c.Z,{})})]}),e&&(0,n.jsxs)("div",{className:"md:hidden py-4",children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)(f.I,{type:"search",placeholder:"Search...",className:"w-full",value:h,onChange:e=>{x(e.target.value),v(e.target.value.length>0)}}),g&&(0,n.jsx)(p,{query:h,onClose:()=>v(!1)})]}),y.map(e=>(0,n.jsx)(i(),{href:e.href,className:(0,m.cn)("block py-2 text-sm font-medium transition-colors hover:text-primary",b===e.href?"text-primary":"text-gray-600"),onClick:()=>t(!1),children:e.label},e.href)),(0,n.jsx)(u.z,{className:"w-full mt-4",children:"Get Started"})]})]})})}},3023:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(7437),s=r(2265),a=r(4949),i=r(9213),o=r(9311);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(l({variant:s,size:i,className:r})),ref:t,...c})});d.displayName="Button"},6110:function(e,t,r){"use strict";r.d(t,{Ol:function(){return o},Zb:function(){return i},aY:function(){return c},eW:function(){return u},ll:function(){return l}});var n=r(7437),s=r(2265),a=r(9311);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});i.displayName="Card";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",r),...s})});o.displayName="CardHeader";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})});l.displayName="CardTitle";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",r),...s})});d.displayName="CardDescription";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("p-6 pt-0",r),...s})});c.displayName="CardContent";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",r),...s})});u.displayName="CardFooter"},1908:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(7437),s=r(2265),a=r(9311);let i=s.forwardRef((e,t)=>{let{className:r,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},9311:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(7042),s=r(4769);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},8877:function(){}},function(e){e.O(0,[395,183,971,864,744],function(){return e(e.s=8634)}),_N_E=e.O()}]);