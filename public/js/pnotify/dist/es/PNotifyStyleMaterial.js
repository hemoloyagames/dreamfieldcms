import PNotify from"./PNotify.js";function setup(t){t.key="StyleMaterial",PNotify.modules.StyleMaterial=t,PNotify.modulesPrependContainer.push(t),PNotify.styling.material||(PNotify.styling.material={}),PNotify.styling.material=Object.assign(PNotify.styling.material,{container:"pnotify-material",notice:"pnotify-material-notice",info:"pnotify-material-info",success:"pnotify-material-success",error:"pnotify-material-error"}),PNotify.icons.material||(PNotify.icons.material={}),PNotify.icons.material=Object.assign(PNotify.icons.material,{notice:"material-icons pnotify-material-icon-notice",info:"material-icons pnotify-material-icon-info",success:"material-icons pnotify-material-icon-success",error:"material-icons pnotify-material-icon-error",closer:"material-icons pnotify-material-icon-closer",pinUp:"material-icons pnotify-material-icon-sticker",pinDown:"material-icons pnotify-material-icon-sticker pnotify-material-icon-stuck"})}function add_css(){var t=createElement("style");t.id="svelte-19og8nx-style",t.textContent='[ui-pnotify] .pnotify-material{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;font-size:14px}[ui-pnotify] .pnotify-material.ui-pnotify-shadow{-webkit-box-shadow:0px 6px 24px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 6px 24px 0px rgba(0,0,0,0.2);box-shadow:0px 6px 24px 0px rgba(0,0,0,0.2)}[ui-pnotify] .pnotify-material.ui-pnotify-container{padding:24px}[ui-pnotify] .pnotify-material .ui-pnotify-title{font-size:20px;margin-bottom:20px;line-height:24px}[ui-pnotify] .pnotify-material .ui-pnotify-title:last-child{margin-bottom:0}[ui-pnotify] .pnotify-material .ui-pnotify-text{font-size:16px;line-height:24px}[ui-pnotify].ui-pnotify-with-icon .pnotify-material .ui-pnotify-title,[ui-pnotify].ui-pnotify-with-icon .pnotify-material .ui-pnotify-text,[ui-pnotify].ui-pnotify-with-icon .pnotify-material .ui-pnotify-confirm{margin-left:32px}[dir=rtl] [ui-pnotify].ui-pnotify-with-icon .pnotify-material .ui-pnotify-title,[dir=rtl] [ui-pnotify].ui-pnotify-with-icon .pnotify-material .ui-pnotify-text,[dir=rtl] [ui-pnotify].ui-pnotify-with-icon .pnotify-material .ui-pnotify-confirm{margin-right:32px;margin-left:0}[ui-pnotify] .pnotify-material .ui-pnotify-action-bar{margin-top:20px;margin-right:-16px;margin-bottom:-16px}[dir=rtl] [ui-pnotify] .pnotify-material .ui-pnotify-action-bar{margin-left:-16px;margin-right:0}[ui-pnotify] .pnotify-material-notice{background-color:#FFEE58;border:none;color:#000}[ui-pnotify] .pnotify-material-info{background-color:#26C6DA;border:none;color:#000}[ui-pnotify] .pnotify-material-success{background-color:#66BB6A;border:none;color:#fff}[ui-pnotify] .pnotify-material-error{background-color:#EF5350;border:none;color:#fff}[ui-pnotify] .pnotify-material-icon-notice,[ui-pnotify] .pnotify-material-icon-info,[ui-pnotify] .pnotify-material-icon-success,[ui-pnotify] .pnotify-material-icon-error,[ui-pnotify] .pnotify-material-icon-closer,[ui-pnotify] .pnotify-material-icon-sticker{position:relative}[ui-pnotify] .pnotify-material-icon-closer,[ui-pnotify] .pnotify-material-icon-sticker{height:20px;width:20px;font-size:20px;line-height:20px;position:relative}[ui-pnotify] .pnotify-material-icon-notice:after,[ui-pnotify] .pnotify-material-icon-info:after,[ui-pnotify] .pnotify-material-icon-success:after,[ui-pnotify] .pnotify-material-icon-error:after,[ui-pnotify] .pnotify-material-icon-closer:after,[ui-pnotify] .pnotify-material-icon-sticker:after{font-family:\'Material Icons\'}[ui-pnotify] .pnotify-material-icon-notice:after{content:"announcement"}[ui-pnotify] .pnotify-material-icon-info:after{content:"info"}[ui-pnotify] .pnotify-material-icon-success:after{content:"check_circle"}[ui-pnotify] .pnotify-material-icon-error:after{content:"error"}[ui-pnotify] .pnotify-material-icon-closer,[ui-pnotify] .pnotify-material-icon-sticker{display:inline-block}[ui-pnotify] .pnotify-material-icon-closer:after{top:-4px;content:"close"}[ui-pnotify] .pnotify-material-icon-sticker:after{top:-5px;content:"pause"}[ui-pnotify] .pnotify-material-icon-sticker.pnotify-material-icon-stuck:after{content:"play_arrow"}[ui-pnotify].ui-pnotify .pnotify-material .ui-pnotify-prompt-input{display:block;width:100%;margin-bottom:8px;padding:15px 0 8px;background-color:transparent;color:inherit;border-radius:0;border-top:none;border-left:none;border-right:none;border-bottom-style:solid;border-bottom-color:inherit;border-bottom-width:1px}[ui-pnotify].ui-pnotify .pnotify-material .ui-pnotify-prompt-input:focus{outline:none;border-bottom-color:#3F51B5;border-bottom-width:2px}[ui-pnotify].ui-pnotify .pnotify-material .ui-pnotify-action-button{position:relative;padding:0 16px;overflow:hidden;border-width:0;outline:none;border-radius:2px;background-color:transparent;color:inherit;transition:background-color .3s;text-transform:uppercase;height:36px;margin:6px;min-width:64px;font-weight:bold}[ui-pnotify].ui-pnotify .pnotify-material .ui-pnotify-action-button.ui-pnotify-material-primary{color:#3F51B5}[ui-pnotify].ui-pnotify .pnotify-material .ui-pnotify-action-button:hover,[ui-pnotify].ui-pnotify .pnotify-material .ui-pnotify-action-button:focus{background-color:rgba(0, 0, 0, .12);color:inherit}[ui-pnotify].ui-pnotify .pnotify-material .ui-pnotify-action-button.ui-pnotify-material-primary:hover,[ui-pnotify].ui-pnotify .pnotify-material .ui-pnotify-action-button.ui-pnotify-material-primary:focus{color:#303F9F}[ui-pnotify].ui-pnotify .pnotify-material .ui-pnotify-action-button:before{content:"";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(153, 153, 153, .4);-webkit-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}[ui-pnotify].ui-pnotify .pnotify-material .ui-pnotify-action-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out, padding-top .2s ease-out}',append(document.head,t)}function create_main_fragment(t,i){return{c:noop,m:noop,p:noop,d:noop}}function PNotifyStyleMaterial(t){init(this,t),this._state=assign({},t.data),this._intro=!0,document.getElementById("svelte-19og8nx-style")||add_css(),this._fragment=create_main_fragment(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}function createElement(t){return document.createElement(t)}function append(t,i){t.appendChild(i)}function noop(){}function init(t,i){t._handlers=blankObject(),t._slots=blankObject(),t._bind=i._bind,t._staged={},t.options=i,t.root=i.root||t,t.store=i.store||t.root.store,i.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function assign(t,i){for(var o in i)t[o]=i[o];return t}function destroy(t){this.destroy=noop,this.fire("destroy"),this.set=noop,this._fragment.d(!1!==t),this._fragment=null,this._state={}}function get(){return this._state}function fire(t,i){var o=t in this._handlers&&this._handlers[t].slice();if(o)for(var n=0;n<o.length;n+=1){var e=o[n];if(!e.__calling)try{e.__calling=!0,e.call(this,i)}finally{e.__calling=!1}}}function on(t,i){var o=this._handlers[t]||(this._handlers[t]=[]);return o.push(i),{cancel:function(){var t=o.indexOf(i);~t&&o.splice(t,1)}}}function set(t){this._set(assign({},t)),this.root._lock||flush(this.root)}function _set(t){var i=this._state,o={},n=!1;for(var e in t=assign(this._staged,t),this._staged={},t)this._differs(t[e],i[e])&&(o[e]=n=!0);n&&(this._state=assign(assign({},i),t),this._recompute(o,this._state),this._bind&&this._bind(o,this._state),this._fragment&&(this.fire("state",{changed:o,current:this._state,previous:i}),this._fragment.p(o,this._state),this.fire("update",{changed:o,current:this._state,previous:i})))}function _stage(t){assign(this._staged,t)}function _mount(t,i){this._fragment[this._fragment.i?"i":"m"](t,i||null)}function _differs(t,i){return t!=t?i==i:t!==i||t&&"object"==typeof t||"function"==typeof t}function blankObject(){return Object.create(null)}function flush(t){t._lock=!0,callAll(t._beforecreate),callAll(t._oncreate),callAll(t._aftercreate),t._lock=!1}function callAll(t){for(;t&&t.length;)t.shift()()}assign(PNotifyStyleMaterial.prototype,{destroy:destroy,get:get,fire:fire,on:on,set:set,_set:_set,_stage:_stage,_mount:_mount,_differs:_differs}),PNotifyStyleMaterial.prototype._recompute=noop,setup(PNotifyStyleMaterial);export default PNotifyStyleMaterial;
//# sourceMappingURL=PNotifyStyleMaterial.js.map