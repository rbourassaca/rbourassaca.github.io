<?php
/**
 * Plugin Name:       rbourassa_base
 * Description:       Handling custom posts type, custom-taxonomies & more...
 * Author:            Raphael Bourassa
 * Author URI:        https://rbourassa.ca
 */

 // Custom posts type
include_once("custom-posts-type/audio.php");
include_once("custom-posts-type/client.php");
include_once("custom-posts-type/video.php");
include_once("custom-posts-type/web.php");

// Custom taxonomies
include_once("custom-taxonomies/audio_category.php");
include_once("custom-taxonomies/client_category.php");
include_once("custom-taxonomies/video_category.php");
include_once("custom-taxonomies/web_category.php");

// Access control rights
include_once("access-control-rights/cpt-labels.php");