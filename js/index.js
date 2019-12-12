var imgs=document.getElementById("imgs");
var left=document.getElementById("left");
var right=document.getElementById("right");
var arrLi=document.getElementsByTagName("li");
var box2=document.getElementById("box2");
var index=1;
var id;
var dodo=document.getElementById("dodo");

function dodo1(){
	setInterval(function(){
	var temp=parseInt(dodo.style.left)-1;
	if(temp<-442.69)
		temp=974;
	dodo.setAttribute("style", "left:"+temp+"px");
	},10);
}
dodo1();
var setIn=function(){
	id=setInterval(function(){
		arrLi[index-1].removeAttribute("class", "active");
		index++;
		animate(imgs,{left:-1200*index},function(){
			if (index===6) {
				imgs.style.left='-1200px';
				index=1;
			}
		});
		arrLi[(index-1)%5].setAttribute("class", "active");
	}, 3000);
}

setIn();

box2.onmouseover=function(){
	left.style.opacity='0.5';
	right.style.opacity='0.5';
}

box2.onmouseleave=function(){
	left.style.opacity='0';
	right.style.opacity='0';
}

left.onclick=function(){
	clearInterval(id);
	arrLi[index-1].removeAttribute("class", "active");
	index--;
	animate(imgs,{left:-1200*index},function(){
		if (index===0) {
			imgs.style.left='-6000px';
			index=5;
		}
	});
	arrLi[(index+4)%5].setAttribute("class", "active");
	setIn();
}

right.onclick=function(){
	clearInterval(id);
	arrLi[index-1].removeAttribute("class", "active");
	index++;
	animate(imgs,{left:-1200*index},function(){
		if (index===6) {
			imgs.style.left='-1200px';
			index=1;
		}
	});
	arrLi[(index-1)%5].setAttribute("class", "active");
	setIn();
}

for(var i=0;i<arrLi.length;i++){
	arrLi[i].onclick=function(){
		clearInterval(id);
		// console.log(index-1);
		arrLi[index-1].removeAttribute("class", "active");
		index=parseInt(this.getAttribute("name"));
		// console.log(index-1);
		arrLi[index-1].setAttribute("class", "active");
		animate(imgs,{left:-1200*index});
		setIn();
	}
}