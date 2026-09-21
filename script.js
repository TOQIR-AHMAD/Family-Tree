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
const DOWN={W:200,H:104,HG:28,VG:80,PAD:96,PADY:96};    // top-down layout (generations as rows)
const SIDE={W:184,H:96,HG:56,VG:14,PAD:48,PADY:84};     // sideways layout (generations as columns)
const TREE_GAP=72, MIN_SCALE=0.1, MAX_SCALE=2.5, GEN_COLORS=9;
const GEN_HEX=['#b8862b','#a8552f','#8a6a2e','#4f7d3f','#1d6b4f','#2c6e8a','#5b5a9e','#8a4f7d','#7a5a4a'];
const KEYS={theme:'shajra-theme',view:'shajra-view',layout:'shajra-layout',seen:'shajra-seen'};

let rtl=true;
let layoutMode='side';            // 'side' | 'down'
let viewMode='tree';              // 'tree' | 'list'
let treeReady=false;
let collapsed=new Set();
let pos={}, dims={w:0,h:0}, L={depth:0,genPos:()=>0};
let nodeById={}, fullParent={}, fullDepth={}, descCount={}, rowsOf={}, maxDepth=0;
let scale=1, selectedId=null, searchTerm='';

const $=id=>document.getElementById(id);
const stage=$('stage'), sizer=$('sizer'), world=$('world'), svg=$('links'), gens=$('gens');
const panel=$('panel'), rowsEl=$('rows'), listView=$('listView'), tips=$('tips');
const searchEl=$('search'), searchWrap=$('searchWrap'), results=$('searchResults');
const isMobile=()=>window.matchMedia('(max-width:760px)').matches;
const reduceMotion=()=>window.matchMedia('(prefers-reduced-motion:reduce)').matches;
const clamp=s=>Math.min(MAX_SCALE,Math.max(MIN_SCALE,s));
const M=()=>layoutMode==='side'?SIDE:DOWN;
const genColor=d=>`var(--gen-${d%GEN_COLORS})`;
const ml=()=>parseFloat(sizer.style.marginLeft)||0;
const mt=()=>parseFloat(sizer.style.marginTop)||0;
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
    descCount[n.id]=c; rowsOf[n.id]=kids.length?rows:1;      // rowsOf = leaves under a node
    return c;
  }
  forest.forEach(t=>walk(t,null,0));
}
const findNode=id=>nodeById[id]||null;
const totalPeople=()=>Object.keys(nodeById).length;
const mainRoot=()=>forest.reduce((a,b)=>descCount[a.id]>=descCount[b.id]?a:b);
function ancestorChain(id){ const out=[]; let cur=id; while(cur!=null){ out.push(cur); cur=fullParent[cur]; } return out; } // self → top
function revealAncestors(id){ let cur=fullParent[id]; while(cur!=null){ collapsed.delete(cur); cur=fullParent[cur]; } }

/* ============================================================
   LAYOUTS  (only visible nodes are placed)
   ============================================================ */
function computeLayout(cs){ return layoutMode==='side'?layoutSide(cs):layoutDown(cs); }
function layoutDown(cs){
  const {W,H,HG,VG,PAD,PADY}=DOWN, P={}; let leafX=0, depth=0;
  const rowY=d=>PADY+d*(H+VG);
  function assign(node){
    const kids=node.children||[], folded=cs.has(node.id), d=fullDepth[node.id]; depth=Math.max(depth,d);
    if(!kids.length||folded){ P[node.id]={x:leafX*(W+HG),y:rowY(d)}; leafX++; }
    else{ (rtl?kids.slice().reverse():kids).forEach(assign); const xs=kids.map(c=>P[c.id].x); P[node.id]={x:(Math.min(...xs)+Math.max(...xs))/2,y:rowY(d)}; }
  }
  (rtl?forest.slice().reverse():forest).forEach((t,i)=>{ if(i>0) leafX+=TREE_GAP/(W+HG); assign(t); });
  const all=Object.values(P), minX=Math.min(...all.map(p=>p.x));
  all.forEach(p=>{ p.x+=PAD-minX; });
  return {pos:P,w:Math.max(...all.map(p=>p.x))+W+PAD,h:rowY(depth)+H+PADY,depth,genPos:d=>rowY(d)+H/2};
}
function layoutSide(cs){
  const {W,H,HG,VG,PAD,PADY}=SIDE, R={}; let row=0, depth=0;
  function assign(node){
    const d=fullDepth[node.id]; depth=Math.max(depth,d);
    const kids=(cs.has(node.id)||!(node.children||[]).length)?[]:node.children;
    if(!kids.length){ R[node.id]={d,row:row+0.5}; row+=1; }
    else{ kids.forEach(assign); const rs=kids.map(c=>R[c.id].row); R[node.id]={d,row:(Math.min(...rs)+Math.max(...rs))/2}; }
  }
  forest.forEach((t,i)=>{ if(i>0) row+=0.6; assign(t); });
  const cols=depth+1, cp=W+HG, rp=H+VG, P={};
  const colX=d=>PAD+(rtl?(cols-1-d):d)*cp;
  Object.keys(R).forEach(id=>{ const r=R[id]; P[id]={x:colX(r.d),y:PADY+r.row*rp-H/2}; });
  return {pos:P,w:PAD*2+cols*cp-HG,h:PADY*2+row*rp,depth,genPos:d=>colX(d)+W/2};
}

/* ============================================================
   TREE RENDER
   ============================================================ */
