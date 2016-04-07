// JavaScript Document
function calculate() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var operator = document.getElementById('opType').value;
    var result;
    // 检查输入是否为数字或者为空
    if (x.length==0 || y.length==0) {
        alert ("输入数字不能为空且只能是数字");
        return;
    }
    //将字符串转换为数字类型
    x = parseFloat(x);
    y = parseFloat(y);
    //根据选择运算类型进行计算
    switch (operator) {
        case "+":
            result = add(x,y);
            break;
        case "-":
            result = sub(x,y);
            break;
        case "*":
            result = mul(x,y);
            break;
        case "÷":
            if (y != 0) {
                result = div(x,y);
            } else {
                alert("除法分母不能是0");
                return;
            }
            
            break;
        default:
            alert ("请选择运算类型");
            break; //这个break需要吗？
    }
    document.getElementById("result").innerHTML = result;

}
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

//最后调用函数计算
document.getElementById("btn").addEventListener("click",calculate);