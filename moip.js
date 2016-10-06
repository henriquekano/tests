var show_result = function(data){
	$("#answers").html(data);
}

$(document).ready(function() {

	$("#moip-transaction").click(function(){
		$.ajax({
	        url: "http://rest-service.guides.spring.io/greeting",
	        headers:{
	        	"Content-type": "application/x-www-form-urlencoded; charset=ISO-8859-1"
	        }

	    }).then(function(data) {
	       show_result(data);
	    });
	});

	
    
});