function elbow(px,py,cx,cy){
  if(Math.abs(cx-px)<1) return `M${px} ${py} L${cx} ${cy}`;
  const midY=py+(cy-py)/2, r=Math.min(14,Math.abs(cx-px)/2), d=cx>px?1:-1;
  return `M${px} ${py} L${px} ${midY-r} Q${px} ${midY} ${px+d*r} ${midY} L${cx-d*r} ${midY} Q${cx} ${midY} ${cx} ${midY+r} L${cx} ${cy}`;
}
function elbowH(px,py,cx,cy){
  if(Math.abs(cy-py)<0.5) return `M${px} ${py} L${cx} ${cy}`;
  const midX=px+(cx-px)/2, r=Math.min(12,Math.abs(cy-py)/2,Math.abs(cx-px)/2), dx=cx>px?1:-1, dy=cy>py?1:-1;
  return `M${px} ${py} L${midX-dx*r} ${py} Q${midX} ${py} ${midX} ${py+dy*r} L${midX} ${cy-dy*r} Q${midX} ${cy} ${midX+dx*r} ${cy} L${cx} ${cy}`;
}
function edgePath(p,q){
  const {W,H}=M();
  if(layoutMode==='side') return elbowH(rtl?p.x:p.x+W,p.y+H/2,rtl?q.x+W:q.x,q.y+H/2);
  return elbow(p.x+W/2,p.y+H,q.x+W/2,q.y);
}
function matchList(){
  const t=searchTerm.trim().toLowerCase(); if(!t) return [];
  return Object.values(nodeById)
    .filter(n=>(n.ur||'').toLowerCase().includes(t)||(n.en||'').toLowerCase().includes(t))
    .sort((a,b)=>fullDepth[a.id]-fullDepth[b.id]||a.id-b.id);
}

function render(){
  L=computeLayout(collapsed); pos=L.pos; dims={w:L.w,h:L.h};
  const {W,H,HG,VG}=M(), side=layoutMode==='side';
  world.className='world '+layoutMode+(rtl?' rtl':' ltr');
  world.style.setProperty('--node-w',W+'px'); world.style.setProperty('--node-h',H+'px');
  world.style.width=dims.w+'px'; world.style.height=dims.h+'px';
  svg.setAttribute('width',dims.w); svg.setAttribute('height',dims.h);

  const lineage=selectedId!=null?new Set(ancestorChain(selectedId)):null;
  const matches=searchTerm.trim()?new Set(matchList().map(n=>n.id)):null;

  let s='';
  for(let d=1; d<=L.depth; d+=2){
    const c=L.genPos(d);
    s+=side?`<rect class="band" x="${c-W/2-HG/2}" y="0" width="${W+HG}" height="${dims.h}"/>`
           :`<rect class="band" x="0" y="${c-H/2-VG/2}" width="${dims.w}" height="${H+VG}"/>`;
  }
  function walkE(node){
    if(collapsed.has(node.id)) return;
    (node.children||[]).forEach(c=>{
      let cls='edge';
      if(lineage) cls+=(lineage.has(node.id)&&lineage.has(c.id))?' hot':' dim';
      if(matches) cls+=' dim';
      s+=`<path class="${cls}" d="${edgePath(pos[node.id],pos[c.id])}"/>`;
      walkE(c);
    });
  }
  forest.forEach(walkE);
  svg.innerHTML=s;

  world.querySelectorAll('.node').forEach(n=>n.remove());
  const frag=document.createDocumentFragment();
  function walkN(node){
    const p=pos[node.id], d=fullDepth[node.id], isTop=fullParent[node.id]===null, hasKids=(node.children||[]).length>0, folded=collapsed.has(node.id);
    const el=document.createElement('div');
    let cls='node'+(isTop?' root':'');
    if(node.id===selectedId) cls+=' selected';
    if(lineage){ if(lineage.has(node.id)){ if(node.id!==selectedId) cls+=' lineage'; } else cls+=' dim'; }
    if(matches){ if(matches.has(node.id)) cls+=' match'; else cls+=' dim'; }
    el.className=cls; el.style.left=p.x+'px'; el.style.top=p.y+'px'; el.dataset.id=node.id;
    el.style.setProperty('--gc',genColor(d));
    el.setAttribute('role','button'); el.tabIndex=0;
    el.setAttribute('aria-label',`${node.en||node.ur}, generation ${d+1}`);
    el.innerHTML=
      `<div class="body"><div class="name">${escapeHtml(node.ur)||'—'}</div><div class="roman">${escapeHtml(node.en)||''}</div></div>`+
      (hasKids
        ?`<button class="pill${folded?' collapsed':''}" data-toggle="${node.id}" tabindex="-1" aria-label="${folded?'Unfold':'Fold'} branch, ${descCount[node.id]} descendants">${folded?'+'+descCount[node.id]:'<svg class="ic" aria-hidden="true"><use href="#i-minus"/></svg>'}</button>`
        :'');
    frag.appendChild(el);
    if(!folded)(node.children||[]).forEach(walkN);
  }
  forest.forEach(walkN);
  world.appendChild(frag);
  fitNames();
  renderGens();
  renderList();
  if(viewMode==='tree') applyView();
}
/* shrink long Urdu names so they never spill out of the card */
function fitNames(){
  world.querySelectorAll('.node .name').forEach(el=>{
    el.style.fontSize='';
    let fs=26;
    while(el.scrollWidth>el.clientWidth+1&&fs>17){ fs-=1.5; el.style.fontSize=fs+'px'; }
  });
}
function renderGens(){
  const n=L.depth+1;
  if(gens.children.length!==n){
    gens.innerHTML='';
    for(let d=0; d<n; d++){
      const e=document.createElement('div'); e.className='gen'; e.style.setProperty('--gc',genColor(d));
      e.innerHTML=`<i></i>Gen ${d+1} <span class="u">پشت ${d+1}</span>`; gens.appendChild(e);
    }
  }
  placeGens();
}
function placeGens(){
  const s=scale, side=layoutMode==='side', {W,H,HG,VG}=M();
  const hide=((side?W+HG:H+VG)*s)<(side?80:30);
  gens.classList.toggle('hidden',hide); gens.classList.toggle('side',side);
  if(hide) return;
  let d=0;
  for(const e of gens.children){
    const c=L.genPos(d)*s;
    if(side){ e.style.left=(ml()+c-stage.scrollLeft)+'px'; e.style.top='12px'; }
    else{ e.style.top=(mt()+c-stage.scrollTop)+'px'; e.style.left='12px'; }
    d++;
  }
}

/* ============================================================
   VIEW  (scale + native scrolling)
   ============================================================ */
