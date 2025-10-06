// scripts.js
(function(){
// Basic interactivity: hamburger, smooth scroll, lightweight repo-card enrichment
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', ()=>{
nav.classList.toggle('open');
hamburger.classList.toggle('open');
});


// Close nav on link click (mobile)
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click', ()=>{
if(nav.classList.contains('open')){nav.classList.remove('open');hamburger.classList.remove('open')}
}));


// Smooth scroll on internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', function(e){
const href = this.getAttribute('href');
if(href.length>1){
e.preventDefault();
const el = document.querySelector(href);
if(el){el.scrollIntoView({behavior:'smooth',block:'start'})}
}
})
});


// Enrich project cards: show repo stars if data available (lightweight - requires GitHub token to do real requests)
// Instead, we add a clickable area that opens the repo in a new tab.
document.querySelectorAll('.project').forEach(card=>{
const link = card.querySelector('a');
card.addEventListener('click', (e)=>{
// prevent double-open when clicking the inner link
if(e.target.tagName.toLowerCase() === 'a') return;
if(link){window.open(link.href, '_blank', 'noopener')}
})
});


// Small visual polish: set TryHackMe score placeholder by parsing the profile link (replace programmatically if you want to fetch it server-side)
const thmLink = document.querySelector('.cta[href*="tryhackme.com/profile/"]');
if(thmLink){
const user = thmLink.href.split('/').pop();
document.getElementById('thm-score').textContent = `THM: ${user}`; // friendly placeholder
}


})();
