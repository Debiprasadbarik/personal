var messageArray = ["Hi, I'm Debi Prasad"];
var textPosition =7;
var speed =190;

typewriter =()=>{
    document.querySelector("#message").innerHTML=messageArray[0].substring(0,textPosition);

    if(textPosition++ != messageArray[0].length)
        setTimeout(typewriter,speed);
        else{
        textPosition = 7;
        setTimeout(typewriter, speed);}
}
window.addEventListener("load",typewriter);
//
var marray2 =["A Web Developer."];
var textPosition1=1;
var speed1=200;
var marray3 =["A learner."];
type =()=>{
    document.querySelector("#message1").innerHTML=marray2[0].substring(0,textPosition1);

    if(textPosition1++ !=marray2[0].length)
        setTimeout(type,speed1);
        else{
            document.querySelector("#message1").innerHTML=marray3[0].substring(0,textPosition1);
            textPosition1=1;
            if(textPosition1++ !=marray3[0].length)
            setTimeout(type,810);
        }
}
window.addEventListener("load",type);
