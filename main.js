let menu=document.querySelector('#menu-bars')
let header=document.querySelector('header')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
let point1=document.querySelector('.point-1')
let point2=document.querySelector('.point-2')

window.onmousemove = (e) =>{
    point1.style.top = e.pageY +'px'
    point1.style.left = e.pageX +'px'
    point2.style.top = e.pageY +'px'
    point2.style.left = e.pageX +'px'
}

let links = document.querySelectorAll('a').forEach(links =>{
    
    links.onmouseenter = () =>{
        point1.classList.add('active');
        point2.classList.add('active');
    }

    links.onmouseleave = () =>{
        point1.classList.remove('active');
        point2.classList.remove('active');
    }

});



