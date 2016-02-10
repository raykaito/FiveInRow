function setStone(x,y){
	x = Math.floor(x*col/width);
	y = Math.floor(y*row/height);
	index = y*col + x;
	if(tile[index]==0){
		moveCount++;
		tile[index] = moveCount*currentPlayer;
		currentPlayer*=-1;
	}
	updateCanvas();
}
function clearBoard(){
	var i;
	for(i=0;i<row*col;i++){
		tile[i] = 0;
	}
	currentPlayer = 1;
	moveCount = 0;
}