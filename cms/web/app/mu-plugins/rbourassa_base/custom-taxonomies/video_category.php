<?php

function cptui_register_my_taxes_categories_video() {

	/**
	 * Taxonomy: Catégories vidéos.
	 */

	$labels = [
		"name" => __( "Catégories vidéos", "tourog-child" ),
		"singular_name" => __( "Catégorie vidéo", "tourog-child" ),
	];

	$args = [
		"label" => __( "Catégories vidéos", "tourog-child" ),
		"labels" => $labels,
		"public" => true,
		"publicly_queryable" => true,
		"hierarchical" => true,
		"show_ui" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => [ 'slug' => 'categories_video', 'with_front' => true, ],
		"show_admin_column" => false,
		"show_in_rest" => true,
		"rest_base" => "categories_video",
		"rest_controller_class" => "WP_REST_Terms_Controller",
		"show_in_quick_edit" => false,
			];
	register_taxonomy( "categories_video", [ "video" ], $args );
}
add_action( 'init', 'cptui_register_my_taxes_categories_video' );
