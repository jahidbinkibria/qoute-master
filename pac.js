
var xhttp = new XMLHttpRequest();

var quote='sdfd';
function sendAjax(){

	 xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       quote = JSON.parse(xhttp.responseText);

     	document.getElementById("ajax").innerHTML =  quote[0].content ;
     	document.getElementById("name").innerHTML = " - " + quote[0].title;
  
     	var red = Math.floor(Math.random() * 255) ;
        var blue = Math.floor(Math.random() * 255) ;
        var green = Math.floor(Math.random() * 255) ;
        var mcolor = `rgb(${red}, ${blue}, ${green})`;
     	document.body.style.backgroundColor = mcolor;
     	
     	res= quote[0].content;
		var result = res.replace(/<\/?[^>]*>/g, "");
		document.getElementsByTagName("a")[0].href = "https://twitter.com/intent/tweet?text="+result+' - '+quote[0].title;
    }
   
  };

	xhttp.open("GET", "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&"+ Math.random(), true);
	xhttp.send();
	
}
sendAjax();
