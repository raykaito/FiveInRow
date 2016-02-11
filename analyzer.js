function analyze(index){
	judge(index);
}

function judge(index){
	if(getSide(index)!=b.currentPlayer){
		stateIndex=0;
		return;
	}
	var dire,dr,dc,i,counter;
	var nrow, ncol;
	var freeSpace=0;
	var r = tor(index), c = toc(index);

	for(i=0;i<row*col;i++){
		if(getSide(i)==0) freeSpace++;
	}
	if(freeSpace==0){
		stateIndex = 3;
		return;
	}
	
	for(dire=0;dire<4;dire++){
		counter = 1;
		switch(dire){
			case  0: dr= 1; dc= 0; break;//Horizontal
			case  1: dr= 0; dc= 1; break;//Vertical
			case  2: dr= 1; dc=-1; break;//Diagonal
			case  3: dr= 1; dc= 1; break;//Diagonal
			default: dr= 0; dc =0;
		}
		for(i=1;i<5;i++){
			nrow=dr*i+r; ncol=dc*i+c;
			if(nrow>=row || nrow<0) break;
			if(ncol>=col || ncol<0) break;
			if(getSide(nrow*col+ncol)!=b.currentPlayer) break;
			counter++;
		}
		for(i=-1;i>-5;i--){
			nrow=dr*i+r; ncol=dc*i+c;
			if(nrow>=row || nrow<0) break;
			if(ncol>=col || ncol<0) break;
			if(getSide(nrow*col+ncol)!=b.currentPlayer) break;
			counter++;
		}
		if(counter>=5){
			stateIndex = b.currentPlayer==1?1:2;
			return;
		}
	}
}

function updateScores(){
}