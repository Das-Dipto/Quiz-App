let content = document.querySelector('.content');
let quizbox = document.querySelectorAll('.quiz-box');
let flex_quizbox = document.querySelectorAll('.flex-container .quiz-box');
let time = document.querySelector(`span`);
let button = document.querySelector('button');
let counter = document.querySelector('.counter');
let next = document.querySelector('#button');
content.innerHTML = quizbox[0].innerHTML;
let start = 1;

let count,count1,count2,count3;
count=count1=count2=count3=0;
let num = 0;
let i = 1;

const add = (param) =>{
    num = num + param;
    if (i >= quizbox.length ){
        console.log(`Total marks ${num}`);
    }
    else{
        i++;
    }
}

let name1 = document.getElementsByName('Ivy');
next.addEventListener('click', ()=>{
    name1.forEach((item, index)=>{
    if ( item.checked) {
        let k =  item.value
        if ( k == 8){
         count1 = count1 + 10;
         add(count1);
       }
       else{
        add(count);
       }
    }
    else if(!item.checked){
        add(count);
    }
})
})

let name2 = document.getElementsByName('UN');
next.addEventListener('click', ()=>{
name2.forEach((item, index)=>{
    if ( item.checked) {
        let k =  item.value
        if ( k == 7){
         count2 = count2 + 10;
         add(count2);
       }
       else{
        add(count);
       }
    }
})
})

let name3 = document.getElementsByName('USA');
next.addEventListener('click', ()=>{
name3.forEach((item, index)=>{
    if ( item.checked) {
        let k =  item.value
        if ( k == 52){
         count3 = count3 + 10;
         add(count3);
       }
       else{
        add(count);
       }
    }
})
})





next.addEventListener('click', ()=>{
       
    if(start >= quizbox.length ){
        next.style.display = 'none';
        counter.innerHTML = `Quiz complete`;
    }

    else{
         content.innerHTML = quizbox[start].innerHTML;
         start++;
    }
    
})




