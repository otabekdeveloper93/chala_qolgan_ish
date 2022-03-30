const searchInput = document.querySelector('#search-input');


searchInput.addEventListener('keyup', (e) =>{
    e.preventDefault();
   movies.filter(item =>{
       console.log(item.title);
   })
    
})
