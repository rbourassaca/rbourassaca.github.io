<?php

/*
 *	From:
 *	https://www.wpgraphql.com/recipes/showing-post-type-labels-in-public-queries/
 */

add_filter( 'graphql_allowed_fields_on_restricted_type', function( $allowed_restricted_fields, $model_name, $data, $visibility, $owner, $current_user ) {

	if ( 'PostTypeObject' === $model_name ) {
		$allowed_restricted_fields[] = 'label';
	}

	return $allowed_restricted_fields;

}, 10, 6 );