<?php

# follow us ig: @duphouse / tt: @duph0use
# greetz @lbherrera_ for the challenge

include 'utils.php';

if ((!isset($_GET["name"]) && !isset($_GET["report"]))  || (strlen($_GET["name"]) > 200)) {
    show_source("index.php");
    die();
    
} else if (isset($_GET["report"])) {
    
    # make sure that admin will only receive http://babyweb/ addresses
    report_to_admin("http://babyweb/" . $_GET["report"]);
    die();
}

$name = strtoupper(strip_tags(addslashes($_GET["name"])));

?>

<!DOCTYPE html>
<html>
    <head>
        <script>
            onload = () => {
                document.getElementById("name").innerHTML = "<?php echo $name; ?>";
            }
        </script>
    </head>
    <body>
        <div id="name">hello stranger</div>
    </body>
</html>