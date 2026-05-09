// ═══════════════════════════════════════════
// RWANDA DATA — Banki + Ibimina byose
// ═══════════════════════════════════════════
const RW_SERVICES = [
  // ── BANKI ──────────────────────────────
  {id:'bk1',cat:'bank',icon:'🏦',name:'Bank of Kigali',org:'Bank of Kigali (BK)',short:'BK',prefix:'BK',avgWait:8,color:'#0066CC',locations:'Kigali, Huye, Musanze, Rubavu, Muhanga, Rwamagana'},
  {id:'bk2',cat:'bank',icon:'🏦',name:'Equity Bank Rwanda',org:'Equity Bank Rwanda Ltd',short:'EQT',prefix:'EQ',avgWait:10,color:'#CC0000',locations:'Kigali, Musanze, Huye, Rubavu'},
  {id:'bk3',cat:'bank',icon:'🏦',name:'I&M Bank Rwanda',org:'I&M Bank Rwanda',short:'I&M',prefix:'IM',avgWait:9,color:'#003366',locations:'Kigali, Muhanga, Huye'},
  {id:'bk4',cat:'bank',icon:'🏦',name:'KCB Rwanda',org:'KCB Bank Rwanda',short:'KCB',prefix:'KC',avgWait:7,color:'#006600',locations:'Kigali, Musanze, Rubavu, Huye'},
  {id:'bk5',cat:'bank',icon:'🏦',name:'Cogebanque',org:'Compagnie Générale de Banque',short:'CGB',prefix:'CG',avgWait:12,color:'#FF6600',locations:'Kigali, Muhanga, Musanze'},
  {id:'bk6',cat:'bank',icon:'🏦',name:'GT Bank Rwanda',org:'Guaranty Trust Bank Rwanda',short:'GTB',prefix:'GT',avgWait:9,color:'#FF6600',locations:'Kigali'},
  {id:'bk7',cat:'bank',icon:'🏦',name:'Ncba Rwanda',org:'NCBA Bank Rwanda',short:'NCBA',prefix:'NC',avgWait:8,color:'#1A1A1A',locations:'Kigali'},
  {id:'bk8',cat:'bank',icon:'🏦',name:'Ecobank Rwanda',org:'Ecobank Rwanda',short:'ECO',prefix:'EB',avgWait:11,color:'#00A1DE',locations:'Kigali, Huye, Musanze'},
  {id:'bk9',cat:'bank',icon:'🏦',name:'BPR Atlas Mara',org:'BPR Atlas Mara Bank',short:'BPR',prefix:'BP',avgWait:10,color:'#8B0000',locations:'Kigali, Nyanza, Huye, Rwamagana, Musanze'},
  {id:'bk10',cat:'bank',icon:'🏦',name:'Urwego Bank',org:'Urwego Opportunity Bank',short:'UOB',prefix:'UB',avgWait:13,color:'#4B0082',locations:'Kigali, Musanze, Huye, Rwamagana'},

  // ── IBIMINA (SACCOs) ───────────────────
  {id:'co1',cat:'coop',icon:'🌿',name:'Umurimo SACCO',org:'Umurimo Savings & Credit SACCO',short:'UMR',prefix:'UM',avgWait:20,color:'#20603D',locations:'Kigali — Nyarugenge'},
  {id:'co2',cat:'coop',icon:'🌿',name:'Vision SACCO',org:'Vision Finance Company SACCO',short:'VFC',prefix:'VF',avgWait:18,color:'#2E8B57',locations:'Kigali, Musanze, Huye, Muhanga'},
  {id:'co3',cat:'coop',icon:'🌿',name:'ACLEDA Rwanda',org:'ACLEDA Rwanda MFI',short:'ACL',prefix:'AC',avgWait:15,color:'#006400',locations:'Kigali, Muhanga'},
  {id:'co4',cat:'coop',icon:'🌿',name:'CLECAM Ejoheza',org:'CLECAM Ejoheza SACCO',short:'CLJ',prefix:'CJ',avgWait:22,color:'#228B22',locations:'Kigali — Kicukiro'},
  {id:'co5',cat:'coop',icon:'🌿',name:'Zigama CSS',org:'Zigama Credit & Savings Society',short:'ZCS',prefix:'ZC',avgWait:16,color:'#32CD32',locations:'Kigali, Huye, Ruhango'},
  {id:'co6',cat:'coop',icon:'🌿',name:'Inkunga SACCO',org:'Inkunga Cooperative SACCO',short:'INK',prefix:'IK',avgWait:25,color:'#3CB371',locations:'Musanze, Rulindo'},
  {id:'co7',cat:'coop',icon:'🌿',name:'Umwalimu SACCO',org:'Umwalimu Savings & Credit Coop',short:'UWS',prefix:'UW',avgWait:19,color:'#008000',locations:'Kigali — Gasabo, Kicukiro, Nyarugenge'},
  {id:'co8',cat:'coop',icon:'🌿',name:'COPEDU',org:'COPEDU PLC SACCO',short:'CPD',prefix:'CP',avgWait:17,color:'#556B2F',locations:'Kigali, Muhanga, Nyanza'},
  {id:'co9',cat:'coop',icon:'🌿',name:'Goshen Finance',org:'Goshen Finance SACCO',short:'GFS',prefix:'GF',avgWait:21,color:'#6B8E23',locations:'Kigali — Nyarugenge'},
  {id:'co10',cat:'coop',icon:'🌿',name:'SACCO Urukundo',org:'Urukundo Community SACCO',short:'URK',prefix:'UK',avgWait:28,color:'#8FBC8F',locations:'Huye, Nyamagabe'},

  // ── UBUZIMA / HEALTH ───────────────────
  {id:'h1',cat:'health',icon:'🏥',name:'CHUK',org:'Centre Hospitalier Univ. de Kigali',short:'CHUK',prefix:'CH',avgWait:35,color:'#B22222',locations:'Kigali — Nyarugenge'},
  {id:'h2',cat:'health',icon:'🏥',name:'King Faisal Hospital',org:'King Faisal Hospital Rwanda',short:'KFH',prefix:'KF',avgWait:30,color:'#8B0000',locations:'Kigali — Kacyiru'},
  {id:'h3',cat:'health',icon:'🏥',name:'CHUB',org:'CHU de Butare',short:'CHUB',prefix:'HB',avgWait:32,color:'#DC143C',locations:'Huye'},
  {id:'h4',cat:'health',icon:'🏥',name:'Masaka Hospital',org:'Masaka District Hospital',short:'MSK',prefix:'MK',avgWait:28,color:'#CD5C5C',locations:'Kigali — Kicukiro'},
  {id:'h5',cat:'health',icon:'🏥',name:'Kibagabaga Hospital',org:'Kibagabaga District Hospital',short:'KBG',prefix:'KB',avgWait:26,color:'#F08080',locations:'Kigali — Gasabo'},

  // ── LETA / GOV ─────────────────────────
  {id:'g1',cat:'gov',icon:'🏛️',name:'RRA — Ikodi',org:'Rwanda Revenue Authority',short:'RRA',prefix:'RR',avgWait:22,color:'#4B0082',locations:'Kigali, Huye, Musanze, Rubavu, Muhanga'},
  {id:'g2',cat:'gov',icon:'🏛️',name:'RSSB',org:'Rwanda Social Security Board',short:'RSSB',prefix:'RS',avgWait:18,color:'#6A0DAD',locations:'Kigali — Kacyiru'},
  {id:'g3',cat:'gov',icon:'🏛️',name:'RDB',org:'Rwanda Development Board',short:'RDB',prefix:'RD',avgWait:15,color:'#8B008B',locations:'Kigali — Kimihurura'},
  {id:'g4',cat:'gov',icon:'🏛️',name:'NIDA',org:'Nat. Identification Agency',short:'NIDA',prefix:'ND',avgWait:20,color:'#9932CC',locations:'Kigali, Huye, Musanze, all Districts'},
  {id:'g5',cat:'gov',icon:'🏛️',name:'Irembo Services',org:'Irembo Gov. Portal',short:'IRB',prefix:'IR',avgWait:12,color:'#7B68EE',locations:'All Districts'},
];

