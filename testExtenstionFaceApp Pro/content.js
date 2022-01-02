console.log('This is working');

// Code for transtistion in second heading 

const heading2 =document.getElementById('heading2').innerText
const a= Math.floor((Math.random() * 5) + 1);
console.log(a);
// Four word can be changed
if(a==1){
  let result1 = heading2.replace("Charm", "Beautiful");
  document.getElementById("heading2").innerHTML = result1;
}
if(a==2){
  let result2 = heading2.replace("Charm", "Good");
  document.getElementById("heading2").innerHTML = result2;
}
if(a==3){
  let result3 = heading2.replace("Charm", "Pretty");
  document.getElementById("heading2").innerHTML = result3;
}
if(a==4){
  let result4 = heading2.replace("Charm", "Cute");
  document.getElementById("heading2").innerHTML = result4;
}
if(a==5){
  let result5 = "Looking Charm Today"
  document.getElementById("heading2").innerHTML = result5;
}



// Button  text Change code 

// code for button1
const b= Math.floor((Math.random() * 3) + 1);
const textbtn = document.getElementById('btn2').innerHTML
if(b==2){
  btnTextResult = 'Maybe'
  document.getElementById("btn2").innerHTML =  btnTextResult;
}
if(b==3){
  btnTextResult = 'Mostly'
  document.getElementById("btn2").innerHTML =  btnTextResult;
}

// code for button1
const c= Math.floor((Math.random() * 4) + 1);
const textbtn2 = document.getElementById('btn1').innerHTML
if(c==2){
  btnTextResult2 = 'Yes,Why Not'
  document.getElementById("btn1").innerHTML =  btnTextResult2;
}
if(c==3){
  btnTextResult2 = 'Exactly'
  document.getElementById("btn1").innerHTML =  btnTextResult2;
}
if(c==4){
  btnTextResult2 = 'Surely'
  document.getElementById("btn1").innerHTML =  btnTextResult2;
}








// Button Code when Clicked

let clickbtn1 =document.getElementById('btn1');
clickbtn1.addEventListener('click', func1);

let clickbtn2 =document.getElementById('btn2');
clickbtn2.addEventListener('click', func2);


// Blog code when clicking First Button
function func1(){
 let y= Math.floor((Math.random() * 10) + 1);
 let buttonCont= document.getElementById('buttonCont')
 let blog1="*The left side of the face is prettier."
 let blog2="This is blog 2"
 let blog3="This is blog 3"
 let blog4="This is blog 4"
 let blog5="This is blog 5"
 let blog6="This is blog 6"
 let blog7="This is blog 7"
 let blog8="This is blog 8"
 let blog9="This is blog 9"
 let blog10="This is blog 10"

 if(y<11){
  buttonCont.style.display = "none";

 }
if (y==1){
  document.getElementById("demo").innerHTML = blog1;
   
}
if (y==2){
  document.getElementById("demo").innerHTML = blog2;
   
}
if (y==3){
  document.getElementById("demo").innerHTML = blog3;
   
}
if (y==4){
  document.getElementById("demo").innerHTML = blog4;
   
}
if (y==5){
  document.getElementById("demo").innerHTML = blog5;
   
}
if (y==6){
  document.getElementById("demo").innerHTML = blog6;
   
}
if (y==7){
  document.getElementById("demo").innerHTML = blog7;
   
}
if (y==8){
  document.getElementById("demo").innerHTML = blog8;
   
}
if (y==9){
  document.getElementById("demo").innerHTML = blog9;
   
}
if (y==10){
  document.getElementById("demo").innerHTML = blog10;
   
}

}


// Blog code when clicking 2nd Button

function func2(){
 let x= Math.floor((Math.random() * 10) + 1);
 let buttonCont= document.getElementById('buttonCont')
 let blog1="*The left side of the face is prettier."
 let blog2="This is blog 2"
 let blog3="This is blog 3"
 let blog4="This is blog 4"
 let blog5="This is blog 5"
 let blog6="This is blog 6"
 let blog7="This is blog 7"
 let blog8="This is blog 8"
 let blog9="This is blog 9"
 let blog10="This is blog 10"
 
 if(x<11){
  buttonCont.style.display = "none";

 }
if (x==1){
  document.getElementById("demo").innerHTML = blog1;
   
}
if (x==2){
  document.getElementById("demo").innerHTML = blog2;
   
}
if (x==3){
  document.getElementById("demo").innerHTML = blog3;
   
}
if (x==4){
  document.getElementById("demo").innerHTML = blog4;
   
}
if (x==5){
  document.getElementById("demo").innerHTML = blog5;
   
}
if (x==6){
  document.getElementById("demo").innerHTML = blog6;
   
}
if (x==7){
  document.getElementById("demo").innerHTML = blog7;
   
}
if (x==8){
  document.getElementById("demo").innerHTML = blog8;
   
}
if (x==9){
  document.getElementById("demo").innerHTML = blog9;
   
}
if (x==10){
  document.getElementById("demo").innerHTML = blog10;
   
}

}



