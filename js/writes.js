function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function(){
	
	$(window).scrollTop();
	
	$("#cont1").attr("class","extra");
	
	var c1=true,f=true,c2=true;
	
    $(window).scroll(function() {    
    if(isScrolledIntoView($('#div2')))
    {
        $("#cont2").attr("class","container2");
    }
    if(isScrolledIntoView($('#div3')))
    {
        $("#cont3").attr("class","container3");
    }
});


});
