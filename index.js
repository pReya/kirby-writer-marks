(()=>{var e=class{constructor(t={}){this.options={...this.defaults,...t}}init(){return null}bindEditor(t=null){this.editor=t}get name(){return null}get type(){return"extension"}get defaults(){return{}}plugins(){return[]}inputRules(){return[]}pasteRules(){return[]}keys(){return{}}},s=e;var r=class extends s{constructor(t={}){super(t)}command(){return()=>{}}remove(){this.editor.removeMark(this.name)}get schema(){return null}get type(){return"mark"}toggle(){return this.editor.toggleMark(this.name)}update(t){this.editor.updateMark(this.name,t)}},u=r;var n=class extends u{get button(){return{icon:"quote",label:"Footnote"}}commands(){return()=>this.toggle()}get name(){return"footnote"}get schema(){return{parseDOM:[{tag:"article-footnote"}],toDOM:t=>["article-footnote",{...t.attrs},0]}}},a=n;window.panel.plugins.writer={footnote:new a};})();
