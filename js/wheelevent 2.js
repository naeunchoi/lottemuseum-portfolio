var scrollEvent = false;
var scroll_action = true;
var scroll = true;
// var count = 0;
if( count == null){
    var count = 0;
 }else{
    var count = sessionStorage.getItem("var");
 }
// 새로고침 할 때 저장하는 코드 
// local버전이랑 seeseion은 창을닫은면 사라진다. 임의로 var

    var s_top = $(window).scrollTop()+200;   
    var s_top_action = $(window).scrollTop();
    var b5_top = $('#con5').offset().top;
    var b5_bot = $('#con5').offset().top + $('#con5').height();
	var header = $('header');
    var container;

     
    var Start = new Date();

    Stop = new Date() 
    Diff = Stop.getTime() - Start.getTime(); 
    Diff = Diff / 1000
    
    
console.log(Diff);


function headerEvent(){
    $('header').removeClass('white');
    // $('header').addClass("white");
    if( count == 0){
        $('header').addClass('header').addClass("white");
        $('.nav_exhibition').removeClass('nav_exhibition_off').removeClass('nav_exhibition_on');
        $('.nav_artist').removeClass('nav_artist_off').removeClass('nav_artist_on');
        $('.nav_artwork').removeClass('nav_artwork_off').removeClass('nav_artwork_on');
        $('.nav_information').removeClass('nav_information_off');
    }else if( count == 1){
        $('header').addClass('header');
        $('.nav_exhibition').removeClass('nav_exhibition_off').addClass('nav_exhibition_on');
        $('.nav_artist').addClass('nav_artist_off');
        $('.nav_artwork').addClass('nav_artwork_off');
        $('.nav_information').addClass('nav_information_off');
    }else if( count == 2){
        $('header').addClass('header');
        $('.nav_exhibition').removeClass('nav_exhibition_on').addClass('nav_exhibition_off');
        $('.nav_artist').removeClass('nav_artist_off').addClass('nav_artist_on');
        $('.nav_artwork').addClass('nav_artwork_off');
        $('.nav_information').addClass('nav_information_off');
    }else if( count == 3){
        $('header').addClass('header');
        $('.nav_exhibition').removeClass('nav_exhibition_on').addClass('nav_exhibition_off');
        $('.nav_artist').removeClass('nav_artist_on').addClass('nav_artist_off');
        $('.nav_artwork').removeClass('nav_artwork_off').addClass('nav_artwork_on');
        $('.nav_information').addClass('nav_information_off');
    }else if( count == 4){
        $('header').addClass('header').addClass("white").css({transiton:'all .5s'});
        $('.nav_exhibition').removeClass('nav_exhibition_on').addClass('nav_exhibition_off');
        $('.nav_artist').removeClass('nav_artist_on').addClass('nav_artist_off');
        $('.nav_artwork').removeClass('nav_artwork_on').addClass('nav_artwork_off');
        $('.nav_information').removeClass('nav_information_off');
    }else if( count == 5){
        $('header').removeClass('header');
    }
} 

var container = $('.conwrap > .container');

container.removeClass('on').removeClass('off');

//리셋하고 새로운  count를 주고 
container.eq(count).removeClass('on').removeClass('off');
container.eq(count).addClass('on');
container.eq(count-1).addClass('up');
container.eq(count+1).addClass('down');

if( count == 4 || count == 5 || count == 0){
   $('header').addClass("white");
   }

   setTimeout(function(){
    container.eq(1).addClass('motion');
    container.eq(2).addClass('motion');
    container.eq(3).addClass('motion');
   // scrollEvent = false; 
}, Diff);


