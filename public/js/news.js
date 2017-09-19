$.get('https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=0c3a214cc5274d77b6b9856dd3f9f28a', function (response){  
	 	
	 	for (var i = 0; i < 10; i++) {
	 		
	 		
	 		$('.list-group').append("<a href='"+response.articles[i].url+"' class='list-group-item list-group-item-action'>" + response.articles[i].title  + "</a>");
	 		
	 		
	 	};

	});