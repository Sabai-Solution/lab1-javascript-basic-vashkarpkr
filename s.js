function submitFuntion() {
	var emailText=document.getElementsByName("Email")[0].value;
	var userText=document.getElementsByName("user")[0].value;
	var passText=document.getElementsByName("pass")[0].value;

	var append = "";
	if(emailText=""){
		append = "Email";

	}
	if (userText="") {
		if(append!=""){
			append = append + " and";
		}
		append= append + " username";
	}
	if (passText="") {
		if(append!=""){
			append = append + " and";
		}
		append= append + " password";
	}
	append = append + "cannot be empty";


if(append!=""){
	alert(append);
	return false;
	//local change
}
else{
	return  true;
	//test comment
}
}
