/* ============================================================
   DATA  — a forest (one or more top-level branches)
   ============================================================ */
let uid = 0;
const N = (ur, en, children=[]) => ({ id:++uid, ur, en, children });

let forest = [
  N("لال مند", "Lal Mand", [
    N("ہیرا", "Heera", [
      N("پھولد", "Phulad", [
        N("لہڑا", "Lehra", [
          N("امام خان", "Amam Khan", [
            N("محمد خان", "Muhammad Khan", []),
            N("حمد خان", "Hamd Khan", []),
          ]),
        ]),
      ]),
      N("مہرو", "Muhro", [
        N("لاڈ خان", "Laad Khan", [
          N("رحمت خان", "Rahmat Khan", [
            N("ولایت", "Walayat", [
              N("عبدالرشید", "Abdul Rasheed", [
                N("فرمان", "Farman", [
                  N("وسیم", "Waseem", []),
                  N("معین", "Moin", []),
                  N("عرفان", "Irfan", []),
                  N("ارمان", "Arman", []),
                ]),
                N("شرف الدین", "Sharfuddin", [
                  N("احد", "Ahad", []),
                  N("فہد", "Fahad", []),
                  N("علی حسن", "Ali Hassan", []),
                ]),
                N("عرفان", "Irfan", []),
                N("شمس الدین", "Shamsuddin", [
                  N("دانیال", "Danial", []),
                  N("یوسف", "Yousaf", []),
                ]),
                N("قمر دین", "Qamar Din", [
                  N("عبداللہ", "Abdullah", []),
                  N("عبدالرحمن", "Abdul Rahman", []),
                ]),
                N("عظیم الدین", "Azeemuddin", [
                  N("یوسف", "Yousaf", []),
                ]),
              ]),
              N("محمد رفیق", "Muhammad Rafiq", [
                N("نثار", "Nisar", [
                  N("ارسلان", "Araslan", []),
                  N("احمد ثانی", "Ahmad Saani", []),
                ]),
                N("قطب الدین", "Qutubuddin", [
                  N("طلحہ", "Talha", []),
                ]),
                N("عبدالرؤف", "Abdul Rauf", [
                  N("محمد", "Muhammad", []),
                ]),
              ]),
              N("کبیر احمد", "Kabir Ahmad", [
                N("توقیر احمد", "Toqir Ahmad", []),
                N("نصیر احمد", "Naseer Ahmad", []),
              ]),
            ]),
          ]),
          N("عبدل", "Abdal", [
            N("زہربی", "Zaharbi", []),
          ]),
          N("اکبر", "Akbar", [
            N("مغربی", "Magarbi", []),
          ]),
          N("سمیر خان", "Sumair Khan", [
            N("اقبال خان", "Iqbal Khan", []),
            N("اسحاق", "Ishaq", []),
            N("الیاس", "Ilyas", []),
            N("شیر خان", "Shair Khan", []),
            N("عبداللہ", "Abdullah", []),
          ]),
        ]),
        N("نور خان", "Noor Khan", [
          N("بھاٹی", "Bhaati", [
            N("داؤد", "Dawood", [
              N("بشیر", "Basheer", []),
              N("رشید", "Rasheed", []),
            ]),
          ]),
        ]),
        N("جھل خان", "Jhal Khan", [
          N("گبدو", "Gabdu", []),
        ]),
        N("بھمبر", "Bhambar", [
          N("عوض خان", "Ooaz Khan", [
            N("گوگنا", "Googna", [
              N("محمودہ", "Mehmoda", []),
            ]),
          ]),
          N("لیلا", "Leela", [
            N("جھپو", "Jhapu", []),
            N("عیب خان", "Aiab Khan", []),
          ]),
          N("نذیرا", "Nazeera", [
            N("سیپی چھلا", "Seepi Chhalla", [
              N("مجید خان", "Majeed Khan", []),
            ]),
          ]),
          N("جناب", "Janab", []),
          N("نواب", "Nawab", [
            N("سردار خان", "Sardar Khan", [
              N("سعید", "Saeed", []),
              N("وحید", "Waheed", []),
              N("نصر", "Nasar", []),
              N("امجد", "Amjad", []),
            ]),
            N("اصحاب خان", "Ashab Khan", [
              N("جاوید", "Javaid", []),
              N("پرویز", "Parvaiz", []),
              N("سرفراز", "Sarfaraz", []),
            ]),
          ]),
        ]),
      ]),
      N("حسن خان", "Hassan Khan", [
        N("مہتا", "Mahta", []),
        N("سفیدی", "Safaidi", []),
        N("مہدی", "Mahdi", []),
      ]),
      N("حیات خان", "Hayat Khan", [
        N("بودن", "Boudan", [
          N("نواز خان", "Nawaz Khan", [
            N("نصرو خان", "Nasru Khan", []),
          ]),
        ]),
      ]),
      N("کانو", "Kaanu", []),
    ]),
  ]),
  N("ساہا مند", "Saha Mand", []),
];

/* ============================================================
   CONSTANTS · STATE
   ============================================================ */
const NODE_W=176, NODE_H=88, H_GAP=28, V_GAP=76, PAD=96, TREE_GAP=72;
const ROW_H=NODE_H+V_GAP;
const INITIAL_DEPTH=3;                 // branches deeper than this start folded
const MIN_SCALE=0.08, MAX_SCALE=2.6;
const THEME_KEY='shajra-theme', SEEN_KEY='shajra-seen';

let rtl=true;
let collapsed=new Set();
let pos={}, dims={w:0,h:0};
let nodeById={}, fullParent={}, fullDepth={}, descCount={}, rowsOf={}, maxDepth=0;
let view={tx:0,ty:0,scale:1};
let selectedId=null;
let searchTerm='';

