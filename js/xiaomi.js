{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelectorAll("#banner");
	let next=document.querySelectorAll(".next");
	let prev=document.querySelectorAll(".prev");
	console.log(imgs);
	console.log(pagers);
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
		for (let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
		}
	//鼠标移入的时候，停止
	banner.onmouseenter=function move(){
		clearInterval(t);
	}
	banner.onmouseleave=function move(){
		//赋值一定要赋给t，使用全局变量t，不然的话，动画就会停不了，鼠标移入也没有意义。
		t=setInterval(move,3000);
	}
	next.onclick=function(){
		move();
	}
	prev.onclick=function(){
		move();
	}
}
//闪购的部分效果
{
	const prev=document.querySelector(".star_btn1");
	const next=document.querySelector(".star_btn2");
	const inner=document.querySelector(".star_bottom");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===3){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
	}

	inner.style.marginLeft=-1226*n+"px";
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
