    //auto-hide-placeholder-text-upon-focus
		$("input,textarea").each(function(){			
			if($(this).val()=="" && $(this).attr("placeholder")!=""){				
				$(this).val($(this).attr("placeholder"));				
				$(this).focus(function(){		
					if($(this).val()==$(this).attr("placeholder")) 
					{
						$(this).val("");
					}					
				});				
				$(this).focusout(function(){		
					if($(this).val()=="") 
					{
						$(this).val($(this).attr("placeholder"));						
					}					
				});			
			}
		});

$('#ss-submit').on('click', function(){
			formValidation('#ss-form');
	});
		function formValidation(formId){
			var status=true;
			$(formId+' .required').each(function(){
				var element=$(this);
				var elementVal=element.val();
				var elementPlaceholderVal=element.attr('placeholder');
				var errorMsgId=element.attr('data-errorMsg');
				if(elementVal=='' || elementVal==elementPlaceholderVal){
					$('.'+errorMsgId).show();
					element.addClass('errorField');
					status=false;
					event.preventDefault();
				}
				else{
					$('.'+errorMsgId).hide();
					element.removeClass('errorField');
					}
			});
			return status;
		}