const CATEGORIES = [
  {id:'all',label:'🇷🇼 Byose'},
  {id:'bank',label:'🏦 Banki'},
  {id:'coop',label:'🌿 Ibimina'},
  {id:'health',label:'🏥 Ubuzima'},
  {id:'gov',label:'🏛️ Leta'},
];

// ═══════════════════════════════════════════
// DB
// ═══════════════════════════════════════════
const DB = {
  getUsers(){return JSON.parse(localStorage.getItem('fn2_users')||'[]')},
  saveUsers(u){localStorage.setItem('fn2_users',JSON.stringify(u))},
  createUser(d){
    const users=this.getUsers();
    if(users.find(u=>u.email===d.email))return{error:'Imeli isanzwe irimo konti.'};
    const user={id:'u_'+Date.now(),name:d.name,email:d.email,phone:d.phone,password:d.pw,role:'user',createdAt:new Date().toISOString()};
    users.push(user);this.saveUsers(users);return{user};
  },
  loginUser(email,pw){const u=this.getUsers().find(u=>u.email===email&&u.password===pw);return u?{user:u}:{error:'Imeli cyangwa ijambo banga siyo.'};},
  setSession(u){sessionStorage.setItem('fn2_s',JSON.stringify(u))},
  getSession(){const s=sessionStorage.getItem('fn2_s');return s?JSON.parse(s):null},
  clearSession(){sessionStorage.removeItem('fn2_s')},

  getCustomServices(){return JSON.parse(localStorage.getItem('fn2_custom_svc')||'[]')},
  saveCustomService(svc){
    const all=this.getCustomServices();
    svc.id='cs_'+Date.now();svc.prefix=svc.name.substring(0,2).toUpperCase();svc.avgWait=parseInt(svc.avgWait)||15;
    all.push(svc);localStorage.setItem('fn2_custom_svc',JSON.stringify(all));return svc;
  },
  getAllServices(){return[...RW_SERVICES,...this.getCustomServices()]},

  getTickets(){return JSON.parse(localStorage.getItem('fn2_tickets')||'[]')},
  saveTickets(t){localStorage.setItem('fn2_tickets',JSON.stringify(t))},
  createTicket(userId,userName,svcId){
    const svc=this.getAllServices().find(s=>s.id===svcId);
    if(!svc)return{error:'Serivisi ntabwo ibonetse.'};
    const tickets=this.getTickets();
    const today=new Date().toDateString();
    const todayT=tickets.filter(t=>new Date(t.createdAt).toDateString()===today&&t.serviceId===svcId);
    const num=todayT.length+1;
    const tNum=svc.prefix+'-'+String(num).padStart(3,'0');
    const ahead=todayT.filter(t=>t.status==='waiting').length;
    const t={id:'t_'+Date.now(),userId,userName,serviceId:svcId,serviceName:svc.name,serviceIcon:svc.icon,
      ticketNumber:tNum,prefix:svc.prefix,position:num,aheadCount:ahead,
      estimatedWait:ahead*svc.avgWait,status:'waiting',createdAt:new Date().toISOString(),calledAt:null,completedAt:null};
    tickets.push(t);this.saveTickets(tickets);return{ticket:t};
  },
  getUserTickets(uid){const today=new Date().toDateString();return this.getTickets().filter(t=>t.userId===uid&&new Date(t.createdAt).toDateString()===today).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))},
  getQueueBySvc(svcId){const today=new Date().toDateString();return this.getTickets().filter(t=>t.serviceId===svcId&&new Date(t.createdAt).toDateString()===today&&t.status!=='done').sort((a,b)=>a.position-b.position)},
  getAllToday(){const today=new Date().toDateString();return this.getTickets().filter(t=>new Date(t.createdAt).toDateString()===today).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))},
  callNext(svcId){
    const tickets=this.getTickets();const today=new Date().toDateString();
    const q=tickets.filter(t=>t.serviceId===svcId&&new Date(t.createdAt).toDateString()===today&&t.status==='waiting').sort((a,b)=>a.position-b.position);
    if(!q.length)return null;
    const idx=tickets.findIndex(t=>t.id===q[0].id);
    tickets[idx].status='serving';tickets[idx].calledAt=new Date().toISOString();
    this.saveTickets(tickets);return tickets[idx];
  },
  completeTicket(id){const tickets=this.getTickets();const idx=tickets.findIndex(t=>t.id===id);if(idx===-1)return;tickets[idx].status='done';tickets[idx].completedAt=new Date().toISOString();this.saveTickets(tickets)},
  getNowServing(){const today=new Date().toDateString();return this.getTickets().filter(t=>t.status==='serving'&&new Date(t.createdAt).toDateString()===today)},
  seed(){
    const u=this.getUsers();
    if(!u.find(x=>x.email==='demo@fatanumero.rw'))this.createUser({name:'Demo User',email:'demo@fatanumero.rw',phone:'+250780000001',pw:'demo1234'});
    if(!u.find(x=>x.email==='admin@fatanumero.rw')){const r=this.createUser({name:'Admin FATA',email:'admin@fatanumero.rw',phone:'+250780000000',pw:'admin1234'});if(r.user){r.user.role='admin';const all=this.getUsers();const idx=all.findIndex(x=>x.id===r.user.id);all[idx].role='admin';this.saveUsers(all);}}
  }
};
DB.seed();

