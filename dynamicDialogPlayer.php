<script src="//ajax.googleapis.com/ajax/libs/dojo/1.12.1/dojo/dojo.js"></script>
<script type="text/javascript">
require(["dijit/Dialog", "dijit/form/TextBox", "dijit/form/Button"]);
</script>
<?php 
$dsn = 'mysql:dbname=gamefifa;host=127.0.0.1';
$user = 'root';
$password = '';

try {
    $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connexion échouée : ' . $e->getMessage();
}

function addLogEvent($event)
{
    $time = date("D, d M Y H:i:s");
    $time = "[".$time."] ";
    
    $event = $time.$event."\n";
    
    file_put_contents("fichier.log", $event, FILE_APPEND);
}
?>

<html>
<link rel="stylesheet" href="css/game.css" type="text/css" />
<link rel="stylesheet" href="style.css" media="screen">
<link rel="stylesheet" href="../../_common/demo.css" media="screen">
<style type="text/css">
	label {
		display: inline-block;
		width: 140px;
	}
</style>
<script type="text/javascript" src="js/formation.js" ></script>
<script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>
<div data-dojo-type="dijit/Dialog" data-dojo-id="dynamicDialogCreatePlayer" title="Name and Address">
    <h1>Create your player</h1>
    <form>
    	<div>
    		<label for="firstName">First Name*</label>
    		<input type="text" name="firstName" id="firstName" value="" />
    	</div>
    	<div>
    		<label for="lastName">Last Name*</label>
    		<input type="text" name="lastName" id="lastName" value="" />
    		<div>
    		</div>
    		<label for="email">Email Address*</label>
    		<input type="text" name="email" id="email" value="" />
    	</div>
    	<div>
    		<label for="emailConfirm">Confirm Email*</label>
    		<input type="text" name="emailConfirm" id="emailConfirm" value="" />
    	</div>
    	<div>
    		<label for="password">Password*</label>
    		<input type="password" name="password" id="password" value="" />
    	</div>
    	<div>
    		<label for="password2">Confirm Password*</label>
    		<input type="password" name="password2" id="password2" value="" />
    	</div>
    	<div>
    		<label for="phone">Phone</label>
    		<input type="text" name="phone" id="phone" value="" />
    	</div>
    	<input type="submit" value="Post!" />
    </form>
    <h3>Form validation results</h3>
    <div id="result" style="border-top:1px solid #999;"></div>
    <!-- load dojo and provide config via data attribute -->
</div>
</html>

