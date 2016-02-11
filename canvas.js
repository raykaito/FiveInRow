function updateCanvas(){
	cs.clearRect(0,0,width,height);
	cs.fillStyle="rgb(253, 187, 129)";
	cs.fillRect(0,0,width,height);
	drawGlids();
	drawStones();
	displayAll();
}
function drawStones(){
	var i,j,p,s,x,y;
	var xcell, ycell;
	xcell =  width/col;
	ycell = height/row;

	for(i=0;i<row;i++){
		for(j=0;j<col;j++){

			p = b.t[i*col+j].p;
			s = b.t[i*col+j].score;
			x = j*xcell+xcell/2;
			y = i*ycell+ycell/2;

			if(Math.abs(p)>0){
				cs.fillStyle=(p>0)?"black":"white";
				drawCircle(x,y,xcell/2,0,Math.PI*2);
				if(showKihu){
					cs.fillStyle=(p<0)?"black":"white";
					drawCenteredText(x,y,xcell/2,""+Math.abs(p));
				}
			}else if(showScore&&s>0){
				cs.fillStyle="white";
				drawCenteredText(x,y,xcell/3,""+s);
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
function drawCenteredText(x,y,h,txt){
	cs.beginPath();
	cs.font= h+"px Arial";
	cs.textAlign = 'center';
	y+=h/3;
	cs.fillText(txt,x,y);
}
function drawLine(xi, yi, xo, yo){
	cs.moveTo(xi, yi);
	cs.lineTo(xo, yo);
}
function drawCircle(x, y, radius){
	cs.beginPath();
	cs.arc(x,y,radius,0,2*Math.PI);
	cs.fill();
}