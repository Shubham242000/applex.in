$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('.navbar').addClass('shadow-nav');
    } else {
        $('.navbar').removeClass('shadow-nav');
    }
});


document.getElementsByClassName("idea")[0].addEventListener("click",function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener("click",function (){
    document.querySelector('.bg-modal').style.display = 'none';
});

 document.getElementsByClassName("logo")[0].addEventListener("click",function(){
            location.assign("index.html");
        });

ScrollReveal({ distance: '60px' });
window.sr = ScrollReveal();
sr.reveal('', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('#rightimage', {
    duration: 2000,
    origin: 'right'
});
sr.reveal('.left', {
    duration: 2000,
    origin: 'left'
});
sr.reveal('.right', {
    duration: 2000,
    origin: 'right'
});
sr.reveal('.about', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('#tagline', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.block', {
    duration: 2000,
    origin: 'top'
});


sr.reveal('.review', {
    duration: 2000,
    origin: 'bottom'
});


sr.reveal('', {
    duration: 1000,
    origin: 'bottom'
});


