let stars = document.getElementById('stars');
let sun = document.getElementById('sun');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let LENSs = document.querySelector('.LENSs');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px' ;
    sun.style.top = value * 3 + 'px' ;
    mountains3.style.top = value * 2 + 'px' ;
    mountains4.style.top = value * 1.5 + 'px' ;
    river.style.top = value + 'px' ;
    boat.style.top = value + 'px' ;
    boat.style.left = value * 3 + 'px' ;
    LENSs.style.fontSize = value + 'px' ;
    if(scrollY >= 53){
        LENSs.style.fontSize = 53 + 'px' ; 
        LENSs.style.position = 'fixed' ; 
        if(scrollY >= 390){
            LENSs.style.display = 'none' ; 
        }else{
            LENSs.style.display = 'block' ; 
        }
    }

}

