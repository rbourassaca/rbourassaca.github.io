<?php

function cptui_register_my_cpts_audio() {

    /**
     * Post Type: Audio.
     */

    $labels = [
        "name" => __( "Audio" ),
        "singular_name" => __( "Audio" ),
    ];

    $args = [
        "label" => __( "Audio" ),
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
        "rewrite" => [ "slug" => "audio", "with_front" => true ],
        "query_var" => true,
        "menu_icon" => "dashicons-format-audio",
        "supports" => [ "title", "thumbnail", "custom-fields" ],
        'show_in_graphql' => true,
		'graphql_single_name' => 'audio',
		'graphql_plural_name' => 'audios',
    ];

    register_post_type( "audio", $args );
}

add_action( 'init', 'cptui_register_my_cpts_audio' );