const $=id=>document.getElementById(id);
const stage=$('stage'), world=$('world'), svg=$('links'), gens=$('gens');
const panel=$('panel'), menu=$('menu'), tips=$('tips');
const searchEl=$('search'), searchWrap=$('searchWrap'), results=$('searchResults');
const isMobile=()=>window.matchMedia('(max-width:760px)').matches;
const reduceMotion=()=>window.matchMedia('(prefers-reduced-motion:reduce)').matches;
const clamp=s=>Math.min(MAX_SCALE,Math.max(MIN_SCALE,s));
const rowY=d=>PAD+d*ROW_H;
function escapeHtml(s){return (s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}

/* ============================================================
   INDEX  (the structure never changes, so this runs once)
   ============================================================ */
function indexForest(){
  nodeById={}; fullParent={}; fullDepth={}; descCount={}; rowsOf={}; maxDepth=0;
  function walk(n,parent,d){
    nodeById[n.id]=n; fullParent[n.id]=parent?parent.id:null; fullDepth[n.id]=d; maxDepth=Math.max(maxDepth,d);
    const kids=n.children||[];
    let c=0, rows=0; kids.forEach(k=>{ c+=1+walk(k,n,d+1); rows+=rowsOf[k.id]; });
    descCount[n.id]=c; rowsOf[n.id]=kids.length?rows:1;      // rowsOf = leaves under a node (rows in a sideways layout)
    return c;
  }
  forest.forEach(t=>walk(t,null,0));
}
const findNode=id=>nodeById[id]||null;
const totalPeople=()=>Object.keys(nodeById).length;
function ancestorChain(id){ const out=[]; let cur=id; while(cur!=null){ out.push(cur); cur=fullParent[cur]; } return out; } // self → top
function revealAncestors(id){ let cur=fullParent[id]; while(cur!=null){ collapsed.delete(cur); cur=fullParent[cur]; } }

/* ============================================================
   LAYOUT  (leaf-column tidy tree; only visible nodes are placed)
   ============================================================ */
function computeLayout(collapsedSet){
  const P={}; let leafX=0;
  function assign(node){
    const kids=node.children||[], folded=collapsedSet.has(node.id), y=rowY(fullDepth[node.id]);
    if(!kids.length||folded){ P[node.id]={x:leafX*(NODE_W+H_GAP),y}; leafX++; }
    else{
      (rtl?kids.slice().reverse():kids).forEach(assign);
      const xs=kids.map(c=>P[c.id].x);
      P[node.id]={x:(Math.min(...xs)+Math.max(...xs))/2,y};
    }
  }
  (rtl?forest.slice().reverse():forest).forEach((t,i)=>{ if(i>0) leafX+=TREE_GAP/(NODE_W+H_GAP); assign(t); });
  const all=Object.values(P);
  if(!all.length) return {pos:P,w:PAD*2,h:PAD*2,depth:0};
  const minX=Math.min(...all.map(p=>p.x));
  all.forEach(p=>{ p.x+=PAD-minX; });
  let depth=0; Object.keys(P).forEach(id=>{ depth=Math.max(depth,fullDepth[id]); });
  return {pos:P, w:Math.max(...all.map(p=>p.x))+NODE_W+PAD, h:rowY(depth)+NODE_H+PAD, depth};
}

/* ============================================================
   RENDER
   ============================================================ */
function elbow(px,py,cx,cy){
  if(Math.abs(cx-px)<1) return `M${px} ${py} L${cx} ${cy}`;
  const midY=py+(cy-py)/2, r=Math.min(14,Math.abs(cx-px)/2), d=cx>px?1:-1;
  return `M${px} ${py} L${px} ${midY-r} Q${px} ${midY} ${px+d*r} ${midY} L${cx-d*r} ${midY} Q${cx} ${midY} ${cx} ${midY+r} L${cx} ${cy}`;
}
function matchList(){
  const t=searchTerm.trim().toLowerCase(); if(!t) return [];
  return Object.values(nodeById)
    .filter(n=>(n.ur||'').toLowerCase().includes(t)||(n.en||'').toLowerCase().includes(t))
    .sort((a,b)=>fullDepth[a.id]-fullDepth[b.id]||a.id-b.id);
}

function render(){
  const L=computeLayout(collapsed);
  pos=L.pos; dims={w:L.w,h:L.h};
  world.style.width=dims.w+'px'; world.style.height=dims.h+'px';
  svg.setAttribute('width',dims.w); svg.setAttribute('height',dims.h);

  const lineage=selectedId!=null?new Set(ancestorChain(selectedId)):null;
  const matches=searchTerm.trim()?new Set(matchList().map(n=>n.id)):null;

  // generation bands + connectors
  let s='';
  for(let d=1; d<=L.depth; d+=2) s+=`<rect class="band" x="0" y="${rowY(d)-V_GAP/2}" width="${dims.w}" height="${ROW_H}"/>`;
  function walkE(node){
    if(collapsed.has(node.id)) return;
    (node.children||[]).forEach(c=>{
      const p=pos[node.id], q=pos[c.id];
      let cls='edge';
      if(lineage) cls+=(lineage.has(node.id)&&lineage.has(c.id))?' hot':' dim';
      if(matches) cls+=' dim';
      s+=`<path class="${cls}" d="${elbow(p.x+NODE_W/2,p.y+NODE_H,q.x+NODE_W/2,q.y)}"/>`;
      walkE(c);
    });
  }
  forest.forEach(walkE);
  svg.innerHTML=s;

  // cards
  world.querySelectorAll('.node').forEach(n=>n.remove());
  const frag=document.createDocumentFragment();
  function walkN(node){
    const p=pos[node.id], isTop=fullParent[node.id]===null, hasKids=(node.children||[]).length>0, folded=collapsed.has(node.id);
    const el=document.createElement('div');
    let cls='node'+(isTop?' root':'');
    if(node.id===selectedId) cls+=' selected';
    if(lineage){ if(lineage.has(node.id)){ if(node.id!==selectedId) cls+=' lineage'; } else cls+=' dim'; }
    if(matches){ if(matches.has(node.id)) cls+=' match'; else cls+=' dim'; }
    el.className=cls; el.style.left=p.x+'px'; el.style.top=p.y+'px'; el.dataset.id=node.id;
    el.setAttribute('role','button'); el.tabIndex=0;
    el.setAttribute('aria-label',`${node.en||node.ur}, generation ${fullDepth[node.id]+1}`);
    el.innerHTML=
      `<div class="body"><div class="name">${escapeHtml(node.ur)||'—'}</div><div class="roman">${escapeHtml(node.en)||''}</div></div>`+
      (hasKids
        ?`<button class="pill${folded?' collapsed':''}" data-toggle="${node.id}" tabindex="-1" aria-label="${folded?'Unfold':'Fold'} branch, ${descCount[node.id]} descendants">${folded?'+'+descCount[node.id]:'<svg class="ic" aria-hidden="true"><use href="#i-chevron-up"/></svg>'}</button>`
        :'');
    frag.appendChild(el);
    if(!folded)(node.children||[]).forEach(walkN);
  }
  forest.forEach(walkN);
  world.appendChild(frag);
  fitNames();
  renderGens(L.depth);
  applyView();
}
/* shrink long Urdu names so they never spill out of the card */
function fitNames(){
  world.querySelectorAll('.node .name').forEach(el=>{
    el.style.fontSize='';
    let fs=22;
    while(el.scrollWidth>el.clientWidth+1&&fs>15){ fs-=1.5; el.style.fontSize=fs+'px'; }
  });
}
let genLabels=0;
function renderGens(depth){
  if(genLabels!==depth+1){
    gens.innerHTML='';
    for(let d=0; d<=depth; d++){ const e=document.createElement('div'); e.className='gen'; e.innerHTML=`<i></i>Gen ${d+1}`; gens.appendChild(e); }
    genLabels=depth+1;
  }
}
function placeGens(){
  const s=view.scale, hide=ROW_H*s<28;
  gens.classList.toggle('hidden',hide);
  if(hide) return;
  let d=0; for(const e of gens.children){ e.style.top=(view.ty+(rowY(d)+NODE_H/2)*s)+'px'; d++; }
}
function applyView(){
  world.style.transform=`translate(${view.tx}px,${view.ty}px) scale(${view.scale})`;
  $('zoomLvl').textContent=Math.round(view.scale*100)+'%';
  placeGens();
}

/* ============================================================
   VIEW  (fit · center · zoom, optionally animated)
   ============================================================ */
let animTimer=null;
function setView(v,animate){
  view=v;
  clearTimeout(animTimer);
  if(animate&&!reduceMotion()){ stage.classList.add('anim'); animTimer=setTimeout(()=>stage.classList.remove('anim'),500); }
  else stage.classList.remove('anim');
  applyView();
}
/* the part of the stage not covered by the details panel (or the generation labels) */
function viewport(){
  const r=stage.getBoundingClientRect();
  let x=isMobile()?0:76, y=0, w=r.width-x, h=r.height;
  if(panel.classList.contains('open')){
    if(isMobile()) h-=panel.getBoundingClientRect().height;
    else w-=panel.getBoundingClientRect().width;
  }
  return {x,y,w:Math.max(120,w),h:Math.max(120,h)};
}
function fitToScreen(animate=true){
  const v=viewport();
  const s=clamp(Math.min(v.w/dims.w,v.h/dims.h,1.2)*0.92);
  setView({scale:s,tx:v.x+(v.w-dims.w*s)/2,ty:v.y+(v.h-dims.h*s)/2},animate);
}
function centerOn(id,animate=true,scale){
  const p=pos[id]; if(!p) return;
  const v=viewport(), s=clamp(scale||view.scale);
  setView({scale:s,tx:v.x+v.w/2-(p.x+NODE_W/2)*s,ty:v.y+v.h/2-(p.y+NODE_H/2)*s},animate);
}
function isVisible(id){
  const p=pos[id]; if(!p) return false;
  const v=viewport(), s=view.scale;
  const x=view.tx+p.x*s, y=view.ty+p.y*s;
  return x>=v.x && y>=v.y && x+NODE_W*s<=v.x+v.w && y+NODE_H*s<=v.y+v.h;
}
function zoomAt(mx,my,ns,animate){
  ns=clamp(ns); const old=view.scale;
  setView({scale:ns,tx:mx-(mx-view.tx)*(ns/old),ty:my-(my-view.ty)*(ns/old)},animate);
}
function zoomBy(f){ const v=viewport(); zoomAt(v.x+v.w/2,v.y+v.h/2,view.scale*f,true); }

/* ============================================================
   PAN / ZOOM  (pointer · pinch · wheel)
   ============================================================ */
const pointers=new Map();
let lastPan=null, startPt=null, pinchPrev=null, moved=false, downTarget=null;
function pinchInfo(){ const a=[...pointers.values()]; return {dist:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y),cx:(a[0].x+a[1].x)/2,cy:(a[0].y+a[1].y)/2}; }
stage.addEventListener('pointerdown',e=>{
  if(e.pointerType==='mouse'&&e.button!==0) return;
  stage.setPointerCapture(e.pointerId);
  stage.classList.remove('anim'); clearTimeout(animTimer);
  pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===1){ moved=false; downTarget=e.target; lastPan={x:e.clientX,y:e.clientY}; startPt={x:e.clientX,y:e.clientY}; stage.classList.add('panning'); }
  else if(pointers.size===2) pinchPrev=pinchInfo();
});
stage.addEventListener('pointermove',e=>{
  if(!pointers.has(e.pointerId)) return;
  pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===1){
    view.tx+=e.clientX-lastPan.x; view.ty+=e.clientY-lastPan.y; lastPan={x:e.clientX,y:e.clientY};
    if(Math.hypot(e.clientX-startPt.x,e.clientY-startPt.y)>6) moved=true;
    applyView();
  } else if(pointers.size===2){
    const info=pinchInfo();
    if(pinchPrev){
      const rect=stage.getBoundingClientRect(), mx=info.cx-rect.left, my=info.cy-rect.top;
      const ns=clamp(view.scale*(info.dist/pinchPrev.dist));
      view.tx=mx-(mx-view.tx)*(ns/view.scale); view.ty=my-(my-view.ty)*(ns/view.scale); view.scale=ns;
      view.tx+=info.cx-pinchPrev.cx; view.ty+=info.cy-pinchPrev.cy;
      applyView();
    }
    pinchPrev=info; moved=true;
  }
});
function endPointer(e){
  if(!pointers.has(e.pointerId)) return;
  pointers.delete(e.pointerId);
  if(pointers.size<2) pinchPrev=null;
  if(pointers.size===0){ stage.classList.remove('panning'); if(!moved) handleTap(downTarget); }
  else if(pointers.size===1){ const p=[...pointers.values()][0]; lastPan={x:p.x,y:p.y}; startPt={x:p.x,y:p.y}; moved=false; }
}
stage.addEventListener('pointerup',endPointer);
stage.addEventListener('pointercancel',endPointer);
stage.addEventListener('wheel',e=>{
  e.preventDefault();
  const rect=stage.getBoundingClientRect();
  const f=e.ctrlKey?Math.exp(-e.deltaY*0.01):(e.deltaY<0?1.12:0.89);   // ctrl+wheel = trackpad pinch
  zoomAt(e.clientX-rect.left,e.clientY-rect.top,view.scale*f,false);
},{passive:false});
stage.addEventListener('dblclick',e=>{
  const nd=e.target.closest&&e.target.closest('.node');
  if(nd) centerOn(+nd.dataset.id,true,Math.max(view.scale,1));
});
function handleTap(t){
  closeMenu(); hideTips(); hideResults();
  if(!t||!t.closest){ deselect(); return; }
  const pill=t.closest('.pill'); if(pill){ toggleCollapse(+pill.dataset.toggle); return; }
  const nd=t.closest('.node'); if(nd){ selectNode(+nd.dataset.id); return; }
  deselect();
}

