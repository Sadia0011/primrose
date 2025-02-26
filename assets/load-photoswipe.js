!function(){"use strict";const t={};function e(e={}){if(e.type||(e.type="json"),e.url)return t[e.url]?t[e.url]:function(e,s){const o=new Promise(((t,o)=>{"text"===s?fetch(e).then((t=>t.text())).then((e=>{t(e)})).catch((t=>{o(t)})):function(t,e,s){let o=document.getElementsByTagName("head")[0],i=!1,n=document.createElement("script");n.src=t,n.onload=n.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState?s():(i=!0,e())},o.appendChild(n)}(e,(function(){t()}),(function(){o()}))}));return t[e]=o,o}(e.url,e.type);if(e.json)return t[e.json]?Promise.resolve(t[e.json]):window.fetch(e.json).then((t=>t.json())).then((s=>(t[e.json]=s,s)));if(e.name){const s="".concat(e.name,e.version);return t[s]?t[s]:function(e){const s="".concat(e.name,e.version),o=new Promise(((t,s)=>{try{window.Shopify.loadFeatures([{name:e.name,version:e.version,onLoad:e=>{!function(t,e,s){s?e(s):t()}(t,s,e)}}])}catch(t){s(t)}}));return t[s]=o,o}(e)}return Promise.reject()}window.theme.LoadPhotoswipe=window.theme.LoadPhotoswipe||null;const s=".pswp",o=".pswp__custom-close",i="iframe, video",n=".pswp__thumbs",p="is-current",h="pswp--custom-loader",l="pswp--custom-opening",r="pswp__loader",u="is-focused",a="data-pswp-option-classes",c="aria-current",m=`<div class="${r}"><div class="loader pswp__loader-line"><div class="loader-indeterminate"></div></div></div>`;window.theme.LoadPhotoswipe=class{constructor(t,e=""){this.items=t,this.pswpElement=document.querySelectorAll(s)[0],this.popup=null,this.popupThumbs=null,this.popupThumbsContainer=this.pswpElement.querySelector(n),this.closeBtn=this.pswpElement.querySelector(o),this.keyupCloseEvent=t=>this.keyupClose(t),this.a11y=window.theme.a11y;this.options=""!==e?e:{history:!1,focus:!1,mainClass:""},this.init()}init(){this.pswpElement.classList.add(l),this.initLoader(),e({url:window.theme.assets.photoswipe}).then((()=>this.loadPopup())).catch((t=>console.error(t)))}initLoader(){if(this.pswpElement.classList.contains(h)&&""!==this.options&&this.options.mainClass){this.pswpElement.setAttribute(a,this.options.mainClass);let t=document.createElement("div");t.innerHTML=m,t=t.firstChild,this.pswpElement.appendChild(t)}else this.pswpElement.setAttribute(a,"")}loadPopup(){const t=window.themePhotoswipe.PhotoSwipe.default,e=window.themePhotoswipe.PhotoSwipeUI.default;this.pswpElement.classList.contains(h)&&this.pswpElement.classList.remove(h),this.pswpElement.classList.remove(l),this.popup=new t(this.pswpElement,e,this.items,this.options),this.popup.init(),this.thumbsActions(),document.body.classList.contains(u)&&setTimeout((()=>{this.a11y.trapFocus(this.pswpElement,{elementToFocus:this.closeBtn})}),200),this.popup.listen("close",(()=>this.onClose())),this.options&&this.options.closeElClasses&&this.options.closeElClasses.length&&this.options.closeElClasses.forEach((t=>{const e=this.pswpElement.querySelector(`.pswp__${t}`);e&&e.addEventListener("keyup",this.keyupCloseEvent)}))}thumbsActions(){this.popupThumbsContainer&&this.popupThumbsContainer.children.length&&(this.popupThumbsContainer.addEventListener("wheel",(t=>this.stopDisabledScroll(t))),this.popupThumbsContainer.addEventListener("mousewheel",(t=>this.stopDisabledScroll(t))),this.popupThumbsContainer.addEventListener("DOMMouseScroll",(t=>this.stopDisabledScroll(t))),this.popupThumbs=this.pswpElement.querySelectorAll(`${n} > *`),this.popupThumbs.forEach(((t,e)=>{t.addEventListener("click",(s=>{s.preventDefault();const o=t.parentElement.querySelector(`.${p}`);o.classList.remove(p),o.setAttribute(c,!1),t.classList.add(p),t.setAttribute(c,!0),this.popup.goTo(e)}))})),this.popup.listen("imageLoadComplete",(()=>this.setCurrentThumb())),this.popup.listen("beforeChange",(()=>this.setCurrentThumb())))}stopDisabledScroll(t){t.stopPropagation()}keyupClose(t){"Enter"===t.code&&this.popup.close()}onClose(){const t=this.pswpElement.querySelector(i);if(t&&t.parentNode.removeChild(t),this.popupThumbsContainer&&this.popupThumbsContainer.firstChild)for(;this.popupThumbsContainer.firstChild;)this.popupThumbsContainer.removeChild(this.popupThumbsContainer.firstChild);this.pswpElement.setAttribute(a,"");const e=this.pswpElement.querySelector(`.${r}`);e&&this.pswpElement.removeChild(e),this.options&&this.options.closeElClasses&&this.options.closeElClasses.length&&this.options.closeElClasses.forEach((t=>{const e=this.pswpElement.querySelector(`.pswp__${t}`);e&&e.removeEventListener("keyup",this.keyupCloseEvent)})),this.a11y.removeTrapFocus(),this.a11y.autoFocusLastElement()}setCurrentThumb(){const t=this.pswpElement.querySelector(`${n} > .${p}`);if(t&&(t.classList.remove(p),t.setAttribute(c,!1)),!this.popupThumbs)return;const e=this.popupThumbs[this.popup.getCurrentIndex()];e.classList.add(p),e.setAttribute(c,!0),this.scrollThumbs(e)}scrollThumbs(t){const e=this.popupThumbsContainer.scrollLeft+this.popupThumbsContainer.offsetWidth,s=t.offsetLeft;if(e<=s+t.offsetWidth||e>s){const e=parseInt(window.getComputedStyle(t).marginLeft);this.popupThumbsContainer.scrollTo({top:0,left:s-e,behavior:"smooth"})}}}}();
