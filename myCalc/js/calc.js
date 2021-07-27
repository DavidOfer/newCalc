var myOpr;
var lastNumber;
var isEqual;
var hasPoint;
var myRes;

function init(){
    myRes = document.getElementById("res");
    myOpr="";
    lastNumber=0;
    isEqual = false;
    hasPoint = false;
}


function num(myNumber){
    if (isEqual) return;
    if (myRes.innerText==="0"){
        myRes.innerText===myNumber;
        return;
    }
    myRes.innerText = myRes.innerText+myNumber;
}

function clr(){
    isEqual=false;
    myRes.innerText="";
    hasPoint = false;
}

function opr(userOpr){
    isEqual=false;
    if(userOpr==="x²" || userOpr ==="√" || userOpr ==="n!")
    {
        myOpr=userOpr;
        lastNumber=Number(myRes.innerText);
        makeCalc();
        return;
    }
    if (userOpr==='.'){
        if (hasPoint) return;
        myRes.innerText=myRes.innerText+".";
        hasPoint = true;
        return;
    }
    if (myOpr==="" && myOpr!="="){
        myOpr=userOpr;
        lastNumber=Number(myRes.innerText);
        clr();
    } else {
        makeCalc();
    }
}

function makeCalc(){
    let currentNumber = Number(myRes.innerText);
    let theResult = 0;
    switch (myOpr){
        case '/':
            theResult = lastNumber / currentNumber;
        break;
        case '*':
            theResult = lastNumber * currentNumber;
        break;
        case '-':
            theResult = lastNumber - currentNumber;
        break;
        case '+':
            theResult = lastNumber + currentNumber;
        break;
        case 'x²':
            theResult= Math.pow(currentNumber,2);
        break;
        case 'xʸ':
            theResult= Math.pow(lastNumber,currentNumber);
        break;
        case '√':
            theResult = Math.sqrt(currentNumber);
        break;
        case 'n!':
            theResult = factorial(currentNumber);
        break;
        
    }
    myOpr="";
    lastNumber=theResult;
    myRes.innerText = theResult;
    isEqual=true;
}
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(let index = n; index >= 1; index-=1){
        answer = answer * index;
      }
      return answer;
    }  
  }