/* ============================================================
   FOLD / UNFOLD
   ============================================================ */
function toggleCollapse(id){
  const before=pos[id]?{...pos[id]}:null;
  if(collapsed.has(id)) collapsed.delete(id); else collapsed.add(id);
  render();
  const after=pos[id];   // keep the toggled card where it was on screen
  if(before&&after){ view.tx-=(after.x-before.x)*view.scale; view.ty-=(after.y-before.y)*view.scale; applyView(); }
  if(selectedId===id) fillPanel(findNode(id));
}
function collapseToDepth(depth){
  collapsed=new Set();
  Object.values(nodeById).forEach(n=>{ if((n.children||[]).length&&fullDepth[n.id]>=depth) collapsed.add(n.id); });
}
function expandAll(){ collapsed=new Set(); render(); fitToScreen(); }
function collapseAll(){ collapseToDepth(1); render(); fitToScreen(); }

/* ============================================================
   SELECTION · DETAILS PANEL
   ============================================================ */
function personBtn(p,me){
  const c=(p.children||[]).length;
  return `<button class="person${me?' me':''}" data-go="${p.id}">`+
    `<span class="l"><span class="en">${escapeHtml(p.en)||'—'}</span>${c?`<span class="n" title="${c} children">${c}</span>`:''}</span>`+
    `<span class="ur">${escapeHtml(p.ur)||'—'}</span></button>`;
}
function fillPanel(n){
  const id=n.id, kids=n.children||[], pid=fullParent[id], par=pid!=null?findNode(pid):null;
  $('roName').textContent=n.ur||'—';
  $('roRoman').textContent=n.en||'';
  $('roStats').innerHTML=
    `<div class="stat"><b>${fullDepth[id]+1}</b><span>Generation</span></div>`+
    `<div class="stat"><b>${kids.length}</b><span>Children</span></div>`+
    `<div class="stat"><b>${descCount[id]}</b><span>Descendants</span></div>`;
  const folded=collapsed.has(id);
  $('roActions').innerHTML=
    `<button class="btn primary" data-act="center"><svg class="ic" aria-hidden="true"><use href="#i-target"/></svg>Show on tree</button>`+
    (kids.length?`<button class="btn" data-act="toggle"><svg class="ic" aria-hidden="true"><use href="${folded?'#i-unfold':'#i-fold'}"/></svg>${folded?'Unfold':'Fold'} branch</button>`:'');
  $('roFather').innerHTML=`<div class="p-label"><span>Father</span></div>`+(par?personBtn(par):`<div class="p-empty">Top of the tree. No father recorded.</div>`);
  $('roChildren').innerHTML=kids.length
    ?`<div class="p-label"><span>Children</span><span>${kids.length}</span></div><div class="people">${kids.map(k=>personBtn(k)).join('')}</div>`
    :'';
  const chain=ancestorChain(id).reverse();   // top → self
  $('roLineage').innerHTML=chain.length>1
    ?`<div class="p-label"><span>Line to the top</span><span>${chain.length} generations</span></div><div class="rail">${chain.map(x=>personBtn(findNode(x),x===id)).join('')}</div>`
    :'';
  panel.querySelector('.p-body').scrollTop=0;
}
function selectNode(id,opts={}){
  const n=findNode(id); if(!n) return;
  selectedId=id;
  revealAncestors(id);
  fillPanel(n);
  panel.classList.add('open'); panel.setAttribute('aria-hidden','false'); document.body.classList.add('panel-open');
  render();
  if(opts.center||!isVisible(id)) centerOn(id,true,opts.scale);
  try{ history.replaceState(null,'','#'+id); }catch(e){}
}
function deselect(){
  if(selectedId==null&&!panel.classList.contains('open')) return;
  selectedId=null;
  panel.classList.remove('open'); panel.setAttribute('aria-hidden','true'); document.body.classList.remove('panel-open');
  render();
  try{ history.replaceState(null,'',location.pathname+location.search); }catch(e){}
}
$('panelClose').onclick=deselect;
panel.addEventListener('click',e=>{
  const go=e.target.closest('[data-go]');
  if(go){ selectNode(+go.dataset.go,{center:true,scale:Math.max(view.scale,0.8)}); return; }
  const act=e.target.closest('[data-act]'); if(!act||selectedId==null) return;
  if(act.dataset.act==='center') centerOn(selectedId,true,Math.max(view.scale,0.9));
  else if(act.dataset.act==='toggle') toggleCollapse(selectedId);
});

