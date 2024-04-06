<?php
/*
Plugin Name:  loan-calculator
Description: replica of hibret bank loan calculator
Author: Dawit Kebede Woldu
*/
function display_loan_calculator(){
    $filename = 'index.html';
    $filepath = plugin_dir_path(__FILE__) . $filename; 

  if (!file_exists($filepath)) {
    return '';
  }

  $content = file_get_contents($filepath);

  return $content;
    }

add_shortcode( 'loan_calculator', 'display_loan_calculator' );
?>