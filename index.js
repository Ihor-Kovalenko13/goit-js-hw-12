import{a as x,S as T,i as l}from"./assets/vendor-BODkxaJm.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const q="52353296-7e1352dd89e2156c2e1f9fbb2",S="https://pixabay.com/api/";async function m(e,o){const{data:r}=await x(S,{params:{key:q,q:e,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}});return r}const i=document.querySelector(".load"),u=document.querySelector(".loader"),p=document.querySelector(".gallery"),B=new T(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250,captionPosition:"bottom"});function h(e){const o=e.map(({webformatURL:r,largeImageURL:n,tags:t,likes:s=0,views:c=0,comments:v=0,downloads:w=0})=>`<li class="gallery-item">
  <a href="${n}" class="link" target="_blank">
  <img src="${r}" alt="${t}" width="360" /></a>
  <ul class="description-list">
    
  <li class="description-item">
      <h3 class="description-title">Likes</h3>
        <p class="description-text">${s}</p>
    </li>
    
  <li class="description-item">
    <h3 class="description-title">Views</h3>
      <p class="description-text">${c}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Comments</h3>
      <p class="description-text">${v}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Downloads</h3>
      <p class="description-text">${w}</p>
  </li>
</ul>
</li>`).join("");p.insertAdjacentHTML("beforeend",o),B.refresh()}function P(){p.innerHTML=""}function y(){u.classList.contains("visible")||u.classList.add("visible")}function g(){u.classList.contains("visible")&&u.classList.remove("visible")}function $(){i.classList.contains("visible")||i.classList.add("visible")}function b(){i.classList.contains("visible")&&i.classList.remove("visible")}function C(){i.setAttribute("disabled","true")}function O(){i.removeAttribute("disabled")}function A(e){localStorage.setItem("queryWord",e)}function E(){return localStorage.getItem("queryWord")}function I(){localStorage.removeItem("queryWord")}function L(e){return{title:"Error",message:`Oops.. something goes wrong, error : ${e.status} !`,position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white",titleColor:"white"}}function M(){return{message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}function _(){return{message:"Sorry, you need to fill searсh query",position:"topRight",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}function D(){return{message:"We're sorry, but you've reached the end of search results.",position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}function H(){const e=document.querySelector(".gallery-item");if(!e)return;const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}const f=document.querySelector(".form");let a=1,d=1;f.addEventListener("submit",Q);i.addEventListener("click",W);async function Q(e){e.preventDefault(),P(),a=1;const o=e.target.elements["search-text"].value.trim();if(!o){l.error(_());return}try{y();const{hits:r,totalHits:n}=await m(o,a);if(!r.length){l.info(M());return}h(r),d=Math.ceil(n/15),a<d?(A(o),$()):(b(),f.reset())}catch(r){l.error(L(r))}finally{g()}}async function W(e){a+=1;const o=E();try{y(),C();const{hits:r}=await m(o,a);h(r),H(),a>=d&&(b(),I(),l.error(D()),f.reset())}catch(r){l.error(L(r))}finally{g(),O()}}
//# sourceMappingURL=index.js.map
