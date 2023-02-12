$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

window.addEventListener("load", (e) =>{
	const name_form = document.querySelector("#loginForm");
	const name = document.querySelector("#logName");
	const password = document.querySelector("#logPassword");

	name_form.addEventListener("submit", (e) => {
		const nameValue = name.value;
		const pass = password.value;
		let acceptInput =  /^[A-Za-z]+$/;

		if(!(nameValue || pass)){
			document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
			e.preventDefault();
			return false;
		}
		else if(!(nameValue.match(acceptInput))){
			document.getElementById("errorMsg").innerHTML = "Please Enter Only Alphabets With No Space"
			e.preventDefault();
			return false;
		}
		else if (pass.length < 8) {
			document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
			e.preventDefault();
			return false;
		}
		else {
			alert("Successfully logged in");
			return true;
		}


	})
})
