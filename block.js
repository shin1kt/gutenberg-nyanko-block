/**
 * BLOCK: Basic
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Styles:
 *        editor.css — Editor styles for the block.
 *        style.css  — Editor & Front end styles for the block.
 */
( function() {


	var el = wp.element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;

	registerBlockType( 'shin1kt/nyanko', { //任意の名前　プリフィックス的
		title: 'nyanko', // ブロック名
		icon: function(){
			//ブロックアイコン　imgタグとかでもOK
			return el(
				'img',
				{src: mywp.plugin_url + '/neko-icon.svg',class:'nyanko-icon'}
			);
		},
		category: 'common',//ブロックのカテゴリ

		edit: function( props ) {
			//エディタ画面で挿入される要素
			return el(
				'div',
				{
					class: 'nyan-block',
				},
				React.createElement('div', {class:'nyan-ballon'},
					React.createElement('p', {},'にゃーん')
				),
				React.createElement('img', {src: mywp.plugin_url + '/neko.svg'})
			);
		},


		save: function( props ) {
			//表示側でのHTML要素
			return el(
				'div',
				{
					class: 'nyan-block',
				},
				React.createElement('div', {class:'nyan-ballon'},
					React.createElement('p', {},'にゃーん')
				),
				React.createElement('img', {src: mywp.plugin_url + '/neko.svg'})
			);
		},
	} );
})();
