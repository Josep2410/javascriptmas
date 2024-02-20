let wishlist = [
  'Macbook Air M2',
  'Scrimba Pro Membership',
  'Apple Watch',
  'Apple Earphones',
  'Yugioh Cards'

];

const ul = document.getElementById('list')
const btn = document.querySelector('.btn')
const input = document.querySelector('#input')

document.addEventListener('DOMContentLoaded' , () => {
  populateList(wishlist)
})

btn.addEventListener('click' , () => addItemToDOM(input.value))

function populateList(arr){
  ul.innerHTML = ''
  arr.map(str => addItemToDOM(str))
}

function addItemToDOM(val){
  const li = document.createElement('li')
  var deleteBtn
  li.textContent = val
  li.setAttribute('id' , val)
  li.addEventListener('click' , () => {
    document.getElementById(val).classList.toggle('clicked')
    if(checkClass(val)){
     deleteBtn =  renderDeleteBtn(val)
    }
    else{
      deleteBtn.remove()
    }
    
  })
  ul.appendChild(li)
}

function checkClass(id){
  return document.getElementById(id).classList.contains('clicked')
}

function renderDeleteBtn(val){
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'delete'
  deleteBtn.setAttribute('id' , `${val}-delete`)
  deleteBtn.setAttribute('class' , 'delete-btn')
  deleteBtn.addEventListener('click' , () => removeItemFromList(val))
  document.getElementById(val).insertAdjacentElement('afterend', deleteBtn)
  return document.getElementById(`${val}-delete`)
}

function removeItemFromList(id){
  wishlist = wishlist.filter(str => str !== id)
  populateList(wishlist)
}


/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/


