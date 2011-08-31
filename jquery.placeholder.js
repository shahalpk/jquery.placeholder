
jQuery.fn.placeholder = function(){
	return this.each(function(){
		var element = $(this)
		var insertedNow =element.after("<span class='jquery-placeholder-spanbox'>"+ element.attr('placeholder')+ "</span>").attr("placeholder","").next('.jquery-placeholder-spanbox');
		element
		var leftOffset = (element.innerWidth() - element.width())/2+parseInt(element.css("border-left-width"));
		var topOffset = ((element.innerHeight() - element.height())/2)+parseInt(element.css("border-top-width"));
		insertedNow.css("padding-left",leftOffset+"px").css("padding-top",topOffset+"px").css("opacity",0.3);
		var objCSS = {'display':'inline-block','font-size':element.css('font-size'),'font-family':element.css('font-family'),'font-weight':element.css('font-weight'),'-webkit-transition':'opacity 100ms ease-in','-moz-transition':'opacity 100ms ease-in','-o-transition':'opacity 100ms ease-in','-ms-transition':'opacity 100ms ease-in','transition':'opacity 100ms ease-in','line-height':element.height()+"px"};
		insertedNow.css(objCSS);
		insertedNow.offset(element.offset());
		element.bind("keydown",updateSpanStatus);
		element.bind("keyup",updateSpanStatusKeyUp);
		insertedNow.bind("click",clickSpanBox);
		if(element.val()!=="")
		{
			insertedNow.css({'opacity':0});
		}
		
	});
	function clickSpanBox(event){
		event.preventDefault();
		var inputBox = $(this).prev();
		inputBox.focus();
	}
	
	function updateSpanStatusKeyUp(event)
	{
		var $this=  $(this);
		if($this.val()=="")
		{
			var spanBox = $this.next('.jquery-placeholder-spanbox');
			spanBox.css("opacity","0.3");
		}
	}
	function updateSpanStatus(event)
	{
		var $this = $(this);
		if($this.val()=="" && event.keyCode>54)
		{
			var spanBox = $this.next('.jquery-placeholder-spanbox');
			spanBox.css("opacity","0");
		}
	}
}