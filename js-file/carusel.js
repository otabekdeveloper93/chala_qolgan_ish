const carusel = document.querySelector("#carusel");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

let slideLength = 0;
let newslide = undefined;


for(let i = 0; i < 10; i++){
    slideLength++;
    let slider = document.createElement("div");
    slider.className = "slider";
    slider.innerHTML =`
        <img src="${movies[i].youtubePosterMax}">
        <div class="description-box">
            <h1>${movies[i].title}</h1>
            <p class="mt-4">
            <span><i class='bx bx-star'></i> ${movies[i].imdbRating}</span>
            <span><i class='bx bxs-calendar' ></i> ${movies[i].year}</span>
            <span><i class='bx bx-stopwatch'></i> ${movies[i].runtime}</span>
            </p>
            <p>${movies[i].summary}</p>
            <button class="btn-danger"><i class='bx bx-play-circle'></i>Watch trailer</button>
        </div>
    `;
    newslide += slider;
    carusel.appendChild(slider);
}

let count = 0;

function changeImg(){
    if(count > slideLength -1){
        count = 0;
    }else if(count < 0){
        count = slideLength -1;
    }
    carusel.style.transform = `translateY(${-count * 100}vh)`;
}

function avtoChange(){
    count++;
    changeImg();
}
let reset = setInterval(avtoChange , 3000);

function resetInterval(){
    clearInterval(reset);
    reset = setInterval(avtoChange , 3000);
}

function change(){
    if(count > slideLength -1){
        count = 0;
    }else if(count < 0){
        count = slideLength -1;
    }
    movieContainer.style.transform = `translateX(${-count * 500}px)`;
}


left.addEventListener('click',() => {
    count--;
    change()
});


right.addEventListener('click',() =>{
    count++;
    change()
});
