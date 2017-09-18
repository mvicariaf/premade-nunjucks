$.get('http://localhost:3000/api/groups', function (response){  
	 	console.log(response)
	
	 	for (var i = 0; i < response.groups.length; i++) {
	 		
	 		if (response.groups[i].game == "league of legends")
	 		$('.list-group').append("<p class='list-group-item'>Propietario del grupo: "+response.groups[i].owner+"<br> Horario: "+response.groups[i].schedule +"<br> modalidad: "+response.groups[i].type +"");
	 		
	 		
	 	};

	});