const unorderedList = document.getElementById("list")
const btn = document.getElementById('btn')
const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]


document.addEventListener('DOMContentLoaded' , function() {
  let result =  generateSecretSantaPairs(people)
  generateList(result)
} )

btn.addEventListener('click' , () => {
  let result =  generateSecretSantaPairs(people)
  generateList(result)
})


function generateSecretSantaPairs(arr) {
  const secretSanta = {}
  let copy = [...arr]

  for(let key in arr){
    
    let rand = Math.floor(Math.random() * copy.length)
    
    while (copy[rand] == arr[key]){
      rand = Math.floor(Math.random() * copy.length)
    }

    secretSanta[arr[key]] = copy[rand]
    copy = copy.filter(name => name !== copy[rand])

  }

  return secretSanta
  
}
function generateList(obj){
 const listedItemsArr = []
  for(let key in obj){
    const listedItem = document.createElement('li')
    listedItemsArr.push(listedItem.textContent = `${key} : ${obj[key]}<br/>`)
  }
  unorderedList.innerHTML = listedItemsArr.join('')
}

