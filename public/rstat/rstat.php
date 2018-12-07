<?php
header("Access-Control-Allow-Origin: *");
header("content-type: application/json");
//$data = json_decode( file_get_contents( 'php://input' ), true );
$filepath = $_POST['file'];
$basename = basename($filepath, ".csv");
switch ($_POST['check']) {
    case "test":
        $output = shell_exec("Rscript norm_test.R $filepath");
        $filename = $basename."_test.json";
        break;
    case "normdist":
        $output = shell_exec("Rscript norm_dist.R $filepath");
        $filename = $basename."_norm.json";
        break;
    case "tdist":
        $output = shell_exec("Rscript t_dist.R $filepath");
        $filename = $basename."_tdist.json";
        break;
    case "testout":
        $output = shell_exec("Rscript norm_test_without_outlier.R $filepath");
        $filename = $basename."_out_test.json";
        break;
    case "normdistout":
        $output = shell_exec("Rscript norm_dist_without_outlier.R $filepath");
        $filename = $basename."_out_norm.json";
        break;
    case "tdistout":
        $output = shell_exec("Rscript t_dist_without_outlier.R $filepath");
        $filename = $basename."_out_tdist.json";
        break;
    case "fact":
        $output = shell_exec("Rscript fra.R $filepath");
        $filename = $basename."_factor.json";
        break;
    case "distfind":
        $output = shell_exec("Rscript find_dist.R $filepath");
        $filename = $basename."_find_dist.json";
        break;
    default:
        $output = shell_exec('Rscript sample.R checkingdata');
}

echo $filename;

/*
$output = shell_exec('Rscript sample.R 1234567');
echo $output;
$output = shell_exec('ls -lart');
echo "<pre>$output</pre>";
*/
?>
