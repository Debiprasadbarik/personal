var messageArray = ["Hi, I'm Debi Prasad"];
var textPosition =3;
var speed =190;

typewriter =()=>{
    document.querySelector("#message").innerHTML=messageArray[0].substring(0,textPosition);

    if(textPosition++ != messageArray[0].length)
        setTimeout(typewriter,speed);
        else{
        textPosition = 3;
        setTimeout(typewriter, speed);}
}
window.addEventListener("load",typewriter);

var marray2 =["A Fullstack Developer."]
var textPosition1=2;
var speed1=200;

type =()=>{
    document.querySelector("#message1").innerHTML=marray2[0].substring(0,textPosition1);

    if(textPosition1++ !=marray2[0].length)
        setTimeout(type,speed1);
        else{
            textPosition1=2;
            setTimeout(type,speed1);
        }
}
window.addEventListener("load",type);