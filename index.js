import{a as S,S as T,i as l}from"./assets/vendor-BODkxaJm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const q="52353296-7e1352dd89e2156c2e1f9fbb2",B="https://pixabay.com/api/";async function m(e,t){const{data:i}=await S(B,{params:{key:q,q:e,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}});return i}const s=document.querySelector(".load"),d=document.querySelector(".loader"),p=document.querySelector(".gallery"),P=new T(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250,captionPosition:"bottom"});function h(e){const t=e.map(({webformatURL:i,largeImageURL:n,tags:o,likes:r=0,views:c=0,comments:x=0,downloads:w=0})=>`<li class="gallery-item">
  <a href="${n}" class="link" target="_blank">
  <img src="${i}" alt="${o}" width="360" /></a>
  <ul class="description-list">
    
  <li class="description-item">
      <h3 class="description-title">Likes</h3>
        <p class="description-text">${r}</p>
    </li>
    
  <li class="description-item">
    <h3 class="description-title">Views</h3>
      <p class="description-text">${c}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Comments</h3>
      <p class="description-text">${x}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Downloads</h3>
      <p class="description-text">${w}</p>
  </li>
</ul>
</li>`).join("");p.insertAdjacentHTML("beforeend",t),P.refresh()}function $(){p.innerHTML=""}function g(){d.classList.contains("visible")||d.classList.add("visible")}function y(){d.classList.contains("visible")&&d.classList.remove("visible")}function C(){s.classList.contains("visible")||s.classList.add("visible")}function u(){s.classList.contains("visible")&&s.classList.remove("visible")}function M(){s.setAttribute("disabled","true")}function O(){s.removeAttribute("disabled")}function A(e){localStorage.setItem("queryWord",e)}function E(){return localStorage.getItem("queryWord")}function b(){localStorage.removeItem("queryWord")}function L(e){return{title:"Error",message:`Oops.. something goes wrong, error : ${e.status} !`,position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white",titleColor:"white"}}function I(){return{message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}function _(){return{message:"Sorry, you need to fill searсh query",position:"topRight",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}function D(){return{message:"We're sorry, but you've reached the end of search results.",position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}function H(){const e=document.querySelector(".gallery-item");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const v=document.querySelector(".form");let a=1,f=1;u();v.addEventListener("submit",Q);s.addEventListener("click",W);async function Q(e){e.preventDefault(),u(),$(),b(),a=1;const t=e.target.elements["search-text"].value.trim();if(!t){l.error(_());return}try{g();const{hits:i,totalHits:n}=await m(t,a);if(!i.length){l.info(I()),u();return}h(i),f=Math.ceil(n/15),a<f?(C(),A(t)):u()}catch(i){l.error(L(i))}finally{y()}}async function W(){a+=1;const e=E();try{g(),M();const{hits:t}=await m(e,a);h(t),H(),a>=f&&(u(),b(),l.info(D()),v.reset())}catch(t){l.error(L(t))}finally{y(),O()}}
//# sourceMappingURL=index.js.map
