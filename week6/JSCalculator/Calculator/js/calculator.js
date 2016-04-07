// JavaScript Document

//为了使计算器在页面垂直居中对齐，声明一个变量储存页面高度
var pageheight = window.innerHeight;
//获得计算器的高度
var calcheight = 500;

//储存输入值的变量(初始化为“空” p代表空)
var input = "p";

//储存结果的变量
var output = 0;

//临时储存2级运算结果的变量 （为解决一、二级运算相关逻辑问题）
var secmath = 0;

//判断之前是否有1级运算没处理的变量（将有3种值）
var fswitch = 0;	//（0为没有未处理的1级运算，1为未处理的加法运算，2为减法。。）

//声明一个存放运算类型的变量 (按等号按钮时根据这个变量判断运算)
var operation = 0; // (值是1为“加”、2为“减”、3为“乘”、4为“除”)

//声明一个变量存放美化后显示的数字字符串
var screenshow = "";

if (calcheight < pageheight) { //如果页面高度大于计算器高度，使计算器垂直居中
	document.getElementById("container").style.marginTop = (pageheight - calcheight) * 0.5 + "px";
}


// 美化数值的函数(计数位加逗号)
function numBeautify(numb) {
	var bnum = numb;
	var befd; //存放小数点前的字符串
	var aftd; //存放小数点后的字符串
	var f;	//临时存放逗号前面的字符串变量
	var b;	//临时存放逗号后面的字符串变量
	var loopini;  //声明一个变量将存放循环初始值
	bnum = bnum.toString();
	if (bnum.length <= 14) { //如果数字位数小于等于14
		if (bnum.length > 3) { //如果数字位数大于3，进行位数美化
			if (bnum.indexOf(".") == -1) { //如果没有小数点
				loopini = bnum.length - 3; //变量存放循环初始值
				for (var i = loopini; i > 0; i=i-3) {
					f = bnum.substr(0,i);
					b = "," + bnum.substr(i,bnum.length-i);
					bnum = f.concat(b); //依次循环加上逗号
				}
				screenshow = bnum; //将加上逗号的数字赋值给screenshow
			} else {// 如果有小数点
				// 先将小数点分离
				befd = bnum.substr(0,bnum.indexOf(".")); //小数点前的数放入befd
				aftd = bnum.substr(bnum.indexOf(".")); //将小数位放入aftd
				if (befd.length > 3) { //如果小数点前的位数大于3
					//依次循环加上逗号
					loopini = befd.length - 3; //变量存放循环初始值
					for (var i = loopini; i > 0; i=i-3) {
						f = befd.substr(0,i);
						b = "," + befd.substr(i,befd.length-i);
						befd = f.concat(b); //依次循环加上逗号
					}
					bnum = befd.concat(aftd); //将小数点前的数和后面的拼合
					screenshow = bnum; //将加上逗号的带小数数字赋值给screenshow
				} else {//如果小数点前的位数小于3，不进行位数美化
					screenshow = bnum;
				}
			}
		} else { //如果数字位数小于等于3，不进行位数美化
			screenshow = bnum;
		}
		
	} else {//如果数字位数大于等于14，转为科学计数法形式
		bnum = parseFloat(bnum);
		screenshow = parseFloat(screenshow);
		screenshow = bnum.toExponential(11);
	}
}


