function tile () {
	this.p = 0;
	this.score =0;
}
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
};
board.prototype.clearBoard = function(){
	var i;
	for(i=0;i<row*col;i++){
		this.t[i].p = 0;
	}
	this.currentPlayer = 1;
	this.moveCount = 0;
	stateIndex = 0;
};
board.prototype.moveBack  = function(){
	if(this.moveCount == 0) return;
	var i;
	for(i=0;i<row*col;i++){
		if(Math.abs(this.t[i].p)==this.moveCount){
			this.t[i].p = 0;
			analyze(i);
			this.moveCount--;
			this.currentPlayer*=-1;
			return;
		}
	}
	updateCanvas();
};
board.prototype.setStone = function(x,y){
	if(stateIndex!=0) return;

	x = Math.floor(x*col/width);//column
	y = Math.floor(y*row/height);//row
	index = toi(y,x);
	if(this.t[index].p==0){
		this.moveCount++;
		this.t[index].p = this.moveCount*this.currentPlayer;
		analyze(index);
		this.currentPlayer*=-1;
	}
	updateCanvas();
};
function getSide(i){
	if     (b.t[i].p> 0)return  1;
	else if(b.t[i].p< 0)return -1;
	else				return  0;
}
function tor(index){
	return Math.floor(index/row);
}
function toc(index){
	return (index%row);
}
function toi(r, c){
	return r*col+c;
}