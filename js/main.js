(function(){
  const stage = document.querySelector('.stage');
  const house = document.querySelector('.house');
  const barElem = document.querySelector('.progress-bar');
  const mousePos = {x: 0, y: 0};
  const selectCharElem = document.querySelector('.select-character');
  let maxScrollValue;
  
  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }
  window.addEventListener('scroll', function(){
    const scrollPer = pageYOffset / maxScrollValue;
    const zMove = scrollPer * 980 - 490;

    house.style.transform = 'translateZ(' + zMove + 'vw)';
    barElem.style.width = scrollPer * 100 + '%';
  });

  window.addEventListener('mousemove',function(e){
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    stage.style.transform = 'rotateX('+ (mousePos.y*5) + 'deg) rotateY(' + (mousePos.x*5) + 'deg)';
  });

  window.addEventListener('resize',resizeHandler);
  resizeHandler();

  stage.addEventListener('click', function(e){
    new Character({
      xPos: e.clientX / window.innerWidth * 100,
      speed : Math.random() * 0.5 + 0.2
    });
  });

  selectCharElem.addEventListener('click',function(e){
    let value = e.target.getAttribute('data-char');
    document.querySelector('body').setAttribute('data-char',value); 
  });
})();