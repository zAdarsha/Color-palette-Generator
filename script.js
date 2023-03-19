
// const colorhex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
// //getting the elements
// const generateBtn = document.querySelector('.main-btn');
// const palettes = document.querySelectorAll('.palette div');
// const paletteBox = document.querySelectorAll('.palette');
// const container = document.querySelector('.container');

// paletteBox.forEach((card)=>{
//     card.addEventListener('click',()=>{
//         copyClipboard(card.innerText);
//     })

// })

// generateBtn.addEventListener('click',()=>{
//     createPalette();
// })

// document.addEventListener('keydown',(e)=>{
//     if(e.key === ' '){
//         createPalette();
//     }
// })
// function createPalette(){
//     palettes.forEach((palette)=>{
//         const newColor = generateColor();
//         palette.style.background = newColor;
//         palette.parentElement.querySelector('span').innerText = newColor;
//     })
// }
// async function copyClipboard(text){
//     await navigator.clipboard.writeText(text);
//     const notif = document.createElement('div');
//     notif.classList.add('notif-class');
//     notif.innerHTML = `Color <b>${text}</b> is copied to the clipboard!`
//     container.appendChild(notif);
//     setTimeout(()=>{
//         notif.remove()
//     },2000);
// }
// function generateColor(){
   
//     let color = '#';
//     for(let i =0;i<6;i++){
//         color += colorhex[getRandomNumber()];
//     }
//     return color;
// }
// function getRandomNumber(){
//     return Math.floor(Math.random() * colorhex.length);
// }


