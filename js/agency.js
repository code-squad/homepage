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
    runXHR("../../../data/privacy.htm");
    state = "privacy";
  });

  elTerm.addEventListener("click", function(){
    if(state === "term") return;
    elModalLabel.innerText = this.textContent;
    runXHR("../../../data/term.htm");
    state = "term";
  });
})()


/* blog post slider */
var elBlog = document.querySelector(".blog-post-links");

(function() {
  var url = 'https://tlhm20eugk.execute-api.ap-northeast-2.amazonaws.com/prod/lambda_get_blog_info';
  runXHR(url);

  function runXHR(url) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", blogPostSlider);
    oReq.open("GET", url);
    oReq.send();
  }

  function blogPostSlider() {
    var data = JSON.parse(this.responseText);
    var list = JSON.parse(data.body);
    var slides = list.Items.length;

    for (var i = 0; i < slides + 1; i++) {
      e = i % slides;
      var title = list.Items[e].title;
      var link = list.Items[e].link;
      var post = '<li><a href="' + link + '" target="_blank">' + title + "</a></li>";
      elBlog.insertAdjacentHTML('beforeend', post);
    }

    lastSlide = elBlog.childNodes[slides - 1];
    cln = lastSlide.cloneNode(true);
    elBlog.insertBefore(cln, elBlog.childNodes[0]);

    /* slider */
    // init value
    var elBlogBanner = document.querySelector(".blog-banner");
    var slidesNum = elBlog.childElementCount;
    

    
    window.addEventListener('resize',changeSlideWidth);
   
    function changeSlideWidth(){
      var width;
        var container = document.getElementsByClassName("blog-content")[0];
        var containerwidth = getComputedStyle(container, null).getPropertyValue("width").replace(/\D/g, '').toString();
      
        if (containerwidth > 200000){
          width = Number(/[0-9]{3}/.exec(containerwidth));
        }
        else if (containerwidth === '105299'){
          width = Number(/[0-9]{4}/.exec(containerwidth));
        }
        else if (containerwidth < 1000) { width = containerwidth;}
       console.log(containerwidth, width);
      
      elBlog.style.width = (slidesNum * width) + 'px';
      elBlog.style.transform = "translate(-" + width * 1 + "px, 0px)";
      elBlog.style.transition = "none";
    }

    function getwidthVal(){
        
      
    }

    var container = document.getElementsByClassName("blog-content")[0];
    var containerwidth = getComputedStyle(container, null).getPropertyValue("width").replace(/\D/g, '').toString();
    
    if (containerwidth > 200000){
        width = Number(/[0-9]{3}/.exec(containerwidth));
    }
        else if (containerwidth === '105299'){
          width = Number(/[0-9]{4}/.exec(containerwidth));
        }
        else if (containerwidth < 1000) { width = containerwidth;}
    elBlog.style.width = (slidesNum * width) + 'px';
    elBlog.style.transform = "translate(-" + width * 1 + "px, 0px)";
    elBlog.style.transition = "none";
    
    setTimeout(function() {
        elBlog.style.transition = "";
    }, (600));

    

    // active button
    var i = 1;
    elBlog.style.width = (slidesNum * width) + 'px';
    elBlog.style.transform = "translate(-" + width * 1 + "px, 0px)";
    
    // active button
    var slideButton = Array.prototype.slice.call(elBlogBanner.getElementsByTagName("button"));

    for (var e = 0; e < slideButton.length; e++) {
      slideButton[e].addEventListener("click", function(evt) {
        var target = evt.target;
        if (target.tagName === "SPAN") {
          target = target.parentNode;
        }

        if (target.className === "next") {
          i++;
          if (i === slidesNum - 1) {
            i = slidesNum % i;
            if (i === 0) {
              i = 2;
            }
          }
          moveNext(i);
        }
        if (target.className === "previous") {
          if (i < 1) {
            i = slidesNum - i - 2;
          }
          movePrevious(i);
          i--;
        }
      });
    }

    function moveNext(i) {
      if (i === slidesNum - 2) {
        elBlog.style.transform = "translate(-" + width * i + "px, 0px)";
        setTimeout(function() {
          elBlog.style.transition = "none";
          elBlog.style.transform = "translate(0px, 0px)";
        }, (600));
      } else {
        elBlog.style.transition = "";
        elBlog.style.transform = "translate(-" + width * i + "px, 0px)";
      }
    }

    function movePrevious(i) {
      if (i === 1) {
        console.log('last');
        elBlog.style.transform = "translate(" + (width - (width * i)) + "px, 0px)";
        setTimeout(function() {
          elBlog.style.transition = "none";
          elBlog.style.transform = "translate(-" + width * (slidesNum - 2) + "px, 0px)";
        }, (600));
      } else {
        elBlog.style.transition = "";
        elBlog.style.transform = "translate(" + (width - (width * i)) + "px, 0px)";
      }
    }
  }
})()