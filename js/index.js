	
	var div3 = document.createElement("div");
div3.style.width="100%";
div3.style.position="absolute";
div3.style.top="0px";
div3.style.height="100%";
div3.style.zIndex="2";
div3.style.visibility="hidden";
div3.style.background="black";
 
document.body.appendChild(div3);
function click_info(x) {
	
	var div=document.getElementsByTagName('div');
	var td=document.getElementsByTagName('td');
	var i=0;
	while(div[i])
	{
		div[i].style.display="none";
		td[i].style.background="black";
		td[i].style.color="white";
		i++;
	}
	div[x].style.display="inline";
	td[x].style.background="white";
	td[x].style.color="black";
	
}
function check_for_enter(e) {
	if (e.keyCode == 13) {
		var v = document.getElementById('search').value;
		var url = "https://www.omdbapi.com/?t="+v+"&y=&plot=full&r=json";
		assign_url(url,v);
	}
}
function assign_url(url,v)
{
	var http_json = new XMLHttpRequest();
	//console.log(v);
 //url = "https://www.omdbapi.com/?t="+v+"&y=&plot=full&r=json";
 
 http_json.open("GET", url, true);
 http_json.send();
 http_json.onreadystatechange = function() {
	if (http_json.readyState == 4 && http_json.status == 200) {
		var data =JSON.parse(http_json.responseText);
		//console.log(data);
		json_data_parse(data,v);
	}
 };

}

function json_data_parse(arr, search) {

//

//div3.onclick= function(){
//	div3.style.visibility = (div3.style.visibility == "visible") ? "hidden" : "visible";
//}

	var div1 = document.createElement("div");
	div1.style.width="200px";
	div1.style.height="300px";
	div1.style.border="1px solid grey";
	div1.style.overflow="hidden";
	
	div1.style.border.radius="7px";
	div1.style.float="left";

	var i =0;
  // console.log(arr.Title);

  var obj = arr;
  var href = obj["Poster"];
  var image = document.createElement("img");
  image.src=href;
  image.width="100";
  image.height="150";
  image.align="center";
  image.style.marginLeft="25%";

  div1.appendChild(image);
  var br =document.createElement("br");
  div1.appendChild(br);
  var jj=0;
  var Title = obj["Title"];
  for (var key in obj){
	var value = obj[key];
	if (key=="Poster") {
		;
	}
	else{
		var para = document.createElement("p");

		//console.log(key+" : "+ value );
		var t = document.createTextNode("  "+key+ " : ");
		para.style.display="inline";
		var input=document.createElement("input");
		input.value=value;
		input.id=Title+value;
		console.log(input.id);
		
		input.disabled="true";
		input.style.width="auto";
		input.style.height="auto";
		input.style.background="transparent";
		input.style.outline="none";
		input.style.border="0px";
		input.size="15";

		para.appendChild(t);

		div1.appendChild(para);
		div1.appendChild(input);
		var br =document.createElement("br");
		div1.appendChild(br);
	}
  }
jj++;
  //div.id=arr.Title;
  //var div2 = document.createElement("div");
  div1.onclick=function() {
var div2 = document.createElement("div");
div2.style.zIndex="3";
	div3.style.visibility="visible";
	div2.style.visibility="visible";
	div2.style.height="400px";
	div2.style.width="400px";
	div2.style.background="white";
	//div2.style.zIndex="3";
	div2.style.position="absolute";
	div2.style.top="50px";
	div2.style.left="100px";
	
	div2.style.overflow="scroll";
	div2.style.border="2px solid black";
	div2.style.textAlign="center";
	var image1 = document.createElement("img");
	image1.src = image.src;
	image1.width="100";
	image1.height="150";
	image1.align="center";
	
	div2.appendChild(image1);
	var br =document.createElement("br");
		div2.appendChild(br);
		var ii=0;
	for (var key in obj){
		var value = obj[key];
		if (key=="Poster"||key=="Response") {
			;
		}
		else{
			var para1 = document.createElement("p");

		//	console.log(key+" : "+ value );
			var t1 = document.createTextNode("  "+key+ " : ");
			para1.style.display="inline";
			var input1=document.createElement("textarea");
			input1.value=document.getElementById(Title+value).value;
			input1.id=ii+value;
		
			//console.log(input1.id);
			input1.style.resize="none";
			input1.style.width = "200px";
			input1.style.height="40px";
			input1.style.overflowY="scroll";
			
			para1.appendChild(t1);

			div2.appendChild(para1);
			div2.appendChild(input1);
			var br =document.createElement("br");
			div2.appendChild(br);
		}
	}
	
	var btn1= document.createElement("input");
	btn1.value="reset";
	btn1.type="button";
	var btn2= document.createElement("input");
	btn2.value="submit";
	btn2.type="button";
	btn1.onclick=function() {
	//	for(var key in obj)
		//{
		//	var value = obj[key];
	//	document.getElementById(Title+value).value=value;
		div2.style.visibility="hidden";

		div1.onclick();
	//	}
	}
	btn2.onclick=function() {
		//var val=arr;
		obj=arr;
		var val1= '';
		var kk=0;
		for(var key in obj){
			var val = obj[key];
			if (key=="Poster"||key=="Response") {
			;
		}
		else{
			val1=document.getElementById(kk+val).value;
			arr.key=val1;
			document.getElementById(Title+val).value=val1;
		//	console.log(key,val1,arr.key);
			
		}
		}
		
	}
	div2.appendChild(btn1);
	div2.appendChild(btn2);
	div3.onclick=function(){
	
	div3.style.visibility="hidden";
	div2.style.visibility="hidden";
	
	
}

	
	document.body.appendChild(div2);
	
 // 	alert('gggh');

}



div1.style.padding="10px";
document.body.appendChild(div1);



}