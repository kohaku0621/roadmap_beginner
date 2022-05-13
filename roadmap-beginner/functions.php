<?php
function roadmap_beginner() {
   //ここに関数の中身を記述します。
   add_theme_support( 'post-thumbnails' ); //アイキャッチ画像をON
}
add_action( 'after_setup_theme', 'roadmap_beginner' );
//after_setup_themeアクションフック※に登録します。


function change_old( $query ) {
   $query->set('order', 'ASC');
   $query->set('orderby', 'date' );
 }
 add_action( 'pre_get_posts', 'change_old' );