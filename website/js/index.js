function CloseAll(){
	$('#DetailIntroduction').slideUp(500);
    	$('#DetailSkills').slideUp(500);	
    	$("#DetailResume").slideUp(500);
    	$("#logo").slideUp(600);
}

$(function ButtomResume() {
	$("#ButtomResume").mouseover(function() {
	$(this).attr("src", "img/ButtomResume02.png");
    	})
		.mouseout(function() {
			$(this).attr("src", "img/ButtomResume01.png");
    	});
	$('#ButtomResume').click(function(){
		CloseAll();
		$('#DetailIntroduction').toggle(500);
	});
});

$(function ButtomIntroduction() {
	$("#ButtomIntroduction").mouseover(function() {
		$(this).attr("src", "img/ButtomIntroduction02.png");
 	})
		.mouseout(function() {
    			$(this).attr("src", "img/ButtomIntroduction01.png");
    });
	$('#ButtomIntroduction').click(function(){
		CloseAll();
		$('#DetailResume').toggle(500);
	});
  });  
  
$(function ButtomSkills() {
	$("#ButtomSkills").mouseover(function() {
		$(this).attr("src", 'img/ButtomSkills02.png');
	})
		.mouseout(function() {
			$(this).attr('src', "img/ButtomSkills01.png");
    	});
	$('#ButtomSkills').click(function(){
		CloseAll();
		$('#DetailSkills').toggle(500);
	});	
  });