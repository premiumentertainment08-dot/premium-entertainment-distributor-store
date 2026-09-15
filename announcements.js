/* Premium Entertainment Announcements
   Firebase-ready. Add your Firebase web config in firebase-config.js to enable live posts.
   Without Firebase, the site uses demo/localStorage announcements on the same device.
*/
(function(){
  const demoKey='pe_announcements_v1';
  const demoDefault=[{
    id:'welcome',title:'🔥 Welcome to Premium Entertainment',
    text:'New OTT, AI, Education, IPTV & Recharge offers are added regularly. Check the store for latest plans and discounts.',
    image:'',link:'',time:new Date().toISOString(),author:'Premium Entertainment'
  }];
  function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
  function getLocal(){try{const x=JSON.parse(localStorage.getItem(demoKey));return Array.isArray(x)&&x.length?x:demoDefault}catch(e){return demoDefault}}
  function setLocal(a){localStorage.setItem(demoKey,JSON.stringify(a))}
  function card(p){
    const raw=p.time; const ms=raw&&typeof raw.toMillis==='function'?raw.toMillis():raw; const d=new Date(ms||Date.now());
    const when=isNaN(d)?'Today':d.toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
    return `<article class="announcementCard"><div class="announcementTop"><div class="announcementAvatar">📢</div><div><b>${esc(p.author||'Premium Entertainment')}</b><span>Official Announcement • ${esc(when)}</span></div><i>✓</i></div>${p.image?`<img class="announcementImage" src="${esc(p.image)}" alt="Announcement image" loading="lazy">`:''}<div class="announcementBody"><h3>${esc(p.title||'Announcement')}</h3><p>${esc(p.text||'')}</p>${p.link?`<a class="announcementLink" href="${esc(p.link)}" target="_blank" rel="noopener">Purchase / Open ↗</a>`:''}</div><div class="announcementFooter"><span>Today</span><span>💬 Announcement</span></div></article>`;
  }
  function render(items){const box=document.getElementById('announcementFeed');if(!box)return;box.innerHTML=items.slice(0,10).map(card).join('')}
  function init(){
    render(getLocal());
    // Optional Firebase live mode. firebase-config.js must define window.FIREBASE_CONFIG.
    if(!window.FIREBASE_CONFIG || !window.FIREBASE_CONFIG.apiKey)return;
    const s=document.createElement('script');s.type='module';s.textContent=`
      import { getApps, getApp } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js';
      import { getFirestore, collection, query, orderBy, limit, onSnapshot } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js';
      const app=getApps().length ? getApp() : null; if(!app) return; const db=getFirestore(app);
      const q=query(collection(db,'announcements'),orderBy('time','desc'),limit(10));
      onSnapshot(q,snap=>{const items=snap.docs.map(d=>({id:d.id,...d.data()})); if(items.length){ localStorage.setItem('${demoKey}',JSON.stringify(items)); window.__renderAnnouncements(items); }});
    `;document.body.appendChild(s);
  }
  window.__renderAnnouncements=render;
  window.__announcementLocal={getLocal,setLocal,render,esc};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
