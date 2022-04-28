document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;
var timer;



function autoSlider (){
  timer = setInterval(sliderLeft, 7000);
}


function sliderLeft(){
  var polosa = document.getElementById('polosa');
  width = document.querySelector('.slider').offsetWidth;
  console.log(width);
  left = left - width;
  console.log(left);
  if (left < -2*width){
    left = 0;
  }
  polosa.style.left = left +'px';
}
autoSlider();
