$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function assistirAgora(){
    var element = document.getElementById('video');
    element.innerHTML = '<a data-popup="true" href="https://www.youtube.com/embed/oYXCjJa_aBg" data-href="https://www.youtube.com/embed/oYXCjJa_aBg" data-size="md" data-draggable="true"></a>'
}