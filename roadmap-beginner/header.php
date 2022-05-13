<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/src/scss/main.css">
  <script src="https://kit.fontawesome.com/7e5b1e6c89.js" crossorigin="anonymous"></script>
  <title>Document</title>
  <?php wp_head(); ?>
</head>
<body>
  <header>
    <div id="logo" class="header-wrapper invert">
      <div class="header-logo"><a href="/">
        <h1>Rina Portfolio</h1></a>
      </div>
      <div class="header-nav">
        <ul class="header-list">
          <li><a href="/">HOME</a></li>
          <li><a href="/works">WORKS</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/skill">SKILL</a></li>
          <li><a href="http://localhost:5555/#service">SURVICE</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </header>