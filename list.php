<?php 
$out = array();
foreach (glob('oldWorlds/**/advancements/*.json') as $filename) {
    $out[] = $filename;;
}
echo json_encode($out); 
?>;