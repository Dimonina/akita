(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(190)),i={title:"Using Immer"},c={id:"immer",isDocsHomePage:!1,title:"Using Immer",description:"As you know, when working with immutable objects you often get to what\u2019s called a \u201cspread hell\u201d situations. If you prefer working with immutable objects in an mutable fashion, you can use immer with Akita.",source:"@site/docs/immer.mdx",permalink:"/akita/docs/immer",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/immer.mdx",sidebar:"docs",previous:{title:"Best Practices",permalink:"/akita/docs/best-practices"},next:{title:"Caching Support",permalink:"/akita/docs/additional/cache"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As you know, when working with immutable objects you often get to what\u2019s called a \u201cspread hell\u201d situations. If you prefer working with immutable objects in an mutable fashion, you can use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/immerjs/immer"}),"immer")," with Akita."),Object(a.b)("p",null,"The only thing you need to do is pass the ",Object(a.b)("inlineCode",{parentName:"p"},"produce")," function from ",Object(a.b)("inlineCode",{parentName:"p"},"immer")," to your store:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.store.ts"',title:'"todos.store.ts"'}),"import { produce } from 'immer';\n\nexport interface TodosState extends EntityState<Todo> {\n  ui: {\n    filter: VISIBILITY_FILTER\n  };\n}\n\nconst initialState = {\n  ui: { filter: VISIBILITY_FILTER.SHOW_ALL }\n};\n\n@StoreConfig({ name: 'todos', producerFn: produce })\nexport class TodosStore extends EntityStore<TodosState> {\n  constructor() {\n    super(initialState);\n  }\n}\n")),Object(a.b)("p",null,"Now when you use the store's ",Object(a.b)("inlineCode",{parentName:"p"},"update")," function, you'll get the ",Object(a.b)("inlineCode",{parentName:"p"},"draft")," version, which you can mutate:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'}),"export class TodosService {\n\n  constructor(private todosStore: TodosStore) { }\n\n  updateFilter(filter: VISIBILITY_FILTER) {\n    this.todosStore.update(state => {\n      state.ui.filter = filter;\n    })\n  }\n\n  complete({ id, completed }: Todo) {\n    this.todosStore.update(id, entity => {\n      entity.completed = completed;\n    });\n  }\n}\n")),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"When you choose to work with ",Object(a.b)("inlineCode",{parentName:"p"},"immer"),", you can't return a new value from the callback function:"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"todosStore.update(id, entity => entity.completed = completed);\n")),Object(a.b)("p",null,"This will cause ",Object(a.b)("inlineCode",{parentName:"p"},"immer")," to throw. Here's a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackblitz.com/edit/akita-todos-immer"}),"live")," example you can play with."))}p.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?o.a.createElement(b,c({ref:t},l,{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);