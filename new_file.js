//警告框式输入
//window.alert()
//点击按钮写入 日期函数
function displayDate(){
	document.getElementById("a").innerHTML=Date();
	document.getElementById("c").innerHTML = 'John Doe';
	//覆盖
	//document.write("使用函数来执行document.write，即在文档加载后再执行这个操作，会实现文档覆盖");
}
//写进html
document.write((5 + 6) * 10)
//换行
//document.write("<br />")
document.write("<br />\
输出<br />")//可以调用html方法
// \ 代码换行
//浏览器的控制台
a = 1;
b = 2;
c = a + b;
console.log(c)
var pi=3.14;//数值不需要双引号
var name="Bill Gates";//字符串需要双引号
document.write(pi + "<br>");
document.write(name + "<br>");//声明的变量可以加html标签，不过需要双引号
//var lastname="Doe", age=30, job="carpenter";
//一条语句可以声明多个变量，用逗号分开。也可换行声明，也是用逗号分开
function myFunction(){
	var y=5,x=y+2,abb=document.getElementById("d").innerHTML="x="+x;
}