$("html,body").on('mousewheel',function(c){
    console.log(scroll);
    if(scroll){
        console.log(scroll);
        var duration = 1;
        // event.preventDefault();
        if(scroll_action){
            //console.log('작동');
            scroll_action = false;
             var m = c.originalEvent.wheelDelta;
              
             var sb = container.height();
           //  console.log(m + "mosedelta");
             container.removeClass('hide_up');
            // container.eq(count).addClass('on');
             if(m > 0 && scrollEvent == false && count > 0){
                 container.removeClass("on down up up2");
                 scrollEvent = true;
                 count--;
                 container.eq((count-1)).addClass('up2');
                 
                 container.eq(4).css({opacity:1,top:0+'px'});
                 $('.footer').css({height:'0'});
    
    
                 if(count == 4){
                    container.eq(4).addClass("on");
                }else{
                    if(count !== 3){
                      container.eq(4).css({opacity:0});   
                    }
                    container.eq(count).addClass("up on");                
                }
                     setTimeout(function(){
                         scrollEvent = false; 
                    }, 1000);
                    
             }else if(m < 0 && scrollEvent == false && count < 5 ){
                 container.removeClass("on down");
                 container.eq(0).addClass('motion');
                 
                 scrollEvent = true;
                 count++;
                  
                if(count > 3){
                    if(count == 4){
                        container.eq(count).addClass("down on");
                    }else if(count == 5){
                        var footerH = $('.footer').height();
                        
                        container.eq(4).removeClass('up').css({opacity:1,top:"-"+360+'px'});
                        
                        $('.footer').css({height:'360px'})   
                    }     
                }else {
                    container.eq(count).addClass("down on");
                    container.eq(0).addClass('motion');
                    container.eq(1).addClass('motion');
                    container.eq(2).addClass('motion');
                    container.eq(3).addClass('motion');
                    $('.footer').css({height:'0'})
                }
                  setTimeout(function(){
                         scrollEvent = false; 
                    }, 1000);
            }
            count = count;
            // counter가 계속 바꾸니ㅣ가 그 카운터를 이미 위에서 정해 놓았기 때믄에  count를 정해줘서 새로 고침해도 이건 count이다 !!!     얘를 쓴 이유 휠 스크롤을 3번까지 하면 위로하면 4번이 떳었는데 이걸 정의 해준것.
         //  console.log(count);
    
         headerEvent();
            sessionStorage.setItem("var", count); //변수저장
    
    
            setTimeout(function(){
                scroll_action = true; 
            },duration);
        }
    }
   
});



function button(){
    function reset(){$('.conwrap > .container').removeClass('down on');} 


    $(document).on('click','.side_nav_wrap > a',function(event){
        event.preventDefault();
        var navNum = $(this).index()+1;
      //  console.log(navNum);
        reset();
        $('.conwrap > .container').eq(navNum).addClass('down on');
    
    count = navNum;
    
    headerEvent();
    console.log(count);
     });
    
             
     $(document).on('click','.sub_scroll_icon_totop > a',function(){
        event.preventDefault();
        reset();
        $('.conwrap > .container').eq(0).addClass('down on');
        
        count = 0;
        
        headerEvent();
     });
     
     $(document).on('click','.main_scroll_icon > a',function(){
         event.preventDefault();
         reset();
         $('.conwrap > .container').eq(5).addClass('down on');

         count = 5;
         
         headerEvent();
      });
      
   


}
button();
$('.dim').css({display:'none'});

$(document).on( 'click', '#read2',function(){
    $('.container2_text_wrap').addClass('popup');
    $('#read2close').css({display:'block'});
    $('.dim').css({display:'block'});
    $('.content_readmore').css({display:'none'});
    $('.container2_date').css({display:'none'});
    scroll = false;
    console.log(scroll);
 
 });
 
 $(document).on( 'click', '#read2close',function(){
     $('.container2_text_wrap').removeClass('popup');
     $('#read2close').css({display:'none'});
     $('.dim').css({display:'none'});
     $('.content_readmore').css({display:'block'});
     $('.container2_date').css({display:'block'});
     scroll = true;
     console.log(scroll);
 
  });



$(document).on( 'click', '#read3',function(){
   $('.container3_text_wrap').addClass('popup');
   $('#read3close').css({display:'block'});
   $('.dim').css({display:'block'});
   $('.content_readmore').css({display:'none'});
   scroll = false;
});


$(document).on( 'click', '#read3close',function(){
    $('.container3_text_wrap').removeClass('popup');
    $('#read3close').css({display:'none'});
    $('.dim').css({display:'none'});
    $('.content_readmore').css({display:'block'});
    scroll = true;
 });
        

