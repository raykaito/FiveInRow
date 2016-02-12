function tileScore(){
	this.sscore = 0;
	this.mscore = 0;
	this.score  = 0;
	this.rscore = 0;
	this.dcount = 0;
	this.stype = [0,0,0,0,0,0];
	this.mtype = [0,0,0,0,0,0];
}
tileScore.prototype.init = function(){
	this.clear();
};
tileScore.prototype.clear = function(){
	this.mtype[0] = this.stype[0] = 0;//  xooooox //  m=6666, s=8888
	this.mtype[1] = this.stype[1] = 0;//  _oooo_  //  m= 333, s= 444
	this.mtype[2] = this.stype[2] = 0;//  _ooo_   //  m=  80, s= 100
	this.mtype[3] = this.stype[3] = 0;//  _o_oo_  //  m=  80, s= 100
	this.mtype[4] = this.stype[4] = 0;//  _oooox  //  m=  80, s= 100
	this.mtype[5] = this.stype[5] = 0;//  xoo_oox //  m=  80, s= 100
	this.sscore = this.mscore = this.dcount = 0;
	this.score  = this.rscore = 0;
};
tileScore.prototype.updateScore = function(){
	if(this.mtype[0]==1||this.stype[0]==1){
		this.score = 1111*(this.stype[0]==1?8:6);
		this.rscore = 1111*(this.stype[0]==1?8:6);
		return;
	}
	this.rscore+= this.mscore*4 + this.sscore*5;
	this.score += this.mscore*4 + this.sscore*5;
	this.score += this.mtype[1]*1800+ this.stype[1]*2400;
	this.score += this.mtype[2]*80  + this.stype[2]*100;
	this.score += this.mtype[3]*80  + this.stype[3]*100;
	this.score += this.mtype[4]*80  + this.stype[4]*100;
	this.score += this.mtype[5]*80  + this.stype[5]*100;
	if(this.dcount>0) ;           // score/=2;
};

function tile(){
	this.p = 0;
	this.b = new tileScore();
	this.w = new tileScore();
}
tile.prototype.getRawScore = function(player){
	if(player==1)	return this.b.rscore;
	else			return this.w.rscore;
}
tile.prototype.getScore = function(player){
	if(player==1)	return this.b.score;
	else			return this.w.score;
}
tile.prototype.init = function(){
	this.clear();
	this.b.init();
	this.w.init();
};
tile.prototype.clear = function(){
	this.b.clear();
	this.w.clear();
};
tile.prototype.updateScore = function(){
	this.b.updateScore();
	this.w.updateScore();
};

function board(){
	this.st= [];
	this.sc=  1;
	this.sm=  0;
	this.t = [];
	this.currentPlayer = 1;
	this.moveCout = 0;
}
board.prototype.saveb = function(){
	var l;
	for(l=0;l<row*col;l++){
		this.st[l] = this.t[l].p;
	}
	this.sc = this.currentPlayer;
	this.sm = this.moveCount;
};
board.prototype.loadb = function(){
	var l;
	for(l=0;l<row*col;l++){
		this.t[l].p = this.st[l];
	}
	this.currentPlayer = this.sc;
	this.moveCount = this.sm;
	analyzeAll();
	updateCanvas();
};
board.prototype.getScore = function(player, advanced, index){
	var s;
	if(player==1){
		if(advanced)
			s = b.t[index].b.score;
		else
			s = b.t[index].b.rscore;
	}else{
		if(advanced)
			s = b.t[index].w.score;
		else
			s = b.t[index].w.rscore;
	}
	return s;
};
board.prototype.init = function(){
	var i;
	for(i=0; i<row*col;i++){
		this.t.push(new tile());
		this.t[i].init();
	}
	this.clearBoard();
	this.saveb();
};
board.prototype.clearBoard = function(){
	var i;
	for(i=0;i<row*col;i++){
		this.t[i].p = 0;
		this.t[i].clear();
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
board.prototype.setStone = function(index){
	if(stateIndex!=0) return;
	if(index==null){
		alert("invalid index:");
		return;
	}
	if(this.t[index].p==0){
		this.moveCount++;
		this.t[index].p = this.moveCount*this.currentPlayer;
		analyze(index);
		this.currentPlayer*=-1;
	}
	updateCanvas();
};
function getSide(i){
	if(i<0||i>=row*col){
		alert(i+"");
		return;
	}
	if     (Number(b.t[i].p)> 0)return  1;
	else if(Number(b.t[i].p)< 0)return -1;
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