// 传入数值的函数 **************************
function numInput() {
	
	//创建数值键盘的对象（不知道这么说对不对）
	var numkeys = document.getElementById('num-board');

	//对每个数字按钮进行点击监听并执行传入值的操作 (代理绑定)
	numkeys.addEventListener('click',function(e){
		//先检查运算是否已结束
		if (operation==0) { 
			output = 0; //如果已结束，output初始化
		}
		//查看输入的数字长度，如果太长，不能再输入
		if (input.length > 18) { //数字长度不能超过19位
			return;
		}
		//判断是不是点击了父级元素
		if (e.target == numkeys) {
			return; //如果点了父级元素，为防止同时触发所有子元素，直接跳出
		}
		//声明一个变量储存当前按钮的值
		var tc = e.target.textContent;

		// 为了让小数点只能出现一次，进行一些逻辑判断
		if (tc != ".") { // 如果不是小数点按钮
			if (input != "p") { //查看input是否有输入值
				// 为了让0不出现在数字的最前面（0.xxx除外）进行一些逻辑判断
				if (tc != "0" && input != "0") { // 如果没按按钮0且数值不是0的话直接赋值
					input = input + tc;
				} else if (tc != "0" && input == "0"){ 
					input = tc;	//如果按钮不是0，但当前input值是0，那么去掉0			
				} else if (tc == "0" && input != "0"){
					input = input + tc; //如果按钮是0，且input不是零，那么直接赋值
				} else {
					return; //如果是按钮0，input也是0，那么跳出函数
				}
			} else {
				input = tc; //如果之前输入值为空，那么直接赋值
			}
			
		} else { // 如果按的是小数点按钮
			if (input != "p") { //如果小数点前有数
				if (input.indexOf(".") == -1) { //如果之前没有小数点
					input = input + tc; // 直接传值
				} else {  //如果之前已有小数点
					return;  //跳出函数
				}
			} else { //如果小数点前没有数
				input = "0" + tc; //输出 “0.”
			}
		}
		//在显示屏中显示输入后的数值
		numBeautify(input);
		document.getElementById('display').innerHTML=screenshow;
	});
}
////////////调用输入函数////////////
numInput();

// Del 删除单个输入按钮函数 ***********************
function delLastInput() {
	input = input.toString();  //先转换成字符串
	input = input.substring(0,input.length-1); //删掉最后一个字符
	if (input == "") {	//如果删完了
		input = 0;	//把input再变成“0”
	}
	numBeautify(input);
	document.getElementById('display').innerHTML=screenshow; //刷新显示
}
// 监听Del按钮，并调用函数
document.getElementById('del').addEventListener('click',delLastInput);

// C 删除整行输入的按钮函数 ***********************
function deleteRow() {
	if (operation==0) { //判断运算是否已结束
		output = 0; //如果已结束，output也初始化
	}
	input = "p"; //初始化input
	document.getElementById('display').innerHTML=0; //刷新显示
}
// 监听C按钮，并调用函数
document.getElementById('clear').addEventListener('click',deleteRow);

// AC 初始化计算器的按钮函数 *********************
function allClear() {
	input = "p"; //初始化输入
	output = 0; //初始化输出
	secmath = 0; //初始化二级运算数据临时存储变量
	fswitch = 0; //初始化判断是否有未处理一级运算的开关
	operation = 0; //初始化运算类型
	document.getElementById('display').innerHTML=output; //刷新显示
}
// 监听AC按钮，并调用函数
document.getElementById('ac').addEventListener('click',allClear);

// sin按钮函数 *********************
function setSin() {
	// 先查看要转换的是否是刚输入的值
	if (input != "p") { //如果有刚输入的值，则进行输入值的转换
		input = parseFloat(input); //先把input转换成浮点数
		input = Math.sin(input); //用Math方法计算sin
		numBeautify(input);
		document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
	} else { // 如果没有刚输入的值，说明已经进行过一些运算
		// 先查看二级运算临时变量里是否有值存在
		if (secmath==0) { //如果没有值则可以直接对output转换,因为值都在output中
			output = parseFloat(output); //先把output转换成浮点数
			output = Math.sin(output); //用Math方法计算sin
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		} else { // 如果二级运算临时变量里有值，则对此变量进行转换
			secmath = parseFloat(secmath); //先把secmath转换成浮点数
			secmath = Math.sin(secmath); //用Math方法计算sin
			numBeautify(secmath);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		}
		
	}
}
// 监听sin按钮，并调用函数
document.getElementById('sin').addEventListener('click',setSin);

