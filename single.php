<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package air
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<div class="container">

				<?php
				while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<header class="entry-header">
						<?php
							if ( is_single() ) {
								the_title( '<h1 class="entry-title">', '</h1>' );
							} else {
								the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
							}

						if ( 'post' === get_post_type() ) : ?>
						<div class="entry-meta">
							<p class="entry-time"><time datetime="<?php the_time('c'); ?>"><?php the_time('l') ?>na, <?php the_time('j.') ?> <?php the_time('F') ?>ta <?php the_time('Y') ?> kello <?php the_time('G:i') ?></time></p>
						</div><!-- .entry-meta -->
						<?php
						endif; ?>
					</header><!-- .entry-header -->

					<div class="entry-content">
						<?php
							the_content( sprintf(
								/* translators: %s: Name of current post. */
								wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'air' ), array( 'span' => array( 'class' => array() ) ) ),
								the_title( '<span class="screen-reader-text">"', '"</span>', false )
							) );

							wp_link_pages( array(
								'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'air' ),
								'after'  => '</div>',
							) );
						?>
					</div><!-- .entry-content -->

					<footer class="entry-footer">
						<?php air_entry_footer(); ?>
					</footer><!-- .entry-footer -->
				</article><!-- #post-## -->

					<?php the_post_navigation();

					// If comments are open or we have at least one comment, load up the comment template.
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;

				endwhile; // End of the loop.
				?>

			</div><!-- .container -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();