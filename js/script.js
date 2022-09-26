let promoBtn = document.querySelector('#promoBtn');
let promoClose = document.querySelector('#promoClose');
let promoModal = document.querySelector('#promoModal');
let cell1 = document.querySelector('.cell1');
let cell2 = document.querySelector('.cell2');
let cell3 = document.querySelector('.cell3');
let cell4 = document.querySelector('.cell4');
let cell5 = document.querySelector('.cell5');
let galleryModal1 = document.querySelector('#galleryModal1');
let galleryModal2 = document.querySelector('#galleryModal2');
let galleryModal3 = document.querySelector('#galleryModal3');
let galleryModal4 = document.querySelector('#galleryModal4');
let galleryModal5 = document.querySelector('#galleryModal5');
let galleryClose1 = document.querySelector('#galleryClose1');
let galleryClose2 = document.querySelector('#galleryClose2');
let galleryClose3 = document.querySelector('#galleryClose3');
let galleryClose4 = document.querySelector('#galleryClose4');
let galleryClose5 = document.querySelector('#galleryClose5');
let nextSlideBtn = document.querySelector('#nextSlideBtn');
let prevSlideBtn = document.querySelector('#prevSlideBtn');
let slideList = document.querySelector('.slide_list');
let curentSlide = 0;
let navbar = document.querySelector('.navbar');
let buttonTop = document.querySelector('.button-top');
let products = document.querySelector('#products');
let productsLink = document.querySelector('.nav-link[href="#products"]');
let navItems = document.querySelectorAll('.nav-item');
let service = document.querySelector('#service');
let serviceLink = document.querySelector('.nav-link[href="#service"]');
let galleryWork = document.querySelector('#gallery-work');
let galleryWorkLink = document.querySelector('.nav-link[href="#gallery-work"]');
let pricing = document.querySelector('#pricing');
let pricingLink = document.querySelector('.nav-link[href="#pricing"]');
let contact = document.querySelector('#contact');
let contactLink = document.querySelector('.nav-link[href="#contact"]');
let homeLink = document.querySelector('.nav-link[href="#body"]');

window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop >= 150){
        navbar.classList.add('navbar-white');
    }
    else{
        navbar.classList.remove('navbar-white');
    }
    if(document.documentElement.scrollTop >= 400){
        buttonTop.style.display = 'block';
    }
    else{
        buttonTop.style.display = 'none';
    }
    if(document.documentElement.scrollTop <= 100){
        navItems.forEach(function(item){
            item.classList.remove('active');
        })
        homeLink.parentElement.classList.add('active');
    }
    if(document.documentElement.scrollTop >= products.offsetTop){
        navItems.forEach(function(item){
            item.classList.remove('active');
        })
        productsLink.parentElement.classList.add('active');
    }
    if(document.documentElement.scrollTop >= service.offsetTop){
        navItems.forEach(function(item){
            item.classList.remove('active');
        })
        serviceLink.parentElement.classList.add('active');
    }
    if(document.documentElement.scrollTop >= galleryWork.offsetTop){
        navItems.forEach(function(item){
            item.classList.remove('active');
        })
        galleryWorkLink.parentElement.classList.add('active');
    }
    if(document.documentElement.scrollTop >= pricing.offsetTop){
        navItems.forEach(function(item){
            item.classList.remove('active');
        })
        pricingLink.parentElement.classList.add('active');
    }
    if(document.documentElement.scrollTop >= contact.offsetTop){
        navItems.forEach(function(item){
            item.classList.remove('active');
        })
        contactLink.parentElement.classList.add('active');
    }
})

cell1.addEventListener('click', function(e){
    galleryModal1.style.display = 'flex';
    e.preventDefault()
})

cell2.addEventListener('click', function(e){
    galleryModal2.style.display = 'flex';
    e.preventDefault()
})

cell3.addEventListener('click', function(e){
    galleryModal3.style.display = 'flex';
    e.preventDefault()
})

cell4.addEventListener('click', function(e){
    galleryModal4.style.display = 'flex';
    e.preventDefault()
})

cell5.addEventListener('click', function(e){
    galleryModal5.style.display = 'flex';
    e.preventDefault()
})

promoBtn.addEventListener('click', function(){
    promoModal.style.display = 'flex';
})

promoModal.addEventListener('click', function(e){
    if(e.target === promoModal){
    promoModal.style.display = 'none';
    }
})

promoClose.addEventListener('click', function(){
    promoModal.style.display = 'none';
})

galleryClose1.addEventListener('click', function(){
    galleryModal1.style.display = 'none';
})

galleryClose2.addEventListener('click', function(){
    galleryModal2.style.display = 'none';
})

galleryClose3.addEventListener('click', function(){
    galleryModal3.style.display = 'none';
})

galleryClose4.addEventListener('click', function(){
    galleryModal4.style.display = 'none';
})

galleryClose5.addEventListener('click', function(){
    galleryModal5.style.display = 'none';
})

nextSlideBtn.addEventListener('click', function(){
    if(curentSlide>=slideList.children.length -1){
        curentSlide = 0;
    }
    else{
        curentSlide++;
    }
    slideList.style.transform = 'translate(-'+curentSlide+'00%)';
})

prevSlideBtn.addEventListener('click', function(){
    if(curentSlide<=0){
        curentSlide = slideList.children.length -1;
    }
    else{
        curentSlide--;
    }
    slideList.style.transform = 'translate(-'+curentSlide+'00%)';
})