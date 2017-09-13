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

<header id="header" class="header" style="border:1px solid red">
    <div class="container">
      <a href="index.php">Home</a>
      <a href="team.php">Formation</a>
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> 
      <a href="#news">Link</a>
    </div>
</header>
<body>
<button data-dojo-type="dijit/form/Button" type="button" onClick="openDialogPlayer();">
    Show me!
</button>
</body>
<footer id="footer" style="border:1px solid blue;position:relative;bottom:0"></footer>

</html>