// cos按钮函数 *********************
function setCos() {
	// 先查看要转换的是否是刚输入的值
	if (input != "p") { //如果有刚输入的值，则进行输入值的转换
		input = parseFloat(input); //先把input转换成浮点数
		input = Math.cos(input); //用Math方法计算cos
		numBeautify(input);
		document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
	} else { // 如果没有刚输入的值，说明已经进行过一些运算
		// 先查看二级运算临时变量里是否有值存在
		if (secmath==0) { //如果没有值则可以直接对output转换,因为值都在output中
			output = parseFloat(output); //先把output转换成浮点数
			output = Math.cos(output); //用Math方法计算cos
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		} else { // 如果二级运算临时变量里有值，则对此变量进行转换
			secmath = parseFloat(secmath); //先把secmath转换成浮点数
			secmath = Math.cos(secmath); //用Math方法计算cos
			numBeautify(secmath);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		}
		
	}
}
// 监听cos按钮，并调用函数
document.getElementById('cos').addEventListener('click',setCos);

// tan按钮函数 *********************
function setTan() {
	// 先查看要转换的是否是刚输入的值
	if (input != "p") { //如果有刚输入的值，则进行输入值的转换
		input = parseFloat(input); //先把input转换成浮点数
		input = Math.tan(input); //用Math方法计算tan
		numBeautify(input);
		document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
	} else { // 如果没有刚输入的值，说明已经进行过一些运算
		// 先查看二级运算临时变量里是否有值存在
		if (secmath==0) { //如果没有值则可以直接对output转换,因为值都在output中
			output = parseFloat(output); //先把output转换成浮点数
			output = Math.tan(output); //用Math方法计算tan
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		} else { // 如果二级运算临时变量里有值，则对此变量进行转换
			secmath = parseFloat(secmath); //先把secmath转换成浮点数
			secmath = Math.tan(secmath); //用Math方法计算tan
			numBeautify(secmath);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		}
		
	}
}
// 监听tan按钮，并调用函数
document.getElementById('tan').addEventListener('click',setTan);

// X2按钮函数 *********************
function setXsquare() {
	// 先查看要转换的是否是刚输入的值
	if (input != "p") { //如果有刚输入的值，则进行输入值的转换
		input = parseFloat(input); //先把input转换成浮点数
		input = Math.pow(input,2); //用Math方法计算x的二次方
		numBeautify(input);
		document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
	} else { // 如果没有刚输入的值，说明已经进行过一些运算
		// 先查看二级运算临时变量里是否有值存在
		if (secmath==0) { //如果没有值则可以直接对output转换,因为值都在output中
			output = parseFloat(output); //先把output转换成浮点数
			output = Math.pow(input,2); //用Math方法计算x的二次方
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		} else { // 如果二级运算临时变量里有值，则对此变量进行转换
			secmath = parseFloat(secmath); //先把secmath转换成浮点数
			secmath = Math.pow(input,2); //用Math方法计算x的二次方
			numBeautify(secmath);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		}
		
	}
}
// 监听X2按钮，并调用函数
document.getElementById('xtwo').addEventListener('click',setXsquare);

// X3按钮函数 *********************
function setXcube() {
	// 先查看要转换的是否是刚输入的值
	if (input != "p") { //如果有刚输入的值，则进行输入值的转换
		input = parseFloat(input); //先把input转换成浮点数
		input = Math.pow(input,3); //用Math方法计算x的三次方
		numBeautify(input);
		document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
	} else { // 如果没有刚输入的值，说明已经进行过一些运算
		// 先查看二级运算临时变量里是否有值存在
		if (secmath==0) { //如果没有值则可以直接对output转换,因为值都在output中
			output = parseFloat(output); //先把output转换成浮点数
			output = Math.pow(input,3); //用Math方法计算x的三次方
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		} else { // 如果二级运算临时变量里有值，则对此变量进行转换
			secmath = parseFloat(secmath); //先把secmath转换成浮点数
			secmath = Math.pow(input,3); //用Math方法计算x的三次方
			numBeautify(secmath);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		}
		
	}
}
// 监听X3按钮，并调用函数
document.getElementById('xthree').addEventListener('click',setXcube);

