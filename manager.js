var row, col, width, height,pixelRatio;
var b = new board();

function init(){
	var i;
	row = 15;//y
	col = 15;//x
	pixelRatio = window.devicePixelRatio;
	canvas.width *= pixelRatio;
	canvas.height*= pixelRatio;
	width = canvas.width;
	height= canvas.height;
    canvas.style.width = "500px";
    canvas.style.height = "500px";
	b.init();
	b.clearBoard();
}

function keyPressed(event){
	switch(event.keyCode){
		case  27: b.clearBoard(); break;
		case  37: b.moveBack()  ; break;
		case  75: showKihu =true; break;
		case  83: showScore=true; break;
		case 116: break;
		default : alert("keyCode: "+event.keyCode);
	}
	updateCanvas();
}
function keyReleased(event){
	switch(event.keyCode){
		case  75: showKihu =false; break;
		case  83: showScore=false; break;
	}
	updateCanvas();
}

function clicked(event){
	rect = event.target.getBoundingClientRect();
	x = event.pageX-rect.left-document.body.scrollLeft;
	y = event.pageY-rect.top-document.body.scrollTop;
	x *= pixelRatio;
	y *= pixelRatio;
	b.setStone(x,y);
}

function diyclick(event){
	rect = event.target.getBoundingClientRect();
	x = event.pageX-rect.left-document.body.scrollLeft;
	y = event.pageY-rect.top-document.body.scrollTop;
	if(stateIndex!=0){
		b.clearBoard();
		updateCanvas();
	}else if(x>(display.offsetWidth/2))
		switchPlayer(1);
	else
		switchPlayer(0);
}

function dizclick(){
	switchCpuDisplayed();
}