function viewport(){   // visible part of the stage, minus the details panel and the generation labels
  let x=(!isMobile()&&layoutMode==='down')?100:0, y=layoutMode==='side'?46:0;
  let w=stage.clientWidth-x, h=stage.clientHeight-y;
  if(panel.classList.contains('open')&&isMobile()) h-=panel.getBoundingClientRect().height;   // on desktop the view itself shrinks
  return {x,y,w:Math.max(120,w),h:Math.max(120,h)};
}
function applyView(){
  const s=scale, v=viewport(), cw=dims.w*s, ch=dims.h*s;
  world.style.transform=`scale(${s})`;
  sizer.style.width=cw+'px'; sizer.style.height=ch+'px';
  sizer.style.marginLeft=Math.max(0,v.x+(v.w-cw)/2)+'px';
  sizer.style.marginTop=Math.max(0,v.y+(v.h-ch)/2)+'px';
  $('zoomLvl').textContent=Math.round(s*100)+'%';
  placeGens();
}
function centerOn(id,animate=true,newScale){
  const p=pos[id]; if(!p) return;
  if(newScale&&Math.abs(newScale-scale)>0.001){ scale=clamp(newScale); applyView(); }
  const v=viewport(), {W,H}=M(), s=scale;
  stage.scrollTo({left:Math.max(0,ml()+(p.x+W/2)*s-(v.x+v.w/2)),top:Math.max(0,mt()+(p.y+H/2)*s-(v.y+v.h/2)),behavior:(animate&&!reduceMotion())?'smooth':'auto'});
}
function isVisible(id){
  const p=pos[id]; if(!p) return false;
  const v=viewport(), {W,H}=M(), s=scale;
  const x=ml()+p.x*s-stage.scrollLeft, y=mt()+p.y*s-stage.scrollTop;
  return x>=v.x&&y>=v.y&&x+W*s<=v.x+v.w&&y+H*s<=v.y+v.h;
}
function zoomAt(mx,my,ns){
  ns=clamp(ns); const s=scale;
  const wx=(stage.scrollLeft+mx-ml())/s, wy=(stage.scrollTop+my-mt())/s;
  scale=ns; applyView();
  stage.scrollLeft=ml()+wx*ns-mx; stage.scrollTop=mt()+wy*ns-my;
  placeGens();
}
function zoomBy(f){ const v=viewport(); zoomAt(v.x+v.w/2,v.y+v.h/2,scale*f); }
function fitAll(){ const v=viewport(); scale=clamp(Math.min(v.w/dims.w,v.h/dims.h,1)*0.94); applyView(); stage.scrollTo({left:0,top:0}); }
function fitWidth(){ const v=viewport(); scale=clamp(Math.min((v.w-16)/dims.w,1)); applyView(); stage.scrollTo({left:0,top:0}); }
function fitDefault(){ if(layoutMode==='side') fitWidth(); else fitAll(); }
/* first look at the tree: fit it if that stays readable, otherwise start on the elder at a readable size */
function initialTreeView(){
  fitDefault();
  if(scale<0.42){ scale=0.6; applyView(); }
  centerOn(mainRoot().id,false);                       // start from the elder
  if(layoutMode==='down') stage.scrollTop=Math.max(0,stage.scrollTop-viewport().h*0.3);
  placeGens();
}
stage.addEventListener('scroll',placeGens,{passive:true});
window.addEventListener('resize',()=>{ if(viewMode==='tree') applyView(); });

/* ============================================================
   PAN / ZOOM  (mouse drag or touch pans the scroll box; pinch, Ctrl+wheel and buttons zoom)
   ============================================================ */
const pointers=new Map();
let drag=null, pinchPrev=null, moved=false, downTarget=null, startPt=null;
function pinchInfo(){ const a=[...pointers.values()]; return {dist:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y),cx:(a[0].x+a[1].x)/2,cy:(a[0].y+a[1].y)/2}; }
stage.addEventListener('pointerdown',e=>{
  if(e.pointerType==='mouse'&&e.button!==0) return;
  const r=stage.getBoundingClientRect();
  if(e.clientX-r.left>stage.clientWidth||e.clientY-r.top>stage.clientHeight) return;   // native scrollbar
  stage.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===1){ moved=false; downTarget=e.target; startPt={x:e.clientX,y:e.clientY}; drag={x:e.clientX,y:e.clientY,sl:stage.scrollLeft,st:stage.scrollTop}; stage.classList.add('panning'); }
  else if(pointers.size===2) pinchPrev=pinchInfo();
});
stage.addEventListener('pointermove',e=>{
  if(!pointers.has(e.pointerId)) return;
  pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===1&&drag){
    stage.scrollLeft=drag.sl-(e.clientX-drag.x); stage.scrollTop=drag.st-(e.clientY-drag.y);
    if(Math.hypot(e.clientX-startPt.x,e.clientY-startPt.y)>6) moved=true;
  } else if(pointers.size===2){
    const info=pinchInfo();
    if(pinchPrev){
      const r=stage.getBoundingClientRect();
      zoomAt(info.cx-r.left,info.cy-r.top,scale*(info.dist/pinchPrev.dist));
      stage.scrollLeft-=info.cx-pinchPrev.cx; stage.scrollTop-=info.cy-pinchPrev.cy;
    }
    pinchPrev=info; moved=true;
  }
});
function endPointer(e){
  if(!pointers.has(e.pointerId)) return;
  pointers.delete(e.pointerId);
  if(pointers.size<2) pinchPrev=null;
  if(pointers.size===0){ stage.classList.remove('panning'); drag=null; if(!moved) handleTap(downTarget); }
  else if(pointers.size===1){ const p=[...pointers.values()][0]; drag={x:p.x,y:p.y,sl:stage.scrollLeft,st:stage.scrollTop}; startPt={x:p.x,y:p.y}; moved=false; }
}
stage.addEventListener('pointerup',endPointer);
stage.addEventListener('pointercancel',endPointer);
stage.addEventListener('wheel',e=>{
  if(!e.ctrlKey&&!e.metaKey) return;                       // plain wheel scrolls natively
  e.preventDefault();
  const r=stage.getBoundingClientRect();
  zoomAt(e.clientX-r.left,e.clientY-r.top,scale*Math.exp(-e.deltaY*0.01));
},{passive:false});
stage.addEventListener('dblclick',e=>{
  const nd=e.target.closest&&e.target.closest('.node');
  if(nd) centerOn(+nd.dataset.id,true,Math.max(scale*1.5,1));
  else{ const r=stage.getBoundingClientRect(); zoomAt(e.clientX-r.left,e.clientY-r.top,scale*1.5); }
});
function handleTap(t){
  closeMenus(); hideTips(); hideResults();
  if(!t||!t.closest){ deselect(); return; }
  const pill=t.closest('.pill'); if(pill){ toggleCollapse(+pill.dataset.toggle); return; }
  const nd=t.closest('.node'); if(nd){ selectNode(+nd.dataset.id); return; }
  deselect();
}

