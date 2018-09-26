window.addEventListener("load", function () {
  var cover = document.querySelector("header");
  cover.style.opacity = 1.0;
});

// Scroll Member viewer
(function () {
  var memberWrap = document.querySelector("#team .member-wrap");
  var memberWrapOffsetTop = memberWrap.offsetTop;
  var members = memberWrap.querySelectorAll(".member-content");
  var memberHeight = members[0].offsetHeight;
  var memberCount = members.length;;
  var step = memberHeight * 1.2;
  var initDiffValue = -250;
  var lastDiffValue = (memberCount * step) + memberHeight;
  var activeClassName = "onMemberDesc";
  var mobileMaxWidth = 768;

  function toggleViewByScroll() {
    setTimeout(function () {
      var currentScrolly = window.scrollY;
      var diff = (currentScrolly - memberWrapOffsetTop);

      var activeElement = document.querySelector("#team .onMemberDesc");
      if (activeElement) activeElement.classList.remove(activeClassName);

      var baseValue = (diff - initDiffValue);

      if (baseValue > 0 && baseValue < lastDiffValue) {
        var nth = Math.ceil(baseValue / step);
        if (nth <= memberCount) {
          var target = document.querySelector("#team .team-member:nth-child(" + nth + ") > .member-content");
          target.classList.add(activeClassName);
        }
      }
      //recursive
      toggleViewByScroll();
    }, 16);
  }

  function removeHoverEffect() {
    document.querySelectorAll(".member-hover-viewer").forEach(function (v) {
      v.classList.remove("member-hover-viewer")
    });
  }

  if (window.innerWidth > mobileMaxWidth) return;
  removeHoverEffect();
  toggleViewByScroll();

})();


//image scroller
!(function () {

  var swipeNode = document.querySelector(".swipe");
  var btnNaviNode = document.querySelector(".buttonNavi");
  var resizeTimer = null;
  var startTime = null;
  var bRight = false;


  /*TODO. 
  1. 좌우버튼 애니메이션
  2. 이미지파일 교체
  3. 이미지 오버시 효과 (scale)
  4. mobile test
  */


  var classNameList = Array.prototype.slice.call(btnNaviNode.querySelectorAll("button")).map(function (node) {
    return node.className;
  });

  function hideNaviBtn() {
    var btnNavi = document.querySelector(".buttonNavi");
    btnNavi.style.display = "none";
  }


  function _isRightButtron(list, name) {
    return list.indexOf(name) > 0;
  }

  if (_.chkMobile()) hideNaviBtn();

  //todo. remove ?
  window.addEventListener('resize', function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {

      //$0.style.transform = "translateX(300px)";

    }, 300);
  });


  function runScrollAnimation(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var currentScrollLeft = swipeNode.scrollLeft;
    var currentValue = Math.min(progress / 10, 100);
    currentValue = (bRight) ? currentValue : currentValue * (-1);

    swipeNode.style.willChange = 'scroll-position';
    swipeNode.scrollLeft = currentScrollLeft + currentValue;

    if (progress < 600) {
      window.requestAnimationFrame(runScrollAnimation);
    }
  }

  btnNaviNode.addEventListener("mousedown", function (e) {
    var className = e.target.className;
    if(classNameList.indexOf(className) === -1) return;
    bRight = _isRightButtron(classNameList, className);
    startTime = null;
    requestAnimationFrame(runScrollAnimation);
  })

})();
