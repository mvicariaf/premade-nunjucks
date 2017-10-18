
/*const Group = require('../../models/group')*/
var newUser =  window.location.href.split('/')[4]
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
	 	
	 		if (response.groups[i].game == currentGame){
	 		$('.list-group').append("<p class='list-group-item'>Propietario del grupo: "+response.groups[i].owner+"<br> Horario: "+response.groups[i].schedule +"<br> modalidad: "+response.groups[i].type +"<br> Id: "+response.groups[i]._id+
	 			" <button type='submit' class='btn rounded-btn' value='"+response.groups[i]._id+"'><i class='fa fa-user-plus' aria-hidden='false'></i></button></p>" );
	 		
		 	};

	 }
	 	
	 	$('.rounded-btn').on('click', 
				function (event) {
					var groupId = $('.rounded-btn').val();
				    event.preventDefault();
				    
					/*var data = {user: newUser, groupId: groupId}*/
					
				        $.ajax({
				            type: 'POST',
				            data: newUser,
				            url: '/adduserGroup',
				            dataType: 'JSON'
				        }).done(function( response ) {

				            if (response.msg === '') {

				            	console.log("fallo")
				            }
				            else {

				                alert('Te has inscrito correctamente');

				            }
				        });
				    });	
});
	