// ═══════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════
const $=id=>document.getElementById(id);
function initials(n){return n.split(' ').map(x=>x[0]).join('').toUpperCase().slice(0,2)}
function fmtTime(iso){if(!iso)return'—';return new Date(iso).toLocaleTimeString('rw-RW',{hour:'2-digit',minute:'2-digit'})}
function go(page,p={}){window._page=page;window._params=p;render()}
function logout(){DB.clearSession();go('login');toast('Wasohowe. Murabeho!','s')}

function toast(msg,type='d',dur=3500){
  const c=$('tw');const el=document.createElement('div');
  el.className='toast '+(type==='s'?'s':type==='e'?'e':type==='w'?'w':'');
  const icons={s:'✓',e:'✕',w:'⚠',d:'ℹ'};
  el.innerHTML=`<span>${icons[type]||icons.d}</span><span>${msg}</span>`;
  c.appendChild(el);
  setTimeout(()=>{el.style.animation='none';el.style.opacity='0';el.style.transform='translateX(60px)';el.style.transition='all 0.3s';setTimeout(()=>el.remove(),300)},dur);
}

function showModal(html){
  closeModal();
  const ov=document.createElement('div');ov.className='modal-ov';ov.id='modal-ov';
  ov.innerHTML=`<div class="modal">${html}</div>`;
  ov.addEventListener('click',e=>{if(e.target===ov)closeModal()});
  document.body.appendChild(ov);
}
function closeModal(){
  const m=document.getElementById('modal-ov');
  if(!m)return;
  m.style.animation='fadeIn 0.2s ease reverse both';
  setTimeout(()=>m.remove(),200);
}

// ── Stagger helper: applies cardEntrance with increasing delay to grid children
function staggerCards(selector,baseDelay=0,step=40){
  setTimeout(()=>{
    document.querySelectorAll(selector).forEach((el,i)=>{
      el.style.animationDelay=`${baseDelay+i*step}ms`;
    });
  },0);
}

