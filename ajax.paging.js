<script>
	jQuery('#relative_links_news a').on('click', function(){
		var link = jQuery(this).attr('href');
		var page = $(this).attr('href').split('page=')[1];

		$.get( "{{route('frontend.news.relative')}}?page=" + page + "&type=news", function( data ) {
			$('#relative_news').html(data);
		});

		return false;
	});
</script>