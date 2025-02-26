!function(){"use strict";const t="[data-image-id]",e="product-images",s="[data-section-type]",i="[data-thumb-item]",o="[data-thumb-link]",r="[data-thumbs-slider]",n="data-active-media",a="data-media-id",c="is-active";customElements.get("product-thumbs")||customElements.define("product-thumbs",class extends HTMLElement{constructor(){super(),this.container=this.closest(s),this.productImages=this.container.querySelectorAll(t),this.productImagesContainer=this.container.querySelector(e),this.productThumbs=this.container.querySelectorAll(i),this.thumbSlider=this.querySelector(r),this.thumbLinks=this.querySelectorAll(o)}connectedCallback(){this.handleEvents(),this.preloadImagesOnHover(),this.activeMediaObserver()}disconnectedCallback(){this.observer&&this.observer.disconnect()}activeMediaObserver(){this.observer=new MutationObserver((t=>{for(const e of t)"attributes"===e.type&&e.attributeName==n&&this.setActiveThumb()})),this.observer.observe(this.productImagesContainer,{attributes:!0,childList:!1,subtree:!1})}handleEvents(){this.thumbLinks.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault();const s=t.closest(i),o=t.getAttribute(a);s.classList.contains(c)||this.dispatchEvent(new CustomEvent("theme:media:select",{bubbles:!0,detail:{id:o}}))})),t.addEventListener("keyup",(e=>{if("Enter"===e.code){const e=t.getAttribute(a),s=this.productImagesContainer.querySelector(`[${a}="${e}"]`)?.querySelectorAll('model-viewer, video, iframe, button, [href], input, [tabindex]:not([tabindex="-1"])')[0];s&&(s.dispatchEvent(new Event("focus")),s.dispatchEvent(new Event("select")))}}))}))}preloadImagesOnHover(){this.thumbLinks.forEach((t=>{t.addEventListener("mouseover",(()=>{const e=t.getAttribute(a);this.productImagesContainer.querySelector(`[${a}="${e}"] img`)?.setAttribute("loading","eager")}))}))}setActiveThumb(){const t=this.productImagesContainer.getAttribute(n),e=this.querySelector(`[${a}="${t}"]`);this.querySelector(`${i}.${c}`)?.classList.remove(c),e?.parentNode.classList.add(c),requestAnimationFrame((()=>{this.scrollToThumb()}))}scrollToThumb(){const t=this.thumbSlider;if(t){const e=t.querySelector(`.${c}`);if(!e)return;const s=t.scrollTop,i=t.scrollLeft,o=t.offsetWidth,r=t.offsetHeight,n=s+r,a=i+o,d=e.offsetTop,h=e.offsetLeft,l=e.offsetWidth,u=e.offsetHeight,m=s>d,b=i>h,v=h+l>a,p=d+u>n||m,f=v||b,g=window.theme.isMobile();if(p||f){let e=d-r+u,s=h-o+l;m&&(e=d),v&&g&&(s+=parseInt(window.getComputedStyle(t).paddingRight)),b&&(s=h,g&&(s-=parseInt(window.getComputedStyle(t).paddingLeft))),t.scrollTo({top:e,left:s,behavior:"smooth"})}}}})}();
