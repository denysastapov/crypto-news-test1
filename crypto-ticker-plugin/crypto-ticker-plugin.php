<?php

/**
 * Plugin Name: Crypto Price Ticker
 * Description: Litecoin price ticker with WordPress Interactivity API.
 * Version: 1.0
 */

add_action('init', function () {
  wp_register_script_module(
    'crypto-price-ticker',
    plugins_url('assets/js/ticker.js', __FILE__),
    ['@wordpress/interactivity'],
    filemtime(plugin_dir_path(__FILE__) . 'assets/js/ticker.js')
  );
});

add_action('wp_enqueue_scripts', function () {
  wp_enqueue_script_module('crypto-price-ticker');
});

add_action('wp_footer', function () {
  echo '<div data-wp-interactive="crypto-price-ticker">
    <ul id="crypto-ticker-list">
      <li>Loading...</li>
    </ul>
  </div>';
});
