let flag=0;

imageslider(flag);

function controller(x){
    flag=flag+x;
    imageslider(flag);
}

function imageslider(num){
    let slides=document.getElementsByClassName('image');
    
    if(num==slides.length){
       flag=0;
       num=0;
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
     }

    for(let y of slides){
        y.style.display="none";
    }

    slides[num].style.display="block";
}