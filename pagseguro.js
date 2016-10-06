
$(document).ready(function() {

	$("#pagseguro-transaction").click(function(){
		$.ajax({
			type: "POST",
	        url: "https://ws.pagseguro.uol.com.br/v2/checkout/",
	        crossDomain: true,
	        dataType: 'JSONP',
            jsonpCallback: 'callbackFnc',
            
	        headers:{
	        	"Content-type": "application/x-www-form-urlencoded; charset=ISO-8859-1"
	     	},
	        data:{
	        	"email": "suporte@lojamodelo.com.br",
				"token": "EB6B3DBD0549401DB1DC83FA180E0810",
				"currency": "BRL",
				"itemId1": "0001",
				"itemDescription1": "Notebook Prata",
				"itemAmount1": "24300.00",
				"itemQuantity1": "1",
				"itemWeight1": "1000",
				"itemId2": "0002",
				"itemDescription2": "Notebook Rosa",
				"itemAmount2": "25600.00",
				"itemQuantity2": "2",
				"itemWeight2": "750",
				"reference": "REF1234",
				"senderName": "Jose Comprador",
				"senderAreaCode": "11",
				"senderPhone": "56273440",
				"senderEmail": "comprador@uol.com.br",
				"shippingType": "1",
				"shippingAddressStreet": "Av. Brig. Faria Lima",
				"shippingAddressNumber": "1384",
				"shippingAddressComplement": "5o andar",
				"shippingAddressDistrict": "Jardim Paulistano",
				"shippingAddressPostalCode": "01452002",
				"shippingAddressCity": "Sao Paulo",
				"shippingAddressState": "SP",
				"shippingAddressCountry": "BRA"
	        }

	    }).then(function(data) {
	       show_result(data);
	       console.log(data);
	    });
	});

	
    
});