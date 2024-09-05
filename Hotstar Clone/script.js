let movieCard = document.getElementById("movie-card");
let video = document.getElementById("vid");
let image = document.getElementById("im");

movieCard.addEventListener("mouseover",function(){

    setTimeout(function(){
            image.style.opacity=0;
            video.play();
    },5000)

});

movieCard.addEventListener("mouseout",function(){
           video.pause();
});


window.onload=function()
{
    let fullWidth=document.getElementById('slider').offsetWidth;
    let totalCount=(fullWidth/1100)-1;

    let maxSlides=Math.floor(totalCount);
    let lastSlide=totalCount-maxSlides;

    let currentSlide=0;

    document.getElementById("swipe-left").addEventListener("click",function(){

        if(currentSlide>=1 && currentSlide!=totalCount)
        {
            currentSlide--;
             
        }
        else if(currentSlide==totalCount && lastSlide!==0)
        {
            currentSlide-=lastSlide;
        }

        document.getElementById("slider").style.marginLeft=-(currentSlide*1100)+"px";
    })




    document.getElementById("swipe-right").addEventListener("click",function(){

        if(currentSlide<maxSlides)
        {
            currentSlide++;
             
        }
        else if(currentSlide==maxSlides && lastSlide!==0)
        {
            currentSlide+=lastSlide;
        }

        document.getElementById("slider").style.marginLeft=-(currentSlide*1100)+"px";
       
    })

}