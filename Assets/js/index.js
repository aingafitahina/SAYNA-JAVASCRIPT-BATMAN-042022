$(".button1").on({
    mouseenter: function() {
        $(this).css({
            "opacity": "100%"
        });
    },
    mouseleave: function() {
        $(this).css({
            "opacity" : "40%"
        });
    },
});

$(".menu").on({
    mouseenter: function() {
        $(this).css({
            "text-decoration": "underline",
            "font-weight" : "bold"
        });
    },
    mouseleave: function() {
        $(this).css({
            "text-decoration": "none",
            "font-weight" : "normal"
        });
    },
});

var i = 0;
var images = ['Batslider1.png', 'Batslider2.png', 'Batslider3.png'];
function slideImage(){
    document.slider.src= "../img/Home/" + images[i];
    if(i<images.length -1){
        i++;
    }
    else{
        i=0
    }
    setTimeout("slideImage()",2000);
}
window.onload-slideImage;

// vers le haut
let haut = document.querySelector('.icon1');
haut.addEventListener('click', ()=>{
    window.scrollTo({
        top :0
    })
})

//
let bas = document.querySelector('.icon2');
bas.addEventListener('click', ()=>{
    window.scrollTo({
        top :0
    })
})