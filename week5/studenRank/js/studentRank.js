// JavaScript Document

// 主要调用的函数：
function studentRank(sdName) {
	// 声明一个字符串变量，用来储存学生的级别提示语
	var rankWords = "";
	// 声明一个变量用来储存学生的分数
	var score;
	// 声明一个变量用来储存学生的等级
	var rank;
	//判断是哪个学生
	switch(sdName) {
	    case "sdA":
	        score = document.getElementById("sdA").value;
	        break;
	    case "sdB":
	        score = document.getElementById("sdB").value;
	        break;
	    case "sdC":
	        score = document.getElementById("sdC").value;
	        break;
	}

	// 排错
	if (score.length == 0) { //检查是否为空值,或是否不是数字
		alert ("学生分数不能为空，且只能为数字");
		return;
	} else if (score < 0 || score > 100) { //检查是否超出分数范围
		alert ("分数有误，请输入0~100以内的数字");
		return;
	} else if (score == 100){ //100分默认计算是0等生，所以调整为1等生
		rank = 1;
	} else {
		// 计算获得学生的等级
		rank = 10 - parseInt(score/10);
	}

	// 弹出学生等级
	alert("该学生是" + rank + "等生");
}

function studentRankA(){
	studentRank("sdA");
}
function studentRankB(){
	studentRank("sdB");
}
function studentRankC(){
	studentRank("sdC");
}
/* 
*上面几个函数感觉有点冗余
*本来想直接这样：
* document.getElementById("btnA").addEventListener("click",studentRank("sdA"));
*但是不行，会出现意料之外的情况
*/
document.getElementById("btnA").addEventListener("click",studentRankA);
document.getElementById("btnB").addEventListener("click",studentRankB);
document.getElementById("btnC").addEventListener("click",studentRankC);