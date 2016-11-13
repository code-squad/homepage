(function() {
    "use strict"; 

    function runScrollAnimation(targetTop) {
      var STEP = 10;
      var scrollValue=0;

      function _move() {
        if(!scrollValue)  scrollValue= STEP;
        else scrollValue = STEP + scrollValue*1.10;

        if(scrollValue < targetTop) { 
          window.scrollTo(0, scrollValue);
          window.requestAnimationFrame(_move);
        } else {
          window.scrollTo(0, targetTop);
        }
      }
      window.requestAnimationFrame(_move);
    }

    document.querySelector(".course-kind").addEventListener("click", function(evt) {
      evt.preventDefault();
      if(evt.target.nodeName ==="BUTTON") {
        var parentDiv = evt.target.parentElement.parentElement;
        var parent = parentDiv.parentElement;
        var index = Array.prototype.indexOf.call(parent.children, parentDiv);
        var target = document.querySelectorAll("section.master-course")[index+1];
        var targetTop = target.offsetTop;
        runScrollAnimation(targetTop)
      }
    });

})(); 