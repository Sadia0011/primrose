!function(){"use strict";const t="[data-hover-target]",e="[data-collection-image]",s="data-hover-target",o="is-visible",c="is-selected";customElements.get("collections-hover")||customElements.define("collections-hover",class extends HTMLElement{constructor(){super(),this.buttons=this.querySelectorAll(t)}connectedCallback(){this.buttons.length&&this.buttons.forEach((t=>{t.addEventListener("mouseenter",(t=>{const e=t.currentTarget.getAttribute(s);this.updateState(e)}))}))}updateState(i){const r=this.querySelector(`[${s}="${i}"]`),l=this.querySelector(`#${i}:not(.${o})`),n=this.querySelector(`${t}.${c}`),a=this.querySelector(`${e}.${o}`);l&&!window.theme.isMobile()&&(a?.classList.remove(o),n?.classList.remove(c),l.classList.add(o),r.classList.add(c))}})}();
