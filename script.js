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
                  N("موسیٰ", "Musa", []),
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
            N("اسحاق", "Ishaq", [
              N("مقصود", "Maqsood", []),
              N("جمشید", "Jamsheed", []),
              N("تصور", "Tasawar", []),
              N("ریاست", "Riasat", []),
              N("شاکر", "Shakir", []),
              N("شہروز", "Shehroz", []),
            ]),
            N("الیاس", "Ilyas", [
              N("شاہد", "Shahid", []),
              N("شہزاد", "Shahzad", []),
              N("شہباز", "Shahbaz", []),
              N("ذیشان", "Zeeshan", []),
            ]),
            N("شیر خان", "Shair Khan", [
              N("ابراہیم", "Ibrahim", []),
              N("طارق", "Tariq", []),
              N("زبیر", "Zubair", []),
            ]),
            N("عبداللہ", "Abdullah", [
              N("ظہیر", "Zaheer", []),
              N("کامران", "Kamran", []),
            ]),
          ]),
        ]),
        N("نور خان", "Noor Khan", [
          N("بھاٹی", "Bhaati", [
            N("داؤد", "Dawood", [
              N("بشیر", "Basheer", [
                N("اعجاز احمد", "Ijaz Ahmad", [
                  N("آفتاب احمد", "Aftab Ahmad", []),
                  N("طلحہ", "Talha", []),
                  N("احمد", "Ahmad", []),
                ]),
                N("شہزاد احمد", "Shazad Ahmad", []),
                N("ایاز احمد", "Ayaz Ahmad", [
                  N("آکاش", "Akash", []),
                  N("ابوبکر", "Abu Baker", []),
                  N("حارث", "Haris", []),
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
                  N("نوید", "Naveed", [
                    N("ارحم", "Arham", []),
                  ]),
                  N("ساجد", "Sajid", [
                    N("فراز", "Faraz", []),
                    N("حسیب", "Hasib", []),
                    N("ہادی", "Hadi", []),
                  ]),
                  N("واجد", "Wajid", [
                    N("عمار", "Amar", []),
                    N("ابوبکر", "Abubakar", []),
                  ]),
                  N("عامر", "Amir", []),
                  N("نادر", "Nadir", [
                    N("ارتضیٰ", "Irtaza", []),
                    N("حمزہ", "Hamza", []),
                  ]),
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
const NODE_W=140, NODE_H=96, H_GAP=26, V_GAP=44, PAD=48, TREE_GAP=60;
// childless brothers are stacked in a column under their father (saves width)
const STACK_GAP=14, STACK_IN=16;
// card size per generation: the fewer people a generation has, the larger its
// cards (up to GEN_MAX); the most crowded generation gets GEN_MIN. Never larger
// than the generation above, so elders always read biggest.
const GEN_MAX=2.4, GEN_MIN=0.45, GEN_POW=0.5;
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
/* scale factor for each generation, from head-counts of the full tree
   (ignores folding, so sizes stay put when branches open and close) */
function generationScales(){
  const cnt=[];
  function w(n,d){ cnt[d]=(cnt[d]||0)+1; (n.children||[]).forEach(c=>w(c,d+1)); }
  forest.forEach(t=>w(t,0));
  const most=Math.max(1,...cnt), S=[];
  cnt.forEach((c,d)=>{
    const s=Math.min(GEN_MAX,GEN_MIN*Math.pow(most/c,GEN_POW));
    S.push(d?Math.min(s,S[d-1]):s);
  });
  return S;
}

/* Tidy layout: a father sits centred over his children, and each family is
   packed as tightly as its shape allows, so a small branch tucks in beside a big
   one instead of claiming a full-height strip. Cards, connectors and stacked
   columns are all boxes [x0,x1,y0,y1]; neighbouring families are pushed together
   until their boxes would touch. Positions carry box size (w,h) and scale (s). */
function computeLayout(collapsedSet){
  const P={}, par={}, dep={};
  const GS=generationScales();
  const S=d=>GS[Math.min(d,GS.length-1)];
  const rows=[0];                                  // top y of each generation
  const rowY=d=>{ while(rows.length<=d){ const k=rows.length-1; rows.push(rows[k]+NODE_H*S(k)+V_GAP*(S(k)+S(k+1))/2); } return rows[d]; };
  const kidsOf=n=>collapsedSet.has(n.id)?[]:(n.children||[]);
  const isLeaf=n=>!(n.children||[]).length;
  const stacks=n=>{ const k=kidsOf(n); return k.length>=2 && k.every(isLeaf); };

  // lays out n's family around n's centre (x=0); returns its cards and boxes
  function pack(n,d,parent){
    par[n.id]=parent?parent.id:null; dep[n.id]=d;
    const s=S(d), w=NODE_W*s, h=NODE_H*s, y=rowY(d), m=H_GAP*s/2, k=kidsOf(n);
    const cards=[{id:n.id,cx:0,y,w,h,s}], boxes=[[-w/2-m,w/2+m,y,y+h]];
    if(!k.length) return {cards,boxes};
    if(stacks(n)){
      const s1=S(d+1), w1=NODE_W*s1, h1=NODE_H*s1, g=H_GAP/2*s1, spine=STACK_IN*s1;
      let yy=rowY(d+1);
      k.forEach(c=>{
        par[c.id]=n.id; dep[c.id]=d+1;
        cards.push({id:c.id,cx:0,y:yy,w:w1,h:h1,s:s1,side:rtl?'r':'l'});
        yy+=h1+STACK_GAP*s1;
      });
      // column + its spine, which runs down the reading-start side only
      boxes.push(rtl?[-w1/2-g,w1/2+spine+g,y+h,yy-STACK_GAP*s1]:[-w1/2-spine-g,w1/2+g,y+h,yy-STACK_GAP*s1]);
      return {cards,boxes};
    }
    const order=rtl?k.slice().reverse():k;
    const fams=order.map(c=>pack(c,d+1,n)), offs=packRow(fams,0);
    const mid=(offs[0]+offs[offs.length-1])/2;
    fams.forEach((f,i)=>shiftInto(f,offs[i]-mid,cards,boxes));
    boxes.push([offs[0]-mid-2,offs[offs.length-1]-mid+2,y+h,rowY(d+1)]);   // connector bar
    return {cards,boxes};
  }
  const trees=rtl?forest.slice().reverse():forest;
  const fams=trees.map(t=>pack(t,0,null)), offs=packRow(fams,TREE_GAP), cards=[];
  fams.forEach((f,i)=>shiftInto(f,offs[i],cards,[]));

  const minX=cards.length?Math.min(...cards.map(c=>c.cx-c.w/2)):0;
  cards.forEach(c=>{ P[c.id]={x:c.cx-c.w/2-minX+PAD,y:c.y+PAD,w:c.w,h:c.h,s:c.s,side:c.side}; });
  const all=Object.values(P);

  // connectors: elbow from father to child; for a stacked column, a spine runs
  // down the reading-start side with a short tick into each card
  const edges={};
  Object.keys(P).forEach(id=>{
    const pid=par[id]; if(pid==null) return;
    const p=P[pid], q=P[id], px=p.x+p.w/2, py=p.y+p.h, r=12*q.s;
    if(q.side){
      const top=rowY(dep[id])+PAD, midY=py+(top-py)/2, cy=q.y+q.h/2;
      const ex=q.side==='r'?q.x+q.w:q.x, sx=q.side==='r'?ex+STACK_IN*q.s:ex-STACK_IN*q.s;
      edges[id]=roundedPath([[px,py],[px,midY],[sx,midY],[sx,cy],[ex,cy]],r);
    } else {
      const cx=q.x+q.w/2, midY=py+(q.y-py)/2;
      edges[id]=roundedPath([[px,py],[px,midY],[cx,midY],[cx,q.y]],r);
    }
  });

  const w=(all.length?Math.max(...all.map(p=>p.x+p.w)):0)+PAD;
  const h=(all.length?Math.max(...all.map(p=>p.y+p.h)):0)+PAD;
  return {pos:P,parentOf:par,depthOf:dep,edges,w,h};
}

/* how far right `boxes` must move to clear every box in `placed` it shares a height with */
function clearance(placed,boxes){
  let off=-Infinity;
  for(const b of boxes) for(const a of placed) if(a[2]<b[3] && b[2]<a[3] && a[1]-b[0]>off) off=a[1]-b[0];
  return off;
}
/* x offsets for sibling families set side by side. Packing only from the left
   would push small middle families against their left neighbour, so pack from
   both ends and average (any mix of two non-overlapping placements is too). */
function packRow(fams,gap){
  const n=fams.length, L=[0], R=[];
  if(!n) return [];
  let placed=fams[0].boxes.slice();
  for(let i=1;i<n;i++){ L[i]=clearance(placed,fams[i].boxes)+gap; fams[i].boxes.forEach(b=>placed.push([b[0]+L[i],b[1]+L[i],b[2],b[3]])); }
  R[n-1]=0; placed=fams[n-1].boxes.slice();
  for(let i=n-2;i>=0;i--){ R[i]=-clearance(fams[i].boxes,placed)-gap; fams[i].boxes.forEach(b=>placed.push([b[0]+R[i],b[1]+R[i],b[2],b[3]])); }
  return L.map((x,i)=>(x+R[i]-R[0])/2);
}
function shiftInto(f,dx,cards,boxes){
  f.cards.forEach(c=>cards.push({...c,cx:c.cx+dx}));
  f.boxes.forEach(b=>boxes.push([b[0]+dx,b[1]+dx,b[2],b[3]]));
}

/* orthogonal polyline with rounded corners, as an SVG path string */
function roundedPath(points,r){
  const pts=[];
  points.forEach(p=>{ const l=pts[pts.length-1]; if(!l||Math.abs(l[0]-p[0])+Math.abs(l[1]-p[1])>0.5) pts.push(p); });
  const f=n=>Math.round(n*10)/10;
  let d=`M${f(pts[0][0])} ${f(pts[0][1])}`;
  for(let i=1;i<pts.length-1;i++){
    const [ax,ay]=pts[i-1], [bx,by]=pts[i], [cx,cy]=pts[i+1];
    const l1=Math.hypot(bx-ax,by-ay), l2=Math.hypot(cx-bx,cy-by), k=Math.min(r,l1/2,l2/2);
    d+=` L${f(bx-(bx-ax)/l1*k)} ${f(by-(by-ay)/l1*k)} Q${f(bx)} ${f(by)} ${f(bx+(cx-bx)/l2*k)} ${f(by+(cy-by)/l2*k)}`;
  }
  const z=pts[pts.length-1];
  return d+` L${f(z[0])} ${f(z[1])}`;
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

function ancestorChain(id){
  const set=new Set();
  let cur=id;
  while(cur!=null){ set.add(cur); cur=parentOf[cur]; }
  return set;
}
function descendantIds(id){
  const set=new Set();
  function w(n){ (n.children||[]).forEach(c=>{ set.add(c.id); if(!collapsed.has(c.id)) w(c); }); }
  const n=findNode(id); if(n && !collapsed.has(id)) w(n);
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
  const edgeD=L.edges;
  countDescendants();
  world.style.width=dims.w+'px'; world.style.height=dims.h+'px';
  svg.setAttribute('width',dims.w); svg.setAttribute('height',dims.h);

  const lineage = selectedId!=null ? ancestorChain(selectedId) : null;
  const kin = selectedId!=null ? descendantIds(selectedId) : null;
  const matches = searchTerm.trim() ? matchIds() : null;

  // animation pacing: one "step" per generation, from the top down through
  // the selected person to their deepest visible descendant (~3s max overall)
  if(lineage){
    const deepest=Math.max(depthOf[selectedId],...[...kin].map(id=>depthOf[id]));
    document.documentElement.style.setProperty('--step',Math.min(0.32,3/Math.max(1,deepest)).toFixed(3)+'s');
  }

  // edges (animated ones get pathLength=1 so they can be "drawn" in via dashoffset;
  // a flow overlay on top shows the direction parent → child)
  let paths='', flows='';
  function walkE(node){
    if(collapsed.has(node.id)) return;
    (node.children||[]).forEach(c=>{
      const d=edgeD[c.id];
      const onLine=lineage && lineage.has(node.id) && lineage.has(c.id);
      const below=kin && kin.has(c.id);
      let cls='edge', extra='';
      if(onLine) cls+=' hot'; else if(below) cls+=' kin'; else if(lineage) cls+=' dim';
      if(matches) cls+=' dim';
      // lines into the big upper generations are drawn thicker
      let st=`--w:${Math.max(1,pos[c.id].s).toFixed(2)}`;
      if(onLine||below){
        st+=`;--i:${depthOf[node.id]}`;
        extra=` pathLength="1"`;
        if(!matches) flows+=`<path class="flow" d="${d}" style="${st}"/>`;
      }
      paths+=`<path class="${cls}"${extra} d="${d}" style="${st}"/>`;
      walkE(c);
    });
  }
  forest.forEach(walkE);
  svg.innerHTML=paths+flows;

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
    if(lineage){
      if(lineage.has(node.id)){ if(node.id!==selectedId) cls+=' lineage'; }
      else if(kin.has(node.id)) cls+=' kin';
      else cls+=' dim';
    }
    if(matches){ if(matches.has(node.id)) cls+=' match'; else cls+=' dim'; }
    if(p.side) cls+=' stk stk-'+p.side;
    el.className=cls;
    el.style.left=p.x+'px'; el.style.top=p.y+'px'; el.dataset.id=node.id;
    el.style.transform=`scale(${p.s})`;
    if(lineage && (lineage.has(node.id)||kin.has(node.id))) el.style.setProperty('--i',depth);
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
const clamp=s=>Math.min(2.6,Math.max(0.04,s));
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
  let s=clamp(Math.min(rect.width/dims.w, rect.height/dims.h, 1.4)*0.96);
  let ty=(rect.height-dims.h*s)/2;
  // the tree reaches the corners, so keep cards out from under the zoom buttons:
  // first lift it to the top of the screen, then shrink it a little if still needed
  for(let i=0;i<10 && dockCovers(s,(rect.width-dims.w*s)/2,ty);i++){
    if(i) s*=0.97;
    ty=Math.min((rect.height-dims.h*s)/2,8-PAD*s);
  }
  view.scale=s; view.tx=(rect.width-dims.w*s)/2; view.ty=ty;
  applyView();
}
function dockCovers(s,tx,ty){
  const st=stage.getBoundingClientRect(), d=document.getElementById('zoomdock').getBoundingClientRect(), m=6;
  const x0=d.left-st.left-m, x1=d.right-st.left+m, y0=d.top-st.top-m, y1=d.bottom-st.top+m;
  return Object.values(pos).some(p=>p.x*s+tx<x1 && (p.x+p.w)*s+tx>x0 && p.y*s+ty<y1 && (p.y+p.h)*s+ty>y0);
}
function centerOn(id){
  const p=pos[id]; if(!p) return;
  const rect=stage.getBoundingClientRect();
  const s=view.scale;
  view.tx=rect.width/2-(p.x+p.w/2)*s;
  view.ty=rect.height/2-(p.y+p.h/2)*s;
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
  // ancestors listed top → down, ending with this person; each entry is tappable
  const chain=[...ancestorChain(id)].reverse().map(x=>findNode(x));
  if(chain.length>1){
    rows+=`<div class="ro-row col"><span>Line from top</span><ol class="lineage-list">`+
      chain.map((x,i)=>`<li class="${x.id===id?'me':''}" data-id="${x.id}" style="--i:${i}">`+
        `<b class="ur">${escapeHtml(x.ur)}</b><em>${escapeHtml(x.en)}</em></li>`).join('')+
      `</ol></div>`;
  }
  document.getElementById('roRows').innerHTML=rows;
  panel.classList.add('open'); render();
}
document.getElementById('roRows').addEventListener('click',e=>{
  const li=e.target.closest('.lineage-list li');
  if(li){ const id=+li.dataset.id; selectNode(id); centerOn(id); }
});
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
  ctx.strokeStyle='#22357a';
  Object.keys(L.edges).forEach(id=>{ ctx.lineWidth=1.7*Math.max(1,P[id].s); ctx.stroke(new Path2D(L.edges[id])); });
  function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
  // each card is drawn at full size, then scaled to its generation's size
  function walkN(node){ const p=P[node.id]; const isTop=par[node.id]===null; const isLeaf=!(node.children&&node.children.length);
    ctx.save(); ctx.translate(p.x,p.y); ctx.scale(p.s,p.s);
    rr(0,0,NODE_W,NODE_H,15); ctx.fillStyle=isTop?'#f6e7cd':'#fbf8ef'; ctx.fill(); ctx.lineWidth=1.8; ctx.strokeStyle=isTop?'#b06a1d':'#22357a'; ctx.stroke();
    ctx.fillStyle='#7c7560'; ctx.font='9px "IBM Plex Mono",monospace'; ctx.textAlign='left'; ctx.fillText('gen '+dep[node.id],12,16);
    ctx.textAlign='right'; ctx.fillText(isTop?'TOP':(isLeaf?'leaf':''),NODE_W-12,16);
    ctx.fillStyle='#16224f'; ctx.direction='rtl'; ctx.textAlign='center'; ctx.font='500 21px "Noto Nastaliq Urdu","Noto Naskh Arabic",serif';
    ctx.fillText(node.ur||'—',NODE_W/2,54,NODE_W-20);
    ctx.direction='ltr'; ctx.fillStyle='#7c7560'; ctx.font='italic 11px Inter,sans-serif'; ctx.fillText(node.en||'',NODE_W/2,78,NODE_W-16);
    ctx.restore();
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

/* ============================================================
   BOOT
   ============================================================ */
function boot(){ render(); fitToScreen(); }
if(document.fonts&&document.fonts.ready){ document.fonts.ready.then(boot); setTimeout(boot,400); } else boot();
