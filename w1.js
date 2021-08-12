$(document).ready(function(){
    $(".s08").slideUp(10);
    $(".s04").on("click",function(){
        $(this).children().fadeOut();
       $(this).animate({
           width:400,
           height:400,
           top:-100,
           right:-200   
       }); 
        $(".s06").slideDown(1000);
        
    });
    $(".s06").children().on("click",function(){
        $(".s06").slideUp(10);
       $(".s04").children().fadeIn();
       $(".s04").animate({
           width:100,
           height:100,
           top:25,
           right:25   
       }); 
        
        
    });
    var d=[-55,12];
    $(".s03").on("click",function(){
        var c= d.pop();
        d.unshift(c);
        
       $(".s07>a").eq(0).animate({
           left:d[0],
       },200,function(){
         $(".s07>a").eq(1).animate({
           left:d[0],
       },200,function(){
         $(".s07>a").eq(2).animate({
           left:d[0],
       },200,function(){
        $(".s07>a").eq(3).animate({
           left:d[0],
       },200);   
       });  
       });  
       });
        
        
        
    });
     $(".s01 ul li").on("click",function(){
         $(this).animate({
            width:900,
             height:900
             
         },function(){
             $(".s08").slideDown();
         });
         
         
     });
    $(".s08>span").on("click",function(){
        $(this).parent().slideUp(function(){
            $(".s01 ul li").animate({
            width:25,
             height:25
        });
        });
        
    });
    var img =["img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img7.jpg"];
    var i=3;
    var cc=setInterval(function(){
        
        
       if(i>6){
           i=3;
       }
        else{
            i++;
            
        }
        $(".s05").css({
            background:'url(img/'+i+'.jpg) no-repeat center center/cover',
            
        });
        
        
    },6000);
    $(".s05").on("click",function(){
        console.log("clicked");
        $(this).animate({
            width:500,
            height:500
        });
        
    });
    $(".s09>h2").on("click",function(){
       $(this).siblings().slideToggle(); 
    });
    
    
    });
    
    
