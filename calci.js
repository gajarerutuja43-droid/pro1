function press(value){
    document.getElementById('inp').value+=value;

}

function Clear(){
    document.getElementById('inp').value ="";
}

function calculate(){
    let num =document.getElementById('inp').value;
   let a=Number(num[0]);
    let b=Number(num[2]);
      let op=num[1];

      if (op == "+"){
        document.getElementById('inp').value = a+b;
      }
       let numm =document.getElementById('inp').value;
    let vr=numm*numm;
    document.getElementById("inp").value=numm;
}

// function square(){
//     let num =Number(document.getElementById("inp").value);
    
//     document.getElementById("inp").value = num * num;

// }
function square(){
let numm =document.getElementById('inp').value;
    let vr=numm*numm;
    document.getElementById("inp").value=vr;
}

if (op == "-"){
        document.getElementById('inp').value = a-b;
      }
      