// // DOM bilan ishlash

// // Old way 

// const box = document.getElementById('box');
// console.log(box)

// const circles = document.getElementsByClassName('circle');
// console.log(circles)

// const buttons = document.getElementsByTagName('button')[2];
// console.log(buttons)
// Bu usul eski usul 

// New way
const hearts = document.querySelectorAll('.heart')
console.log(hearts)

// querySelectorAll va querySelectorAll farqi birinchisi faqat bitta qiymatni oladi ikkinchisi xoxlagancha qiymat oladi

// const heart = wrapper.querySelectorAll('.heart')
// console.log(heart)

hearts.forEach(function (item){
console.log(item)
})


