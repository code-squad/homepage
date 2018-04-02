
window.addEventListener("load", function() {
	var cover = document.querySelector("header");
	cover.style.opacity = 1.0;
});

// Scroll Member viewer
(function(){
	var memberWrap = document.querySelector("#team .member-wrap");
	var memberWrapOffsetTop = memberWrap.offsetTop;
	var members = memberWrap.querySelectorAll(".member-content");
	var memberHeight = members[0].offsetHeight;
	var memberCount = members.length;;
	var step = memberHeight * 1.2;
	var initDiffValue = -250;
	var lastDiffValue = (memberCount * step) + memberHeight;
	var activeClassName = "onMemberDesc";

	function toggleViewByScroll() {
		setTimeout( function () {
			var currentScrolly = window.scrollY;
			var diff = (currentScrolly - memberWrapOffsetTop); 

			var activeElement = document.querySelector("#team .onMemberDesc");
			if(activeElement) activeElement.classList.remove(activeClassName);

			var baseValue = (diff - initDiffValue);

			if(baseValue > 0 && baseValue < lastDiffValue) { 
				var nth = Math.ceil( baseValue / step);
				if(nth <= memberCount) {
					var target =  document.querySelector("#team .team-member:nth-child("+ nth +") > .member-content");
					target.classList.add(activeClassName);
				}
			}
     //recursive
     toggleViewByScroll();
   },16);
	}

	function removeHoverEffect() {
		document.querySelectorAll(".member-hover-viewer").forEach( function(v) { 
			v.classList.remove("member-hover-viewer")
		});
	}

	if(window.innerWidth > 768) return;
	removeHoverEffect();
	toggleViewByScroll();

})();


// (function() {
// 	var recommData = [
// 		 {
// 		  content : "최고의 마스터들의 수준 높은 교육과 케어를 통해 실무 지식을 익힐 수 있었고,웹 개발자로서 단단하게 성장할수 있는 발판을 마련 했습니다. 개발자로서 확신이 없으신 분, 막연히 개발을 하고 싶은 모든 분들 모두 코드 스쿼드와 함께 실력있는 개발자로 성장 할 수 있습니다. 코드 스쿼드 강력 추천 합니다.",
// 		  nickName : "호갱노노 개발자 Alex"
// 		 },
// 		 {
// 		  content : "단지 학생을 위한 교육이 아닌, 개발자가 되기 위한 교육입니다 코드 스쿼드 강력 추천 합니다.",
// 		  nickName : "개발자 김휘겸"
// 		 },
// 		 {
// 		  content : "프론트엔드를 혼자 공부했을때는 여러가지 어려움이 있었습니다. 코드스쿼드는 저에게 그러한 어려움을 극복할 수 있게 해주는 조력자였을 뿐만 아니라 코스가 끝난 이후에도, 주니어 개발자로서 홀로 설 수 있는 방법을 알려주는 최고의 개발자 교육 전담팀 입니다",
// 		  nickName : "블루웨일 개발자 개구리"
// 		 },
// 		 {
// 		  content : "내가생각했던 것들을 직접 코딩할 수 있도록 만들어 줍니다. 코드스쿼드의 교육방식은 기존의 교육방식과는 다릅니다. 필요한 만큼의 이론을 빠르게 배우고 실무에서 사용할 만한 내용들을 주제로 간단한 과제에서 부터 복잡한 프로제트까지 물흐르듯 자연스럽게 이어집니다. 이러한 수업방식은 개발을 지속해 나갈 수 있는 힘을 키워줍니다.",
// 		  nickName : "NHN엔터테인먼트 개발자 브라운"
// 		 }
// 	];

// 	var selectedList = [];
// 	while(true) {
// 		var num = Math.floor(Math.random()*4);
// 		if(selectedList.indexOf(num) < 0 ) selectedList.push(num);
// 		if(selectedList.length === 3) break;
// 	}

// 	var recommHTML = selectedList.reduce( function(sumHTML,curr) {
// 		var word = recommData[curr];
// 		var sHTML = "<div> <div> " + word.content + "</div> <div>" + word.nickName + "</div></div>";
// 		return sumHTML + sHTML;
// 	}, "");

// 	document.querySelector("#recommendations .recomm-word-row:nth-child(3)").innerHTML = recommHTML;

// })();


//SWIPE
(function(){
var isMobile = (/iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i).test(navigator.userAgent.toLowerCase());
  //모바일 제약사항
  //1. 자동애니메이션 없다.
  //2. touch 이벤트 안한다.

  var elSwapWrap = document.getElementById("swipeWrap");

  var oMyswipe = new SweetSwipe( elSwapWrap, {
          'bCircular' : true,
          'nDuration' : 1500,  //default 100
          'nBackWidth' : 60,  //default 60
          'nSideWidth' : 20,  //default 0
          'nDecisionSlope' : 0.8, //default 0.8
          'nForcedSwipeTime' : 100, //default 0
          'bSettingScreenHeight': false,
          'bMouseEventSupport' : false,
          'bTouchEventSupport' : false,
        });

  oMyswipe.onPlugins([
  {
    'name'      : 'SwipeStepMoverPlugin',
    'option'    : {
      'prevButton' : document.querySelector(".swipe-prev"),
      'nextButton' : document.querySelector(".swipe-next"),
      'nDuration': 200
    },
    'userMethod' : {}
  } 
  ]);

  function movePanel() {
    setTimeout(function(){
      oMyswipe.runAutoAnimation("toRight");
      movePanel();
    }, 8000);
  }

  if(!isMobile) movePanel();

  document.querySelector("#swipeWrap > div:nth-child(2) img").onload = function () {
    _cu.setDynamicHeight(0, elSwapWrap, true);
  }

  //on resize, recalculate height of button.
  // window.addEventListener("resize", function(){
  // 	var elCurrent = elSwapWrap.children[0];
  // 	var nHeight =  parseInt(getComputedStyle(elCurrent).height);
  // 	elSwapWrap.style.height = nHeight + "px"; 
  // });

  !(function () {
    var resizerunner = false;

    function _setHeightListener() {
      var elCurrent = elSwapWrap.children[0];
      var nHeight = parseInt(getComputedStyle(elCurrent).height);
      elSwapWrap.style.height = nHeight + "px";
      resizerunner = false;
    }

  	window.addEventListener("resize", function(){
  		if(resizerunner)return;
      resizerunner = true;
      setTimeout( _setHeightListener, 100);	
    });

    _setHeightListener();

  })();

})();


