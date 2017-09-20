
/*const Group = require('../../models/group')*/

$.get('http://localhost:3000/api/group', function (response){  
	 	console.log(response)
		var currentGame = window.location.href.split('/')[5];
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
	 		$('.list-group').append("<p class='list-group-item'>Propietario del grupo: "+response.groups[i].owner+"<br> Horario: "+response.groups[i].schedule +"<br> modalidad: "+response.groups[i].type +"<br> Id: "+response.groups[i]._id+
	 			" <button class='btn rounded-btn'><i class='fa fa-user-plus' aria-hidden='false'></i></button></p>" );
	 		
	 		
	 	};

/*	 	$('.rounded-btn').on('click', function(){
	 		var nickname = window.location.href.split('/')[4];
	 		let update = {name: nickname}
	 		let groupId = response.groups[i]._id
			Group.update(
			    { _id: groupId }, 
			    { $push: { users: friend } },
			    done
			);
	 		
	 	})*/

	});