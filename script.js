// JavaScript Document
let input=document.querySelector('#result');
function display(num)
{
	input.value+=num;
	console.log(num);
}
function Clear()
{
	input.value= "";
	
}
function Delete()
{
	input.value=input.value.slice(0,-1);
}
function calculate()
{
	try
		{
			input.value=eval(input.value);
		}
	catch(err)
		{
			alert("Invalid");
		}
}
//document.querySelector('#cal').addEventListener("keyup",calculate());



