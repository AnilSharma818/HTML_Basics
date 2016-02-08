'use restict';

var carouselModel = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
//var carouselModel = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg'];
var carouselConfig = {};
carouselConfig.frameSize = 3;
carouselConfig.animationSpeed = 300;
carouselConfig.autoScrollDelay = 600;

var animating = false;

$(document).ready(function(){
    
    console.log('Building carousel logic....');
    
    console.log('Adding images to itemlist....');
    
    carouselModel.forEach(function(item, index){
        $(".itemlist").append("<li><img/></li>");
        $(".itemlist").last().find("img:last").attr("src", "assets/images/"+item);
    });
    
    console.log('Finished adding images....');
    
    // If item length is less then frameSize then show error
    if(carouselModel.length < carouselConfig.frameSize){
        throw new Error('items are less then framesize.');
    }
    
    console.log('Positioning images....');
    
    // if items are equal to framesize, add last at first and first two items at last
    // this is to remove jerk when moving next/back, having one item in buffer and create circular dependency
    if(carouselModel.length === carouselConfig.frameSize){
        var firstItem = $('.itemlist li').eq(0);
        var secondItem = $('.itemlist li').eq(1);
        $('.itemlist li:first').before($('.itemlist li:last').clone());
        $('.itemlist li:last').after(firstItem.clone());
        $('.itemlist li:last').after(secondItem.clone());
    }
    
    // if items are equal to one + framesize then framesize add last to first position and number if items to framesize  at last
    // this is to remove jerk when moving next/back, having one item in buffer and create circular dependency
    if(carouselModel.length === (carouselConfig.frameSize+1)){

        var firstItem = $('.itemlist li').eq(0);
        var secondItem = $('.itemlist li').eq(1);
        var thirdItem = $('.itemlist li').eq(2);
        $('.itemlist li:first').before($('.itemlist li:last').clone());
        $('.itemlist li:last').after(firstItem.clone());
        $('.itemlist li:last').after(secondItem.clone());
        $('.itemlist li:last').after(thirdItem.clone());
    }
    
    // if items are more then framesize add last to first position
    if(carouselModel.length > carouselConfig.frameSize){
        $('.itemlist li:first').before($('.itemlist li:last'));
    }
    
    var itemWidth = $('.itemlist li').outerWidth(true);
    var defaultPosition = itemWidth*(-1);
    // Since we having one item in buffer, shift position accordingly to show first item in frame

    $('.itemlist').css({'left' : defaultPosition,
                        'width': $('.itemlist li').length*itemWidth});
    
    console.log('Positioning finished....');
    
    console.log('Adding handler to back/next....');
    
    var intervalId = null;
    
    $(".leftscroll").mousedown(function(){
        
        intervalId = setInterval(scrollLeft, carouselConfig.autoScrollDelay);
        
    });
    
    $(".leftscroll").mouseup(function(){
        
        if(intervalId != null){
            clearInterval(intervalId);
            intervalId = null;
        }
        scrollLeft();
        
    });
    
    $(".rightscroll").mousedown(function(){
            
        intervalId = setInterval(scrollRight, carouselConfig.autoScrollDelay);    
        
    });
                              
    $(".rightscroll").mouseup(function(){
        
        if(intervalId != null){
            clearInterval(intervalId);
            intervalId = null;
        }
        scrollRight();
        
    });
    
    function scrollLeft(){
        if(animating)return;
        
        animating = true;
        var leftPos = parseInt($(".itemlist").css("left"));
        leftPos = leftPos + itemWidth;
        
        $(".itemlist").animate({'left': leftPos}, carouselConfig.animationSpeed, function(){
            $('.itemlist li:first').before($('.itemlist li:last'));  
            $('.itemlist').css({'left' : defaultPosition});
            animating = false;
        });
    }
    
    function scrollRight(){
        if(animating)return;
        
        animating = true;
        var leftPos = parseInt($(".itemlist").css("left"));
        leftPos = leftPos - itemWidth;
        
        $(".itemlist").animate({'left': leftPos}, carouselConfig.animationSpeed, function(){
            $('.itemlist li:last').after($('.itemlist li:first'));  
            $('.itemlist').css({'left' : defaultPosition}); 
            animating = false;
        });
    }
    
    console.log('Adding handler to back/next finished....');
    
    console.log('End Building carousel logic....');
}); 