/* ============================================================
   SEARCH  (live highlight + results list)
   ============================================================ */
let activeIdx=-1, lastList=[];
const MAX_RESULTS=8;
function hideResults(){ results.hidden=true; }
function renderResults(){
  const list=lastList;
  if(!searchTerm.trim()){ results.hidden=true; results.innerHTML=''; return; }
  const head=list.length
    ?`<div class="s-head">${list.length} ${list.length===1?'match':'matches'}${list.length>MAX_RESULTS?' · showing '+MAX_RESULTS:''}</div>`
    :`<div class="s-empty">No one found for “${escapeHtml(searchTerm.trim())}”</div>`;
  results.innerHTML=head+list.slice(0,MAX_RESULTS).map((n,i)=>{
    const par=fullParent[n.id]!=null?findNode(fullParent[n.id]):null;
    return `<button class="s-res${i===activeIdx?' active':''}" role="option" aria-selected="${i===activeIdx}" data-go="${n.id}">`+
      `<span class="l"><span class="en">${escapeHtml(n.en)||'—'}</span><span class="g">Gen ${fullDepth[n.id]+1}${par?' · father: '+escapeHtml(par.en||par.ur):''}</span></span>`+
      `<span class="ur">${escapeHtml(n.ur)||'—'}</span></button>`;
  }).join('');
  results.hidden=false;
}
function runSearch(){
  searchTerm=searchEl.value; activeIdx=-1;
  searchWrap.classList.toggle('has',!!searchTerm.trim());
  lastList=matchList();
  renderResults();
  if(lastList.length){ const id=lastList[0].id; revealAncestors(id); render(); centerOn(id,true,Math.max(view.scale,0.7)); }
  else render();
}
function clearSearch(){ searchEl.value=''; searchTerm=''; lastList=[]; activeIdx=-1; searchWrap.classList.remove('has'); hideResults(); render(); }
function pickResult(id){ clearSearch(); searchEl.blur(); selectNode(id,{center:true,scale:Math.max(view.scale,0.9)}); }
searchEl.addEventListener('input',runSearch);
searchEl.addEventListener('focus',()=>{ if(searchTerm.trim()) renderResults(); });
searchEl.addEventListener('keydown',e=>{
  const n=Math.min(lastList.length,MAX_RESULTS);
  if(e.key==='ArrowDown'&&n){ e.preventDefault(); activeIdx=(activeIdx+1)%n; renderResults(); }
  else if(e.key==='ArrowUp'&&n){ e.preventDefault(); activeIdx=(activeIdx-1+n)%n; renderResults(); }
  else if(e.key==='Enter'&&n){ e.preventDefault(); pickResult(lastList[Math.max(0,activeIdx)].id); }
});
results.addEventListener('click',e=>{ const b=e.target.closest('[data-go]'); if(b) pickResult(+b.dataset.go); });
$('searchClr').onclick=()=>{ clearSearch(); searchEl.focus(); };

