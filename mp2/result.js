function doFirst(){
	var submit = document.getElementById("submate");
	submit.addEventListener("click", saveData, false);
}

/* function checkData(){
	var presChecked = document.getElementsByName("presidentVote").checked; 
	var VpresChecked = document.getElementsByName("VPresVote").checked;
	var SecChecked = document.getElementsByName("secretaryVote").checked;
	var TresurerChecked = document.getElementsByName("treasurerVote").checked;
	if presChecked == false && VpresChecked == false && SecChecked == false && TresurerChecked == false{
		alert('Please fill out the form completely');
		return false;
	}else{
		return true
	}
} -*/


window.addEventListener("load", doFirst, false);