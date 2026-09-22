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
              N("بشیر", "Basheer", [
                N("اعجاز احمد", "Ijaz Ahmad", [
                  N("آفتاب احمد", "Aftab Ahmad", []),
                  N("طلحہ اعجاز", "Talha Ijaz", []),
                  N("احمد اعجاز", "Ahmad Ijaz", []),
                ]),
                N("شہزاد احمد", "Shazad Ahmad", []),
                N("ایاز احمد", "Ayaz Ahmad", [
                  N("آکاش ایاز", "Akash Ayaz", []),
                  N("ابوبکر ایاز", "Abu Baker Ayaz", []),
                  N("حارث ایاز", "Haris Ayaz", []),
                ]),
                N("فیاض احمد", "Fiyaz Ahmad", [
                  N("طہٰ", "Tahaa", []),
                  N("محمد", "Muhammad", []),
                  N("رحمان", "Rheman", []),
                ]),
              ]),
              N("رشید", "Rasheed", [
                N("سہیل", "Sohail", [
                  N("حسن", "Hasan", []),
                ]),
                N("طفیل", "Tufail", [
                  N("اذان", "Azan", []),
                  N("ہادم", "Hadim", []),
                  N("محمد شافع", "Muhammad Shaafi", []),
                ]),
                N("محمد عادل", "M Adil", []),
              ]),
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
              N("مجید خان", "Majeed Khan", [
                N("نور محمد", "Noor Muhammad", [
                  N("عزیز", "Aziz", [
                    N("زاہد", "Zahid", [
                      N("محمد مومن", "Muhammad Momin", []),
                      N("محمد موبز", "Muhammad Mobiz", []),
                    ]),
                    N("جمشید", "Jamsheed", [
                      N("طلال", "Talal", []),
                      N("بلال", "Bilal", []),
                    ]),
                    N("شاہد", "Shahid", [
                      N("شعبان", "Shaban", []),
                      N("احمر", "Ahmar", []),
                    ]),
                  ]),
                  N("ارشد", "Arshad", [
                    N("عدن", "Adan", []),
                    N("ذیشان", "Zeeshan", []),
                    N("سفیان", "Sufian", []),
                  ]),
                  N("عثمان", "Usman", [
                    N("حامد", "Hamid", []),
                    N("عاطف", "Atif", []),
                  ]),
                  N("ذاکر", "Zakir", [
                    N("طیب", "Taiab", []),
                    N("احمد", "Ahmad", []),
                  ]),
                  N("صابر", "Sabir", [
                    N("فائز", "Faiez", []),
                    N("ربیع", "Rabi", []),
                    N("حسن", "Hassan", []),
                  ]),
                ]),
                N("امرت خان", "Imrat Khan", [
                  N("نوید", "Naveed", []),
                  N("ساجد", "Sajid", []),
                  N("واجد", "Wajid", []),
                  N("عامر", "Amir", []),
                  N("نادر", "Nadir", []),
                ]),
              ]),
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
   STATE
   ============================================================ */
const NODE_W=172, NODE_H=96, H_GAP=34, V_GAP=78, PAD=80, TREE_GAP=60;
let rtl=true;
let collapsed=new Set();
let pos={}, parentOf={}, depthOf={}, descCount={};
let dims={w:0,h:0};
let view={tx:0,ty:0,scale:1};
let selectedId=null;
let searchTerm="";

/* ============================================================
   LAYOUT
   ============================================================ */