/* ============================================================
   FOLD / UNFOLD  (shared by the tree and the list)
   ============================================================ */
function toggleCollapse(id){
  const before=pos[id]?{...pos[id]}:null;
  if(collapsed.has(id)) collapsed.delete(id); else collapsed.add(id);
  render();
  const after=pos[id];   // keep the toggled card where it was on screen
  if(before&&after&&viewMode==='tree'){ stage.scrollLeft+=(after.x-before.x)*scale; stage.scrollTop+=(after.y-before.y)*scale; placeGens(); }
  if(selectedId===id) fillPanel(findNode(id));
}
function collapseToDepth(depth){
  collapsed=new Set();
  Object.values(nodeById).forEach(n=>{ if((n.children||[]).length&&fullDepth[n.id]>=depth) collapsed.add(n.id); });
}
function expandAll(){ collapsed=new Set(); render(); if(viewMode==='tree') fitDefault(); }
function collapseAll(){ collapseToDepth(1); render(); if(viewMode==='tree') fitDefault(); }

/* ============================================================
   LIST VIEW
   ============================================================ */
function renderList(){
  const matches=searchTerm.trim()?new Set(matchList().map(n=>n.id)):null;
  let keep=null;
  if(matches){ keep=new Set(); matches.forEach(id=>ancestorChain(id).forEach(a=>keep.add(a))); }
  let html='';
  function walk(n,d){
    if(keep&&!keep.has(n.id)) return;
    const kids=n.children||[], folded=!keep&&collapsed.has(n.id);
    const isMatch=matches&&matches.has(n.id), dim=matches&&!isMatch, isTop=fullParent[n.id]===null;
    html+=`<div class="row${n.id===selectedId?' selected':''}${isMatch?' match':''}${dim?' dim':''}" data-id="${n.id}" role="treeitem" aria-level="${d+1}"${kids.length?` aria-expanded="${!folded}"`:''} tabindex="0" style="--gc:${genColor(d)}">`+
      `<span class="indent">${'<i></i>'.repeat(d)}</span>`+
      (kids.length
        ?`<button class="tg" data-toggle="${n.id}" aria-label="${folded?'Show':'Hide'} children" tabindex="-1"><svg class="ic" aria-hidden="true"><use href="#i-chevron-${folded?'right':'down'}"/></svg></button>`
        :`<span class="tg leaf"><i></i></span>`)+
      `<span class="names"><span class="ur">${escapeHtml(n.ur)||'—'}</span><span class="en">${escapeHtml(n.en)||''}</span>${isTop?'<span class="elder">بزرگ · Elder</span>':''}</span>`+
      (kids.length?`<span class="badge">${kids.length} ${kids.length===1?'child':'children'}</span>`:'')+
      `<span class="gchip"><i></i>Gen ${d+1}</span>`+
      `<button class="info" data-info="${n.id}" tabindex="-1" aria-label="Details"><svg class="ic" aria-hidden="true"><use href="#i-info"/></svg><span>Details</span></button>`+
      `</div>`;
    if(!folded) kids.forEach(k=>walk(k,d+1));
  }
  forest.forEach(t=>walk(t,0));
  rowsEl.innerHTML=html||'<div class="row-empty">No one found.</div>';
  $('listCount').textContent=matches
    ?`${matches.size} ${matches.size===1?'match':'matches'} for “${searchTerm.trim()}”`
    :`Our family · ${totalPeople()} people across ${maxDepth+1} generations`;
}
function scrollRowIntoView(id,smooth=true){
  const row=rowsEl.querySelector(`.row[data-id="${id}"]`); if(!row) return;
  const behavior=(smooth&&!reduceMotion())?'smooth':'auto';
  if(isMobile()&&panel.classList.contains('open')){
    const top=row.getBoundingClientRect().top-listView.getBoundingClientRect().top+listView.scrollTop-80;
    listView.scrollTo({top:Math.max(0,top),behavior});
  } else row.scrollIntoView({block:'nearest',behavior});
}
rowsEl.addEventListener('click',e=>{
  const tg=e.target.closest('[data-toggle]'); if(tg){ toggleCollapse(+tg.dataset.toggle); return; }
  const info=e.target.closest('[data-info]'); if(info){ selectNode(+info.dataset.info); return; }
  const row=e.target.closest('.row'); if(row) selectNode(+row.dataset.id);
});
rowsEl.addEventListener('keydown',e=>{
  const row=e.target.closest&&e.target.closest('.row'); if(!row) return;
  const id=+row.dataset.id, hasKids=(findNode(id).children||[]).length>0;
  if(e.key==='Enter'||e.key===' '){ e.preventDefault(); selectNode(id); }
  else if(e.key==='ArrowRight'&&hasKids&&collapsed.has(id)){ e.preventDefault(); toggleCollapse(id); }
  else if(e.key==='ArrowLeft'&&hasKids&&!collapsed.has(id)){ e.preventDefault(); toggleCollapse(id); }
});

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
  const id=n.id, kids=n.children||[], pid=fullParent[id], par=pid!=null?findNode(pid):null, isTop=pid===null;
  $('roName').textContent=n.ur||'—';
  $('roRoman').innerHTML=`<span>${escapeHtml(n.en||'')}</span>`+(isTop?'<span class="elder">بزرگ · Elder</span>':'');
  $('roStats').innerHTML=
    `<div class="stat" style="--gc:${genColor(fullDepth[id])}"><b>${fullDepth[id]+1}</b><span>Generation<i class="u">پشت</i></span></div>`+
    `<div class="stat"><b>${kids.length}</b><span>Children<i class="u">اولاد</i></span></div>`+
    `<div class="stat"><b>${descCount[id]}</b><span>Descendants<i class="u">کل اولاد</i></span></div>`;
  const folded=collapsed.has(id);
  $('roActions').innerHTML=
    (viewMode==='list'
      ?`<button class="tbtn primary" data-act="showTree"><svg class="ic" aria-hidden="true"><use href="#i-tree"/></svg>Show on tree</button>`
      :`<button class="tbtn primary" data-act="center"><svg class="ic" aria-hidden="true"><use href="#i-target"/></svg>Centre on tree</button>`+
       `<button class="tbtn" data-act="showList"><svg class="ic" aria-hidden="true"><use href="#i-list"/></svg>Show in list</button>`)+
    (kids.length?`<button class="tbtn" data-act="foldSel"><svg class="ic" aria-hidden="true"><use href="${folded?'#i-unfold':'#i-fold'}"/></svg>${folded?'Unfold':'Fold'} branch</button>`:'');
  $('roFather').innerHTML=`<div class="p-label"><span>Father <i class="u">والد</i></span></div>`+(par?personBtn(par):`<div class="p-empty">An elder of the family. No father recorded.</div>`);
  $('roChildren').innerHTML=kids.length
    ?`<div class="p-label"><span>Children <i class="u">اولاد</i></span><span>${kids.length}</span></div><div class="people">${kids.map(k=>personBtn(k)).join('')}</div>`
    :'';
  const chain=ancestorChain(id).reverse();   // top → self
  $('roLineage').innerHTML=chain.length>1
    ?`<div class="p-label"><span>Line to the elders <i class="u">سلسلۂ نسب</i></span><span>${chain.length} generations</span></div><div class="rail">${chain.map(x=>personBtn(findNode(x),x===id)).join('')}</div>`
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
  if(viewMode==='tree'){ if(opts.center||!isVisible(id)) centerOn(id,true,opts.scale); }
  else scrollRowIntoView(id);
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
  if(go) selectNode(+go.dataset.go,{center:true,scale:Math.max(scale,0.8)});
});