/* ============================================================
   MENU · THEME · DIRECTION · DOCK
   ============================================================ */
function openMenu(){ menu.classList.add('open'); $('menuBtn').setAttribute('aria-expanded','true'); }
function closeMenu(){ menu.classList.remove('open'); $('menuBtn').setAttribute('aria-expanded','false'); }
$('menuBtn').onclick=e=>{ e.stopPropagation(); if(menu.classList.contains('open')) closeMenu(); else openMenu(); };
document.addEventListener('pointerdown',e=>{
  if(!e.target.closest('.menuwrap')) closeMenu();
  if(!e.target.closest('.search')) hideResults();
  if(!e.target.closest('#tips')&&!e.target.closest('#tipsBtn')) hideTips();
},true);

$('mExpand').onclick=()=>{ closeMenu(); expandAll(); };
$('mCollapse').onclick=()=>{ closeMenu(); collapseAll(); };
$('dExpand').onclick=expandAll;
$('dCollapse').onclick=collapseAll;
$('mDir').onclick=()=>{ rtl=!rtl; $('dirK').textContent=rtl?'RTL':'LTR'; render(); fitToScreen(); };

function isDark(){ return document.documentElement.dataset.theme==='dark'; }   // white unless switched on
function syncTheme(){
  const d=isDark();
  $('themeK').textContent=d?'On':'Off';
  $('themeBtn').querySelector('use').setAttribute('href',d?'#i-sun':'#i-moon');
  $('themeBtn').setAttribute('aria-label',d?'Switch to light mode':'Switch to dark mode');
}
function toggleTheme(){
  const t=isDark()?'light':'dark';
  document.documentElement.dataset.theme=t;
  try{ localStorage.setItem(THEME_KEY,t); }catch(e){}
  syncTheme();
}
$('themeBtn').onclick=toggleTheme;
$('mTheme').onclick=toggleTheme;

$('zoomIn').onclick=()=>zoomBy(1.2);
$('zoomOut').onclick=()=>zoomBy(1/1.2);
$('fit').onclick=()=>fitToScreen();
$('zoomLvl').onclick=()=>{ const v=viewport(); zoomAt(v.x+v.w/2,v.y+v.h/2,1,true); };

/* ============================================================
   EXPORT  (PNG · PDF · JSON · print)
   ============================================================ */
function download(blob,name){ const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1500); }
$('mJson').onclick=()=>{ closeMenu(); download(new Blob([JSON.stringify(forest,(k,v)=>k==='id'?undefined:v,2)],{type:'application/json'}),'shajra-tree.json'); };

/* Draw the FULL tree (ignoring folds) on an off-screen canvas, always in the light
   theme with a title block. Shared by the PNG, PDF and print exporters. */
async function renderFullCanvas(){
  await (document.fonts?document.fonts.ready:Promise.resolve());
  const L=computeLayout(new Set()), P=L.pos;
  const TITLE_H=118, W=L.w, H=L.h+TITLE_H;
  const dpr=Math.min(2,Math.sqrt(50e6/(W*H)));          // keep the bitmap within safe canvas limits
  const cv=document.createElement('canvas'); cv.width=Math.round(W*dpr); cv.height=Math.round(H*dpr);
  const ctx=cv.getContext('2d'); ctx.scale(dpr,dpr);
  const C={bg:'#ffffff',grid:'rgba(17,24,39,.09)',band:'rgba(17,24,39,.025)',card:'#ffffff',border:'#d6d8dd',
           text:'#111827',text2:'#4b5563',text3:'#8b909a',edge:'#c9ccd2',gold:'#b7791f'};
  const UR='"Noto Nastaliq Urdu","Noto Naskh Arabic",serif', SANS='Inter,system-ui,sans-serif';
  const spacing=v=>{ if('letterSpacing' in ctx) ctx.letterSpacing=v; };

  ctx.fillStyle=C.bg; ctx.fillRect(0,0,W,H);
  ctx.fillStyle=C.grid;
  for(let y=11;y<H;y+=22) for(let x=11;x<W;x+=22) ctx.fillRect(x-.75,y-.75,1.5,1.5);

  // title block
  ctx.textBaseline='alphabetic';
  ctx.fillStyle=C.text; ctx.direction='rtl'; ctx.textAlign='right'; ctx.font=`700 30px ${UR}`;
  ctx.fillText('شجرہ نسب',W-PAD,64);
  ctx.direction='ltr'; ctx.textAlign='left';
  spacing('2px'); ctx.font=`700 15px ${SANS}`; ctx.fillText('FAMILY TREE',PAD,52); spacing('0px');
  ctx.font=`400 13px ${SANS}`; ctx.fillStyle=C.text2;
  const date=new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  ctx.fillText(`${totalPeople()} people · ${maxDepth+1} generations · ${date}`,PAD,74);
  ctx.strokeStyle=C.border; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(PAD,TITLE_H-20); ctx.lineTo(W-PAD,TITLE_H-20); ctx.stroke();

  ctx.translate(0,TITLE_H);
  // generation bands + labels
  for(let d=0; d<=maxDepth; d++){
    if(d%2){ ctx.fillStyle=C.band; ctx.fillRect(0,rowY(d)-V_GAP/2,W,ROW_H); }
    ctx.fillStyle=C.text3; ctx.font=`600 10px ${SANS}`; ctx.textAlign='left'; ctx.direction='ltr';
    spacing('1px'); ctx.fillText('GEN '+(d+1),20,rowY(d)+NODE_H/2+4); spacing('0px');
  }
  // connectors
  ctx.strokeStyle=C.edge; ctx.lineWidth=1.6; ctx.lineCap='round';
  function walkE(node){ (node.children||[]).forEach(c=>{ const p=P[node.id],q=P[c.id]; ctx.stroke(new Path2D(elbow(p.x+NODE_W/2,p.y+NODE_H,q.x+NODE_W/2,q.y))); walkE(c); }); }
  forest.forEach(walkE);
  // cards
  function rr(x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }
  function drawNode(node){
    const p=P[node.id], isTop=fullParent[node.id]===null;
    rr(p.x,p.y,NODE_W,NODE_H,14);
    ctx.save(); ctx.shadowColor='rgba(17,24,39,.10)'; ctx.shadowBlur=12; ctx.shadowOffsetY=4; ctx.fillStyle=C.card; ctx.fill(); ctx.restore();
    ctx.lineWidth=1.2; ctx.strokeStyle=isTop?C.gold:C.border; ctx.stroke();
    if(isTop){ ctx.fillStyle=C.gold; ctx.fillRect(p.x+14,p.y,NODE_W-28,3); }
    ctx.direction='rtl'; ctx.textAlign='center'; ctx.fillStyle=C.text;
    let fs=22; ctx.font=`500 ${fs}px ${UR}`;
    while(ctx.measureText(node.ur||'—').width>NODE_W-24&&fs>15){ fs-=1.5; ctx.font=`500 ${fs}px ${UR}`; }
    ctx.fillText(node.ur||'—',p.x+NODE_W/2,p.y+41);
    ctx.direction='ltr'; ctx.fillStyle=C.text3; ctx.font=`600 10px ${SANS}`;
    spacing('1px'); ctx.fillText((node.en||'').toUpperCase(),p.x+NODE_W/2,p.y+69,NODE_W-24); spacing('0px');
    (node.children||[]).forEach(drawNode);
  }
  forest.forEach(drawNode);
  return {cv,W,H};
}

