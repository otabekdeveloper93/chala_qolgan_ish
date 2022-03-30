
const movieContainer = document.querySelector("#movie");
const listContent = document.querySelector('#list-movie');
const listContainer = document.querySelector('.change_list');
const btnList = document.querySelector('.btn-button'); 
const removeList = document.querySelector('.btn.btn-danger');
const newArr = movies.slice(9, 100);
const newArray =[];


newArr.forEach(element => {
    let movi = document.createElement("div");
    movi.className = "col-3 cart-list";
    movi.innerHTML = `
        <div class="cart" id="${element.imdbId}">
            <img src="${element.youtubePoster}">
            <h4 class=".movi-title">${element.title}</h4>
            <p class="list-rating mt-4">
                <span><i class='bx bx-star'></i> ${element.imdbRating}</span>
                <span><i class='bx bxs-calendar' ></i> ${element.year}</span>
                <span><i class='bx bx-stopwatch'></i> ${element.runtime}</span>
            </p>
            <p class="categories">${element.categories}</p>
            <button id=${element.youtubeId} class="more">More Info</button>
            <button class="button"><i class='bx bxs-heart'></i></button>
        </div>`;
    movieContainer.appendChild(movi);

});

const addListbtn = document.querySelectorAll('.button');

for (const item of addListbtn) {
    
    item.addEventListener('click', (e)=>{
        let colorRed = e.target;
        colorRed.classList.toggle('active-color');
        newArray.push(newArr.filter((item) => item.imdbId === e.target.parentElement.parentElement.id));
        addListitem(newArray);
    })
    
}

function addListitem(array){
    array.filter(items =>{

        let moveLists = document.createElement("div");
        moveLists.className = "move-lists";
        moveLists.innerHTML = `
        <div class="cart">
            <img src="${items[0].youtubePoster}">
            <h4 class=".movi-title">${items[0].title}</h4>
            <p class="list-rating mt-4">
                <span><i class='bx bx-star'></i> ${items[0].imdbRating}</span>
                <span><i class='bx bxs-calendar' ></i> ${items[0].year}</span>
                <span><i class='bx bx-stopwatch'></i> ${items[0].runtime}</span>
            </p>
            <p class="categories">${items[0].categories}</p>
            <button id="${items[0].youtubeId}" class="button btn-button"><i class='bx bxs-heart'></i></button>
        </div>    
        `;

        listContent.appendChild(moveLists);
    })
    array = [];
}

let removeListbtn = document.querySelectorAll('.btn-button');

for (const item of removeListbtn) {
    item.addEventListener('click', ()=>{
        console.log(item.target);
    })
}

btnList.addEventListener('click', ()=>{
    listContainer.classList.add('change_list-active');
});

removeList.addEventListener('click', () =>{
    listContainer.classList.remove('change_list-active');
})