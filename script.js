let content = document.querySelector('.content');
let quizbox = document.querySelectorAll('.quiz-box');
let flex_quizbox = document.querySelectorAll('.flex-container .quiz-box');
let time = document.querySelector(`span`);
let button = document.querySelector('button');
let counter = document.querySelector('.counter');
let i = 1;
let count = 10;
let a = false;
content.innerHTML = quizbox[0].innerHTML;

let content_show = setInterval(()=>{

    if(i == quizbox.length){
         clearInterval(content_show);
         a = true;
         counter.innerHTML = `The time is over`;
         counter.style.color = 'red';
         counter.style.fontWeight = `700`;
         console.log('stopped');
    }
   
    else{
        quizbox[i].style.display = 'block';
        flex_quizbox[i].style.display = 'none';
        content.innerHTML = quizbox[i].innerHTML; 
    }

    i++;
  
},10000)


let timer = setInterval(()=>{
    if(a){
        clearInterval(timer);
    }
 
    if(count == 0){
        count = 10;
    }
  
  
    time.innerHTML = count;
    count--;
    
  
}, 1000)


let inc = 1;
button.addEventListener('click', ()=>{
    if(inc == quizbox.length){
        inc = quizbox.length - 1 ;
        quizbox[quizbox.length - 1].style.display = 'block';
        content.innerHTML =  quizbox[quizbox.length - 1].innerHTML; 
        flex_quizbox[quizbox.length - 1].style.display = 'none';
    }

    else{
        quizbox[inc].style.display = 'block';
        content.innerHTML =  quizbox[inc].innerHTML; 
        flex_quizbox[inc].style.display = 'none';
        inc++;
    }

})