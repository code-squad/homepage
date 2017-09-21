//FAQ
(function() {
	var faqWrap  = document.querySelector("#masters-faq ul");

	//execute accodian
	var faqWrap  = document.querySelector("#masters-faq ul");
	faqWrap.addEventListener("click", function(e) {
		var target = e.target;
		if(target.className !== "question") return;
		var answerStyle =  target.nextElementSibling.style;

		if(parseInt(answerStyle.maxHeight) > 0) { 
			answerStyle.maxHeight = 0;
		} else  {
			[].slice.call(faqWrap.querySelectorAll(".answer")).forEach(function(v){
				if(parseInt(v.style.maxHeight) > 0) {
					v.style.maxHeight = 0;
					//v.parentElement.style.backgroundColor = '#fff';
				}
			});
			setTimeout(function(){
				answerStyle.maxHeight = "500px";
				//target.parentElement.style.backgroundColor = 'rgb(124, 170, 203)';
			}, 300)
		}
	});
})();