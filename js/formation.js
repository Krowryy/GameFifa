function changeFormation(){
	var formation= document.getElementById("formation").value;
	console.log(formation);
	if (formation == "442"){
		console.log("toto");
		document.getElementById("def8").style.visibility="visible";
		document.getElementById("midbot6").style.visibility="visible";
		document.getElementById("midbot7").style.visibility="visible"; // droite
		document.getElementById("midbot7").style.float="right"; // droite
		document.getElementById("midbot9").style.visibility="visible";
		document.getElementById("midbot10").style.visibility="visible"; // droite
		document.getElementById("mid6").style.visibility="visible";
		document.getElementById("midrel2").style.visibility="visible";
		document.getElementById("midrel4").style.visibility="visible";
		document.getElementById("mid10").style.visibility="visible";
		document.getElementById("midtop2").style.visibility="visible";
		document.getElementById("midtop4").style.visibility="visible";		
	}
}