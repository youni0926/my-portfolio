//document.write("<h1>hello world</h1>");


//製作基本計算機
// var inputname="請輸入你的名字"
// var my_name=prompt(inputname);
// document.write("我的名字是"+my_name);

// var number_1 =parseInt(prompt("請輸入第一個數"));
// var number_2 =parseInt(prompt("請輸入第二個數"));
// var total=(number_1+number_2) 
// document.write("相加是"+total)

//陣列array
// var scores=[80,65,45,58,95]
// document.write();

/*函式function
// function hello(name){
//     document.write("您好呀"+name);
// }
// hello("Youni");
*/

/*函式測驗 function add
// function add(){
//     var number_a = parseFloat(prompt("請輸入第一個值"));
//     var number_b = parseFloat(prompt("請輸入第二個值"));
//     var total =number_a+number_b
//     document.write("加總的數字是"+total)
// }
// add();

function add(num1,num2){
    //document.write(num1+num2);
    return ans=(num1+num2);
}
document.write("相加的數量是"+add(5,6));
*/

/*if判斷
var hungry = true
if(hungry){
    document.write("去吃飯");
}

var rain = false
if(rain){
    document.write("開車")
}
else
{
    document.write("走路")
}


function good(scorse){

   // var scorse=100;
    if(scorse==100){
        document.write("我給你1000元")
    }
    else if(scorse>=80){
        document.write("我給你500元")
    }
    else if(scorse>=60){
        document.write("我給你100元")
    }
    else{
        document.write("你給我300元")
    }
}
scorse_a=parseFloat(prompt("請輸入你的成績"));
good(scorse_a);

//

function score(you_score){
    if(you_score==100 || !rain){
        document.write("我給你1000元");
    }
    else{
        document.write("你給我100元");
    }

}
var rain = true;
a=parseFloat(prompt("請輸入你的成績")); 
score(a);
 

function max_num(a,b,c){
    if (a>b & a>c){
        document.write(a+"是最大的數");
    }
    else if(b>a & b>c){
        document.write(b+"是最大的數");
    }
    else
        document.write(c+"是最大的數");
}
var one_number = parseFloat(prompt("請輸入第一個數"));
var two_number = parseFloat(prompt("請輸入第二個數"));
var three_number = parseFloat(prompt("請輸入第三個數"));
max_num(one_number,two_number,three_number);
*/

/*
//物件 object
//  key  value
//  鍵     值


var person={
    name:"youni",
    age:23,
    is_male:false,
    print_name:function(){
        document.write(this.name);
    }
};
person.print_name();




var movie ={
    title:"不可能的任務:8",
    maker:"克里斯多福·麥奎里",
    actor:[
        {
            name:"Ethan Hunt",
            age:62,
            is_male:true
        },
        {
            name:"Hayley Atwell",
            age:43,
            is_male:false      
        }
]
}
document.write(movie.actor[1].age)

var password = 123456;
var input;
var count=0;
while(password != input){
    count++;
    input = prompt("請重新輸入密碼");
    if(count>=3){
        alert("已經失敗三次囉");
      //return("已經失敗三次囉");
       exit();
    } 
    count++;
    }
alert("登入成功")


var password =12345;
var input;
var count=0;
var try_count=3;
var out=false;

while(password!=input && !out){
    count++;
    if (try_count<count){
        input = prompt("請重新輸入密碼");
    }
    else if(try_count>=count){
        out = true
    }
}
if  (out){
            alert("已經失敗三次囉");
            
        }
else{
    alert("登入成功")
} 
*/

/*
//for迴圈
//var i = 0;
for( var i=1;i<10;i++){
    document.write(i);
    document.write("<br/>");
}

var friend =["A","B","C"];
for(var i=0 ;i<friend.length;i++){
    document.write(friend[i]);
    document.write("<br/>");
}

var friend = ['a','b','c','d'];
for(var i=0;i<friend.length;i++){
    document.write(friend[i]);
    document.write('<br/>','<br/>');
}


//練習小考試
var question=[
    {
        prompt:"萊恩是什麼動物？\n(a)獅子(b)鴨子(c)倉鼠",
        answer:"a"
    },
    {
        prompt:"哈密瓜是什麼顏色？\n(a)紫色(b)綠色(c)黃色",
        answer:"b"
    },
    {
        prompt:"一天有幾小時？\n(a)24小時(b)18小時(c)100小時",
        answer:"a"
    },
]
var i =0;
for (var score = 0;score<question.length;score++){
    var a=prompt(question[score].prompt);
    if(a==question[score].answer){
        i++;
        alert("答對囉!")
    }
    else{
        alert("答錯囉!")
    }
    
}
alert("總共答對"+i+"題");


var number =[[1,2,3],[4,5,6],[7,8,9],[0]];
var ans = [];
for(var i =0;i<number.length;i++){
    for(var j=0;j<number[i].length;j++){
         
        document.write(number[i][j])
    }
        document.write("<br/>")
}


//class
class Phone{
    constructor(number,year,is_waterproof){
    this.number=number;
    this.year=year;
    this.is_waterproof=is_waterproof;
    }
    phone_age(){
        return 2021 - this.year;
    }
}
    
var phone1 = new Phone('123',2020,false);
var phone2 = new Phone('456',2022,false);
document.write(phone2.is_waterproof)


class Student{
    constructor(number,name,is_male,score){
        this.number=number;
        this.name=name;
        this.is_male=is_male;
        this.score = score;
    }
    total_score(){
        //var total = 100;
        return 100-this.score;
    }
}
var student1 = new Student(5,"大熊",false,2);
var student2 = new Student(10,"麗子",true,5);
document.write(student2.total_score());
document.write("<br/>"+student2.name);



var h1 = document.getElementById("header");
h1.innerText = "小倉鼠好可愛";
h1.style.background = "pink";
h1.style.color = "white";
var link = document.getElementById("link");
console.log(link);
link.href ="https://amazon.com"


function handle_click(){
    alert("你還真的按阿?")
}
*/