// 正负号按钮函数 ************************
function possiNega() {
	// 先查看要转换的是否是刚输入的值
	if (input != "p") { //如果有刚输入的值，则进行输入值的转换
		input = parseFloat(input); //先把input转换成浮点数
		if (input > 0) {	//如果大于0，转换成负数
			input = 0 - input;
		} else {	//否则，转换成正数
			input = Math.abs(input);
		}
		numBeautify(input);
		document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
	} else { // 如果没有刚输入的值，说明已经进行过一些运算
		// 先查看二级运算临时变量里是否有值存在
		if (secmath==0) { //如果没有值则可以直接对output转换,因为值都在output中
			output = parseFloat(output); //先把output转换成浮点数
			if (output > 0) {	//如果大于0，转换成负数
				output = 0 - output;
			} else {	//否则，转换成正数
				output = Math.abs(output);
			}
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		} else { // 如果二级运算临时变量里有值，则对此变量进行转换
			secmath = parseFloat(secmath); //先把secmath转换成浮点数
			if (secmath > 0) {	//如果大于0，转换成负数
				secmath = 0 - secmath;
			} else {	//否则，转换成正数
				secmath = Math.abs(secmath);
			}
			numBeautify(secmath);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		}
		
	}
	
}

// 监听正负号按钮，并调用函数
document.getElementById('pn').addEventListener('click',possiNega);

// 倒数按钮函数 ************************
function setReciprocal() {
	// 先查看要转换的是否是刚输入的值
	if (input != "p") { //如果有刚输入的值，则进行输入值的转换
		input = parseFloat(input); //先把input转换成浮点数
		input = div(1,input); //调用除法优化函数计算倒数
		numBeautify(input);
		document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
	} else { // 如果没有刚输入的值，说明已经进行过一些运算
		// 先查看二级运算临时变量里是否有值存在
		if (secmath==0) { //如果没有值则可以直接对output转换,因为值都在output中
			output = parseFloat(output); //先把output转换成浮点数
			output = div(1,output); //调用除法优化函数计算倒数
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		} else { // 如果二级运算临时变量里有值，则对此变量进行转换
			secmath = parseFloat(secmath); //先把secmath转换成浮点数
			secmath = div(1,secmath); //调用除法优化函数计算倒数
			numBeautify(secmath);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		}
		
	}
}
// 监听“倒数”按钮，并调用函数
document.getElementById('recip').addEventListener('click',setReciprocal);

// 百分数按钮函数 *********************
function setPercent() {
	// 先查看要转换的是否是刚输入的值
	if (input != "p") { //如果有刚输入的值，则进行输入值的转换
		input = parseFloat(input); //先把input转换成浮点数
		input = div(input,100); //调用除法优化函数计算倒数
		numBeautify(input);
		document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
	} else { // 如果没有刚输入的值，说明已经进行过一些运算
		// 先查看二级运算临时变量里是否有值存在
		if (secmath==0) { //如果没有值则可以直接对output转换,因为值都在output中
			output = parseFloat(output); //先把output转换成浮点数
			output = div(output,100); //调用除法优化函数计算倒数
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		} else { // 如果二级运算临时变量里有值，则对此变量进行转换
			secmath = parseFloat(secmath); //先把secmath转换成浮点数
			secmath = div(secmath,100); //调用除法优化函数计算倒数
			numBeautify(secmath);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		}
		
	}
}
// 监听%按钮，并调用函数
document.getElementById('pers').addEventListener('click',setPercent);