/* PNG: always the full tree, regardless of what is folded on screen */
$('mPng').onclick=async()=>{
  closeMenu(); showToast('Preparing image…');
  const {cv}=await renderFullCanvas();
  cv.toBlob(b=>download(b,'shajra-tree.png'),'image/png');
};

/* ============================================================
   A4 EXPORT  (sideways tree paginated onto A4 portrait pages)
   Generations run across the page (root on the right when reading RTL) and
   people run down it, one row per leaf, which is the only orientation in
   which a 9-generation tree stays legible on A4. Branches that would not fit
   a page at a comfortable density continue on their own page, marked "p.N".
   ============================================================ */
const A4W=595.28, A4H=841.89, A4M=36;     // points (1pt = 1/72 in)
const ROWS_PER_PAGE=30;                   // comfortable density: ≈ 9 mm per row

/* Decide which sub-branches move to their own page. Greedy: while a page is
   over the cap, cut the biggest branch that fits a page of its own. */
function planPages(cap){
  const pages=[];
  function plan(roots,parent){
    const cut=new Set();
    const onPage=n=>cut.has(n.id)?1:((n.children||[]).length?n.children.reduce((s,c)=>s+onPage(c),0):1);
    const total=()=>roots.reduce((s,r)=>s+onPage(r),0);
    const candidates=()=>{
      const out=[];
      const walk=(n,isRoot)=>{ if(cut.has(n.id)) return; const k=n.children||[]; if(!isRoot&&rowsOf[n.id]>=2) out.push(n); k.forEach(c=>walk(c,false)); };
      roots.forEach(r=>walk(r,true)); return out;
    };
    while(total()>cap){
      const cands=candidates(); if(!cands.length) break;
      const fitting=cands.filter(n=>rowsOf[n.id]<=cap);
      const pick=fitting.length
        ?fitting.reduce((a,b)=>rowsOf[b.id]>rowsOf[a.id]?b:a)     // biggest branch that fits a page of its own
        :cands.reduce((a,b)=>rowsOf[b.id]<rowsOf[a.id]?b:a);       // everything is huge: cut the smallest, it splits again
      cut.add(pick.id);
    }
    const page={roots,cut,parent,num:pages.length+1}; pages.push(page);
    const order=[]; const walk=n=>{ if(cut.has(n.id)){ order.push(n); return; } (n.children||[]).forEach(walk); }; roots.forEach(walk);
    order.forEach(n=>plan([n],page.num));
    return page;
  }
  plan(forest.slice(),null);
  const pageOf={}; pages.forEach(p=>p.roots.forEach(r=>{ pageOf[r.id]=p.num; }));
  return {pages,pageOf};
}
/* rows/cols for one page: leaves take successive rows, a parent sits mid-way down its children */
function layoutA4(page){
  const P={}; let row=0, cols=0;
  const base=Math.min(...page.roots.map(r=>fullDepth[r.id]));
  function place(n){
    const col=fullDepth[n.id]-base; cols=Math.max(cols,col+1);
    const kids=page.cut.has(n.id)?[]:(n.children||[]);
    if(!kids.length){ P[n.id]={col,row:row+0.5}; row+=1; }
    else{ kids.forEach(place); const rs=kids.map(c=>P[c.id].row); P[n.id]={col,row:(Math.min(...rs)+Math.max(...rs))/2}; }
  }
  page.roots.forEach((r,i)=>{ if(i>0) row+=0.6; place(r); });
  return {P,rows:row,cols};
}
function elbowH(px,py,cx,cy){
  if(Math.abs(cy-py)<0.5) return `M${px} ${py} L${cx} ${cy}`;
  const midX=px+(cx-px)/2, r=Math.min(5,Math.abs(cy-py)/2,Math.abs(cx-px)/2), dx=cx>px?1:-1, dy=cy>py?1:-1;
  return `M${px} ${py} L${midX-dx*r} ${py} Q${midX} ${py} ${midX} ${py+dy*r} L${midX} ${cy-dy*r} Q${midX} ${cy} ${midX+dx*r} ${cy} L${cx} ${cy}`;
}
function drawA4Page(ctx,page,total,pageOf){
  const C={text:'#111827',text2:'#4b5563',text3:'#8b909a',border:'#d6d8dd',edge:'#c4c7cd',gold:'#b7791f',accent:'#0f766e',stub:'#f3f4f6',rule:'#e6e7ea'};
  const UR='"Noto Nastaliq Urdu","Noto Naskh Arabic",serif', SANS='Inter,system-ui,sans-serif';
  const sp=v=>{ if('letterSpacing' in ctx) ctx.letterSpacing=v; };
  const first=page.num===1, root=page.roots[0];
  ctx.fillStyle='#ffffff'; ctx.fillRect(0,0,A4W,A4H);
  ctx.textBaseline='alphabetic';

  // header
  const hdrH=52;
  ctx.fillStyle=C.text; ctx.direction='rtl'; ctx.textAlign='right'; ctx.font=`700 ${first?22:19}px ${UR}`;
  ctx.fillText(first?'شجرہ نسب':(root.ur||'—'),A4W-A4M,A4M+22);
  ctx.direction='ltr'; ctx.textAlign='left';
  sp('1.5px'); ctx.font=`700 10.5px ${SANS}`; ctx.fillText(first?'FAMILY TREE':('BRANCH OF '+(root.en||root.ur)).toUpperCase(),A4M,A4M+12); sp('0px');
  ctx.font=`400 8.5px ${SANS}`; ctx.fillStyle=C.text2;
  if(first) ctx.fillText(`${totalPeople()} people · ${maxDepth+1} generations${total>1?' · large branches continue on the pages marked p.N':''}`,A4M,A4M+26,A4W-2*A4M-140);
  else{
    const chain=ancestorChain(root.id).reverse().map(x=>findNode(x));
    ctx.fillText(`Continued from page ${page.parent} · line from the top: `+chain.map(n=>n.en||n.ur).join(' › '),A4M,A4M+26,A4W-2*A4M-140);
  }
  ctx.strokeStyle=C.rule; ctx.lineWidth=.6; ctx.beginPath(); ctx.moveTo(A4M,A4M+hdrH-10); ctx.lineTo(A4W-A4M,A4M+hdrH-10); ctx.stroke();

  // footer
  ctx.fillStyle=C.text3; ctx.font=`400 7.5px ${SANS}`; ctx.textAlign='left';
  ctx.fillText(new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}),A4M,A4H-A4M+10);
  ctx.textAlign='center'; ctx.fillText(`Page ${page.num} of ${total}`,A4W/2,A4H-A4M+10);
  ctx.textAlign='right'; ctx.fillText('Family Tree · شجرہ نسب',A4W-A4M,A4H-A4M+10);

  // tree area
  const {P,rows,cols}=layoutA4(page);
  const ax=A4M, ay=A4M+hdrH, aw=A4W-2*A4M, ah=A4H-A4M-16-ay;
  const colPitch=Math.min(aw/cols,150), rowPitch=Math.min(ah/rows,44);
  const hGap=Math.max(12,colPitch*.24), vGap=Math.max(3,rowPitch*.2);
  const cardW=colPitch-hGap, cardH=rowPitch-vGap;
  const urSize=Math.max(5.5,Math.min(13,cardH*.5)), roSize=Math.max(4.5,Math.min(7,cardH*.24)), showRoman=cardH>=16;
  const usedW=cols*colPitch, usedH=rows*rowPitch, ox=ax+(aw-usedW)/2, oy=ay+(ah-usedH)/2;
  const cardX=c=>rtl?ox+usedW-(c+1)*colPitch+hGap/2:ox+c*colPitch+hGap/2;
  const cardY=r=>oy+r*rowPitch-cardH/2;
  const outX=c=>rtl?cardX(c):cardX(c)+cardW;        // side where the children attach
  const inX=c=>rtl?cardX(c)+cardW:cardX(c);         // side where the parent's connector arrives
  const ids=Object.keys(P).map(Number);

  ctx.strokeStyle=C.edge; ctx.lineWidth=Math.max(.6,Math.min(1.2,rowPitch*.04)); ctx.lineCap='round';
  ids.forEach(id=>{
    if(page.cut.has(id)) return;
    (findNode(id).children||[]).forEach(c=>{ const p=P[id],q=P[c.id]; ctx.stroke(new Path2D(elbowH(outX(p.col),oy+p.row*rowPitch,inX(q.col),oy+q.row*rowPitch))); });
  });

  const rad=Math.min(6,cardH/3);
  function rr(x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }
  const tagSize=Math.max(4.5,Math.min(6.5,cardH*.22));
  ids.forEach(id=>{
    const n=findNode(id), p=P[id], x=cardX(p.col), y=cardY(p.row), cx=x+cardW/2, maxW=cardW-8;
    const isTop=fullParent[id]===null, isStub=page.cut.has(id), isPageRoot=!first&&page.roots.includes(n);
    rr(x,y,cardW,cardH,rad);
    ctx.fillStyle=isStub?C.stub:'#ffffff'; ctx.fill();
    ctx.setLineDash(isStub?[2.5,2]:[]); ctx.lineWidth=isTop||isPageRoot?1.2:.7;
    ctx.strokeStyle=isTop?C.gold:(isPageRoot?C.accent:C.border); ctx.stroke(); ctx.setLineDash([]);
    if(isTop){ ctx.fillStyle=C.gold; ctx.fillRect(x+rad,y,cardW-2*rad,1.6); }
    ctx.direction='rtl'; ctx.textAlign='center'; ctx.fillStyle=C.text;
    let fs=urSize; ctx.font=`500 ${fs}px ${UR}`;
    while(ctx.measureText(n.ur||'—').width>maxW&&fs>4.5){ fs-=.5; ctx.font=`500 ${fs}px ${UR}`; }
    if(showRoman){
      ctx.fillText(n.ur||'—',cx,y+cardH*.44,maxW);
      ctx.direction='ltr'; ctx.fillStyle=C.text3; ctx.font=`600 ${roSize}px ${SANS}`; sp('.6px');
      ctx.fillText((n.en||'').toUpperCase(),cx,y+cardH-3.5,maxW); sp('0px');
    } else ctx.fillText(n.ur||'—',cx,y+cardH*.56,maxW);
    // page cross-references sit just outside the card, on the side the tree continues
    ctx.direction='ltr'; ctx.font=`600 ${tagSize}px ${SANS}`; ctx.fillStyle=C.accent;
    const ty=y+cardH/2+tagSize*.36;
    if(isStub){ ctx.textAlign=rtl?'right':'left'; ctx.fillText(rtl?'← p.'+pageOf[id]:'p.'+pageOf[id]+' →',rtl?x-4:x+cardW+4,ty); }
    else if(isPageRoot&&page.parent){ ctx.textAlign=rtl?'left':'right'; ctx.fillText(rtl?'p.'+page.parent+' →':'← p.'+page.parent,rtl?x+cardW+4:x-4,ty); }
  });
}
async function renderA4Pages(cap){
  if(document.fonts){
    try{ await Promise.all(['500 12px "Noto Nastaliq Urdu"','700 12px "Noto Nastaliq Urdu"','400 12px Inter','600 12px Inter','700 12px Inter'].map(f=>document.fonts.load(f))); }catch(e){}
    await document.fonts.ready;
  }
  const {pages,pageOf}=planPages(cap);
  const dpr=4;                                              // ≈ 288 dpi on paper
  return pages.map(page=>{
    const cv=document.createElement('canvas'); cv.width=Math.round(A4W*dpr); cv.height=Math.round(A4H*dpr);
    const ctx=cv.getContext('2d'); ctx.scale(dpr,dpr);
    drawA4Page(ctx,page,pages.length,pageOf);
    return cv;
  });
}

