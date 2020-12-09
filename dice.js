document.querySelector(".btn").addEventListener('click',function(){
    var random=Math.floor(Math.random()*6)+1;

    // document.getElementsByClassName("btn").click(function(){
    //     document.querySelector("h1").innerHTML="hello";
    // })
    
    var source="images/dice"+random+".png";
    document.querySelector("img").setAttribute("src",source);
    
    var random1=Math.floor(Math.random()*6)+1;
    var source="images/dice"+random1+".png";
    document.querySelector(".two").setAttribute("src",source);
    
    if(random1>random){
        document.querySelector(".result").innerHTML="player 2 won";
    }
    else if(random>random1)
    {
        document.querySelector(".result").innerHTML="player 1 won";
    }
    else{
        document.querySelector(".result").innerHTML="draw";
    }  
});
// var random=Math.floor(Math.random()*6)+1;

// document.getElementsByClassName("btn").click(function(){
//     document.querySelector("h1").innerHTML="hello";
// })

// var source="images/dice"+random+".png";
// document.querySelector("img").setAttribute("src",source);

// var random1=Math.floor(Math.random()*6)+1;
// var source="images/dice"+random1+".png";
// document.querySelector(".two").setAttribute("src",source);

// if(random1>random){
//     document.querySelector(".result").innerHTML="player 2 won";
// }
// else if(random>random1)
// {
//     document.querySelector(".result").innerHTML="player 1 won";
// }
// else{
//     document.querySelector(".result").innerHTML="draw";
// }