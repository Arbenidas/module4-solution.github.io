(function(window) {
	var hello = {};
	hello.sayH = function(names) {
	console.log("Hello "+ names);
	}
	window.hello = hello;
})(window);