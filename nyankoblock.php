<?php
/*
Plugin Name:Nyanko Block
Description: Gutenbergに、猫のイラストを挿入できるブロックを追加します。
*/

//エディタ側
add_action( 'enqueue_block_editor_assets', function () {
	//ブロック用のjs
	wp_enqueue_script( 'nyanko-block01', plugins_url( 'block.js', __FILE__ ), array( 'wp-blocks', 'wp-element' ));

	$plugin_url = plugin_dir_url( __FILE__ );
	wp_localize_script( 'nyanko-block01' , 'mywp' , array( 'plugin_url' => $plugin_url ) );

	//エディタ側のスタイル
  wp_enqueue_style( 'nyanko-block01-editor', plugins_url( 'editor.css', __FILE__ ),array( 'wp-edit-blocks' ),filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ));

});

//表示側のスタイル
add_action( 'enqueue_block_assets', function () {
	wp_enqueue_style( 'nyanko-frontend', plugins_url( 'style.css' , __FILE__ ), array( 'wp-blocks' ), filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ));
});
