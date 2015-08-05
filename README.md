# ajax-multi-pagination-with-laravel
#ajax multi pagination on single page with laravel

Route: 
- Route::get('/news', ['as' => 'frontend.news.relative', 'uses' => 'NewsController@index']);
- Route::get('/relative', ['as' => 'frontend.news.relative', 'uses' => 'NewsController@relative_news']);
Controller: 
- public function index($news_key) {
		$this->data['key_news'] = DB:table('news')->get();
		return view('news.index', $this->data);
	}
-	public function relative_news() {
		$this->data['key_news'] = DB:table('news')->get();
		return view('ajax.relative-news', $this->data);
	}
View: 
- views/news/index :
<div class="news-detail-order" id="relative_news">
  @foreach($items as $item)
				<tr>
					<td><a href="{{ $item->key }}">{{ $item->title }}...</a></td>
					<td>{{ $item->user_id }}</td>
					<td width="150px">{{ date('Y-m-d', strtotime($item->created_at)) }}</td>
					<td align="center">{{ $item->total_view }}</td>
				</tr>
	@endforeach
	<ul class="pagination pagination-sm" id="relative_links_news">
  	{!! $items->render() !!}
  </ul>
</div>
<script>
	jQuery('#relative_links_news a').on('click', function(){
		var link = jQuery(this).attr('href');
		var page = $(this).attr('href').split('page=')[1];

		$.get( "{{route('frontend.news.relative')}}?page=" + page + "&type=news&key_news={{$key_news}}", function( data ) {
			$('#relative_news').html(data);
		});

		return false;
	});
</script>
      
- views/ajax/relative-news
<div class="news-detail-order" id="relative_news">
  @foreach($items as $item)
				<tr>
					<td><a href="{{ $item->key }}">{{ $item->title }}...</a></td>
					<td>{{ $item->user_id }}</td>
					<td width="150px">{{ date('Y-m-d', strtotime($item->created_at)) }}</td>
					<td align="center">{{ $item->total_view }}</td>
				</tr>
	@endforeach
	<ul class="pagination pagination-sm" id="relative_links_news">
  	{!! $items->render() !!}
  </ul>
</div>
<script>
	jQuery('#relative_links_news a').on('click', function(){
		var link = jQuery(this).attr('href');
		var page = $(this).attr('href').split('page=')[1];

		$.get( "{{route('frontend.news.relative')}}?page=" + page + "&type=news&key_news={{$key_news}}", function( data ) {
			$('#relative_news').html(data);
		});

		return false;
	});
</script>


