(()=>{var g=Object.defineProperty;var u=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var i=(n,t,e)=>t in n?g(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,s=(n,t)=>{for(var e in t||(t={}))m.call(t,e)&&i(n,e,t[e]);if(u)for(var e of u(t))c.call(t,e)&&i(n,e,t[e]);return n};(function(){"use strict";function n(){window.panel.plugins.marks||(window.panel.plugins.marks=[])}function t(o){n(),window.panel.plugins.marks.push(()=>o)}class e{constructor(r={}){this.options=s(s({},this.defaults),r)}init(){return null}bindEditor(r=null){this.editor=r}get name(){return null}get type(){return"extension"}get defaults(){return{}}plugins(){return[]}inputRules(){return[]}pasteRules(){return[]}keys(){return{}}}class a extends e{constructor(r={}){super(r)}command(){return()=>{}}remove(){this.editor.removeMark(this.name)}get schema(){return null}get type(){return"mark"}toggle(){return this.editor.toggleMark(this.name)}update(r){this.editor.updateMark(this.name,r)}}class l extends a{get button(){return{icon:"quote",label:"Footnote"}}commands(){return()=>this.toggle()}get name(){return"footnote"}get schema(){return{parseDOM:[{tag:"article-footnote"}],toDOM:r=>["article-footnote",s({},r.attrs),0]}}}var d="";t({footnote:new l})})();})();
