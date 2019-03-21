function validate(){
	var email = document.getElementById("emailid").value;
	var pass = document.getElementById("passid").value;
	if (email.includes("student")){
		window.location.replace("/Users/Janjua/Desktop/E_Khidmat/code/student.html");
	}
	else if (email.includes("teacher")){
		window.location.replace("/Users/Janjua/Desktop/E_Khidmat/code/teacher.html");
	}
	else if (email.includes("admin")){
		window.location.replace("/Users/Janjua/Desktop/E_Khidmat/code/admin.html");
	}
	else{
		alert("WRONG ID OR PASSWORD!");
	}
}
