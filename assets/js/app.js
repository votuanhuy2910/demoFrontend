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
        document.getElementById('img').src = imgs1[index1];
        index1++;
        if (index1 == 2){
            index1 = 0;
        }
    }
    setInterval(changeImage1, 5000);
// slider--liyue-end


// slider--inazuma-start
var index2 = 1;
changeImage1 = function(){
    var imgs2 = ["/assets/img/Inazuma/ina.jpg", "/assets/img/Inazuma/ina1.jpg" ];
    document.getElementById('img').src = imgs2[index2];
    index2++;
    if (index2 == 2){
        index2 = 0;
    }
}
setInterval(changeImage2, 5000);
// slider--inazuma-end