// 平方根按钮函数 *********************
function setRoot() {
	// 先查看要转换的是否是刚输入的值
	if (input != "p") { //如果有刚输入的值，则进行输入值的转换
		input = parseFloat(input); //先把input转换成浮点数
		input = Math.sqrt(input); //用Math方法计算平方根
		numBeautify(input);
		document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
	} else { // 如果没有刚输入的值，说明已经进行过一些运算
		// 先查看二级运算临时变量里是否有值存在
		if (secmath==0) { //如果没有值则可以直接对output转换,因为值都在output中
			output = parseFloat(output); //先把output转换成浮点数
			output = Math.sqrt(output); //用Math方法计算平方根
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		} else { // 如果二级运算临时变量里有值，则对此变量进行转换
			secmath = parseFloat(secmath); //先把secmath转换成浮点数
			secmath = Math.sqrt(secmath); //用Math方法计算平方根
			numBeautify(secmath);
			document.getElementById('display').innerHTML=screenshow; //点击按钮后刷新显示
		}
		
	}
}
// 监听平方根按钮，并调用函数
document.getElementById('root').addEventListener('click',setRoot);

// 加减乘除按钮函数 *********************
function operBtn() {
	//创建加减乘除按钮集的对象（不知道这么说对不对）
	var operkeys = document.getElementById('ope_keys');

	//对每个数字按钮进行点击监听并执行传入值的操作 (代理绑定)
	operkeys.addEventListener('click',function(e){

		//判断是不是点击了父级元素
		if (e.target == operkeys) {
			return; //如果点了父级元素，为防止同时触发所有子元素，直接跳出
		}
		//声明一个变量储存当前按钮的值
		var op_type = e.target.textContent;

		// 根据不同的运算符进行相应的处理
		switch (op_type) {
			case "+":
				// 检查是否重按按钮
				if (input == "p") {
					if (operation != 1) { // 如果运算符类型不是加法（2，3，或4）
						operation = 1; //改成1（也就是“加”）
						break; 
					} else {
						break; //如果已经按过一次“+”按钮，不再执行，直接跳出
					}
				}
				// 调用一级运算检查函数
				firstMathCheck();
				input = "p"; //初始化input
				fswitch = 1; //将“有一级运算未处理”的确认开关打开，并设为1（加法）
				operation = 1; //将储存运算类型的变量设为 1（1就是加，按等号按钮时判断）
			break;
			case "-":
				// 检查是否重按按钮
				if (input == "p") {
					if (operation != 2) { // 如果运算符类型不是减法（1，3，或4）
						operation = 2; //改成2（也就是“减”）
						break; 
					} else {
						break; //如果已经按过一次“-”按钮，不再执行，直接跳出
					}
				}
				// 调用一级运算检查函数
				firstMathCheck();
				input = "p"; //初始化input
				fswitch = 2; //将“有一级运算未处理”的确认开关打开，并设为2（减法）
				operation = 2; //将储存运算类型的变量设为 2（2就是减，按等号按钮时判断）
			break;
			case "×":
				// 检查是否重按按钮
				if (input == "p") {
					if (operation != 3) { // 如果运算符类型不是减法（1，2，或4）
						if (operation == 1 || operation == 2) { //处理运算符按钮重按可能会产生的bug
							fswitch = 0;  //如果是类似于“x*y+*”的情况，将fswitch开关关掉
						} 
						operation = 3; //改成3（也就是“乘”）
						break; 
					} else {
						break; //如果已经按过一次“x”按钮，不再执行，直接跳出
					}
				}
				// 调用二级运算检查函数
				secondMathCheck();
				input = "p"; //初始化input
				operation = 3; //将储存运算类型的变量设为 3（3就是乘，按等号按钮时判断）
			break;
			case "÷":
				// 检查是否重按按钮
				if (input == "p") {
					if (operation != 4) { // 如果运算符类型不是减法（1，2，或3）
						if (operation == 1 || operation == 2) { //处理运算符按钮重按可能会产生的bug
							fswitch = 0;  //如果是类似于“x*y+*”的情况，将fswitch开关关掉
						} 
						operation = 4; //改成4（也就是“除”）
						break; 
					} else {
						break; //如果已经按过一次“÷”按钮，不再执行，直接跳出
					}
				}
				// 调用二级运算检查函数
				secondMathCheck();
				input = "p"; //初始化input
				operation = 4; //将储存运算类型的变量设为 4（4就是除，按等号按钮时判断）
			break;
		}
		//一级运算的检查函数（根据不同情况按下“+”或“-”按钮会进行不同处理）
		function firstMathCheck() {
			output = parseFloat(output); //先将值转化成浮点数
			input = parseFloat(input); //同上
			// 检查之前是否有一级运算没处理
			if (fswitch==0) { //如果没有
				//检查之前是否有值存储
				if (output==0) { //如果没有
					output = input; //将input存入output
				} else { //如果output已有值存储 (唯一情况是之前二级运算留下的值)("x*y+"或"x/y+"中的x存入了output)
					// 那么这时的input的是y的值，所以要将x和y进行运算后放入output
					if (operation == 3) { //如果之前是乘法没处理
						// 调用乘法优化函数
						output = mul(output,input);
					} else { //不是乘法就是除法
						// 调用除法优化函数
						output = div(output,input);
					}
				}
			} else if(fswitch==1){ //如果之前未处理的一级运算是加法
				if (secmath != 0) { //如果当前未处理的一级运算之间有2级运算（例：x+y*z+）
					secmath = parseFloat(secmath); //先转化成浮点数
					if (operation == 3) { //如果之前是乘法没处理
						// output = output + secmath * input;
						secmath = mul(secmath,input); // 调用乘法优化函数
						output = add(output,secmath); // 调用加法优化函数
					} else { //不是乘法就是除法
						// output = output + secmath / input;
						secmath = div(secmath,input); // 调用除法优化函数
						output = add(output,secmath); // 调用加法优化函数
					}
					secmath = 0; //传完值后将secmath初始化
				} else { //如果中间没有二级运算
					output = add(output,input);	// 调用加法优化函数
				}
			} else {  //唯一剩下的可能是之前未处理的一级运算是减法
				if (secmath != 0) { //如果当前未处理的一级运算之间有2级运算（例：x+y*z+）
					secmath = parseFloat(secmath); //先转化成浮点数
					if (operation == 3) { //如果之前是乘法没处理
						// output = output - secmath * input;
						secmath = mul(secmath,input); // 调用乘法优化函数
						output = sub(output,secmath); // 调用减法优化函数
					} else { //不是乘法就是除法
						// output = output - secmath / input;
						secmath = div(secmath,input); // 调用除法优化函数
						output = sub(output,secmath); // 调用减法优化函数
					}
					secmath = 0; //传完值后将secmath初始化
				} else { //如果中间没有二级运算
					output = sub(output,input);	// 调用减法优化函数
				}
			}
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //刷新显示
		}
		//二级运算的检查函数（根据不同情况按下“x”或“÷”按钮会进行不同处理）
		function secondMathCheck() {
			output = parseFloat(output); //先将值转化成浮点数
			input = parseFloat(input); //同上
			// 检查之前是否有一级运算没处理
			if (fswitch==0) { //如果没有
				//检查之前是否有值存储
				if (output==0) {//如果没有
					output = input; //将input存入output
				} else { //如果output已有值存储 (唯一情况是之前二级运算留下的值)("x*y*"或"x/y*"中的x存入了output)
					// 这时的input是y的值，要将x和y进行运算后放入output
					if (operation == 3) { //如果之前是乘法没处理
						output = mul(output,input); // 调用乘法优化函数
					} else { //不是乘法就是除法
						output = div(output,input);	// 调用除法优化函数
					}
				}
				numBeautify(output);
				document.getElementById('display').innerHTML=screenshow; //刷新显示
			} else { //如果之前有未处理的一级运算
				//检查secmath里面是否有值存储
				if (secmath==0) { //如果没有
					secmath = input; //将input存入secmath(临时存放二级运算值的变量)
				} else { //如果有值
					secmath = parseFloat(secmath); //先转化成浮点数
					//查看之前是乘法还是除法没处理
					if (operation == 3) { //如果是乘法
						secmath = mul(secmath,input); // 调用乘法优化函数
					} else { //如果不是乘法，那只能是除法
						secmath = div(secmath,input); // 调用除法优化函数
					}
				}
			}
		}
	});
}
//////////调用加减乘除按钮函数////////////////
operBtn();

