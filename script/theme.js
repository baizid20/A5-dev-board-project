document.getElementById('theme-btn').addEventListener('click',function(){


  let r = Math.round(Math.random()*255);
  let g = Math.round(Math.random()*255);
  let b = Math.round(Math.random()*255);
  const rgbCode = `rgb(${r},${g},${b})`;
  

  document.body.style.backgroundColor = rgbCode;

  
   
})