// ── Animated number counter
function animateNumber(el,target,duration=600){
  if(!el)return;
  const start=0;const startTime=performance.now();
  function update(now){
    const elapsed=now-startTime;const progress=Math.min(elapsed/duration,1);
    const eased=1-Math.pow(1-progress,3);
    el.textContent=Math.round(start+(target-start)*eased);
    if(progress<1)requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ═══════════════════════════════════════════
// TOPBAR
// ═══════════════════════════════════════════
function renderTopbar(user){
  return`<div class="topbar"><div class="topbar-in">
    <div class="logo" onclick="go('home')">
      <div class="logo-mark">🎫</div>
      <div class="logo-text">
        <div class="logo-name">FATA NUMERO</div>
        <div class="logo-tag">Rwanda Queue System</div>
      </div>
    </div>
    <div class="topbar-right">
      <div class="made-rw">🇷🇼 Made in Rwanda</div>
      ${user.role==='admin'?`<button class="btn-sm admin anim-fade-in d3" onclick="go('admin')">⚙ Dashboard</button>`:''}
      ${user.role==='admin'?`<button class="btn-sm anim-fade-in d4" onclick="go('register')">➕ Ongera Serivisi</button>`:''}
      <button class="btn-sm anim-fade-in d5" onclick="go('queue')">📋 Murongo</button>
      <div class="user-chip anim-fade-in d6" onclick="logout()">
        <div class="av">${initials(user.name)}</div>
        <span>${user.name.split(' ')[0]}</span>
        <span style="color:var(--ink3);font-size:11px">↗</span>
      </div>
    </div>
  </div></div>`;
}

// ═══════════════════════════════════════════
// PAGE: LOGIN
// ═══════════════════════════════════════════
function pageLogin(){
  return`<div class="auth-wrap" style="padding-top:5px">
    <div class="auth-left">
      <div class="al-rw">
        <div class="rw-block" style="background:var(--rw-blue)"></div>
        <div class="rw-block" style="background:var(--rw-yellow)"></div>
        <div class="rw-block" style="background:var(--rw-green)"></div>
      </div>
      <div class="al-logo">
        <div class="al-logo-icon">🎫</div>
        <div class="al-logo-text">
          <div class="name">FATA NUMERO</div>
          <div class="tag">Rwanda Queue Management</div>
        </div>
      </div>
      <div class="al-content">
        <h1>Gabanya umurongo. Reba abantu vuba.</h1>
        <p>Sistema ikoresha ikoranabuhanga kugira ngo abantu bategereze amasaha make mu murongo muri banki, ibimina, ibitaro, n'ibiro bya leta i Rwanda.</p>
      </div>
      <div class="al-stats">
        <div class="al-stat"><div class="al-stat-n">25+</div><div class="al-stat-l">Serivisi z'u Rwanda</div></div>
        <div class="al-stat"><div class="al-stat-n">10</div><div class="al-stat-l">Banki za Rwanda</div></div>
        <div class="al-stat"><div class="al-stat-n">10</div><div class="al-stat-l">Ibimina (SACCOs)</div></div>
        <div class="al-stat"><div class="al-stat-n">100%</div><div class="al-stat-l">🇷🇼 Made in Rwanda</div></div>
      </div>
    </div>
    <div class="auth-right">
      <div class="auth-box">
        <h2>Murakaza neza 👋</h2>
        <p class="sub">Injira mu konti yawe kugira ngo ufate numero yawe vuba.</p>
     
        <div class="fg anim-fade-up d2"><label class="fl">Imeli</label><input class="fi" type="email" id="l-em" placeholder="you@example.com"/></div>
        <div class="fg anim-fade-up d3"><label class="fl">Ijambo banga</label><input class="fi" type="password" id="l-pw" placeholder="••••••••"/>
          <div class="err-msg" id="l-err"></div></div>
        <button class="btn btn-primary btn-full btn-lg anim-fade-up d4" id="l-btn" onclick="doLogin()">Injira →</button>
        <div class="auth-switch anim-fade-up d5">Nufite konti? <a onclick="go('signup')">Iyandikishe hano</a></div>
      </div>
    </div>
  </div>`;
}

function doLogin(){
  const em=$('l-em').value.trim(),pw=$('l-pw').value;
  const err=$('l-err');err.style.display='none';
  if(!em||!pw){err.textContent='⚠ Uzuza imeli n\'ijambo banga.';err.style.display='block';return}
  const btn=$('l-btn');btn.disabled=true;btn.textContent='⏳ Tegereza...';
  setTimeout(()=>{
    const r=DB.loginUser(em,pw);
    if(r.error){
      err.textContent='⚠ '+r.error;err.style.display='block';
      btn.disabled=false;btn.textContent='Injira →';
      // shake effect
      btn.style.animation='none';
      btn.offsetHeight;
      btn.style.animation='';
    }
    else{DB.setSession(r.user);toast('Murakaza neza, '+r.user.name+'! 🇷🇼','s');go(r.user.role==='admin'?'admin':'home');}
  },500);
}

// ═══════════════════════════════════════════
// PAGE: SIGNUP
// ═══════════════════════════════════════════
function pageSignup(){
  return`<div class="auth-wrap" style="padding-top:5px">
    <div class="auth-left">
      <div class="al-rw">
        <div class="rw-block" style="background:var(--rw-blue)"></div>
        <div class="rw-block" style="background:var(--rw-yellow)"></div>
        <div class="rw-block" style="background:var(--rw-green)"></div>
      </div>
      <div class="al-logo">
        <div class="al-logo-icon">🎫</div>
        <div class="al-logo-text"><div class="name">FATA NUMERO v2</div><div class="tag">Made in Rwanda 🇷🇼</div></div>
      </div>
      <div class="al-content">
        <h1>Fungura konti. Fata numero. Subira imwe.</h1>
        <p>Iyandikishe mu masegonda make maze utangire gukoresha serivisi ya FATA NUMERO — banki, ibimina, ibitaro n'ibindi byinshi i Rwanda.</p>
      </div>
      <div class="al-stats">
        <div class="al-stat"><div class="al-stat-n">30s</div><div class="al-stat-l">Iyandikishe vuba</div></div>
        <div class="al-stat"><div class="al-stat-n">100%</div><div class="al-stat-l">Bure burundu</div></div>
        <div class="al-stat"><div class="al-stat-n">RW</div><div class="al-stat-l">Made in Rwanda</div></div>
        <div class="al-stat"><div class="al-stat-n">25+</div><div class="al-stat-l">Serivisi zihari</div></div>
      </div>
    </div>
    <div class="auth-right">
      <div class="auth-box">
        <h2>Iyandikishe 🚀</h2>
        <p class="sub">Fungura konti yako mu masegonda make.</p>
        <div class="fg anim-fade-up d1"><label class="fl">Amazina yose</label><input class="fi" type="text" id="su-n" placeholder="Kalisa Mugisha"/></div>
        <div class="fg anim-fade-up d2"><label class="fl">Imeli</label><input class="fi" type="email" id="su-e" placeholder="you@example.com"/></div>
        <div class="fg anim-fade-up d3"><label class="fl">Telefoni</label><input class="fi" type="tel" id="su-t" placeholder="+250 7XX XXX XXX"/></div>
        <div class="fg anim-fade-up d4"><label class="fl">Ijambo banga</label><input class="fi" type="password" id="su-p" placeholder="Byibuze inyuguti 6"/>
          <div class="err-msg" id="su-err"></div></div>
        <button class="btn btn-primary btn-full btn-lg anim-fade-up d5" id="su-btn" onclick="doSignup()">Iyandikishe →</button>
        <div class="auth-switch anim-fade-up d6">Usanzwe ufite konti? <a onclick="go('login')">Injira hano</a></div>
      </div>
    </div>
  </div>`;
}

function doSignup(){
  const n=$('su-n').value.trim(),e=$('su-e').value.trim(),t=$('su-t').value.trim(),p=$('su-p').value;
  const err=$('su-err');err.style.display='none';
  if(!n||!e||!t||!p){err.textContent='⚠ Uzuza ahantu hose.';err.style.display='block';return}
  if(p.length<6){err.textContent='⚠ Ijambo banga rigomba byibuze inyuguti 6.';err.style.display='block';return}
  const btn=$('su-btn');btn.disabled=true;btn.textContent='⏳ Tegereza...';
  setTimeout(()=>{
    const r=DB.createUser({name:n,email:e,phone:t,pw:p});
    if(r.error){err.textContent='⚠ '+r.error;err.style.display='block';btn.disabled=false;btn.textContent='Iyandikishe →';}
    else{DB.setSession(r.user);toast('Murakaza neza! 🇷🇼 Konti yawe yafunguwe.','s');go('home');}
  },500);
}

// ═══════════════════════════════════════════
// PAGE: HOME
// ═══════════════════════════════════════════
let _selSvc=null,_curCat='all';

function pageHome(user){
  const ns=DB.getNowServing();
  const myT=DB.getUserTickets(user.id);
  const active=myT.find(t=>t.status==='waiting'||t.status==='serving');
  const allSvcs=DB.getAllServices();

  const nsHTML=ns.length
    ?ns.slice(0,2).map(t=>`<div style="font-family:var(--mono);font-size:30px;letter-spacing:3px;color:#fff;animation:numberTick 0.5s ease both">${t.ticketNumber}</div><div style="font-size:11px;opacity:.55;margin-bottom:4px">${t.serviceName}</div>`).join('')
    :`<div style="font-family:var(--mono);font-size:30px;color:rgba(255,255,255,0.4);letter-spacing:3px">—</div>`;

  const filtered=_curCat==='all'?allSvcs:allSvcs.filter(s=>s.cat===_curCat);

  const cards=filtered.map((s,i)=>{
    const q=DB.getQueueBySvc(s.id);
    const catLabel={bank:'Banki',coop:'Ikimina',health:'Ubuzima',gov:'Leta'}[s.cat]||s.cat;
    const badgeCls={bank:'bank',coop:'coop',health:'health',gov:'gov'}[s.cat]||'';
    const isSel=_selSvc===s.id;
    const delay=Math.min(i*35,400);
    return`<div class="svc-card${isSel?' sel':''}" id="sc-${s.id}" onclick="selSvc('${s.id}')" style="animation-delay:${delay}ms">
      <div class="svc-q">${q.length}</div>
      <span class="svc-badge ${badgeCls}">${catLabel}</span>
      <div class="svc-inner">
        <span class="svc-icon">${s.icon}</span>
        <div class="svc-name">${s.name}</div>
        <div class="svc-org">${s.org}</div>
        <div class="svc-wait">🕐 ~${s.avgWait} min · <span style="font-size:11px;color:var(--ink3)">${s.locations?.split(',')[0]||''}</span></div>
      </div>
    </div>`;
  }).join('');

  const bannerHTML=active?`<div class="active-banner">
    <div class="ab-icon">${active.serviceIcon}</div>
    <div style="flex:1">
      <div style="font-size:12px;color:var(--green);font-weight:600;margin-bottom:2px">Numero yawe iri mu murongo</div>
      <div style="font-family:var(--mono);font-size:24px;font-weight:500;color:var(--green-m);letter-spacing:2px;animation:numberTick 0.5s ease both">${active.ticketNumber}</div>
      <div style="font-size:13px;color:var(--ink3)">${active.serviceName} · Abantu ${active.aheadCount} imbere</div>
    </div>
    <button class="btn btn-outline" onclick="go('queue')">Reba Murongo →</button>
  </div>`:'';

  const catPills=CATEGORIES.map(c=>`<div class="cat-pill${_curCat===c.id?' active':''}" onclick="setCat('${c.id}')">${c.label}</div>`).join('');

  return`
    ${renderTopbar(user)}
    <div class="page">
      <div class="hero">
        <div class="hero-rw"></div>
        <div class="hero-in">
          <div class="hero-text">
            <h1>Murakaza neza, ${user.name.split(' ')[0]}! 🇷🇼</h1>
            <p>Hitamo serivisi ukeneye hasi — banki, ibimina, ibitaro, n'ibiro bya leta byose byo mu Rwanda.</p>
          </div>
          <div class="ns-panel">
            <div class="ns-label">Ubu barimo gukorera</div>
            ${nsHTML}
          </div>
        </div>
      </div>
      <div class="main">
        ${bannerHTML}
        <div class="cat-pills">${catPills}</div>
        <div class="section-title">
          <span>Hitamo Serivisi</span>
          <span style="font-size:13px;color:var(--ink3);font-weight:400">(${filtered.length} serivisi)</span>
        </div>
        <div class="svc-grid" id="svc-grid">${cards}</div>
        <div style="display:flex;gap:12px;max-width:600px;animation:fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) 0.3s both">
          <button class="btn btn-primary btn-lg" id="btn-fata" onclick="fataNumero()" disabled style="flex:1;transition:all 0.3s">🎫 Fata Numero</button>
          <button class="btn btn-ghost" onclick="go('queue')" style="padding:16px 20px">📋</button>
        </div>
      </div>
    </div>
    ${renderFooter()}`;
}

function setCat(cat){
  _curCat=cat;_selSvc=null;
  // Quick re-filter without full re-render for snappier feel
  go('home');
}

function selSvc(id){
  _selSvc=id;
  document.querySelectorAll('.svc-card').forEach(el=>{
    el.classList.remove('sel');
  });
  const el=document.getElementById('sc-'+id);
  if(el){
    el.classList.add('sel');
    // Micro-bounce
    el.style.transform='scale(1.04) translateY(-4px)';
    setTimeout(()=>{el.style.transform='';},200);
  }
  const btn=document.getElementById('btn-fata');
  if(btn){
    btn.disabled=false;
    btn.style.animation='none';
    btn.offsetHeight;
    btn.style.animation='pulse 0.4s ease';
  }
}

function fataNumero(){
  if(!_selSvc)return;
  const user=DB.getSession();
  const r=DB.createTicket(user.id,user.name,_selSvc);
  if(r.error){toast(r.error,'e');return}
  const t=r.ticket;
  showModal(`
    <div class="modal-rw"></div>
    <div class="modal-header"><h3>✅ Numero yawe ifashwe!</h3><div style="font-size:13px;opacity:.7;margin-top:4px">${t.serviceName}</div></div>
    <div class="modal-body">
      <div class="ticket-big">
        <div class="t-label">Numero Yawe · ${new Date().toLocaleDateString('en-RW')}</div>
        <div class="t-num" id="modal-tnum">${t.ticketNumber}</div>
        <div class="t-tag">${t.serviceIcon} ${t.serviceName}</div>
      </div>
      <div class="ticket-stats">
        <div class="ts-item"><div class="tsl">Imbere</div><div class="tsv" id="m-ahead">${t.aheadCount}</div></div>
        <div class="ts-item"><div class="tsl">~Iminota</div><div class="tsv" id="m-wait">${t.estimatedWait||'<5'}</div></div>
        <div class="ts-item"><div class="tsl">Saa</div><div class="tsv" style="font-size:15px">${fmtTime(t.createdAt)}</div></div>
      </div>
      <button class="btn btn-primary btn-full anim-fade-up d5" style="margin-bottom:10px" onclick="closeModal();go('queue')">Reba Murongo →</button>
      <button class="btn btn-ghost btn-full anim-fade-up d6" onclick="closeModal()">Subira inyuma</button>
      <div style="text-align:center;margin-top:14px;font-size:11px;color:var(--ink3);animation:fadeIn 0.5s 0.6s both;opacity:0">🇷🇼 FATA NUMERO — Made in Rwanda</div>
    </div>`);
  toast('Numero '+t.ticketNumber+' ifashwe! 🎫','s');
  _selSvc=null;
}

// ═══════════════════════════════════════════
// PAGE: QUEUE
// ═══════════════════════════════════════════
function pageQueue(user){
  const myT=DB.getUserTickets(user.id);
  const active=myT.find(t=>t.status==='waiting'||t.status==='serving');
  const allSvcs=DB.getAllServices();
  const ns=DB.getNowServing();

  let mySection;
  if(active){
    const q=DB.getQueueBySvc(active.serviceId);
    const pos=q.findIndex(t=>t.id===active.id)+1;
    const serving=active.status==='serving';
    const rows=q.slice(0,6).map((t,i)=>`
      <div class="q-row${t.id===active.id?' cur':''}" style="animation-delay:${i*60}ms">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:28px;height:28px;border-radius:50%;background:${t.id===active.id?'var(--green-m)':'var(--bg2)'};color:${t.id===active.id?'#fff':'var(--ink3)'};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;flex-shrink:0">${i+1}</div>
          <span class="qn">${t.ticketNumber}</span>
          ${t.id===active.id?'<span class="badge badge-green" style="font-size:11px;animation:badgePop 0.4s cubic-bezier(0.34,1.56,0.64,1) both">Nawe!</span>':''}
        </div>
        <span class="badge ${t.status==='serving'?'badge-gold':'badge-gray'}">${t.status==='serving'?'Gukorerwa':'Gutegereza'}</span>
      </div>`).join('');

    mySection=`<div class="q-panel">
      <div class="ticket-card" style="${serving?'background:linear-gradient(135deg,var(--gold),#A87C0A);':''}">
        <div class="tc-label">${serving?'🔔 URASHYIRWA IMBERE!':'Numero Yawe'}</div>
        <div class="tc-num">${active.ticketNumber}</div>
        <div class="tc-svc">${active.serviceIcon} ${active.serviceName}</div>
        <div class="tc-meta">
          <div class="tc-meta-i"><div class="ml">Umwanya</div><div class="mv" id="q-pos">#${pos}</div></div>
          <div class="tc-meta-i"><div class="ml">Imbere</div><div class="mv" id="q-ahead">${Math.max(0,pos-1)}</div></div>
          <div class="tc-meta-i"><div class="ml">~Min</div><div class="mv" id="q-wait">${Math.max(0,(pos-1)*8)}</div></div>
        </div>
      </div>
      <div class="q-status">
        <div style="font-family:var(--fm);font-size:15px;font-weight:700;margin-bottom:4px">Murongo wa ${active.serviceName}</div>
        ${rows||'<p style="font-size:14px;color:var(--ink3)">Nta wundi murongo.</p>'}
        ${q.length>6?`<p style="font-size:12px;color:var(--ink3);text-align:center">+${q.length-6} abandi...</p>`:''}
      </div>
    </div>`;
  } else {
    mySection=`<div style="text-align:center;padding:48px 24px;background:var(--white);border-radius:var(--rx);border:1px solid var(--border);margin-bottom:24px;animation:fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both">
      <div style="font-size:52px;margin-bottom:12px;animation:heroFloat 3s ease-in-out infinite">🎫</div>
      <div style="font-family:var(--fm);font-size:20px;font-weight:700;margin-bottom:8px">Nta numero ufite ubu</div>
      <p style="color:var(--ink3);font-size:14px;margin-bottom:20px">Subira inyuma maze ufate numero yo serivisi ushaka.</p>
      <button class="btn btn-primary" onclick="go('home')">← Fata Numero</button>
    </div>`;
  }

  const svcCards=allSvcs.slice(0,8).map((s,i)=>{
    const q=DB.getQueueBySvc(s.id);
    const serving=q.find(t=>t.status==='serving');
    const waiting=q.filter(t=>t.status==='waiting');
    return`<div style="background:var(--white);border-radius:var(--rl);border:1px solid var(--border);padding:16px;box-shadow:var(--shadow);animation:cardEntrance 0.45s cubic-bezier(0.22,1,0.36,1) ${i*45}ms both;transition:transform 0.2s,box-shadow 0.2s" onmouseenter="this.style.transform='translateY(-3px)';this.style.boxShadow='var(--shadow-md)'" onmouseleave="this.style.transform='';this.style.boxShadow='var(--shadow)'">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${serving?'10px':'0'}">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:20px">${s.icon}</span>
          <div>
            <div style="font-family:var(--fm);font-weight:700;font-size:13px">${s.name}</div>
            <div style="font-size:11px;color:var(--ink3)">${waiting.length} bategereje</div>
          </div>
        </div>
        <span class="badge ${serving?'badge-gold':'badge-gray'}">${serving?'Active':'Libre'}</span>
      </div>
      ${serving?`<div style="background:var(--gold-l);border-radius:8px;padding:8px 12px;font-size:12px;color:var(--gold);font-weight:600;animation:fadeIn 0.3s ease both">Ubu: ${serving.ticketNumber} — ${serving.userName}</div>`:''}
    </div>`;
  }).join('');

  return`
    ${renderTopbar(user)}
    <div class="page"><div class="main">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;animation:fadeDown 0.4s cubic-bezier(0.22,1,0.36,1) both">
        <button class="btn btn-ghost" onclick="go('home')" style="padding:8px 14px;font-size:13px">← Subira</button>
        <h2 style="font-family:var(--fm);font-size:22px;font-weight:700;letter-spacing:-0.5px">Murongo wa Queue</h2>
        <div class="ticker" style="margin:0;flex:1">
          <div class="t-dot"></div>
          <div class="ticker-txt" id="ticker-txt">${ns.length?'🔔 Ubu gukorerwa: '+ns.map(t=>t.ticketNumber).join(', '):'✅ Serivisi zose ziri gutegereza — Fata numero yawe!'}</div>
        </div>
      </div>
      ${mySection}
      <div class="section-title">Aho serivisi ziri ubu</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-bottom:24px">${svcCards}</div>
    </div></div>
    ${renderFooter()}`;
}

// ═══════════════════════════════════════════
// PAGE: ADMIN
// ═══════════════════════════════════════════
function pageAdmin(user){
  const all=DB.getAllToday();
  const ns=DB.getNowServing();
  const wait=all.filter(t=>t.status==='waiting');
  const done=all.filter(t=>t.status==='done');
  const allSvcs=DB.getAllServices();

  const svcRows=allSvcs.slice(0,15).map(s=>{
    const q=DB.getQueueBySvc(s.id);
    const serving=q.find(t=>t.status==='serving');
    const sw=q.filter(t=>t.status==='waiting');
    return`<tr>
      <td><span style="font-size:16px">${s.icon}</span></td>
      <td><div style="font-weight:600;font-size:13px">${s.name}</div><div style="font-size:11px;color:var(--ink3)">${s.org}</div></td>
      <td>${serving?`<span class="badge badge-gold">${serving.ticketNumber}</span>`:'<span class="badge badge-gray">—</span>'}</td>
      <td><strong>${sw.length}</strong></td>
      <td>~${s.avgWait} min</td>
      <td><button class="btn btn-primary" style="padding:7px 14px;font-size:12px" onclick="callNext('${s.id}','${s.name}')">Itabe →</button></td>
    </tr>`;
  }).join('');

  const tRows=all.slice(0,30).map(t=>`<tr>
    <td class="tn">${t.ticketNumber}</td>
    <td>${t.userName}</td>
    <td><span style="font-size:14px">${t.serviceIcon}</span> <span style="font-size:13px">${t.serviceName}</span></td>
    <td style="color:var(--ink3);font-size:12px;font-family:var(--mono)">${fmtTime(t.createdAt)}</td>
    <td><span class="badge ${t.status==='waiting'?'badge-blue':t.status==='serving'?'badge-gold':'badge-green'}">${t.status==='waiting'?'Gutegereza':t.status==='serving'?'Gukorerwa':'Byarangiye'}</span></td>
    <td>${t.status==='serving'?`<button class="btn btn-ghost" style="padding:5px 12px;font-size:12px" onclick="completeT('${t.id}')">✓ Rangiza</button>`:''}</td>
  </tr>`).join('');

  // Animate stat numbers after render
  setTimeout(()=>{
    animateNumber($('s-all'),all.length);
    animateNumber($('s-wait'),wait.length);
    animateNumber($('s-ns'),ns.length);
    animateNumber($('s-done'),done.length);
  },100);

  return`
    ${renderTopbar(user)}
    <div class="page"><div class="main">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:12px;animation:fadeDown 0.4s cubic-bezier(0.22,1,0.36,1) both">
        <div>
          <h2 style="font-family:var(--fm);font-size:26px;font-weight:700;letter-spacing:-0.5px">Admin Dashboard 🇷🇼</h2>
          <p style="font-size:13px;color:var(--ink3)">Reba no gucunga queue ya uyu munsi — FATA NUMERO v2</p>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost" onclick="go('register')" style="font-size:13px">➕ Ongera Serivisi</button>
          <button class="btn btn-primary" onclick="go('admin')" style="font-size:13px">↻ Vugurura</button>
        </div>
      </div>
      <div class="stat-grid">
        <div class="stat-card"><div class="sl">Yose uyu munsi</div><div class="sv" id="s-all">0</div><div class="ss">Tickets zafashwe</div></div>
        <div class="stat-card"><div class="sl">Bategereje</div><div class="sv" id="s-wait" style="color:var(--blue)">0</div><div class="ss">Mu murongo</div></div>
        <div class="stat-card"><div class="sl">Gukorerwa</div><div class="sv" id="s-ns" style="color:var(--gold)">0</div><div class="ss">Ubu bikora</div></div>
        <div class="stat-card"><div class="sl">Byarangiye</div><div class="sv" id="s-done" style="color:var(--green)">0</div><div class="ss">Byakorwa neza</div></div>
      </div>
      <div class="section-title" style="margin-bottom:14px">Serivisi — Itabe Umutimanama</div>
      <div class="tbl-wrap" style="margin-bottom:28px">
        <table><thead><tr><th></th><th>Serivisi</th><th>Ubu</th><th>Bategereje</th><th>~Iminota</th><th>Igikorwa</th></tr></thead>
        <tbody>${svcRows||'<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--ink3)">Nta serivisi ubu.</td></tr>'}</tbody></table>
      </div>
      <div class="section-title" style="margin-bottom:14px">Tickets Zose Uyu Munsi</div>
      <div class="tbl-wrap">
        <table><thead><tr><th>Numero</th><th>Izina</th><th>Serivisi</th><th>Saa</th><th>Imimerere</th><th>Igikorwa</th></tr></thead>
        <tbody>${tRows||'<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--ink3)">Nta tickets uyu munsi.</td></tr>'}</tbody></table>
      </div>
    </div></div>
    ${renderFooter()}`;
}

function callNext(svcId,svcName){
  const btn=event.target;
  btn.textContent='⏳';btn.disabled=true;
  setTimeout(()=>{
    const t=DB.callNext(svcId);
    btn.textContent='Itabe →';btn.disabled=false;
    if(!t){toast('Nta wundi uri mu murongo wa '+svcName+'!','w');return}
    toast('🔔 Batashye: '+t.ticketNumber+' — '+t.userName,'s');go('admin');
  },300);
}
function completeT(id){DB.completeTicket(id);toast('✓ Ticket yarangiye!','s');go('admin')}

// ═══════════════════════════════════════════
// PAGE: REGISTER SERVICE
// ═══════════════════════════════════════════
function pageRegister(user){
  const custom=DB.getCustomServices();
  const customRows=custom.length?custom.map(s=>`<tr>
    <td><span style="font-size:16px">${s.icon||'🏢'}</span></td>
    <td><div style="font-weight:600;font-size:13px">${s.name}</div><div style="font-size:11px;color:var(--ink3)">${s.org}</div></td>
    <td><span class="badge badge-${s.cat==='bank'?'blue':s.cat==='coop'?'green':'gray'}">${{bank:'Banki',coop:'Ikimina',health:'Ubuzima',gov:'Leta',other:'Ikindi'}[s.cat]||s.cat}</span></td>
    <td style="color:var(--ink3);font-family:var(--mono);font-size:13px">${s.prefix}</td>
    <td>~${s.avgWait} min</td>
  </tr>`).join('')
  :`<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--ink3)">Nta serivisi zandikishijwe na admin.</td></tr>`;

  return`
    ${renderTopbar(user)}
    <div class="page"><div class="main">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;animation:fadeDown 0.4s cubic-bezier(0.22,1,0.36,1) both">
        <button class="btn btn-ghost" onclick="go('admin')" style="padding:8px 14px;font-size:13px">← Subira</button>
        <div>
          <h2 style="font-family:var(--fm);font-size:24px;font-weight:700;letter-spacing:-0.5px">Andikisha Serivisi Nshya 🇷🇼</h2>
          <p style="font-size:13px;color:var(--ink3)">Ongera ikimina, banki, cyangwa serivisi iyo ariyo yose</p>
        </div>
      </div>
      <div class="reg-grid">
        <div class="reg-card" style="animation-delay:0.05s">
          <h3>➕ Ongera Serivisi Nshya</h3>
          <p>Uzuza amakuru y'ikimina cyangwa serivisi ushaka kongera muri FATA NUMERO.</p>
          <div class="fg"><label class="fl">Izina ry'Ikimina / Serivisi *</label><input class="fi" id="reg-name" placeholder="Urugero: SACCO Inzira"/></div>
          <div class="fg"><label class="fl">Izina Ryuzuye *</label><input class="fi" id="reg-org" placeholder="Urugero: Inzira Community Savings SACCO"/></div>
          <div class="fg"><label class="fl">Ubwoko *</label>
            <select class="fi fi-sel" id="reg-cat">
              <option value="coop">🌿 Ikimina (SACCO/MFI)</option>
              <option value="bank">🏦 Banki</option>
              <option value="health">🏥 Ubuzima</option>
              <option value="gov">🏛️ Ibiro bya Leta</option>
              <option value="other">🏢 Ikindi</option>
            </select>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div class="fg"><label class="fl">Aho Iherereye</label><input class="fi" id="reg-loc" placeholder="Kigali, Huye..."/></div>
            <div class="fg"><label class="fl">~Iminota yo Gutegereza</label><input class="fi" type="number" id="reg-wait" placeholder="15" min="1" max="120"/></div>
          </div>
          <div class="fg"><label class="fl">Telefoni (Siyabigomba)</label><input class="fi" type="tel" id="reg-tel" placeholder="+250 7XX XXX XXX"/></div>
          <div class="fg"><label class="fl">Emoji y'Ikimba</label>
            <select class="fi fi-sel" id="reg-icon">
              <option value="🌿">🌿 Umusaruro (Ibimina)</option>
              <option value="🏦">🏦 Banki</option>
              <option value="🏥">🏥 Ubuzima</option>
              <option value="🏛️">🏛️ Ibiro bya Leta</option>
              <option value="🏢">🏢 Ikindi</option>
              <option value="💰">💰 Amafaranga</option>
              <option value="🤝">🤝 Ubufatanye</option>
            </select>
          </div>
          <div class="err-msg" id="reg-err"></div>
          <button class="btn btn-primary btn-full btn-lg" onclick="registerService()" style="margin-top:8px">✅ Andikisha Serivisi</button>
        </div>
        <div>
          <div class="reg-card" style="margin-bottom:16px;animation-delay:0.12s">
            <h3>📋 Serivisi Zandikishijwe</h3>
            <p>Serivisi wongeyeho ari izi:</p>
            <div class="tbl-wrap">
              <table><thead><tr><th></th><th>Izina</th><th>Ubwoko</th><th>Prefix</th><th>Iminota</th></tr></thead>
              <tbody>${customRows}</tbody></table>
            </div>
          </div>
          <div class="reg-card" style="background:var(--green-l);border-color:rgba(26,107,60,0.2);animation-delay:0.2s">
            <h3 style="color:var(--green-m)">🇷🇼 Serivisi za Rwanda</h3>
            <p>FATA NUMERO isanzwe ifite serivisi ${RW_SERVICES.length} zo mu Rwanda:</p>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px">
              ${RW_SERVICES.slice(0,12).map((s,i)=>`<span style="background:var(--white);border:1px solid var(--border);border-radius:6px;padding:3px 10px;font-size:12px;color:var(--ink2);animation:badgePop 0.35s cubic-bezier(0.34,1.56,0.64,1) ${i*30}ms both">${s.icon} ${s.short}</span>`).join('')}
              <span style="background:var(--green-l);border:1px solid rgba(26,107,60,0.2);border-radius:6px;padding:3px 10px;font-size:12px;color:var(--green-m)">+${RW_SERVICES.length-12} izindi...</span>
            </div>
          </div>
        </div>
      </div>
    </div></div>
    ${renderFooter()}`;
}

function registerService(){
  const name=$('reg-name').value.trim();
  const org=$('reg-org').value.trim();
  const cat=$('reg-cat').value;
  const loc=$('reg-loc').value.trim();
  const wait=$('reg-wait').value||'15';
  const tel=$('reg-tel').value.trim();
  const icon=$('reg-icon').value;
  const err=$('reg-err');err.style.display='none';

  if(!name||!org){err.textContent='⚠ Uzuza izina n\'izina ryuzuye.';err.style.display='block';return}

  const btn=event.target;
  btn.textContent='⏳ Tegereza...';btn.disabled=true;
  setTimeout(()=>{
    DB.saveCustomService({name,org,cat,locations:loc||'Rwanda',avgWait:parseInt(wait),phone:tel,icon,active:true});
    toast('✅ '+name+' yandikishijwe neza! 🇷🇼','s');
    go('register');
  },400);
}

// ═══════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════
function renderFooter(){
  return`<div class="footer">
    <div class="mirw" style="display:inline-flex;margin-bottom:10px">🇷🇼 Made in Rwanda · Gukora mu Rwanda</div>
    <div><strong>FATA NUMERO v2</strong> — Sistema yo gucunga Queue i Rwanda <strong>&copy Designed by Kylli-Boi</strong></div>
    <div style="margin-top:6px;font-size:12px">Banki 10 · Ibimina 10 · Ubuzima 5 · Leta 5 · n'izindi zindi...</div>
  </div>`;
}

// ═══════════════════════════════════════════
// ROUTER
// ═══════════════════════════════════════════
function render(){
  const s=DB.getSession();
  const page=window._page||'login';
  const pub=['login','signup'];

  if(!pub.includes(page)&&!s){window._page='login';render();return}
  if(pub.includes(page)&&s){window._page=s.role==='admin'?'admin':'home';render();return}
  if(page==='admin'&&s?.role!=='admin'){window._page='home';render();return}
  if(page==='register'&&s?.role!=='admin'){window._page='home';render();return}

  let html='';
  if(page==='login')html=pageLogin();
  else if(page==='signup')html=pageSignup();
  else if(page==='home')html=pageHome(s);
  else if(page==='queue')html=pageQueue(s);
  else if(page==='admin')html=pageAdmin(s);
  else if(page==='register')html=pageRegister(s);

  document.getElementById('app').innerHTML=html;
  window.scrollTo({top:0,behavior:'smooth'});

  // Re-attach login events
  const lp=$('l-pw');if(lp)lp.onkeydown=e=>{if(e.key==='Enter')doLogin()};
  const se=$('su-p');if(se)se.onkeydown=e=>{if(e.key==='Enter')doSignup()};
}

// BOOT
window._page=DB.getSession()?(DB.getSession().role==='admin'?'admin':'home'):'login';
render();