// 等号按钮函数 *********************
function fianlResult() {
	output = parseFloat(output); //先将值转化成浮点数
	input = parseFloat(input); //同上
	secmath = parseFloat(secmath);
	// 检查是否重按按钮
	if (input == "p") {	//如果input是p，有5种情况:(1.刚按过等号。2、3.刚按过加、减号。4、5.刚按过乘、除号)
		if (operation != 3 && operation != 4) { //只要刚按的不是乘号或除号
			secmath = 0; //初始化二级运算数据临时存储变量
			fswitch = 0; //初始化判断是否有未处理一级运算的开关
			operation = 0; //初始化运算类型
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //刷新显示
			return; //然后直接跳出
		}else{ // 刚按了乘号或除号，比如：x+y*= 或 x*y*=
			if (secmath != 0) { //如果secmath不等0说明之前有一级运算没处理
				if (fswitch==1) { //如果之前没处理的一级运算是加法
					output = add(output,secmath); // 调用加法优化函数
				} else { //如果不是加法，只能是减法
					output = sub(output,secmath); // 调用减法优化函数
				}
			} //如果secmath等于0，说明计算结果在按等号之前已经存入output中
			secmath = 0; //初始化二级运算数据临时存储变量
			fswitch = 0; //初始化判断是否有未处理一级运算的开关
			operation = 0; //初始化运算类型
			numBeautify(output);
			document.getElementById('display').innerHTML=screenshow; //刷新显示
			return; //最后直接跳出
		}	
	}

	//先判断临时储存2级运算结果的变量是否存了数
	if (secmath == 0) { //如果没有直接进行相关计算
		output = fourOperations(output,input); //调用方法计算
	} else { //如果存了数，先进行二级运算
		secmath = fourOperations(secmath,input);
		// 如果有数说明之前有一级运算没处理
		if (fswitch==1) { //如果之前没处理的一级运算是加法
			output = add(output,secmath); // 调用加法优化函数
		} else { //如果不是加法，只能是减法
			output = sub(output,secmath); // 调用减法优化函数
		}
	}
	// 声明一个进行加减乘除运算的方法,方便调用
	function fourOperations(x,y) {
		var z,s,t;
		s = x;
		t = y;
		switch (operation) {
			case 1:
				z = add(s,t);
			break;
			case 2:
				z = sub(s,t);
			break;
			case 3:
				z = mul(s,t);
			break;
			case 4:
				z = div(s,t);
			break;
		}
		return z;
	}
	input = "p"; //初始化输入
	secmath = 0; //初始化二级运算数据临时存储变量
	fswitch = 0; //初始化判断是否有未处理一级运算的开关
	operation = 0; //初始化运算类型
	// 检查结果是不是infinity
	if (output == Infinity || output == -Infinity) { //如果是, 则不进行数字美化，直接显示错误
		screenshow = "Error！除数不能为0";
	} else {
		numBeautify(output);  //如果不是, 则进行数字美化
	}
	document.getElementById('display').innerHTML=screenshow; //刷新显示
}
document.getElementById('equl').addEventListener('click',fianlResult);

/*
*JS优化后的加减乘除运算（解决了JS的计算bug）
*/
//优化后的加法运算
function add(a,b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}
//优化后的减法运算
function sub(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
}
//优化后的乘法运算
function mul(a, b) {
    var c = 0,
        d = a.toString(),
        e = b.toString();
    try {
        c += d.split(".")[1].length;
    } catch (f) {}
    try {
        c += e.split(".")[1].length;
    } catch (f) {}
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}
//优化后的除法运算
function div(a, b) {
    var c, d, e = 0,
        f = 0;
    try {
        e = a.toString().split(".")[1].length;
    } catch (g) {}
    try {
        f = b.toString().split(".")[1].length;
    } catch (g) {}
    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}


