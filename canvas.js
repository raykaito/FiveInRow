function orderedPairs(string, isItX){
	var x, mid;
	string = string.substring(1,string.length-1);
	x = string.split( ')(' );
	for(i = 0; i<x.length ; i++){
		mid = x[i].indexOf(',');
		if(isItX) x[i] = x[i].substring(0,mid)-0;
		else x[i] = x[i].substring(mid+1)-0;
	}
	return x
}

function drawChain(x,y,string){
	for(i = 0 ; i<string.length-1 ; i++){
	cs.beginPath();
	cs.moveTo(x[Number(string.charAt(i  ))],y[Number(string.charAt(i  ))]);
	cs.lineTo(x[Number(string.charAt(i+1))],y[Number(string.charAt(i+1))]);
	cs.stroke();
	}
}

function sameAngleSymbol(x,y,radius,string){
	var i,v,n,theta1,theta2;
	
	i = Number(string.charAt(0));
	v = Number(string.charAt(1));
	n = Number(string.charAt(2));
	theta1 = Math.atan((y[v]-y[i])/(x[v]-x[i]));
	if((x[v]-x[i])>=0) theta1 += Math.PI;
	theta2 = Math.atan((y[v]-y[n])/(x[v]-x[n]));
	if((x[v]-x[n])>=0) theta2 += Math.PI;
	
	cs.beginPath();
	cs.arc(x[v],y[v],radius,theta2,theta1,false);
	cs.stroke();
}

function rightAngleSymbol(x,y,size,string){
	var i,v,n,theta1,theta2,xx,yy;
	
	i = Number(string.charAt(0));
	v = Number(string.charAt(1));
	n = Number(string.charAt(2));
	
	theta1 = Math.atan((y[v]-y[i])/(x[v]-x[i]));
	if((x[v]-x[i]>=0)) theta1+=Math.PI;
	theta2 = Math.atan((y[v]-y[n])/(x[v]-x[n]));
	if((x[v]-x[n]>=0)) theta2+=Math.PI;
	
	xx = new Array();
	yy = new Array();
	
	xx[i] = x[v]+size*Math.cos(theta1);
	yy[i] = y[v]+size*Math.sin(theta1);
	xx[v] = xx[i]+size*Math.cos(theta2);
	yy[v] = yy[i]+size*Math.sin(theta2);
	xx[n] = x[v]+size*Math.cos(theta2);
	yy[n] = y[v]+size*Math.sin(theta2);
	
	drawChain(xx, yy,"012");
}


function arrayOrder(x, string){
	var xx;
	
	xx = new Array();
	for(i = 0; i<string.length ; i++){
		xx[i] = x[Number(string.charAt(i))];
	}
	return xx;
}

function letters(letters, x, y, string){
	cs.font ='18pt sans-serif';
	cs.textAlign = 'center';
	cs.fillStyle="black";
	for(var i = 0; i<string.length; i++){
		cs.fillText(letters.charAt(i),x[Number(string.charAt(i))]+20,y[Number(string.charAt(i))]+20);
	}
}