//Check off specific todos by clicking
//For dynamic children, event listeners has to be on
//an existing parent otherwise it wont work. Hence
//in our case we take ul as the parent for both the
//li and span click listeners
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todos
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//to stop listeners on any parent elements from firing
	event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
	//Checking for enter key
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}	
});