function computeLayout(collapsedSet){
  const P={}, par={}, dep={};
  let leafX=0;
  function assign(node, depth, parent){
    par[node.id]=parent?parent.id:null; dep[node.id]=depth;
    const kids=node.children||[];
    const folded=collapsedSet.has(node.id);
    const y=depth*(NODE_H+V_GAP);
    if(kids.length===0 || folded){
      P[node.id]={x:leafX*(NODE_W+H_GAP),y}; leafX++;
    } else {
      const order=rtl?kids.slice().reverse():kids;
      order.forEach(c=>assign(c,depth+1,node));
      const xs=kids.map(c=>P[c.id].x);
      P[node.id]={x:(Math.min(...xs)+Math.max(...xs))/2,y};
    }
  }
  const trees=rtl?forest.slice().reverse():forest;
  trees.forEach((t,i)=>{ if(i>0) leafX+=TREE_GAP/(NODE_W+H_GAP); assign(t,0,null); });
  const all=Object.values(P);
  if(all.length){
    const minX=Math.min(...all.map(p=>p.x)), minY=Math.min(...all.map(p=>p.y));
    all.forEach(p=>{p.x+=PAD-minX;p.y+=PAD-minY;});
  }
  const w=(all.length?Math.max(...all.map(p=>p.x)):0)+NODE_W+PAD;
  const h=(all.length?Math.max(...all.map(p=>p.y)):0)+NODE_H+PAD;
  return {pos:P,parentOf:par,depthOf:dep,w,h};
}

function countDescendants(){
  descCount={};
  function w(n){ let c=0; (n.children||[]).forEach(k=>{c+=1+w(k);}); descCount[n.id]=c; return c; }
  forest.forEach(w);
}
function totalPeople(){ let n=0; function w(x){n++;(x.children||[]).forEach(w);} forest.forEach(w); return n; }
function maxGen(){ return Math.max(0,...Object.values(depthOf))+1; }

/* ============================================================
   RENDER
   ============================================================ */
const stage=document.getElementById('stage');
const world=document.getElementById('world');
const svg=document.getElementById('links');

function elbow(px,py,cx,cy){
  const midY=py+(cy-py)/2, r=Math.min(12,Math.abs(cx-px)/2||0);
  if(Math.abs(cx-px)<1) return `M${px} ${py} L${cx} ${cy}`;
  const d=cx>px?1:-1;
  return `M${px} ${py} L${px} ${midY-r} Q${px} ${midY} ${px+d*r} ${midY} L${cx-d*r} ${midY} Q${cx} ${midY} ${cx} ${midY+r} L${cx} ${cy}`;
}

function ancestorChain(id){
  const set=new Set();
  let cur=id;
  while(cur!=null){ set.add(cur); cur=parentOf[cur]; }
  return set;
}
function matchIds(){
  const t=searchTerm.trim().toLowerCase();
  const set=new Set();
  if(!t) return set;
  function w(n){
    if((n.ur||'').toLowerCase().includes(t) || (n.en||'').toLowerCase().includes(t)) set.add(n.id);
    (n.children||[]).forEach(w);
  }
  forest.forEach(w);
  return set;
}

