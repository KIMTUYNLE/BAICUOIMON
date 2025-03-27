// JavaScript Document
$('#slide1').owlCarousel({
loop:true,	// cho lap lại
items:1,	// xuất hiện 1 ảnh thôi
smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay:true,		// cho phép tự động chạy
autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
dots:true,
})
$('#slide2').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#slide3').owlCarousel({
	autoplay:true,
	autoplayTimeout:1000,
    loop:true,
    margin:10,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:6
        }
    }
})
