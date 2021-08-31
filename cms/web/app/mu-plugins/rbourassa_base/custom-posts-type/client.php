<?php

function cptui_register_my_cpts_client() {

	/**
	 * Post Type: Clients.
	 */

	$labels = [
		"name" => __( "Clients" ),
		"singular_name" => __( "Client" ),
	];

	$args = [
		"label" => __( "Clients" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => true,
		"rewrite" => [ "slug" => "client", "with_front" => true ],
		"query_var" => true,
		"menu_icon" => "dashicons-admin-users",
		"supports" => [ "title", "thumbnail", "custom-fields" ],
		'show_in_graphql' => true,
		'graphql_single_name' => 'client',
		'graphql_plural_name' => 'clients',
	];

	register_post_type( "client", $args );
}

add_action( 'init', 'cptui_register_my_cpts_client' );
