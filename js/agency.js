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
    var sID =  el.parentElement.getAttribute("href");
    return document.querySelector(sID).offsetTop;
  }

  function attachCourseKindEvents(elCourseKind) {
    elCourseKind.addEventListener("click", function(evt) {
      if(! window.requestAnimationFrame) return;
      if(evt.target.nodeName !== "IMG") return;
      evt.preventDefault();
      var targetTop = getMatchedTargetOffsetTop(evt.target);
      runScrollAnimation(targetTop);
    });
  }

  function replaceCSSClass(b, first, second) {
    if(b) { 
      document.querySelectorAll("." + first).forEach(function(v){
       v.classList.remove(first);
       v.classList.add(second);
     });
      return;
    }
      document.querySelectorAll("."+second).forEach(function(v){
       v.classList.remove(second);
       v.classList.add(first);
     });
  }

  function monitorArrowRightChange() {
    var mediaQuery = window.matchMedia('(max-width: 767px)');
    replaceCSSClass(mediaQuery.matches, "glyphicon-arrow-right", "glyphicon-arrow-down");
    mediaQuery.addListener(function(evt) {
      replaceCSSClass(mediaQuery.matches, "glyphicon-arrow-right", "glyphicon-arrow-down");
    }); 
 }

  //Main
  var elCourseKind =  document.querySelector(".course-level");
  //var elCousreCommon = document.querySelector(".course-common");

  if(elCourseKind) { 
    //scroll animation by button event
    //attachCourseKindEvents(elCousreCommon);
    attachCourseKindEvents(elCourseKind);
    //responsive glyphicon ui
    if(typeof window.matchMedia !=="undefined") monitorArrowRightChange();
  }

})();

(function(){
  var state = "";
  var elModalBody = document.querySelector("#myModal .modal-body");
  var elModalLabel = document.querySelector("#myModalLabel");
  var elPrivacy = document.querySelector("#codesquad-privacy");
  var elTerm = document.querySelector("#codesquad-term");

  function reqListener () {
    elModalBody.innerHTML = this.responseText;
  }

  function runXHR(url) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", url);
    oReq.send();
  }

  //TODO. Refactoring.
  elPrivacy.addEventListener("click", function(){
    if(state === "privacy") return;
    elModalLabel.innerText = this.textContent;
    runXHR("http://codesquad.kr/data/privacy.htm");
    state = "privacy";
  });

  elTerm.addEventListener("click", function(){
    if(state === "term") return;
    elModalLabel.innerText = this.textContent;
    runXHR("http://codesquad.kr/data/term.htm");
    state = "term";
  });
})()