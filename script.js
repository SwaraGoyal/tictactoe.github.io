
let turn="X";
const changeturn=()=>{
    return turn==="X"?"0":"X";
}

let gameover=false;

const win=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
let wins=[
[0,1,2,],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8,],
[0,4,8],
[2,4,6],
]
wins.forEach(e=>{
   if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) &&(boxtexts [e[2]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText!=="")){
   document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" WON"
   gameover=true;
   document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="300px"
   }
})
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText= turn;
            turn = changeturn();
            win();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            }
        }
    })
})

playagain.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X"
   gameover=false;
        document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
})