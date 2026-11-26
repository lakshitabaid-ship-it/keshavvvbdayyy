// Content is intentionally centralised here so replacing sample copy is straightforward.
const galleryItems = Array.from({length:20},(_,i)=>({
  number:i+1,
  title:["The tiny legend era","Main character loading","The school-days files","A certified classic","Peak side-quest energy","The smile archive","A plot twist in pixels","The weekend edition","No-context masterpiece","An accidental photoshoot","The golden-hour chapter","The good old days","The chaos coordinator","A moment for the fit","The soft-launch icon","A very Keshav moment","The plot thickens","The almost-grown-up era","Nineteen in the making","To be continued"][i],
  description:"A little snapshot from the Keshav archives. Replace this sample caption with the real story behind the photo.",
  era:["EARLY YEARS","THE CLASSICS","RECENT HISTORY","FAN FAVOURITE"][i%4],
  image:`assets/photos/photo-${String(i+1).padStart(2,"0")}.jpg`
}));
const chapters = {
 early:{label:"CHAPTER 01 / THE ORIGIN STORY",kicker:"BEFORE THE LORE",title:"Before the lore<br><em>became legendary.</em>",text:"Every good story has a beginning. This is where Keshav's starts: the early years, the tiny details, the people and places that shaped him.",hint:"SAMPLE COPY · REPLACE WITH CHILDHOOD MEMORIES"},
 person:{label:"CHAPTER 02 / THE MAIN CHARACTER",kicker:"THE PERSON",title:"A personality<br><em>of his own.</em>",text:"The qualities, quirks and little contradictions that make him unmistakably himself. The things people notice first, and the things only his inner circle knows.",hint:"SAMPLE COPY · ADD HIS PERSONALITY AND QUIRKS"},
 loves:{label:"CHAPTER 03 / KNOWN AFFECTIONS",kicker:"THINGS HE LOVES",title:"The favourites<br><em>and fixations.</em>",text:"The comfort things, the songs on repeat, the food orders, the hobbies and the very specific things that can instantly improve his day.",hint:"SAMPLE COPY · ADD FAVOURITE THINGS"},
 facts:{label:"CHAPTER 04 / CLASSIFIED (NOT REALLY)",kicker:"A FEW RARE FACTS",title:"Things you didn't<br><em>know you knew.</em>",text:"Unexpected talents, oddly specific preferences, niche stories and facts that sound made up but are absolutely true. The delightful footnotes of being Keshav.",hint:"SAMPLE COPY · ADD LITTLE-KNOWN FACTS"},
 effect:{label:"CHAPTER 05 / THE AFTERMATH",kicker:"THE KESHAV EFFECT",title:"Some people just<br><em>leave a mark.</em>",text:"The things that change when Keshav is around, and the ways he makes life better for the people lucky enough to know him.",hint:"SAMPLE COPY · ADD WHAT HE MEANS TO PEOPLE"}
};
const letters = Array.from({length:11},(_,i)=>({
 sender:["A very important person","The partner in crime","Someone from the inner circle","A familiar voice","A favourite human","The forever friend","A proud admirer","The home team","A fellow storyteller","A long-time witness","One more person who loves you"][i],
 body:"Dear Keshav,\\n\\nNineteen already. It feels like just yesterday there was another story, another laugh and another memory being made. I hope this year brings you the kind of happiness that stays long after the candles are blown out.\\n\\nKeep being curious, keep being wonderfully yourself, and never forget how many people are cheering you on. The world is better with you in it.\\n\\nHappy birthday. Here's to everything still waiting to happen."
}));
function initPortrait(){
 const img=document.getElementById("keshavHead"), placeholder=document.getElementById("headPlaceholder");
 if(!img)return;
 img.addEventListener("load",()=>{img.classList.add("ready");placeholder.style.display="none"});
 img.addEventListener("error",()=>{img.style.display="none"});
 if(img.complete&&img.naturalWidth){img.classList.add("ready");placeholder.style.display="none"}
}
function initIntro(){
 const intro=document.getElementById("introScreen");if(!intro)return;
 if(sessionStorage.getItem("keshavIntroSeen")){intro.remove();return}
 setTimeout(()=>{intro.classList.add("done");sessionStorage.setItem("keshavIntroSeen","1");setTimeout(()=>intro.remove(),700)},1500);
}
function initGallery(){
 const grid=document.getElementById("photoGrid");if(!grid)return;
 galleryItems.forEach(item=>{
  const card=document.createElement("button");card.className="photo-card";card.type="button";
  card.innerHTML=`<div class="photo-frame"><div class="photo-empty"><b>✳</b>PHOTO ${String(item.number).padStart(2,"0")}<br>PLACEHOLDER</div><img loading="lazy" src="${item.image}" alt="${item.title}"><div class="photo-hover"><small>${item.era}</small><strong>${item.title}</strong><span>${item.description}</span></div></div><div class="photo-caption">FRAME ${String(item.number).padStart(2,"0")} / 20</div>`;
  const img=card.querySelector("img"),empty=card.querySelector(".photo-empty");img.addEventListener("load",()=>{img.classList.add("ready");empty.style.display="none"});img.addEventListener("error",()=>{img.style.display="none"});
  card.addEventListener("click",()=>openPhoto(item));grid.appendChild(card);
 });
}
function openPhoto(item){
 const modal=document.getElementById("photoModal"),img=document.getElementById("modalPhoto"),ph=document.getElementById("modalPlaceholder");
 document.getElementById("modalNumber").textContent=`FRAME ${String(item.number).padStart(2,"0")} · ${item.era}`;
 document.getElementById("modalTitle").textContent=item.title;document.getElementById("modalDescription").textContent=item.description;
 img.classList.remove("ready");img.src=item.image;img.onload=()=>{img.classList.add("ready");ph.style.display="none"};img.onerror=()=>{img.style.display="none";ph.style.display="block"};
 modal.classList.add("show");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closePhoto(){const m=document.getElementById("photoModal");if(m){m.classList.remove("show");m.setAttribute("aria-hidden","true");document.body.style.overflow=""}}
function initDossier(){
 const cards=document.querySelectorAll(".scrap-card");if(!cards.length)return;
 cards.forEach(card=>card.addEventListener("click",()=>{
  cards.forEach(c=>c.classList.toggle("active",c===card));
  const data=chapters[card.dataset.chapter];document.getElementById("chapterLabel").textContent=data.label;
  document.getElementById("chapterKicker").textContent=data.kicker;document.getElementById("chapterTitle").innerHTML=data.title;
  document.getElementById("chapterText").textContent=data.text;document.getElementById("chapterHint").textContent=data.hint;
  document.getElementById("chapterWatermark").textContent=card.dataset.chapter==="early"?"01":card.dataset.chapter==="person"?"02":card.dataset.chapter==="loves"?"03":card.dataset.chapter==="facts"?"04":"05";
  document.getElementById("chapterDisplay").animate([{opacity:.55,transform:"translateY(7px)"},{opacity:1,transform:"translateY(0)"}],{duration:260,easing:"ease-out"});
 }));
}
function initLetters(){
 const grid=document.getElementById("envelopeGrid");if(!grid)return;
 letters.forEach((letter,i)=>{
  const card=document.createElement("button");card.type="button";card.className="envelope-card";
  card.innerHTML=`<span class="envelope-label">PERSONAL · NO. ${String(i+1).padStart(2,"0")}</span><span class="envelope-address">For Keshav</span><span class="envelope-seal">K</span>`;
  card.addEventListener("click",()=>openLetter(i));grid.appendChild(card);
 });
}
function openLetter(index){
 const stage=document.getElementById("letterStage"),letter=letters[index];
 document.getElementById("letterNo").textContent=String(index+1).padStart(2,"0");
 document.getElementById("letterGreeting").textContent="Dear Keshav,";
 document.getElementById("letterContent").textContent=letter.body;
 document.getElementById("letterSender").textContent=letter.sender;
 stage.classList.remove("opened");stage.classList.add("show");stage.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
 requestAnimationFrame(()=>setTimeout(()=>stage.classList.add("opened"),100));
}
function closeLetter(){const s=document.getElementById("letterStage");if(s){s.classList.remove("opened");s.setAttribute("aria-hidden","true");document.body.style.overflow="";setTimeout(()=>s.classList.remove("show"),650)}}
document.addEventListener("click",e=>{
 if(e.target.matches("[data-close-photo]"))closePhoto();
 if(e.target.matches("[data-close-letter]"))closeLetter();
 if(e.target.matches(".close-modal"))closePhoto();
 if(e.target.matches(".letter-dismiss"))closeLetter();
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closePhoto();closeLetter()}});
document.addEventListener("DOMContentLoaded",()=>{initPortrait();initIntro();initGallery();initDossier();initLetters()});
