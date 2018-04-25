$(document).ready(function() {
	$(".picture").click(function() { 
		// jQuery Function #1
		$(this).addClass("pic-click");
		// jQuery Function #2
		$("#overlay").show(); 
		// jQuery Function #3
		// $(this).removeClass(".picture");
		// jQuery Function #4
	});


	 
	$("#overlay").click(function() {
		$(this).hide();
		// jQuery Function #5
		$(".picture").removeClass("pic-click");
	});
});