var row, col, width, height;
var b = new board();

function init(){
	var i;
	row = 15;//y
	col = 15;//x
	width = canvas.width;
	height= canvas.height;
	b.init();
	b.clearBoard();
}

function clicked(event){
	rect = event.target.getBoundingClientRect();
	x = event.pageX-rect.left;
	y = event.pageY-rect.top;
	b.setStone(x,y);
}

function disclick(event){
	rect = event.target.getBoundingClientRect();
	x = event.pageX-rect.left;
	y = event.pageY-rect.top;
	if(x>(display.offsetWidth/2))
		alert("RightSide clicked: "+x+","+display.clientWidth/2);
	else
		alert("LeftSide Clicked: "+x+","+display.clientWidth/2);
}