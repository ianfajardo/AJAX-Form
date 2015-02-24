(function(){
	$("#myForm").submit(function(event){
		event.preventDefault();
		var form = $( this )
		var url = form.attr('action');

		var valArr = { 
			date: $('#date').val(), 
			time: $('#time').val(), 
			minute: $('#minute option:selected').val(), 
			hour: $('#hour option:selected').val(), 
			period: $('#period option:selected').val(), 
			cost: $('#cost').val(), 
			city: $('#city').val(), 
			state: $('#state option:selected').val(),
			venue: $('#venue').val()
		};

		var maxLengthArr = {
			cost: 2,
			venue: 40
		};

		var numArr = [
			"minute",
			"hour",
			"cost"
		];

		
		function formValidate(valArray, maxLengthArray){
			var errorString = "";
			//form input max length check
			function validLengthCheck(input, maxLength){
				if( input.length <= maxLength){
					return true;
				}
				return false;
			}

			//requiredCheck make sure that a required field is put in adding in null checks
			function requiredCheck(input, maxLength){
						 if(validLengthCheck(input, maxLength) &&
						 	input != null &&
							input != undefined &&
							input != ""){
						 	return true;
						 }
						 return false;
					}

			for(var i in valArray){
				for(var j in maxLengthArray){
					if(i == j){
						delete maxLengthArray.j;
						if(!validLengthCheck(valArray[i], maxLengthArray[j])){
							return false;
						}
					}
				}
			}
			return true;
		}

		function numCheck(valArray, numArray){
			for(var i in numArray){
				for(var j in valArray){
					if(i == valArray[j]){
						console.log(i + ":" + valArray[j]);
						if($.isNumeric(numArray[i])){
							return true;
						}
					}
				}
			}
			return false;
		}

		//client-side error handling
		if( !$.isNumeric(valArr.cost) || !formValidate(valArr, maxLengthArr) || !numCheck(valArr, numArr)){
			$('.results').hide();
			var errorString = '';
			errorString += ( isNaN(cost) ? "Error: Cost must be a Number" : '');
			$('.error').html(errorString);
			$('.error').show();
			$("#cost").val("");
			location.hash = "form-container";
		}
		//post to script if inputs are correct
		else{
			var posting = $.post( url, valArr);
			posting.success(function(data){
				$('.error').hide();
				$('.results').html(
					data + " <a href='http://lildarkmark.com'>View Homepage</a>");
				$('.results').show();
				form[0].reset();
			});
		}

	});

	$("#free_checkbox").change(function(){
		var c = $(this).checked ? '0' : '';
		$("#cost").val(c);
		if(c != '0'){
			$("#cost").prop("disabled", false);
		}
		else if(c == '0'){
			$("#cost").prop("disabled", true);
		}
	});

	$("#cost").keydown(function(e){
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            (e.keyCode == 65 && e.ctrlKey === true) || 
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
	});

	$("#cost").blur(function(){
		var val = $(this).val();
		if(val != '0'){
			$("#free_checkbox").prop("checked", false);
		}
		else if(val == '0'){
			$("#free_checkbox").prop("checked", true);
			$("#cost").prop("disabled", true);
		}
	});

})(jQuery);