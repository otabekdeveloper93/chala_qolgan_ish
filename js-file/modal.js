const modalContainer = document.querySelector('.modal_info');


const modalBtn = document.querySelectorAll('.more');



for (const item of modalBtn) {
    item.addEventListener("click", (e) =>{
            newArr.forEach(el =>{
    
            if (e.target.id === el.youtubeId) {
                let modalContent = document.createElement('div');
                    modalContent.className = "modal_content"
                    modalContent.innerHTML = `
                            <button onclick="removeModalBtn()" class="span btn-danger">X</button>
                            <h3 class="movie-title">movie title</h3>
                            <div class="modal-box row">
                            <div class="modal-img col-sm-12">
                                <img src="${el.youtubePoster}">
                            </div>
                            <div class="info-box col-sm-12">               
                                <p class="info mt-4">
                                    <span><i class='bx bx-star'></i> ${el.imdbRating}</span>
                                    <span><i class='bx bxs-calendar' ></i> ${el.year}</span>
                                    <span><i class='bx bx-stopwatch'></i>${el.runtime} min</span>
                                </p>
                                <p>${el.categories}</p>
                                <p>${el.summary}</p>
                                <a class="btn btn-warning" href="${el.imdbPage}">show on IMDb</a>
                                <button type="button" class="btn btn-primary"><i class='bx bx-bookmark'></i>Bookmark</button></div>
                            </div>
                        `;
                    modalContainer.appendChild(modalContent);
                }
            })
        
        modalContainer.classList.add("d-flex");
        
    });
}

function removeModalBtn(){
    modalContainer.innerHTML = "";
    modalContainer.classList.remove("d-flex");
}


