(function(window) {
	var bye = {};
	bye.sayBye = function(names) {
	console.log("Good bye "+ names +"\n");
	}
	window.bye = bye;
})(window);