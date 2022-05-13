/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./wordpress/wp-content/themes/roadmap-beginner/src/js/index.js":
/*!**********************************************************************!*\
  !*** ./wordpress/wp-content/themes/roadmap-beginner/src/js/index.js ***!
  \**********************************************************************/
/***/ (function() {

eval("//スクロールした際の動きを関数でまとめる\nfunction PageTopAnime() {\n\tvar scroll = $(window).scrollTop();\n\tif (scroll >= 200){//上から200pxスクロールしたら\n\t\t$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く\n\t\t$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与\n\t}else{\n\t\tif($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら\n\t\t\t$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き\n\t\t\t$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与\n\t\t}\n\t}\n}\n\n// 画面をスクロールをしたら動かしたい場合の記述\n$(window).scroll(function () {\n\tPageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/\n});\n\n// ページが読み込まれたらすぐに動かしたい場合の記述\n$(window).on('load', function () {\n\tPageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/\n});\n\n// #page-topをクリックした際の設定\n$('#page-top a').click(function () {\n    $('body,html').animate({\n        scrollTop: 0//ページトップまでスクロール\n    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる\n    return false;//リンク自体の無効化\n});\n\n\n// スクロースしてヘッダーの色変え\n\njQuery(function(){\n\n\tvar logo = jQuery('#logo');\n\tjQuery(window).scroll(function () {\n\t\tif (jQuery(this).scrollTop() > 500) { //スクロールが500pxを越えたら\n\t\t\tlogo.addClass('invert');\n\t\t} else { //スクロールが500pxを越えなければ\n\t\t\tlogo.removeClass('invert');\n\t\t}\n\t});\n\n});\n\n\n\n\n//# sourceURL=webpack://roadmap-beginner-template/./wordpress/wp-content/themes/roadmap-beginner/src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./wordpress/wp-content/themes/roadmap-beginner/src/js/index.js"]();
/******/ 	
/******/ })()
;