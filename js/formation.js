require(["dojo/dom", "dojo/_base/array", "dojo/_base/event", "dojo/query", "dojox/validate/web", "dojox/validate/us", "dojox/validate/check", "dojo/domReady!"],
	function(dom, arrayUtil, baseEvent, query, validate) {

		function doCheck(form){
			var results = validate.check(form, profile),
					r = dom.byId("result");

			if(results.isSuccessful()){
				//	everything passed, log it to the result div
				r.innerHTML = "Everything passed validation!";
			} else {
				var s = "";
				var missing = results.getMissing();
				if(missing.length){
					s += '<h4>The following fields are missing:</h4>'
					+ '<ol>';
					arrayUtil.forEach(missing, function(field){
						s += '<li>' + field + '</li>';
					});
					s += '</ol>';
				}

				var invalid = results.getInvalid();
				if(invalid.length){
					s += '<h4>The following fields are invalid:</h4>'
					+ '<ol>';
					arrayUtil.forEach(invalid, function(field){
						s += '<li>' + field + '</li>';
					});
					s += '</ol>';
				}

				r.innerHTML = s;
			}
		}

		//	wait until after our requires are actually loaded.
		profile = {
			trim: ["firstName", "lastName"],
			required: ["firstName", "lastName", "email", "emailConfirm", "password", "password2"],
			constraints: {
				firstName: 	validate.isText,
				lastName:  	validate.isText,
				password:  	validate.isText,
				password2: 	validate.isText,
				email:		[validate.isEmailAddress, false, true],
				emailConfirm: [validate.isEmailAddress, false, true],
				phone:		validate.us.isPhoneNumber
			},
			confirm: {
				"emailConfirm": "email",
				"password2": "password"
			}
		};

		//	set up the form handler.
		var f = query("form")[0];
		f.onsubmit = function(e){
			baseEvent.stop(e);
			doCheck(f);
		};
});

function changeFormation(){
	console.log(dojo.byId("def6"));
	var formation= document.getElementById("formation").value;
	if (formation == "442"){
		document.getElementById("def8").style.visibility="visible";
		console.log(dojo.byId('def8'));
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

function openDialogPlayer(){
	console.log(dojo.byId("dynamicDialogCreatePlayer"));
}