// search-box-start
var searchForm = document.querySelector('.nav__search')
var openSearch = document.querySelector('.search__form');

    searchForm.addEventListener('click', function(){
        openSearch.classList.toggle('open')
    })
    // document.querySelector('#search-btn').onclick = () => {
    //     openSearch.classList.toggle('open');
    // }
// search-box-end
