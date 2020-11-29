<?php

/**
 * Template Name: Front Page
 */

$context = Timber::context();

$timber_post = new Timber\Post();
$context['post'] = $timber_post;

$context['latestPosts'] = Timber::get_posts(['numberposts' => 4]);
$context['latestProducts'] = wc_get_products(['numberposts' => 8]);


Timber::render(['page-' . $post->post_name . '.html.twig', 'frontpage.twig'], $context);