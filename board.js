function board(){
	this.t = [];
	this.currentPlayer = 1;
	this.moveCout = 0;
}
board.prototype.init = function(){
	var i;
	for(i=0; i<row*col;i++){
		this.t.push(new tile());
	}
}
board.prototype.clearBoard = function(){
	var i;
	for(i=0;i<row*col;i++){
		this.t[i].p = 0;
	}
	this.currentPlayer = 1;
	this.moveCount = 0;
};
board.prototype.setStone = function(x,y){
	x = Math.floor(x*col/width);
	y = Math.floor(y*row/height);
	index = y*col + x;
	if(this.t[index].p==0){
		this.moveCount++;
		this.t[index].p = this.moveCount*this.currentPlayer;
		this.currentPlayer*=-1;
	}
	updateCanvas();
};

function tile () {
	this.p = 0;
	this.score =0;
}