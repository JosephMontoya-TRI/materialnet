(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{24:function(t,o,e){"use strict";function n(t){return!!t.shadowRoot&&!!t.attachShadow}function r(t,o,e,r){if(n(t)){var i=t.querySelector("input.aux-input");i||((i=t.ownerDocument.createElement("input")).type="hidden",i.classList.add("aux-input"),t.appendChild(i)),i.disabled=r,i.name=o,i.value=e}}function i(t,o,e){return Math.max(t,Math.min(o,e))}function a(t){return t.timeStamp||Date.now()}function c(t){return u(t,0)}function u(t,o){var e=t._original||t;return{_original:t,emit:function(t,o){void 0===o&&(o=0);var e;return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];clearTimeout(e),e=setTimeout.apply(void 0,[t,o].concat(n))}}(e.emit.bind(e),o)}}e.d(o,"a",function(){return a}),e.d(o,"b",function(){return n}),e.d(o,"c",function(){return u}),e.d(o,"d",function(){return c}),e.d(o,"e",function(){return r}),e.d(o,"f",function(){return i})},39:function(t,o,e){"use strict";e.r(o),e.d(o,"IonBackdrop",function(){return r});var n=e(24),r=function(){function t(){this.lastClick=-1e4,this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return t.prototype.componentDidLoad=function(){!function(t,o){a.add(o),t.body.classList.add(i)}(this.doc,this)},t.prototype.componentDidUnload=function(){!function(t,o){a.delete(o),0===a.size&&t.body.classList.remove(i)}(this.doc,this)},t.prototype.onTouchStart=function(t){this.lastClick=Object(n.a)(t),this.emitTap(t)},t.prototype.onMouseDown=function(t){this.lastClick<Object(n.a)(t)-2500&&this.emitTap(t)},t.prototype.emitTap=function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},t.prototype.hostData=function(){return{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}}},Object.defineProperty(t,"is",{get:function(){return"ion-backdrop"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{doc:{context:"document"},stopPropagation:{type:Boolean,attr:"stop-propagation"},tappable:{type:Boolean,attr:"tappable"},visible:{type:Boolean,attr:"visible"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionBackdropTap",method:"ionBackdropTap",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"touchstart",method:"onTouchStart",capture:!0},{name:"mousedown",method:"onMouseDown",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-backdrop-md-h{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2;background-color:var(--ion-backdrop-color,#000)}.backdrop-hide.sc-ion-backdrop-md-h{background:0 0}.backdrop-no-tappable.sc-ion-backdrop-md-h{cursor:auto}body.backdrop-no-scroll.sc-ion-backdrop-md{overflow:hidden}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),i="backdrop-no-scroll",a=new Set;
/*! Built with http://stenciljs.com */}}]);