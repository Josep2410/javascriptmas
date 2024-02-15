
const div = document.createElement('div')
const btn3 = document.createElement('button')
const btn4 = document.createElement('button')

div.setAttribute('class' , 'container1')
btn3.setAttribute('class' , 'btn1')
btn4.setAttribute('id' , 'btn4')


document.body.appendChild(div)
div.appendChild(btn3)
document.body.appendChild(btn4)

btn3.textContent = 'Button 3'

document.addEventListener('DOMContentLoaded' , () => {
 
  decorateBtn4()
  btn4.addEventListener('mouseover' ,transformBtn4)
  btn4.addEventListener('mouseout' , deflateBtn4)
})


function decorateBtn4(){
  btn4.textContent = 'Button 4'
  btn4.style.backgroundColor = '#000'
  btn4.style.color = '#cbcbcb'
  btn4.style.borderStyle = 'none'
  btn4.style.borderImage = 'linear-gradient(-115deg, #eeaf61 , #fb9062 , #ee5d6c, #ce4993, #6a0d83) 30'
  btn4.style.borderWidth = 3 + 'px'
  btn4.style.borderStyle ='solid'
  btn4.style.transition = 0.3 + 's'
}

function transformBtn4(){
  btn4.style.transform = 'scale(1.05)'
  btn4.style.borderImage = 'linear-gradient(115deg, #eeaf61 , #fb9062 , #ee5d6c, #ce4993, #6a0d83) 30'
}

function deflateBtn4(){
  btn4.style.transform = 'scale(1)'
  decorateBtn4()
}