/* ============================================================
   SEARCH  (live highlight + results list; the list view filters itself)
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
  if(lastList.length){ const id=lastList[0].id; revealAncestors(id); render(); if(viewMode==='tree') centerOn(id,true,Math.max(scale,0.7)); }
  else render();
}
function clearSearch(){ searchEl.value=''; searchTerm=''; lastList=[]; activeIdx=-1; searchWrap.classList.remove('has'); hideResults(); render(); }
function pickResult(id){ clearSearch(); searchEl.blur(); selectNode(id,{center:true,scale:Math.max(scale,0.9)}); }
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
   MENUS · ACTIONS · VIEW · THEME · LAYOUT
   ============================================================ */
let openMenuId=null;
function openMenu(id,trigger){ closeMenus(); $(id).hidden=false; openMenuId=id; if(trigger) trigger.setAttribute('aria-expanded','true'); }
function closeMenus(){
  document.querySelectorAll('.menu').forEach(m=>{ m.hidden=true; });
  document.querySelectorAll('[data-menu]').forEach(b=>b.setAttribute('aria-expanded','false'));
  openMenuId=null;
}
document.addEventListener('click',e=>{
  const mb=e.target.closest('[data-menu]');
  if(mb){ const id=mb.dataset.menu; if(openMenuId===id) closeMenus(); else openMenu(id,mb); return; }
  const vb=e.target.closest('button[data-view]');
  if(vb){ setViewMode(vb.dataset.view); return; }
  const ab=e.target.closest('[data-act]');
  if(ab) act(ab.dataset.act);
});
document.addEventListener('pointerdown',e=>{
  if(!e.target.closest('.menu')&&!e.target.closest('[data-menu]')) closeMenus();
  if(!e.target.closest('.search')) hideResults();
  if(!e.target.closest('#tips')&&!e.target.closest('[data-act="tips"]')) hideTips();
},true);

function act(name){
  switch(name){
    case 'pdfA4': closeMenus(); exportA4(ROWS_PER_PAGE,'shajra-tree-a4.pdf'); break;
    case 'pdfSheet': closeMenus(); exportA4(Infinity,'shajra-tree-a4-sheet.pdf'); break;
    case 'png': closeMenus(); exportPng(); break;
    case 'json': closeMenus(); exportJson(); break;
    case 'print': closeMenus(); printA4(); break;
    case 'theme': toggleTheme(); break;
    case 'layout': setLayout(layoutMode==='side'?'down':'side'); break;
    case 'dir': rtl=!rtl; syncLabels(); render(); if(viewMode==='tree') fitDefault(); break;
    case 'expand': closeMenus(); expandAll(); break;
    case 'collapse': closeMenus(); collapseAll(); break;
    case 'tips': closeMenus(); showTips(); break;
    case 'center': if(selectedId!=null) centerOn(selectedId,true,Math.max(scale,0.9)); break;
    case 'showTree': if(selectedId!=null){ setViewMode('tree'); centerOn(selectedId,true,Math.max(scale,0.9)); } break;
    case 'showList': if(selectedId!=null){ setViewMode('list'); scrollRowIntoView(selectedId); } break;
    case 'foldSel': if(selectedId!=null) toggleCollapse(selectedId); break;
  }
}
function setViewMode(v,save=true){
  if(v!=='tree'&&v!=='list') return;
  viewMode=v; document.documentElement.dataset.view=v;
  document.querySelectorAll('button[data-view]').forEach(b=>b.classList.toggle('on',b.dataset.view===v));
  if(save) try{ localStorage.setItem(KEYS.view,v); }catch(e){}
  closeMenus();
  if(v==='tree'){
    applyView();
    if(!treeReady){ treeReady=true; initialTreeView(); }
    else if(selectedId!=null&&!isVisible(selectedId)) centerOn(selectedId,false);
  } else if(selectedId!=null) scrollRowIntoView(selectedId,false);
  if(selectedId!=null) fillPanel(findNode(selectedId));
}
function setLayout(m){
  layoutMode=m; try{ localStorage.setItem(KEYS.layout,m); }catch(e){}
  syncLabels(); render(); if(viewMode==='tree') fitDefault();
}
function syncLabels(){
  $('layoutK').textContent=layoutMode==='side'?'Sideways':'Top-down';
  $('dirK').textContent=rtl?'Right to left':'Left to right';
}
function isDark(){ return document.documentElement.dataset.theme==='dark'; }
function syncTheme(){ $('themeK').textContent=isDark()?'On':'Off'; }
function toggleTheme(){
  const t=isDark()?'light':'dark';
  document.documentElement.dataset.theme=t;
  try{ localStorage.setItem(KEYS.theme,t); }catch(e){}
  syncTheme();
}
$('zoomIn').onclick=()=>zoomBy(1.25);
$('zoomOut').onclick=()=>zoomBy(1/1.25);
$('fit').onclick=()=>fitDefault();
$('zoomLvl').onclick=()=>{ const v=viewport(); zoomAt(v.x+v.w/2,v.y+v.h/2,1); };

