<?php get_header(); ?>
<main>
<p class="works_nav"><a href="/">ホーム</a>>> WORKS</p>
<h1 class="works_logo">WORKS</h1>

<p class="works_top_comment">こはくの投稿一覧</p>
    <?php
    // 親カテゴリーのものだけを一覧で取得
    $args = array(
        'parent' => 0,
        'orderby' => 'term_order',
        'order' => 'ASC'
    );
    $categories = get_categories($args);
    ?>
    <div class="categories-lists">
        <?php foreach ($categories as $category) : ?>
            <li class="categorie-list">
                <a class="categorie" href="<?php echo get_category_link($category->term_id); ?>"><?php echo $category->name; ?></a>
            </li>
        <?php endforeach; ?>
    </div>

    <div class="categories-wrapper">
        <?php
        global $post;
        $args = array('posts_per_page' => 8);
        $myposts = get_posts($args);
        foreach ($myposts as $post) {
            setup_postdata($post);
        ?>
             <li>
    <a href="<?php the_permalink(); ?>">
      <div class="works_img">
        <?php the_post_thumbnail('medium'); ?>
      </div>
      <div>
        <?php the_title(); ?>
      </div>
      <?php
        $category = get_the_category(); 
        echo $category[0]->cat_name;
      ?>
    </a>
  </li>

        <?php
        }
        wp_reset_postdata();
        ?>
        <?php
        $args = array(
            'mid_size' => 1,
            'prev_text' => '&lt;&lt;前へ',
            'next_text' => '次へ&gt;&gt;',
            'screen_reader_text' => ' ',
        );
        the_posts_pagination($args);
        ?>
    </div>
    
    </div>
    <div class="p-works__home-btn">
        <a href="/">HOME</a>
    </div>
</main>
<?php get_footer(); ?>