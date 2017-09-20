$.get('http://localhost:3000/api/group', function (response){  
	 	console.log(response)
		var currentGame = window.location.href.split('/')[3];
		if (currentGame == "lol")
			currentGame = "league of legends"
		if (currentGame == "wow")
			currentGame = "world of warcraft"
		if (currentGame == "ow")
			currentGame = "overwatch"
		if (currentGame == "sc")
			currentGame = "starcraft 2"

	 	for (var i = 0; i < response.groups.length; i++) {
	 	
	 		if (response.groups[i].game == currentGame)
	 		$('.list-group').append("<p class='list-group-item'>Propietario del grupo: "+response.groups[i].owner+"<br> Horario: "+response.groups[i].schedule +"<br> modalidad: "+response.groups[i].type +
	 			"" 

	 			);
	 		
	 		
	 	};


	});