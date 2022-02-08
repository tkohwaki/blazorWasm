<?php
$code = $_REQUEST["FileName"];
$retURL = "./" . $_REQUEST["Return"];
$fullPath = "/var/www/sources/" . $code;
?>
<html>
<head>
<title>Code - <?=$code?></title>
<link rel="stylesheet" href="./css/site.css"/>
<link rel="stylesheet" href="./css/project.css"/>
    <link rel="stylesheet" href="css/prettify.css"/>
    <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
</head>
<body>
<div class="title">
    <h2>Code - <?=$code?></h2>
</div>
<hr/>
<div style="font-size:xx-small;text-align:right;margin-right:2em">Powered by Google Code Prettify</div>
    <a href="<?=$retURL?>">戻る</a>
    <?php
        $lines = file($fullPath);
    ?>
    <div style="background-color:#272822;margin-left:2em;megin-right:2em;width:1024px;overflow-x:auto">
<pre style="margin-left:1em;margin-right:1em">
<code class="prettyprint lang-cs">
<?php
foreach($lines as $line) {
$line = htmlspecialchars($line);
echo $line;
}?>
</code>
</pre>
    </div>
</body>
</html>
