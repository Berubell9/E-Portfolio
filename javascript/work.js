
let list = document.querySelectorAll('.list');
let imgbox = document.querySelectorAll('.imgbox');
for(let i = 0; i<list.length; i++){
  list[i].addEventListener('click',function(){
    for(let j = 0; j<list.length; j++){
      list[j].classList.remove('active');
    }
    this.classList.add('active'); 

    let datafilter = this.getAttribute('data-filter');

    for(let k = 0; k<imgbox.length; k++){
        imgbox[k].classList.remove('active');
        imgbox[k].classList.add('hide');
        
        if(imgbox[k].getAttribute('data-item') == datafilter || datafilter == "all"){
            imgbox[k].classList.remove('hide');
            imgbox[k].classList.add('active');
        }
    }
  })
}

function togglePopup1(){
  document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2(){
  document.getElementById("popup-2").classList.toggle("active");
}
function togglePopup3(){
  document.getElementById("popup-3").classList.toggle("active");
}
function togglePopup4(){
  document.getElementById("popup-4").classList.toggle("active");
}
function togglePopup5(){
  document.getElementById("popup-5").classList.toggle("active");
}
function togglePopup6(){
  document.getElementById("popup-6").classList.toggle("active");
}
function togglePopup7(){
  document.getElementById("popup-7").classList.toggle("active");
}
function togglePopup8(){
  document.getElementById("popup-8").classList.toggle("active");
}
function togglePopup9(){
  document.getElementById("popup-9").classList.toggle("active");
}
function togglePopup10(){
  document.getElementById("popup-10").classList.toggle("active");
}
function togglePopup11(){
  document.getElementById("popup-11").classList.toggle("active");
}
function togglePopup12(){
  document.getElementById("popup-12").classList.toggle("active");
}
function togglePopup13(){
  document.getElementById("popup-13").classList.toggle("active");
}
function togglePopup14(){
  document.getElementById("popup-14").classList.toggle("active");
}
function togglePopup15(){
  document.getElementById("popup-15").classList.toggle("active");
}