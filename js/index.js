
let  winCount= 1;
let lossCount = 1;


//Cought to showing paharagrap...
const wonGuessing = document.getElementById("wonGuessing");

//Click And condition full fill result show code ... 

function getNumber(){
    const getNumber =document.getElementById("getNumber").value;
    const displayNumber = parseFloat(getNumber)
   console.log(displayNumber);
    document.getElementById("getNumber").value="";
    const enterGenerater =generateNUmber();
    console.log(enterGenerater);

    if(displayNumber == enterGenerater){
        
        alert("Congratulations You Have Won This Game", wonGuessing.innerHTML=`You Have Won!!! Random Number Was ${enterGenerater}`);
         document.getElementById("wonCount").innerText = winCount++; 
        
    }
   else{
       wonGuessing.innerHTML=`You Have lose!!! Random Number Was ${enterGenerater} `;
       document.getElementById("loseCount").innerText = lossCount++;
       
       
    }
   
} 

//Randome Number Generate ...

function generateNUmber(){
    return Math.floor(Math.random() * 10) + 1;
}
//Won Loos count 



//document.getElementById("loseCount").innerText = totalCount




//  document. wonCount.innerHTML(` Number of Won : ${winCount}`)
// document. loseCount.innerHTML(` Number of Lost : ${lossCount}`)


// function go(id  ){
//     const curent = document.getElementById(id).innerText
//     const curentNumber = parseFloat(curent)
//    const total = loseCount+lossCount
   
// }
