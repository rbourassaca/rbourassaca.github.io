
<?php

if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Theme Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-settings',
		'capability'	=> 'customize',
		'redirect'		=> false,
		'show_in_graphql' => true
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Home Settings',
        'menu_title'	=> 'Home',
        'menu_slug' 	=> 'home-settings',
		'parent_slug'	=> 'theme-settings',
		'show_in_graphql' => true,
	));
    
    acf_add_options_sub_page(array(
		'page_title' 	=> 'Hero Settings',
        'menu_title'	=> 'Hero',
        'menu_slug' 	=> 'hero-settings',
		'parent_slug'	=> 'theme-settings',
		'show_in_graphql' => true,
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Contact Settings',
        'menu_title'	=> 'Contact',
        'menu_slug' 	=> 'contact-settings',
		'parent_slug'	=> 'theme-settings',
		'show_in_graphql' => true,
	));

}