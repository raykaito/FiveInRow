function updateCanvas(){
	cs.clearRect(0,0,width,height);
	cs.fillStyle="rgb(253, 187, 129)";
	cs.fillRect(0,0,width,height);
	drawGlids();
	drawStones();
}
function drawStones(){
	var i,j, p,x,y;
	var xcell, ycell;
	xcell =  width/col;
	ycell = height/row;

	for(p=1;p>=-1;p-=2){
		if(p==1)	cs.fillStyle="black";
		else		cs.fillStyle="white";
		for(i=0;i<row;i++){
			for(j=0;j<col;j++){
				if(p*tile[i*col+j]>0){
					x = j*xcell+xcell/2;
					y = i*ycell+ycell/2;
					drawCircle(x,y,xcell/2,0,Math.PI*2);
				}
			}
		}
	}
}
function drawGlids(){
	cs.strokeStyle="black";

	var xcell, ycell, i, variable;
	xcell =  width/col;
	ycell = height/row;

	cs.beginPath();
	for(i=0;i<row;i++){
		
		variable = i*ycell+ycell/2;
		drawLine(xcell/2, variable, width-xcell/2, variable);
	}
	for(i=0;i<col;i++){
		variable = i*xcell+xcell/2;
		drawLine(variable, ycell/2, variable, height-ycell/2);
	}
	cs.stroke();
}
fucntion 
function drawLine(xi, yi, xo, yo){
	cs.moveTo(xi, yi);
	cs.lineTo(xo, yo);
}
function drawCircle(x, y, radius){
	cs.beginPath();
	cs.arc(x,y,radius,0,2*Math.PI);
	cs.fill();
}