var nickname = window.location.href.split('/')[4];

$('#main').append("<button class='btn-warning btn-lg'><a href='/login/"+nickname+"/newgroup'>Nuevo grupo</a></button>")