/* ============================================================
   EXPORT  (PNG of the tree · A4 PDF · JSON · print)
   ============================================================ */
const EXP={bg:'#ffffff',grid:'rgba(120,94,64,.13)',band:'rgba(184,134,43,.05)',card:'#ffffff',border:'#d9cfc2',
           text:'#2b2420',text2:'#665a52',text3:'#9a8d82',edge:'#cfc2b2',gold:'#b8862b',accent:'#1d6b4f',stub:'#faf6f0',rule:'#eae3d9'};
const UR_FONT='"Noto Nastaliq Urdu","Noto Naskh Arabic",serif', SANS_FONT='Inter,system-ui,sans-serif', SERIF_FONT='Lora,Georgia,serif', NASKH_FONT='"Noto Naskh Arabic",serif';
async function fontsReady(){
  if(!document.fonts) return;
  try{ await Promise.all(['500 12px "Noto Nastaliq Urdu"','700 12px "Noto Nastaliq Urdu"','400 12px Inter','600 12px Inter','700 12px Inter','italic 400 12px Lora','500 12px Lora','500 12px "Noto Naskh Arabic"'].map(f=>document.fonts.load(f))); }catch(e){}
  await document.fonts.ready;
}
function download(blob,name){ const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1500); }
function exportJson(){ download(new Blob([JSON.stringify(forest,(k,v)=>k==='id'?undefined:v,2)],{type:'application/json'}),'shajra-tree.json'); }
function rrect(ctx,x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }
const setSpacing=(ctx,v)=>{ if('letterSpacing' in ctx) ctx.letterSpacing=v; };

/* the whole tree (ignoring folds) in the current layout, with a title block */
async function renderFullCanvas(){
  await fontsReady();
  const Lf=computeLayout(new Set()), P=Lf.pos, {W,H,HG,VG}=M(), side=layoutMode==='side';
  const TITLE_H=118, Wc=Lf.w, Hc=Lf.h+TITLE_H;
  const dpr=Math.min(2,Math.sqrt(50e6/(Wc*Hc)));
  const cv=document.createElement('canvas'); cv.width=Math.round(Wc*dpr); cv.height=Math.round(Hc*dpr);
  const ctx=cv.getContext('2d'); ctx.scale(dpr,dpr); const C=EXP;
  ctx.fillStyle=C.bg; ctx.fillRect(0,0,Wc,Hc);
  ctx.fillStyle=C.grid; for(let y=11;y<Hc;y+=22) for(let x=11;x<Wc;x+=22) ctx.fillRect(x-.75,y-.75,1.5,1.5);
  ctx.textBaseline='alphabetic';
  ctx.fillStyle=C.text; ctx.direction='rtl'; ctx.textAlign='right'; ctx.font=`700 30px ${UR_FONT}`; ctx.fillText('شجرہ نسب',Wc-40,64);
  ctx.fillStyle=C.gold; ctx.font=`400 22px ${NASKH_FONT}`; ctx.fillText('۞',Wc-40-ctx.measureText('شجرہ نسب').width*1.35,62);
  ctx.direction='ltr'; ctx.textAlign='left';
  ctx.fillStyle=C.text; ctx.font=`italic 400 22px ${SERIF_FONT}`; ctx.fillText('Our Family Tree',40,54);
  ctx.font=`400 13px ${SANS_FONT}`; ctx.fillStyle=C.text2;
  ctx.fillText(`${totalPeople()} people · ${maxDepth+1} generations · ${new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}`,40,76);
  ctx.strokeStyle=C.rule; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(40,TITLE_H-20); ctx.lineTo(Wc-40,TITLE_H-20); ctx.stroke();
  ctx.translate(0,TITLE_H);
  for(let d=0; d<=Lf.depth; d++){
    const c=Lf.genPos(d);
    if(d%2){ ctx.fillStyle=C.band; if(side) ctx.fillRect(c-W/2-HG/2,0,W+HG,Lf.h); else ctx.fillRect(0,c-H/2-VG/2,Wc,H+VG); }
    ctx.fillStyle=GEN_HEX[d%GEN_COLORS]; ctx.font=`700 11px ${SANS_FONT}`; setSpacing(ctx,'1px');
    if(side){ ctx.textAlign='center'; ctx.fillText('GEN '+(d+1),c,28); } else { ctx.textAlign='left'; ctx.fillText('GEN '+(d+1),20,c+4); }
    setSpacing(ctx,'0px');
  }
  ctx.strokeStyle=C.edge; ctx.lineWidth=1.8; ctx.lineCap='round';
  function walkE(node){ (node.children||[]).forEach(c=>{ ctx.stroke(new Path2D(edgePath(P[node.id],P[c.id]))); walkE(c); }); }
  forest.forEach(walkE);
  const top=(H-75)/2;      // matches the card's centred name + roman block in the DOM
  function drawNode(node){
    const p=P[node.id], d=fullDepth[node.id], isTop=fullParent[node.id]===null;
    rrect(ctx,p.x,p.y,W,H,16);
    ctx.save(); ctx.shadowColor='rgba(60,40,20,.10)'; ctx.shadowBlur=12; ctx.shadowOffsetY=4; ctx.fillStyle=C.card; ctx.fill(); ctx.restore();
    ctx.lineWidth=1.2; ctx.strokeStyle=isTop?C.gold:C.border; ctx.stroke();
    ctx.fillStyle=GEN_HEX[d%GEN_COLORS];
    if(side) ctx.fillRect(rtl?p.x+W-3:p.x,p.y+16,3,H-32); else ctx.fillRect(p.x+16,p.y,W-32,3);
    ctx.direction='rtl'; ctx.textAlign='center'; ctx.fillStyle=C.text;
    let fs=26; ctx.font=`500 ${fs}px ${UR_FONT}`;
    while(ctx.measureText(node.ur||'—').width>W-24&&fs>17){ fs-=1.5; ctx.font=`500 ${fs}px ${UR_FONT}`; }
    ctx.fillText(node.ur||'—',p.x+W/2,p.y+top+32);
    ctx.direction='ltr'; ctx.fillStyle=C.text3; ctx.font=`500 11px ${SERIF_FONT}`; setSpacing(ctx,'1px');
    ctx.fillText((node.en||'').toUpperCase(),p.x+W/2,p.y+top+70,W-24); setSpacing(ctx,'0px');
    (node.children||[]).forEach(drawNode);
  }
  forest.forEach(drawNode);
  return {cv,W:Wc,H:Hc};
}
async function exportPng(){
  showToast('Preparing image…');
  const {cv}=await renderFullCanvas();
  cv.toBlob(b=>download(b,'shajra-tree.png'),'image/png');
}

