$(function () {
   let proliw= $('.protu>li').width();
   let proli= $('.protu').children('li');
   let prolun=$('.prolun span');
    let t=setInterval(move,3000);
    let now=0;
    let next=0;
   function move() {
       next++;
       if(next>=proli.length){
           next=0;
       }
       proli.eq(next).css({left:proliw});
       proli.eq(now).animate({left:-proliw});
       prolun.eq(now).css({background:"#d6d6d6"});
       proli.eq(next).animate({left:0});
       prolun.eq(next).css({background:"#869791"});
       now=next;
   }
})