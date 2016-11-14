var li=$(".header_menu>ul >li >ul>li");
var img_1=$(".updiv .img1");
var img_2=$(".updiv .img2");
var products=$(".products");
var pop=$(".pop");
var body=$("body");
body.click(function(){
        pop.hide();
});
li.click(function(){
    event.stopPropagation();
    if(this.lastElementChild.style.display=="block"){
        $(this.lastElementChild).hide();
    }else{pop.hide();$(this.lastElementChild).show();}
})

var num=products.children().length-5;
var count=0;
var disabled=false;
var updiv=$(".updiv");
img_2.click(function(){
    if(count==-1){count=0;}
    count++;
    var left=parseInt(products.css("left"))-191+"px";
    //products.css("left",left);
    products.animate({left:left},300);
    if(count==0||count==num){
        img_2.css("display","none");
        img_1.css("display","block");
    }else{img_1.css("display","block");}
    console.log(updiv.children().length);
})
img_1.click(function(){
   if(parseInt(products.css("left"))!=0){
       var left=parseInt(products.css("left"))+191+"px";
       console.log(left);
       // products.css("left",left);
       products.animate({left:left},300);
   }else{img_1.css("display","none");}
    count--;
    if(count==0){
        img_1.css("display","none");
        img_2.css("display","block");
    }else{img_2.css("display","block");}
})

var slide_li=$(".slide li");
var slide_div=$(".slide div");
//slide_li.each(function(){
//    $(this).click(function(){
//       var left= $(this).index()*192+"px"
//        slide_div.css("left",left);
//    });
//})

slide_li.each(function(){
    $(this).click(function(){
        var left= $(this).index()*192+"px";
        //slide_div.css("left",left);
        slide_div.animate({left:'+'+left},300);
    });
})
//var fixed=$(".fixed");
//var f_top=parseInt(fixed.css("top"));
//window.onscroll = function () {
//    var top = document.documentElement.scrollTop || document.body.scrollTop;
//   // fixed.css("top", f_top + top + "px");
//    fixed.animate({top:f_top + top + "px"},{duration:500,queue:false});
//}

