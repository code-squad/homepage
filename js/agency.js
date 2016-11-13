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

    function getMatchedTargetOffsetTop(el) {
      if(el.nodeName ==="BUTTON") {
        var parentDiv = el.parentElement.parentElement;
        var parent = parentDiv.parentElement;
        var index = Array.prototype.indexOf.call(parent.children, parentDiv);
        var target = document.querySelectorAll("section.master-course")[index+1];
        var targetTop = target.offsetTop;
      }
      return targetTop;
    }

    document.querySelector(".course-kind").addEventListener("click", function(evt) {
      if(! window.requestAnimationFrame) return;
      evt.preventDefault();
      var targetTop = getMatchedTargetOffsetTop(evt.target);
      runScrollAnimation(targetTop);
    });

})(); 