<link rel="stylesheet" href="css/game.css" type="text/css" />
<header id="header" class="header" >
    <div class="container">
      <a href="index.php">Home</a>
      <a href="team.php">Formation</a>
      <div class="dropdown">
        <button class="dropbtn">Dropd</button>
        <div class="dropdown-content">
          <a href="">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> 
      <a href="player.php">Player</a>
    </div>
</header>
<body id="container" style="border:1px solid green;">
<script src="//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojo/dojo.js"
            data-dojo-config="async: true"></script>

    <script>
        require([
            'dojo/dom',
            'dojo/dom-construct'
        ], function (dom, domConstruct) {
            var greetingNode = dom.byId('greeting');
            domConstruct.place('<em> Dojo!</em>', greetingNode);
        });
    </script>
</body>
<footer id="footer" style="border:1px solid blue;position:relative;bottom:0"></footer>