function render(){
  const L=computeLayout(collapsed);
  pos=L.pos; parentOf=L.parentOf; depthOf=L.depthOf; dims={w:L.w,h:L.h};
  countDescendants();
  world.style.width=dims.w+'px'; world.style.height=dims.h+'px';
  svg.setAttribute('width',dims.w); svg.setAttribute('height',dims.h);

  const lineage = selectedId!=null ? ancestorChain(selectedId) : null;
  const matches = searchTerm.trim() ? matchIds() : null;

  // edges
  let paths='';
  function walkE(node){
    if(collapsed.has(node.id)) return;
    (node.children||[]).forEach(c=>{
      const p=pos[node.id], q=pos[c.id];
      let cls='edge';
      if(lineage && lineage.has(node.id) && lineage.has(c.id)) cls+=' hot';
      else if(lineage) cls+=' dim';
      if(matches) cls+=' dim';
      paths+=`<path class="${cls}" d="${elbow(p.x+NODE_W/2,p.y+NODE_H,q.x+NODE_W/2,q.y)}"/>`;
      walkE(c);
    });
  }
  forest.forEach(walkE);
  svg.innerHTML=paths;

  // nodes
  [...world.querySelectorAll('.node')].forEach(n=>n.remove());
  function walkN(node){
    const p=pos[node.id]; const depth=depthOf[node.id];
    const isTop=parentOf[node.id]===null;
    const hasKids=(node.children||[]).length>0;
    const folded=collapsed.has(node.id);
    const el=document.createElement('div');
    let cls='node'+(isTop?' root':'');
    if(node.id===selectedId) cls+=' selected';
    if(lineage){ if(lineage.has(node.id)){ if(node.id!==selectedId) cls+=' lineage'; } else cls+=' dim'; }
    if(matches){ if(matches.has(node.id)) cls+=' match'; else cls+=' dim'; }
    el.className=cls;
    el.style.left=p.x+'px'; el.style.top=p.y+'px'; el.dataset.id=node.id;
    let inner=
      `<div class="meta"><span>gen ${depth}</span>`+
      `<span class="tag">${isTop?'TOP':(hasKids?'':'leaf')}</span></div>`+
      `<div class="name">${escapeHtml(node.ur)||'—'}</div>`+
      `<div class="roman">${escapeHtml(node.en)||''}</div>`;
    if(hasKids){
      inner += `<div class="collapse-btn${folded?' collapsed':''}" data-toggle="${node.id}">`+
               `${folded?('+'+descCount[node.id]):'–'}</div>`;
    } else {
      inner += `<div class="leafdot"></div>`;
    }
    el.innerHTML=inner;
    world.appendChild(el);
    if(!folded)(node.children||[]).forEach(walkN);
  }
  forest.forEach(walkN);

  document.getElementById('stats').textContent = totalPeople()+' people · '+maxGen()+' generations';
  applyView();
}
function escapeHtml(s){return (s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function applyView(){
  world.style.transform=`translate(${view.tx}px,${view.ty}px) scale(${view.scale})`;
  document.getElementById('zoomLvl').textContent=Math.round(view.scale*100)+'%';
}

/* ============================================================
   PAN / ZOOM  (pointer + pinch + wheel)
   ============================================================ */
const clamp=s=>Math.min(2.6,Math.max(0.12,s));
const pointers=new Map();
let lastPan=null, startPt=null, pinchPrev=null, moved=false, downTarget=null;

function pinchInfo(){
  const a=[...pointers.values()];
  const dx=a[0].x-a[1].x, dy=a[0].y-a[1].y;
  return {dist:Math.hypot(dx,dy), cx:(a[0].x+a[1].x)/2, cy:(a[0].y+a[1].y)/2};
}
stage.addEventListener('pointerdown',e=>{
  stage.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===1){ moved=false; downTarget=e.target; lastPan={x:e.clientX,y:e.clientY}; startPt={x:e.clientX,y:e.clientY}; stage.classList.add('panning'); }
  else if(pointers.size===2){ pinchPrev=pinchInfo(); }
});
stage.addEventListener('pointermove',e=>{
  if(!pointers.has(e.pointerId)) return;
  pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===1){
    view.tx+=e.clientX-lastPan.x; view.ty+=e.clientY-lastPan.y;
    lastPan={x:e.clientX,y:e.clientY};
    if(Math.hypot(e.clientX-startPt.x,e.clientY-startPt.y)>6) moved=true;
    applyView();
  } else if(pointers.size===2){
    const info=pinchInfo();
    if(pinchPrev){
      const rect=stage.getBoundingClientRect();
      const mx=info.cx-rect.left, my=info.cy-rect.top;
      const ns=clamp(view.scale*(info.dist/pinchPrev.dist));
      view.tx=mx-(mx-view.tx)*(ns/view.scale);
      view.ty=my-(my-view.ty)*(ns/view.scale);
      view.scale=ns;
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
  if(pointers.size===0){
    stage.classList.remove('panning');
    if(!moved) handleTap(downTarget);
  } else if(pointers.size===1){
    const p=[...pointers.values()][0]; lastPan={x:p.x,y:p.y}; startPt={x:p.x,y:p.y}; moved=false;
  }
}
stage.addEventListener('pointerup',endPointer);
stage.addEventListener('pointercancel',endPointer);

stage.addEventListener('wheel',e=>{
  e.preventDefault();
  const rect=stage.getBoundingClientRect();
  const mx=e.clientX-rect.left, my=e.clientY-rect.top, old=view.scale;
  const ns=clamp(old*(e.deltaY<0?1.12:0.89));
  view.tx=mx-(mx-view.tx)*(ns/old); view.ty=my-(my-view.ty)*(ns/old);
  view.scale=ns; applyView();
},{passive:false});

function handleTap(t){
  if(!t||!t.closest) { closeMenu(); deselect(); return; }
  const tog=t.closest('.collapse-btn');
  if(tog){ toggleCollapse(+tog.dataset.toggle); return; }
  const nd=t.closest('.node');
  if(nd){ selectNode(+nd.dataset.id); return; }
  closeMenu(); deselect();
}

function zoomBy(f){
  const rect=stage.getBoundingClientRect();
  const mx=rect.width/2, my=rect.height/2, old=view.scale, ns=clamp(old*f);
  view.tx=mx-(mx-view.tx)*(ns/old); view.ty=my-(my-view.ty)*(ns/old);
  view.scale=ns; applyView();
}
document.getElementById('zoomIn').onclick=()=>zoomBy(1.18);
document.getElementById('zoomOut').onclick=()=>zoomBy(0.85);
document.getElementById('fit').onclick=()=>fitToScreen();

function fitToScreen(){
  const rect=stage.getBoundingClientRect();
  const s=clamp(Math.min(rect.width/dims.w, rect.height/dims.h, 1.4)*0.92);
  view.scale=s; view.tx=(rect.width-dims.w*s)/2; view.ty=(rect.height-dims.h*s)/2;
  applyView();
}
function centerOn(id){
  const p=pos[id]; if(!p) return;
  const rect=stage.getBoundingClientRect();
  const s=view.scale;
  view.tx=rect.width/2-(p.x+NODE_W/2)*s;
  view.ty=rect.height/2-(p.y+NODE_H/2)*s;
  applyView();
}

/* ============================================================
   COLLAPSE / EXPAND
   ============================================================ */
function toggleCollapse(id){ if(collapsed.has(id)) collapsed.delete(id); else collapsed.add(id); render(); }
function collapseAll(){
  // fold everything below the top branches (tops + their direct children stay visible)
  collapsed=new Set();
  forest.forEach(t=>(t.children||[]).forEach(markCollapse));
  render(); fitToScreen();
}
function markCollapse(n){ if((n.children||[]).length) collapsed.add(n.id); }
function expandAll(){ collapsed=new Set(); render(); fitToScreen(); }

/* ============================================================
   SELECTION / EDITING
   ============================================================ */
const panel=document.getElementById('panel');
function findNode(id){ let f=null; function w(n){ if(n.id===id){f=n;return;}(n.children||[]).forEach(w);} forest.forEach(w); return f; }

function selectNode(id){
  selectedId=id; const n=findNode(id); if(!n) return;
  document.getElementById('roName').textContent=n.ur||'—';
  document.getElementById('roRoman').textContent=n.en||'';
  const kids=(n.children||[]).length, top=parentOf[id]===null;
  const pid=parentOf[id], par=pid!=null?findNode(pid):null;
  let rows='';
  rows+=`<div class="ro-row"><span>Generation</span><b>${top?'top branch':depthOf[id]}</b></div>`;
  if(par) rows+=`<div class="ro-row"><span>Father</span><b class="ur">${escapeHtml(par.ur)}</b></div>`;
  rows+=`<div class="ro-row"><span>Children</span><b>${kids}</b></div>`;
  const chain=[...ancestorChain(id)].map(x=>findNode(x));
  if(chain.length>1){
    rows+=`<div class="ro-row col"><span>Line to top</span><b class="ur path">${escapeHtml(chain.map(x=>x.ur).join(' ‹ '))}</b></div>`;
  }
  document.getElementById('roRows').innerHTML=rows;
  panel.classList.add('open'); render();
}
function deselect(){ selectedId=null; panel.classList.remove('open'); render(); }
document.getElementById('panelClose').onclick=deselect;

/* ============================================================
   SEARCH
   ============================================================ */
const searchEl=document.getElementById('search');
const searchWrap=document.getElementById('searchWrap');
const searchCount=document.getElementById('searchCount');
searchEl.addEventListener('input',()=>{
  searchTerm=searchEl.value;
  searchWrap.classList.toggle('has', !!searchTerm.trim());
  if(searchTerm.trim()){
    const ids=[...matchIds()];
    searchCount.textContent=ids.length?(ids.length+' found'):'none';
    if(ids.length){
      // make sure first match is visible: expand its ancestors
      let cur=ids[0], chain=[];
      const full=computeLayout(new Set());
      while(cur!=null){ chain.push(cur); cur=full.parentOf[cur]; }
      chain.forEach(id=>collapsed.delete(id));
      render(); centerOn(ids[0]);
      return;
    }
  } else { searchCount.textContent=''; }
  render();
});
document.getElementById('searchClr').onclick=()=>{ searchEl.value=''; searchTerm=''; searchWrap.classList.remove('has'); render(); };

/* ============================================================
   MENU + FILE
   ============================================================ */
const menu=document.getElementById('menu');
function closeMenu(){ menu.classList.remove('open'); }
document.getElementById('menuBtn').onclick=e=>{ e.stopPropagation(); menu.classList.toggle('open'); };
document.addEventListener('pointerdown',e=>{ if(!e.target.closest('.menuwrap')) closeMenu(); },true);

document.getElementById('mExpand').onclick=()=>{ expandAll(); closeMenu(); };
document.getElementById('mCollapse').onclick=()=>{ collapseAll(); closeMenu(); };
document.getElementById('mDir').onclick=()=>{ rtl=!rtl; document.getElementById('dirK').textContent=rtl?'RTL':'LTR'; render(); fitToScreen(); };

document.getElementById('mJson').onclick=()=>{
  const clean=JSON.stringify(forest,(k,v)=>k==='id'?undefined:v,2);
  download(new Blob([clean],{type:'application/json'}),'shajra-tree.json'); closeMenu();
};
function download(blob,name){ const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1500); }
document.getElementById('mPrint').onclick=()=>{ const c=collapsed; collapsed=new Set(); render(); fitToScreen(); setTimeout(()=>{window.print(); collapsed=c; render();},150); closeMenu(); };

/* Render the FULL tree (ignoring collapse state) to an off-screen canvas.
   Shared by the PNG and PDF exporters. */
async function renderFullCanvas(){
  await (document.fonts?document.fonts.ready:Promise.resolve());
  const L=computeLayout(new Set()); const P=L.pos, par=L.parentOf, dep=L.depthOf;
  const W=L.w, H=L.h, dpr=2;
  const cv=document.createElement('canvas'); cv.width=W*dpr; cv.height=H*dpr;
  const ctx=cv.getContext('2d'); ctx.scale(dpr,dpr);
  ctx.fillStyle='#f3ecdb'; ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='#ddd0b3'; ctx.lineWidth=1;
  for(let y=0;y<H;y+=34){ctx.beginPath();ctx.moveTo(0,y+.5);ctx.lineTo(W,y+.5);ctx.stroke();}
  ctx.strokeStyle='#22357a'; ctx.lineWidth=1.7;
  function walkE(node){ (node.children||[]).forEach(c=>{ const p=P[node.id],q=P[c.id]; const px=p.x+NODE_W/2,py=p.y+NODE_H,cx=q.x+NODE_W/2,cy=q.y,m=py+(cy-py)/2; ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(px,m);ctx.lineTo(cx,m);ctx.lineTo(cx,cy);ctx.stroke(); walkE(c);});}
  forest.forEach(walkE);
  function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
  function walkN(node){ const p=P[node.id]; const isTop=par[node.id]===null; const isLeaf=!(node.children&&node.children.length);
    rr(p.x,p.y,NODE_W,NODE_H,15); ctx.fillStyle=isTop?'#f6e7cd':'#fbf8ef'; ctx.fill(); ctx.lineWidth=1.8; ctx.strokeStyle=isTop?'#b06a1d':'#22357a'; ctx.stroke();
    ctx.fillStyle='#7c7560'; ctx.font='9px "IBM Plex Mono",monospace'; ctx.textAlign='left'; ctx.fillText('gen '+dep[node.id],p.x+12,p.y+16);
    ctx.textAlign='right'; ctx.fillText(isTop?'TOP':(isLeaf?'leaf':''),p.x+NODE_W-12,p.y+16);
    ctx.fillStyle='#16224f'; ctx.direction='rtl'; ctx.textAlign='center'; ctx.font='500 21px "Noto Nastaliq Urdu","Noto Naskh Arabic",serif';
    ctx.fillText(node.ur||'—',p.x+NODE_W/2,p.y+54,NODE_W-20);
    ctx.direction='ltr'; ctx.fillStyle='#7c7560'; ctx.font='italic 11px Inter,sans-serif'; ctx.fillText(node.en||'',p.x+NODE_W/2,p.y+78,NODE_W-16);
    (node.children||[]).forEach(walkN);
  }
  forest.forEach(walkN);
  return {cv,W,H};
}

/* PNG — always exports the FULL tree regardless of collapse state */
document.getElementById('mPng').onclick=async()=>{
  closeMenu();
  const {cv}=await renderFullCanvas();
  cv.toBlob(b=>download(b,'shajra-tree.png'),'image/png');
};

/* PDF — hand-built single-page PDF embedding the full-tree image (no libraries).
   The page is sized to the tree's OWN aspect ratio so the drawing fills the page
   edge-to-edge (no wasted whitespace, nodes stay large & crisp).
   orientation: 'landscape' (horizontal, natural) or 'portrait' (vertical, rotated 90°). */
function bytesFromBinaryString(str){ const a=new Uint8Array(str.length); for(let i=0;i<str.length;i++) a[i]=str.charCodeAt(i)&0xff; return a; }
async function exportPdf(orientation){
  const {cv}=await renderFullCanvas();
  const jpeg=cv.toDataURL('image/jpeg',0.92);
  const bin=atob(jpeg.split(',')[1]);            // raw JPEG bytes as a binary string
  // Page proportional to the image, with a cap on the long edge (keeps file/page sane
  // while the full-resolution image gives high effective DPI).
  const margin=18, maxLong=4000;
  const s=Math.min(1, maxLong/Math.max(cv.width,cv.height));
  const dw=cv.width*s, dh=cv.height*s;           // drawn image size in points
  const pw=dw+2*margin, ph=dh+2*margin;          // media box = content + thin margin
  const rotate = orientation==='portrait' ? ' /Rotate 90' : '';
  const content=`q ${dw.toFixed(2)} 0 0 ${dh.toFixed(2)} ${margin} ${margin} cm /Im0 Do Q`;

  let pdf='%PDF-1.4\n%\xff\xff\xff\xff\n';
  const off=[];
  const addObj=(num,body)=>{ off[num]=pdf.length; pdf+=num+' 0 obj\n'+body+'\nendobj\n'; };
  addObj(1,'<< /Type /Catalog /Pages 2 0 R >>');
  addObj(2,'<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  addObj(3,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pw.toFixed(2)} ${ph.toFixed(2)}]${rotate} /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`);
  addObj(4,`<< /Type /XObject /Subtype /Image /Width ${cv.width} /Height ${cv.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${bin.length} >>\nstream\n${bin}\nendstream`);
  addObj(5,`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
  const xrefOff=pdf.length;
  let xref='xref\n0 6\n0000000000 65535 f \n';
  for(let i=1;i<=5;i++) xref+=String(off[i]).padStart(10,'0')+' 00000 n \n';
  pdf+=xref+`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOff}\n%%EOF`;
  download(new Blob([bytesFromBinaryString(pdf)],{type:'application/pdf'}),`shajra-tree-${orientation}.pdf`);
}
document.getElementById('mPdfLandscape').onclick=()=>{ closeMenu(); exportPdf('landscape'); };
document.getElementById('mPdfPortrait').onclick=()=>{ closeMenu(); exportPdf('portrait'); };

document.getElementById('hintX').onclick=()=>document.getElementById('hint').remove();

/* ============================================================
   BOOT
   ============================================================ */
function boot(){ render(); fitToScreen(); }
if(document.fonts&&document.fonts.ready){ document.fonts.ready.then(boot); setTimeout(boot,400); } else boot();
