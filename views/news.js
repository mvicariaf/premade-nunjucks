$.get('https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=0c3a214cc5274d77b6b9856dd3f9f28a', function (response){  
	 	
	 	for (var i = 0; i < response[food].length; i++) {
	 		var plato = response[food][i].nombre;
	 		var clasePlato = response[food][i].nombre.split(' ').join('');
	 		var precio = response[food][i].precio;
	 		
	 		$('#'+food).append("<li><h3>"+plato+"</h3><button data-name='"+plato+"' data-price='"+precio+"' class='"+clasePlato+" botonPlato'>Add</button></li>");
	 		
	 		$('#'+food).append("<li>"+precio+" €</li>");
	 		
	 		if (response[food][i].descripcion  && response[food][i].imagen ) {
	 			$('#'+food).append("<li>"+response[food][i].descripcion+"</li>");
	 			$('#'+food).append("<img src="+response[food][i].imagen+">");
	 		};

	 		//$('.'+clasePlato).on('click', addItem(event, clasePlato, precio));
	 	};

	 	$('.botonPlato').on('click', function(){
	 		var nombre = $(this).attr("data-name");
	 		var precio = $(this).attr("data-price");
	 		
	 		addItem(nombre, precio);
	 	});
	});
}