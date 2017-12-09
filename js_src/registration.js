(function() {
var el = document.querySelector(".registration-guide .pre-msg");
function rc() {
  const red = Math.floor(Math.random() * 256 );
  const green = Math.floor(Math.random() * 256 );
  const blue = Math.floor(Math.random() * 256 );
  return ( 'rgb(' + red + ',' + green + ',' + blue + ')');
}

var sTime = new Date();

(function step() {
  setTimeout(function() {
    el.style.color = rc();
    var currentTime = new Date();
    var itv = (currentTime - sTime);
    if(itv < 8000) step();
  },200);
})();


// function step(ts) {
//   if (!sTime) sTime = ts;
//   var progress = ts - sTime;
//   el.style.color = rc();
//   if (progress < 3000) {
//     window.requestAnimationFrame(step);
//   }
// }

// window.requestAnimationFrame(step);
})();
