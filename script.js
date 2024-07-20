document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('.input button');


    button.addEventListener('click', function() {
        alert('Thanks! For signing Up the newletter , Have A Great Day!');
    });
});

document.addEventListener('DOMContentLoaded' , function(){
    const button = document.querySelector('.form button');

    button.addEventListener('click' , function(){
        alert('Your Form Submitted , Have A Great Day!')
    })
})




const bar = document.getElementsByClassName('bar');
const nav = document.getElementsByClassName('navbar');

if(bar) {
    bar.addEventListener('click' , () =>{
        nav.classList.add('active')
    })
}


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

