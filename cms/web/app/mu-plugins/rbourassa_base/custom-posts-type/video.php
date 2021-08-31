<?php

function cptui_register_my_cpts_video() {

    /**
     * Post Type: Vidéos.
     */

    $labels = [
        "name" => __( "Vidéos" ),
        "singular_name" => __( "Vidéo" ),
    ];

    $args = [
        "label" => __( "Vidéos" ),
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
        "hierarchical" => false,
        "rewrite" => [ "slug" => "video", "with_front" => true ],
        "query_var" => true,
        "menu_icon" => "dashicons-format-video",
        "supports" => [ "title", "thumbnail", "custom-fields" ],
        'show_in_graphql' => true,
		'graphql_single_name' => 'video',
		'graphql_plural_name' => 'videos',
    ];

    register_post_type( "video", $args );
}

add_action( 'init', 'cptui_register_my_cpts_video' );
