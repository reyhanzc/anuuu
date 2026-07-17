// =========================
// ELEMENT
// =========================

const cover = document.getElementById("cover");
const book = document.getElementById("book");

const openBtn = document.getElementById("openBook");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const music = document.getElementById("music");

const pages = document.querySelectorAll(".page");

let currentPage = 0;


// =========================
// WAKTU LIRIK
// (ubah sesuai lagumu)
// =========================

const lyricTime = [
    0,
    18,
    34,
    51,
    68,
    87
];


// =========================
// TAMPILKAN HALAMAN
// =========================

function showPage(index){

    pages.forEach(page=>{

        page.style.display="none";
        page.classList.remove("show");

    });

    pages[index].style.display="flex";

    setTimeout(()=>{

        pages[index].classList.add("show");

    },80);

}

showPage(currentPage);


// =========================
// BUKA COVER
// =========================

openBtn.addEventListener("click",()=>{

    cover.classList.add("hide");

    setTimeout(()=>{

        cover.style.display="none";

        book.classList.add("active");

    },600);

    music.currentTime=lyricTime[0];

    music.play();

});


// =========================
// NEXT
// =========================

nextBtn.addEventListener("click",()=>{

    if(currentPage<pages.length-1){

        currentPage++;

        showPage(currentPage);

        music.currentTime=lyricTime[currentPage];

        music.play();

    }

});


// =========================
// PREVIOUS
// =========================

prevBtn.addEventListener("click",()=>{

    if(currentPage>0){

        currentPage--;

        showPage(currentPage);

        music.currentTime=lyricTime[currentPage];

        music.play();

    }

});


// =========================
// KEYBOARD
// =========================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});


// =========================
// TYPING EFFECT
// =========================

const title=document.querySelector(".cover-content h1");

const text=title.innerText;

title.innerText="";

let i=0;

function typing(){

    if(i<text.length){

        title.innerHTML+=text.charAt(i);

        i++;

        setTimeout(typing,90);

    }

}

typing();


// =========================
// PARTICLES
// =========================

const particles=document.getElementById("particles");

for(let i=0;i<100;i++){

    let snow=document.createElement("span");

    snow.className="snow";

    snow.style.left=Math.random()*100+"vw";

    snow.style.animationDuration=(4+Math.random()*5)+"s";

    snow.style.animationDelay=Math.random()*5+"s";

    snow.style.width=(2+Math.random()*5)+"px";

    snow.style.height=snow.style.width;

    snow.style.opacity=Math.random();

    particles.appendChild(snow);

}


// =========================
// EFEK TOMBOL
// =========================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// =========================
// AUTO REPLAY
// =========================

music.addEventListener("ended",()=>{

music.currentTime=0;

music.play();

});


// =========================
// TOUCH HP
// =========================

let startX=0;

document.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

document.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>50){

nextBtn.click();

}

if(endX-startX>50){

prevBtn.click();

}

});


// =========================
// ANIMASI TEXT
// =========================

const paragraphs=document.querySelectorAll(".left p");

paragraphs.forEach(p=>{

p.style.opacity="0";

});

function animateText(index){

paragraphs.forEach(p=>{

p.style.opacity="0";

});

setTimeout(()=>{

paragraphs[index].style.transition=".8s";

paragraphs[index].style.opacity="1";

},200);

}

animateText(0);

nextBtn.addEventListener("click",()=>{

animateText(currentPage);

});

prevBtn.addEventListener("click",()=>{

animateText(currentPage);

});