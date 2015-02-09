(function(){
	$("#myForm").submit(function(event){
				event.preventDefault();
				var form = $( this )
				var url = form.attr('action');

				
				var posting = $.post( url, { 
					date: $('#date').val(), 
					time: $('#time').val(), 
					minute: $('#minute option:selected').val(), 
					hour: $('#hour option:selected').val(), 
					period: $('#period option:selected').val(), 
					cost: $('#cost').val(), 
					city: $('#city').val(), 
					state: $('#state option:selected').val(),
					venue: $('#venue').val()
				});

				if(

					isNaN(cost)


					){
					var errorString = '';
					errorString += ( isNaN(cost) ? "Error: Cost must be a Number" : '');
					$('.error').html(errorString);
					$('.error').show();
					$("#cost").val("");
					location.hash = "form-container";
				}
				else{
					posting.success(function(data){
						$('.results').html(
							data + " <a href='#'>View Homepage</a>");
						$('.results').show();
						form[0].reset();
					});
				}

			});

	$("#free_checkbox").change(function(){
		var c = this.checked ? '0' : '';
		$("#cost").val(c);
		if(c != '0'){
			$("#cost").prop("disabled", false);
		}
		else if(c == '0'){
			$("#cost").prop("disabled", true);
		}
	});

	$("#cost").blur(function(){
		console.log("changed");
		var val = $(this).val();
		if(val != '0'){
			$("#free_checkbox").prop("checked", false);
		}
		else if(val == '0'){
			$("#free_checkbox").prop("checked", true);
			$("#cost").prop("disabled", true);
		}
	});

})();