/* ---------- A4: sideways tree paginated on A4 portrait pages ----------
   Branches that would not fit a page at a comfortable density continue on
   their own page, marked "p.N". */
const A4W=595.28, A4H=841.89, A4M=36;     // points (1pt = 1/72 in)
const ROWS_PER_PAGE=30;                   // ≈ 9 mm per row
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
        ?fitting.reduce((a,b)=>rowsOf[b.id]>rowsOf[a.id]?b:a)
        :cands.reduce((a,b)=>rowsOf[b.id]<rowsOf[a.id]?b:a);
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
function drawA4Page(ctx,page,total,pageOf){
  const C=EXP, sp=v=>setSpacing(ctx,v);
  const first=page.num===1, root=page.roots[0];
  ctx.fillStyle='#ffffff'; ctx.fillRect(0,0,A4W,A4H);
  ctx.textBaseline='alphabetic';
  const hdrH=54;
  ctx.fillStyle=C.text; ctx.direction='rtl'; ctx.textAlign='right'; ctx.font=`700 ${first?22:19}px ${UR_FONT}`;
  const title=first?'شجرہ نسب':(root.ur||'—');
  ctx.fillText(title,A4W-A4M,A4M+22);
  ctx.fillStyle=C.gold; ctx.font=`400 15px ${NASKH_FONT}`; ctx.fillText('۞',A4W-A4M-ctx.measureText(title).width*(first?1.9:1.6)-14,A4M+20);
  ctx.direction='ltr'; ctx.textAlign='left';
  ctx.fillStyle=C.text; ctx.font=`italic 400 15px ${SERIF_FONT}`; ctx.fillText(first?'Our Family Tree':'Branch of '+(root.en||root.ur),A4M,A4M+13);
  ctx.font=`400 8.5px ${SANS_FONT}`; ctx.fillStyle=C.text2;
  if(first) ctx.fillText(`${totalPeople()} people · ${maxDepth+1} generations${total>1?' · large branches continue on the pages marked p.N':''}`,A4M,A4M+27,A4W-2*A4M-140);
  else{
    const chain=ancestorChain(root.id).reverse().map(x=>findNode(x));
    ctx.fillText(`Continued from page ${page.parent} · line from the elders: `+chain.map(n=>n.en||n.ur).join(' › '),A4M,A4M+27,A4W-2*A4M-140);
  }
  ctx.strokeStyle=C.gold; ctx.lineWidth=.8; ctx.beginPath(); ctx.moveTo(A4M,A4M+hdrH-10); ctx.lineTo(A4W-A4M,A4M+hdrH-10); ctx.stroke();

  ctx.fillStyle=C.text3; ctx.font=`400 7.5px ${SANS_FONT}`; ctx.textAlign='left';
  ctx.fillText(new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}),A4M,A4H-A4M+10);
  ctx.textAlign='center'; ctx.fillText(`Page ${page.num} of ${total}`,A4W/2,A4H-A4M+10);
  ctx.textAlign='right'; ctx.fillText('Family Tree · شجرہ نسب',A4W-A4M,A4H-A4M+10);

  const {P,rows,cols}=layoutA4(page);
  const ax=A4M, ay=A4M+hdrH, aw=A4W-2*A4M, ah=A4H-A4M-16-ay;
  const colPitch=Math.min(aw/cols,150), rowPitch=Math.min(ah/rows,44);
  const hGap=Math.max(12,colPitch*.24), vGap=Math.max(3,rowPitch*.2);
  const cardW=colPitch-hGap, cardH=rowPitch-vGap;
  const urSize=Math.max(5.5,Math.min(13,cardH*.5)), roSize=Math.max(4.5,Math.min(7,cardH*.24)), showRoman=cardH>=16;
  const usedW=cols*colPitch, usedH=rows*rowPitch, ox=ax+(aw-usedW)/2, oy=ay+(ah-usedH)/2;
  const cardX=c=>rtl?ox+usedW-(c+1)*colPitch+hGap/2:ox+c*colPitch+hGap/2;
  const cardY=r=>oy+r*rowPitch-cardH/2;
  const outX=c=>rtl?cardX(c):cardX(c)+cardW;
  const inX=c=>rtl?cardX(c)+cardW:cardX(c);
  const ids=Object.keys(P).map(Number);
  const base=Math.min(...page.roots.map(r=>fullDepth[r.id]));

  ctx.strokeStyle=C.edge; ctx.lineWidth=Math.max(.6,Math.min(1.2,rowPitch*.04)); ctx.lineCap='round';
  ids.forEach(id=>{
    if(page.cut.has(id)) return;
    (findNode(id).children||[]).forEach(c=>{ const p=P[id],q=P[c.id]; ctx.stroke(new Path2D(elbowH(outX(p.col),oy+p.row*rowPitch,inX(q.col),oy+q.row*rowPitch))); });
  });
  const rad=Math.min(6,cardH/3), tagSize=Math.max(4.5,Math.min(6.5,cardH*.22));
  ids.forEach(id=>{
    const n=findNode(id), p=P[id], x=cardX(p.col), y=cardY(p.row), cx=x+cardW/2, maxW=cardW-8;
    const isTop=fullParent[id]===null, isStub=page.cut.has(id), isPageRoot=!first&&page.roots.includes(n);
    rrect(ctx,x,y,cardW,cardH,rad);
    ctx.fillStyle=isStub?C.stub:'#ffffff'; ctx.fill();
    ctx.setLineDash(isStub?[2.5,2]:[]); ctx.lineWidth=isTop||isPageRoot?1.2:.7;
    ctx.strokeStyle=isTop?C.gold:(isPageRoot?C.accent:C.border); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle=GEN_HEX[(fullDepth[id])%GEN_COLORS];
    ctx.fillRect(rtl?x+cardW-2:x,y+rad,2,Math.max(2,cardH-2*rad));
    ctx.direction='rtl'; ctx.textAlign='center'; ctx.fillStyle=C.text;
    let fs=urSize; ctx.font=`500 ${fs}px ${UR_FONT}`;
    while(ctx.measureText(n.ur||'—').width>maxW&&fs>4.5){ fs-=.5; ctx.font=`500 ${fs}px ${UR_FONT}`; }
    if(showRoman){
      ctx.fillText(n.ur||'—',cx,y+cardH*.44,maxW);
      ctx.direction='ltr'; ctx.fillStyle=C.text3; ctx.font=`500 ${roSize}px ${SERIF_FONT}`; sp('.6px');
      ctx.fillText((n.en||'').toUpperCase(),cx,y+cardH-3.5,maxW); sp('0px');
    } else ctx.fillText(n.ur||'—',cx,y+cardH*.56,maxW);
    ctx.direction='ltr'; ctx.font=`600 ${tagSize}px ${SANS_FONT}`; ctx.fillStyle=C.accent;
    const ty=y+cardH/2+tagSize*.36;
    if(isStub){ ctx.textAlign=rtl?'right':'left'; ctx.fillText(rtl?'← p.'+pageOf[id]:'p.'+pageOf[id]+' →',rtl?x-4:x+cardW+4,ty); }
    else if(isPageRoot&&page.parent){ ctx.textAlign=rtl?'left':'right'; ctx.fillText(rtl?'p.'+page.parent+' →':'← p.'+page.parent,rtl?x+cardW+4:x-4,ty); }
  });
  void base;
}
async function renderA4Pages(cap){
  await fontsReady();
  const {pages,pageOf}=planPages(cap);
  const dpr=4;                                              // ≈ 288 dpi on paper
  return pages.map(page=>{
    const cv=document.createElement('canvas'); cv.width=Math.round(A4W*dpr); cv.height=Math.round(A4H*dpr);
    const ctx=cv.getContext('2d'); ctx.scale(dpr,dpr);
    drawA4Page(ctx,page,pages.length,pageOf);
    return cv;
  });
}
/* hand-built multi-page PDF (no libraries): one JPEG per A4 page */
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
async function printA4(){
  showToast('Preparing print…');
  const cvs=await renderA4Pages(ROWS_PER_PAGE);
  const box=$('printPages'); box.innerHTML='';
  cvs.forEach(cv=>{ const img=new Image(); img.src=cv.toDataURL('image/jpeg',0.92); box.appendChild(img); });
  try{ await Promise.all([...box.querySelectorAll('img')].map(i=>i.decode())); }catch(e){}
  window.print();
}

