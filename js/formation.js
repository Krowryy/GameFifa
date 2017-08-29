function changeFormation(){
	var formation= document.getElementById("formation").value;
	console.log(formation);
	if (formation == "442"){
		console.log("toto");
		document.getElementById("def8").style.visibility="visible";
		document.getElementById("midbot6").style.visibility="visible";
		document.getElementById("midbot7").style.visibility="visible";
		document.getElementById("imgMidBot7").style.float="right";
		document.getElementById("imgMidBot10").style.float="right";
		document.getElementById("midbot9").style.visibility="visible";
		document.getElementById("midbot10").style.visibility="visible";
		document.getElementById("mid6").style.visibility="visible";
		document.getElementById("imgMidRel2").style.float="right";
		document.getElementById("midrel2").style.visibility="visible";
		document.getElementById("midrel4").style.visibility="visible";
		document.getElementById("mid10").style.visibility="visible";
		document.getElementById("imgMid10").style.float="right";
		document.getElementById("midtop2").style.visibility="visible";
		document.getElementById("imgMidTop2").style.float="right";
		document.getElementById("midtop4").style.visibility="visible";		
	}
}

function openDialog(url) {
	$("#test").load(url).dialog({modal: true});
}


//When the user clicks the button, open the modal 
function openDialogPlayer() {
 var modal = document.getElementById('myModal');
 modal.style.display = "block";
}

//When the user clicks on <span> (x), close the modal , go create event on (x)
function closeDialogPlayer() {
 var modal = document.getElementById('myModal');
 modal.style.display = "none";
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
var modal = document.getElementById('myModal');
 if (event.target == modal) {
     modal.style.display = "none";
 }
}