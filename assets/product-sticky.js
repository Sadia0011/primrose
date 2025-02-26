!function(){"use strict";const t=".product__page",i="[data-form-wrapper]",e="[data-header-sticky]",s="[data-product-media-list]",o="is-sticky";customElements.get("product-sticky")||customElements.define("product-sticky",class extends HTMLElement{constructor(){super(),this.formWrapper=this.querySelector(i),this.stickyScrollTop=0,this.scrollLastPosition=0,this.stickyDefaultTop=0,this.currentPoint=0,this.defaultTopBottomSpacings=30,this.scrollTopPosition=window.scrollY,this.scrollDirectionDown=!0,this.requestAnimationSticky=null,this.stickyFormLoad=!0,this.stickyFormLastHeight=null,this.onChangeCounter=0,this.scrollEvent=t=>this.scrollEvents(t),this.resizeEvent=t=>this.resizeEvents(t),this.stickyFormEvent=t=>this.stickyFormEvents(t)}connectedCallback(){this.stickyScrollCheck(),document.addEventListener("theme:resize",this.resizeEvent),theme.variables.productPageSticky&&(this.requestAnimationSticky=requestAnimationFrame((()=>this.calculateStickyPosition())),this.formWrapper.addEventListener("theme:form:sticky",this.stickyFormEvent),document.addEventListener("theme:scroll",this.scrollEvent))}stickyFormEvents(t){this.removeAnimationFrameSticky(),this.requestAnimationSticky=requestAnimationFrame((()=>this.calculateStickyPosition(t)))}scrollEvents(t){this.scrollTopPosition=t.detail.position,this.scrollDirectionDown=t.detail.down,this.requestAnimationSticky||(this.requestAnimationSticky=requestAnimationFrame((()=>this.calculateStickyPosition())))}resizeEvents(t){this.stickyScrollCheck(),document.removeEventListener("theme:scroll",this.scrollEvent),this.formWrapper.removeEventListener("theme:form:sticky",this.stickyFormEvent)}stickyScrollCheck(){const e=this.querySelector(`${t} ${i}`);if(e)if(window.theme.isMobile())theme.variables.productPageSticky=!1,e.classList.remove(o);else{const t=this.querySelector(i),r=this.querySelector(s);if(!t||!r)return;t.offsetHeight<r.offsetHeight?(theme.variables.productPageSticky=!0,e.classList.add(o)):(theme.variables.productPageSticky=!1,e.classList.remove(o))}}calculateStickyPosition(t=null){if(document.documentElement.hasAttribute("data-scroll-locked"))return void this.removeAnimationFrameSticky();const i=Boolean(t&&t.detail),s=Boolean(i&&t.detail.element&&"accordion"===t.detail.element),o=this.formWrapper.offsetHeight,r=window.innerHeight-o-this.defaultTopBottomSpacings,c=Math.abs(this.scrollTopPosition-this.scrollLastPosition);if(this.scrollDirectionDown?this.stickyScrollTop-=c:this.stickyScrollTop+=c,this.stickyFormLoad){if(document.querySelector(e)){const{headerHeight:t}=window.theme.readHeights();this.stickyDefaultTop=t}else this.stickyDefaultTop=this.defaultTopBottomSpacings;this.stickyScrollTop=this.stickyDefaultTop}this.stickyScrollTop=Math.min(Math.max(this.stickyScrollTop,r),this.stickyDefaultTop);const n=this.stickyScrollTop-this.currentPoint;this.currentPoint=this.stickyFormLoad?this.stickyScrollTop:this.currentPoint+.5*n,this.formWrapper.style.setProperty("--sticky-top",`${this.currentPoint}px`),this.scrollLastPosition=this.scrollTopPosition,this.stickyFormLoad=!1,s&&this.onChangeCounter<=10||s&&this.stickyFormLastHeight!==o||this.stickyScrollTop!==this.currentPoint&&this.requestAnimationSticky?(s&&(this.onChangeCounter+=1),s&&this.stickyFormLastHeight!==o&&(this.onChangeCounter=11),this.requestAnimationSticky=requestAnimationFrame((()=>this.calculateStickyPosition(t)))):this.requestAnimationSticky&&this.removeAnimationFrameSticky(),this.stickyFormLastHeight=o}removeAnimationFrameSticky(){this.requestAnimationSticky&&(cancelAnimationFrame(this.requestAnimationSticky),this.requestAnimationSticky=null,this.onChangeCounter=0)}disconnectedCallback(){document.removeEventListener("theme:resize",this.resizeEvent),theme.variables.productPageSticky&&document.removeEventListener("theme:scroll",this.scrollEvent)}})}();
