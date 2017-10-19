window.onload=function(){
    //////////////////////////////////////////////////////////////////////////////////////
    //轮播
    let num=0;
    let kuang=document.getElementsByClassName('lunbokuang')[0];
    let lunbolis=kuang.getElementsByTagName('li');
    let slides=document.getElementsByClassName("slide");
    for(let i=0;i<lunbolis.length;i++) {
        lunbolis[i].onmouseover = function () {
            for (let j = 0; j < lunbolis.length; j++) {
                lunbolis[j].style.background = ' rgba(255, 255, 255, 0.2)';
                slides[j].style.display='none';
            }
            lunbolis[i].style.background = 'white';
            slides[i].style.display='block';
            num=i;
        }
    }
///////////////////////////////////////////////////////////////////////////////////////////////
    //自动播放
    function move() {
        num++;
        if(num==slides.length){
            num=0;
        }
        for(let i=0;i<slides.length;i++){
            lunbolis[i].style.background = 'rgba(255, 255, 255, 0.2)';
            slides[i].style.display='none';
        }
        lunbolis[num].style.background = 'white';
        slides[num].style.display='block';
    }
    let t=setInterval(move,2000);
//////////////////////////////////////////////////////////////////////////////////////////
   //按需加载
    let scrolltop=document.body.scrollTop;
    let cool=document.querySelector("row1>span");


}