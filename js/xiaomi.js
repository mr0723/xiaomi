{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#BN");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	console.log(imgs);
	console.log(banner);
	pagers.forEach(function(ele,index){
			ele.onclick=function(){
				for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				this.classList.add("active");
				imgs[index].classList.add("active");
				n=index;
			}
		})
	//让轮播图自己播放的效果
	let n=0;
	let t=setInterval(move,3000);
		function move() {
		n++;
		if(n===imgs.length){
			n=0; 
		}
		if(n<0){
			n=imgs.length-1;
		}
		for (let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
		}
	//鼠标移入的时候，停止
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		//赋值一定要赋给t，使用全局变量t，不然的话，动画就会停不了，鼠标移入也没有意义。
		t=setInterval(move,3000);
	};
	next.onclick=function(){
		move();
	};
	prev.onclick=function(){
		n-=2;
		move();
	};
}
//闪购的部分效果
{
	const prev=document.querySelector(".star_btn1");
	const next=document.querySelector(".star_btn2");
	const inner=document.querySelector(".star_bottom");
	console.log(prev);
	let n=0;
	next.onclick=function(){
		n++;
		if(n===3){
			n=2;
			return;
		}
		prev.classList.remove("disable");
		this.classList.add("disable");
		
		inner.style.marginLeft=-1226*n+"px";
	}
	prev.onclick=function(){

		n--;
		if(n===-1){
			n=0;
			return;
		}

		next.classList.remove("disable");
		
		this.classList.add("disable");
		inner.style.marginLeft=-1226*n+"px";
	}

	// inner.style.marginLeft=-1226*n+"px";
}
//对应的效果：
{
		function smart(parent){
		const types=parent.querySelectorAll(".type");
		const goods=parent.querySelectorAll(".smart_right");
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("active");
					goods[i].classList.remove("active");
				}
				this.classList.add("active");
				goods[index].classList.add("active");
			}
		})
	}

}


	const contentList=document.querySelectorAll(".smart");
	smart(contentList[0]);
	smart(contentList[1]);
	smart(contentList[2]);
	smart(contentList[3]);


{
	let labels=document.querySelectorAll(".BN_nav li");
    let  menus=document.querySelectorAll(".menu");
    let  obj=menus[0];

    		console.log(labels,menus,obj);
    		labels.forEach(function(ele,index){
    			ele.onmouseenter=function(){
    				obj.style.display="none";
    				menus[index].style.display="block";
    				obj=menus[index];
    			}
    			ele.onmouseleave=function(){
    				menus[index].style.display="none";
    			}
    		})
}

{ 
	function inn(parent){
	let prev=parent.querySelector(".anniu_left");
	let next=parent.querySelector(".anniu_right");
	let inner=parent.querySelector(".big_box12");
	let contents=parent.querySelectorAll(".neirong_box");
	let pagers=parent.querySelectorAll(".pager");
	console.log(pagers);
	let n=0;
	next.onclick=function(){
		n++;
		if(n=== contents.length){
			n=contents.length-1;
			return;
		}
		inner.style.marginLeft=n*-296+"px";
		pagers[n].classList.add("action12");
		pagers[n-1].classList.remove("action12");
		obj=pagers[n];
	};
	prev.onclick=function(){
		n--;
		if(n<0){
			n=0;
			return;

		}

		inner.style.marginLeft=n*-296+"px";
		pagers[n].classList.add("action12");
		pagers[n+1].classList.remove("action12");
		obj=papers[n];
	};

	let obj=pagers[0];
	// console.log(obj);
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			obj.classList.remove("action12");
			ele.classList.add("action12");
			
			obj=ele;
			n=index;
			inner.style.marginLeft=n*-296+"px";
		}
		})

	}
	var content=document.querySelectorAll(".reping_content .inner2");
	console.log(content[0]);
	inn(content[0]);
	inn(content[1]);
	inn(content[2]);
	inn(content[3]);

}
	
{
	let labels=document.querySelectorAll(".dh_wenzi span");
    let  menus=document.querySelectorAll(".dh_tan");
    let  obj=menus[0];

    		console.log(labels,menus,obj);
    		labels.forEach(function(ele,index){
    			ele.onmouseenter=function(){
    				obj.style.display="none";
    				menus[index].style.display="block";
    				obj=menus[index];
    			}
    			ele.onmouseleave=function(){
    				menus[index].style.display="none";
    			}
    		})
}	
