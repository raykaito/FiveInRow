var row, col, width, height;
var currentPlayer, moveCount;
var tile = [];
boolean showKihu=false, showScore=false; 

function init(){
	var i;
	row = 15;//y
	col = 15;//x
	width = canvas.width;
	height= canvas.height;
	for(i=0; i<row*col;i++){
		tile.push(0);
	}
	clearBoard();
}

function clicked(event){
	rect = event.target.getBoundingClientRect();
	x = event.pageX-rect.left,
	y = event.pageY-rect.top;
	setStone(x,y);
}