/* ============================================================
   TIPS · TOAST · KEYBOARD
   ============================================================ */
function showTips(){ tips.hidden=false; }
function hideTips(){ tips.hidden=true; }
function toggleTips(){ if(tips.hidden) showTips(); else hideTips(); }
$('tipsX').onclick=hideTips;
let toastTimer=null;
function showToast(msg,ms=5000){
  const t=$('toast'); t.innerHTML=msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove('show'),ms);
}
document.addEventListener('keydown',e=>{
  const tag=(e.target.tagName||'').toLowerCase(), typing=tag==='input'||tag==='textarea';
  if(e.key==='Escape'){
    if(searchTerm||!results.hidden){ clearSearch(); searchEl.blur(); }
    else if(!tips.hidden) hideTips();
    else if(openMenuId) closeMenus();
    else deselect();
    return;
  }
  if(typing||e.metaKey||e.ctrlKey||e.altKey) return;
  switch(e.key){
    case '/': e.preventDefault(); searchEl.focus(); searchEl.select(); break;
    case '+': case '=': if(viewMode==='tree') zoomBy(1.25); break;
    case '-': case '_': if(viewMode==='tree') zoomBy(1/1.25); break;
    case '0': if(viewMode==='tree') fitDefault(); break;
    case 'e': case 'E': expandAll(); break;
    case 'c': case 'C': collapseAll(); break;
    case 'l': case 'L': setViewMode('list'); break;
    case 't': case 'T': setViewMode('tree'); break;
    case '?': toggleTips(); break;
    case 'Enter': case ' ': {
      const a=document.activeElement;
      if(a&&a.classList&&a.classList.contains('node')){ e.preventDefault(); selectNode(+a.dataset.id); }
      break;
    }
  }
});

/* ============================================================
   BOOT
   ============================================================ */
function boot(){
  indexForest();
  try{ const l=localStorage.getItem(KEYS.layout); if(l==='down'||l==='side') layoutMode=l; }catch(e){}
  viewMode=document.documentElement.dataset.view==='list'?'list':'tree';
  syncTheme(); syncLabels();
  if(isMobile()) searchEl.placeholder='Search · تلاش';
  render();
  setViewMode(viewMode,false);
  const hashId=parseInt((location.hash||'').slice(1),10);
  if(hashId&&findNode(hashId)) selectNode(hashId,{center:true,scale:Math.max(scale,0.8)});
  let seen=false;
  try{ seen=!!localStorage.getItem(KEYS.seen); localStorage.setItem(KEYS.seen,'1'); }catch(e){}
  if(!seen) setTimeout(()=>showToast('<span class="u">خوش آمدید</span> · Welcome. Tap a name to see their details and family line.',7000),600);
}
boot();
/* names are measured for fitting, so re-render once the web fonts arrive */
if(document.fonts){
  document.fonts.ready.then(()=>render());
  document.fonts.addEventListener('loadingdone',()=>render());
}
