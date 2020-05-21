"use strict";

//page one
if (typeof (wraper_index) !== 'undefiend') {

	//listen page
	document.addEventListener('click', event => {
		let name = event.target.getAttribute('name');
		if (name == 'start') check();

	});



	//functions
	function check() {
		let $emailInput = document.querySelector('#email'),
			$passwordInput = document.querySelector('#pass'),
			myJson = {
				email: '',
				password: ''
			};
		myJson.email = $emailInput.value;
		myJson.password = $passwordInput.value;

		setCookie("myJson", JSON.stringify(myJson), 1);
		let b = getCookieValue("myJson");
		if (b !== "" && b.email !== "" && b.pass !== "") {
			console.log('VadimMoLoDeTs')
			document.location.href = "personal.html";
		}
	};



}



//page too
if (typeof (wrapper_personal) !== 'undefiend') {


	let b = getCookieValue("myJson");
	exit.addEventListener("click", () => {
		//browser.cookies.remove();
		setCookie("myJson", '', 1)
		//eraseCookie("myJson");

		if (b !== "") {
			document.location.href = "index.html";
		}

	});

	save.addEventListener('click', () => {
		let $firstName = document.querySelector('#firstName'),
			$secondName = document.querySelector('#secondName'),
			$tel = document.querySelector('#tel'),
			myJsonPageTwo = {
				firstName: '',
				secondName: '',
				tel: '',

			};

		myJsonPageTwo.firstName = $firstName.value;
		myJsonPageTwo.secondName = $secondName.value;
		myJsonPageTwo.tel = $tel.value;

		setCookie("myJsonPageTwo", JSON.stringify(myJsonPageTwo), 1);

	});
}





// }

function getCookieValue(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	console.log("eraseCookie for " + name);

	document.cookie = name + '=; Max-Age=-99999999;';
}











// function setCookie(name, value, days) {
// 	var expires = "";
// 	if (days) {
// 		var date = new Date();
// 		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
// 		expires = "; expires=" + date.toUTCString();
// 	}
// 	document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }
// function getCookie(name) {
// 	var nameEQ = name + "=";
// 	var ca = document.cookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
// 		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
// 	}
// 	return null;
// }

// function eraseCookie(name) {
// 	console.log("eraseCookie for " + name);

// 	document.cookie = name + '=; Max-Age=-99999999;';
// }