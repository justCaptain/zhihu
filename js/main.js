var canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;		
	canvas.height = window.innerHeight;
	var  ctx = canvas.getContext('2d');
	var num = 17;
	var node = new Array();
	
	var nodes = function(){
		this.x = Math.random()*canvas.width;
		this.y = Math.random()*canvas.height;
		this.xdire = Math.random()-0.5;
		this.ydire = Math.random()-0.5;
		this.r = Math.random()*20;
	}
	function drawCircle(x,y,r){
		ctx.beginPath();
		ctx.arc(x,y,r,0,Math.PI*2);
		ctx.fill();
	}
	function drawLine(){
		for (var i=0; i<num; i++){
			for (var j=i+1; j<num; j++){
				var tmpx = Math.abs(node[i].x-node[j].x);
				var tmpy = Math.abs(node[i].y-node[j].y);
				var tmp = Math.sqrt(tmpx*tmpx+tmpy*tmpy);
				if (tmp < 350){
					ctx.beginPath();
					ctx.moveTo(node[i].x,node[i].y);
					ctx.lineTo(node[j].x,node[j].y);
					ctx.stroke();
				}
			}
		}
	}
	function init(){
		ctx.fillStyle="rgba(180,180,255,0.15)";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle="rgba(3,3,3,0.05)";
		ctx.strokeStyle="rgba(3,3,3,0.07)";
		for (var i = 0; i<num; i++){
			node[i] = new nodes();
			drawCircle(node[i].x,node[i].y,node[i].r);
		}
		drawLine();
	}
	function redraw(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle="rgba(180,180,255,0.15)";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle="rgba(3,3,3,0.05)";
		for(var i=0; i<num; i++){
			drawCircle(node[i].x,node[i].y,node[i].r);
			
		}
		drawLine();
	}
	window.onload = function(){
		init();
		ctx.clearRect(0,0,canvas.width,canvas.height);
		setInterval( function(){
			for (var i=0; i<num;i++){
				node[i].x+=node[i].xdire;
				node[i].y+=node[i].ydire;
				if(node[i].x<0||node[i].x>canvas.width){
					node[i].x = Math.random()*canvas.width;
					node[i].y = Math.random()*canvas.height;
					node[i].xdire = 2*Math.random()-1;
					node[i].ydire = 2*Math.random()-1;
				}
				else if(node[i].y<0||node[i].y>canvas.height){
					node[i].x = Math.random()*canvas.width;
					node[i].y = Math.random()*canvas.height;
					node[i].xdire = 2*Math.random()-1;
					node[i].ydire = 2*Math.random()-1;
				}
			}
			redraw();
		},60);
		
	}