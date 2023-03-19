const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const generateBtn = document.querySelector(".main-btn");
const cards = document.querySelectorAll(".palette div");
const paletteBox = document.querySelectorAll('.palette');


paletteBox.forEach((palette)=>{
  palette.addEventListener('click',()=>{
    copyToClipboard(palette.innerText);
  })
})

async function copyToClipboard(text){
  await navigator.clipboard.writeText(text);
  const notification = document.createElement('div');
   notification.classList.add('notif-class');
   notification.innerHTML = `Color <b>${text}</b> is copied to clipboard`
   const container = document.querySelector('.container');
   container.append(notification);
   setInterval(()=>{
    notification.remove();
   },1500)
   
  }
generateBtn.addEventListener('click',()=>{
  generatePalette();
})

document.addEventListener('keydown',(e)=>{
  if(e.key === ' '){
    generatePalette();
  }
})
function generatePalette(){
      cards.forEach((card)=>{
        generatedColor = generateColor();
        card.style.background = generatedColor;
        card.parentElement.querySelector('span').innerText = generatedColor;
      })
}

function generateColor(){
  let color = '#';
  for(let i= 0;i<6;i++){
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
}