/* Hand-built multi-page PDF (no libraries): one JPEG per A4 page. */
function bytesFromBinaryString(str){ const a=new Uint8Array(str.length); for(let i=0;i<str.length;i++) a[i]=str.charCodeAt(i)&0xff; return a; }
function buildPdf(canvases){
  let pdf='%PDF-1.4\n%\xff\xff\xff\xff\n'; const off=[]; let n=0;
  const add=body=>{ n++; off[n]=pdf.length; pdf+=n+' 0 obj\n'+body+'\nendobj\n'; };
  add('<< /Type /Catalog /Pages 2 0 R >>');
  add(`<< /Type /Pages /Kids [${canvases.map((_,i)=>(3+i*3)+' 0 R').join(' ')}] /Count ${canvases.length} >>`);
  canvases.forEach((cv,i)=>{
    const jpeg=atob(cv.toDataURL('image/jpeg',0.9).split(',')[1]);
    const content=`q ${A4W} 0 0 ${A4H} 0 0 cm /Im${i} Do Q`;
    add(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${A4W} ${A4H}] /Resources << /XObject << /Im${i} ${4+i*3} 0 R >> >> /Contents ${5+i*3} 0 R >>`);
    add(`<< /Type /XObject /Subtype /Image /Width ${cv.width} /Height ${cv.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n${jpeg}\nendstream`);
    add(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
  });
  const xrefOff=pdf.length;
  let xref=`xref\n0 ${n+1}\n0000000000 65535 f \n`;
  for(let i=1;i<=n;i++) xref+=String(off[i]).padStart(10,'0')+' 00000 n \n';
  pdf+=xref+`trailer\n<< /Size ${n+1} /Root 1 0 R >>\nstartxref\n${xrefOff}\n%%EOF`;
  return new Blob([bytesFromBinaryString(pdf)],{type:'application/pdf'});
}
async function exportA4(cap,name){
  showToast('Preparing A4 PDF…');
  const cvs=await renderA4Pages(cap);
  download(buildPdf(cvs),name);
  showToast(`PDF ready · ${cvs.length} A4 page${cvs.length>1?'s':''}`);
}
$('mPdfA4').onclick=()=>{ closeMenu(); exportA4(ROWS_PER_PAGE,'shajra-tree-a4.pdf'); };
$('mPdfSheet').onclick=()=>{ closeMenu(); exportA4(Infinity,'shajra-tree-a4-sheet.pdf'); };

/* Print: the same A4 pages (see @media print in styles.css) */
$('mPrint').onclick=async()=>{
  closeMenu(); showToast('Preparing print…');
  const cvs=await renderA4Pages(ROWS_PER_PAGE);
  const box=$('printPages'); box.innerHTML='';
  cvs.forEach(cv=>{ const img=new Image(); img.src=cv.toDataURL('image/jpeg',0.92); box.appendChild(img); });
  try{ await Promise.all([...box.querySelectorAll('img')].map(i=>i.decode())); }catch(e){}
  window.print();
};

/* ============================================================
   TIPS · TOAST · KEYBOARD
   ============================================================ */
function showTips(){ tips.hidden=false; }
function hideTips(){ tips.hidden=true; }
function toggleTips(){ if(tips.hidden) showTips(); else hideTips(); }
$('tipsBtn').onclick=e=>{ e.stopPropagation(); toggleTips(); };
$('tipsX').onclick=hideTips;
$('mTips').onclick=()=>{ closeMenu(); showTips(); };
let toastTimer=null;
function showToast(msg,ms=5000){
  const t=$('toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove('show'),ms);
}

document.addEventListener('keydown',e=>{
  const tag=(e.target.tagName||'').toLowerCase(), typing=tag==='input'||tag==='textarea';
  if(e.key==='Escape'){
    if(searchTerm||!results.hidden){ clearSearch(); searchEl.blur(); }
    else if(!tips.hidden) hideTips();
    else if(menu.classList.contains('open')) closeMenu();
    else deselect();
    return;
  }
  if(typing||e.metaKey||e.ctrlKey||e.altKey) return;
  switch(e.key){
    case '/': e.preventDefault(); searchEl.focus(); searchEl.select(); break;
    case '+': case '=': zoomBy(1.2); break;
    case '-': case '_': zoomBy(1/1.2); break;
    case '0': fitToScreen(); break;
    case 'e': case 'E': expandAll(); break;
    case 'c': case 'C': collapseAll(); break;
    case '?': toggleTips(); break;
    case 'Enter': case ' ': {
      const a=document.activeElement;
      if(a&&a.classList&&a.classList.contains('node')){ e.preventDefault(); selectNode(+a.dataset.id); }
      break;
    }
  }
});
window.addEventListener('resize',()=>applyView());

/* ============================================================
   BOOT
   ============================================================ */
function boot(){
  indexForest();
  collapseToDepth(INITIAL_DEPTH);
  syncTheme();
  $('dirK').textContent=rtl?'RTL':'LTR';
  $('stats').textContent=totalPeople()+' people · '+(maxDepth+1)+' generations';
  if(isMobile()) searchEl.placeholder='Search · تلاش';
  render();
  const hashId=parseInt((location.hash||'').slice(1),10);
  if(hashId&&findNode(hashId)){
    selectNode(hashId,{center:true,scale:0.9});
    stage.classList.remove('anim');
  } else {
    fitToScreen(false);
    // a fitted tree is unreadable on a phone: start at the main root instead
    if(isMobile()&&view.scale<0.45){
      const top=forest.reduce((a,b)=>descCount[a.id]>=descCount[b.id]?a:b);
      centerOn(top.id,false,0.6);
      view.ty-=viewport().h*0.3; applyView();      // root near the top, its branches below
    }
  }
  let seen=false;
  try{ seen=!!localStorage.getItem(SEEN_KEY); localStorage.setItem(SEEN_KEY,'1'); }catch(e){}
  if(!seen) setTimeout(()=>showToast('Tap a person for details · tap +N under a card to unfold that branch',7000),600);
}
boot();
/* names are measured for fitting, so re-render once the web fonts arrive */
if(document.fonts){
  document.fonts.ready.then(()=>render());
  document.fonts.addEventListener('loadingdone',()=>render());
}
