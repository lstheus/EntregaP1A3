//        <div class="card-slider-wrapper ">
// <div class="slide-content ">


// <div class="card-slide ">

// Lógica do carrossél

let slider = document.querySelector('.card-slider-wrapper');
let innerSlider = document.querySelector('.slide-content');

let pressed = false;
let startX;
let x;

slider.addEventListener('mousedown', (e) => {
  pressed = true;
  startX = e.offsetX - innerSlider.offsetLeft;
  slider.style.cursor = 'grabbing';

})

slider.addEventListener('mouseenter', () => {
  slider.style.cursor = 'grab';

})


// slider.addEventListener('mouseleave', ()=>{
//   slider.style.cursor = 'default';


// })

slider.addEventListener('mouseup', () => {
  slider.style.cursor = 'grab';

})


// Talvez?
window.addEventListener('mouseup', () => {
  pressed = false;
})


slider.addEventListener('mousemove', (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;

  innerSlider.style.left = `${x - startX}px`;
  console.log(innerSlider.style.left)
})



