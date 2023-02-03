	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
(function(){
	for (var i = 0; i < names.length; i++) {
		var	firstLetter = names[i].charAt(0).toLowerCase();

		if (firstLetter === 'j') {
			bye.sayBye(names[i]);
		} else{
			hello.sayH(names[i]);

		}
	}
})();