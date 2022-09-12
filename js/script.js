// DOM amaliyot

const box = document.querySelector('.box')
const buttons = document.querySelectorAll('button')
const circles = document.querySelectorAll('circle')
// const wrapper = document.querySelector('wrapper')
const hearts = document.querySelectorAll('wrapper')


box.style.cssText = 'background-color:red; width:200px; height:100px';

buttons[0].style.width = '50px';

hearts.forEach(function (item){
    item.style.cssText='background-color:yellow; width:100px';
})

for(let i=0; i<hearts.length; i++){
    hearts[i].style.backgroundcolor= 'yellow'
}

const btn = document.createElement('button');
document.body.append(btn);

const mycircle = dacument.createElement('div');
mycircle.classList.add('circle');




