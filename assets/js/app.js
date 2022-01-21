// banner-index-navigation-auto-start
    var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 6){
                counter = 1;
            }
        }, 2000);
// banner-index-navigation-auto-end


// slider--mondstadt-start
    var index = 1;
    changeImage = function(){
        var imgs = ["/assets/img/Monds/mondsjpg.jpg", "/assets/img/Monds/monds1.jpg" ];
        document.getElementById('img').src = imgs[index];
        index++;
        if (index == 2){
            index = 0;
        }
    }
    setInterval(changeImage, 5000);
// slider--mondstadt-end


// slider--liyue-start
    var index1 = 1;
    changeImage1 = function(){
        var imgs1 = ["/assets/img/Liyue/liyue.jpg", "/assets/img/Liyue/liyue1.jpg" ];
        document.getElementById('img1').src = imgs1[index1];
        index1++;
        if (index1 == 2){
            index1 = 0;
        }
    }
    setInterval(changeImage1, 5000);
// slider--liyue-end


// slider--inazuma-start
var index2 = 1;
changeImage2 = function(){
    var imgs2 = ["/assets/img/Inazuma/ina.jpg", "/assets/img/Inazuma/ina1.jpg" ];
    document.getElementById('img2').src = imgs2[index2];
    index2++;
    if (index2 == 2){
        index2 = 0;
    }
}
setInterval(changeImage2, 5000);
// slider--inazuma-end


// login-start
var loginBtn = document.querySelector('.js__login')
var login = document.querySelector('.login')
var close = document.querySelector('.login__close')

    loginBtn.addEventListener('click', function(){
        login.classList.add('show')
    })

    close.addEventListener('click', function(){
        login.classList.remove('show')
    })
// login-end

let searchForm = document.querySelector('.nav__search')
var openSearch = document.querySelector('.search__form');

    searchForm.addEventListener('click', function(){
        openSearch.classList.toggle('open')
    })

    // document.querySelector('#search-btn').onclick = () => {
    //     openSearch.classList.toggle('open');
    // }








