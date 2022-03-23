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

//contact

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


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
var openRegister = document.querySelector('.register')
var registerNow = document.querySelector('.register-now')

    loginBtn.addEventListener('click', function(){
        login.classList.add('show')
    })

    close.addEventListener('click', function(){
        login.classList.remove('show')
    })

    document.addEventListener('keydown', function(e){
        if(e.keyCode == 27) {
            login.classList.remove('show')
        }
    })

    registerNow.addEventListener('click', function(){
        openRegister.classList.add('show')
        login.classList.remove('show')
    })
// login-end


// register-start
var registerBtn = document.querySelector('.js__register')
var register = document.querySelector('.register')
var closeRegister = document.querySelector('.register__close')
var openLogin = document.querySelector('.login')
var returnLogin = document.querySelector('.return-login')

    registerBtn.addEventListener('click', function(){
        register.classList.add('show')
    })

    closeRegister.addEventListener('click', function(){
        register.classList.remove('show')
    })

    document.addEventListener('keydown', function(e){
        if(e.keyCode == 27) {
            register.classList.remove('show')
        }
    })

    returnLogin.addEventListener('click', function(){
        openLogin.classList.add('show')
        register.classList.remove('show')
    })
// register-end













