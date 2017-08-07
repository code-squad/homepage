/* Privacy and Term Modal Controller */
(function() {
	var state = "";
	var elModalBody = document.querySelector("#myModal .modal-body");
	var elModalLabel = document.querySelector("#myModalLabel");
	var elPrivacy = document.querySelector("#codesquad-privacy");
	var elTerm = document.querySelector("#codesquad-term");


	function reqListener() {
		elModalBody.innerHTML = this.responseText;
	}

	function runXHR(url) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("GET", url);
		oReq.send();
	}

	//TODO. Refactoring.
	elPrivacy.addEventListener("click", function() {
		if (state === "privacy") return;
		elModalLabel.innerText = this.textContent;
		runXHR("../../../data/privacy.htm");
		state = "privacy";
	});

	elTerm.addEventListener("click", function() {
		if (state === "term") return;
		elModalLabel.innerText = this.textContent;
		runXHR("../../../data/term.htm");
		state = "term";
	});
})();
