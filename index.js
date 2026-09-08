import{a as m,S as d,i as n}from"./assets/vendor-ByykTgZ0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="57504971-0f19121609e97483ed2a79294",y="https://pixabay.com/api/";function h(s){return m.get(y,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:p,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                <span>${t}</span>
              </p>
              <p class="info-item">
                <b>Views</b>
                <span>${i}</span>
              </p>
              <p class="info-item">
                <b>Comments</b>
                <span>${p}</span>
              </p>
              <p class="info-item">
                <b>Downloads</b>
                <span>${f}</span>
              </p>
            </div>
          </a>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function v(){c.classList.add("is-visible")}function q(){c.classList.remove("is-visible")}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(s){s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){n.error({message:"Please enter a search query.",position:"topRight"});return}S(),v(),h(r).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q(),u.reset()})}
//# sourceMappingURL=index.js.map
