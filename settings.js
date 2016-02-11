var player, cpulevel, cpuDisplayed;
var showKihu, showScore;
var stateIndex, states;

function setup(){
	player = ["Human", "Human"];
	cpulevel = [1,1];
	states = ["Continue", "Black Won!", "White Won!", "Draw"];
	stateIndex = 0;
	cpuDisplayed = 0;
	showKihu = false;
	showScore= false;

	displayAll();
}

function switchPlayer(n){
	player[n] = player[n]=="Human"?"CPU "+(n+1):"Human";
	displayAll();
}

function switchCpuDisplayed(){
	cpuDisplayed = (cpuDisplayed+1)%2;
	displayAll();
}

function cpuSelected(){
	cpulevel[cpuDisplayed] = cplevel.value;
}

function displayAll(){
	cplevel.value = cpulevel[cpuDisplayed];
	if(stateIndex==0)
		display.innerHTML = player[0]+" vs "+player[1];
	else
		display.innerHTML = states[stateIndex];
	displaz.innerHTML = "CPU "+(cpuDisplayed+1)+" Level:";
}