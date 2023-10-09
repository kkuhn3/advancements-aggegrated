<?php 
$out = array();
foreach (glob('newWorld/**/advancements/*.json') as $filename) {
    $out[] = $filename;;
}
foreach (glob('oldWorlds/**/advancements/*.json') as $filename) {
    $out[] = $filename;;
}
foreach (glob('archWorlds/**/advancements/*.json') as $filename) {
    $out[] = $filename;;
}
echo json_encode($out); 
?>;