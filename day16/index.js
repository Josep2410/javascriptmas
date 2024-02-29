const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
const addBtn = document.getElementById('addPerson')
const addName = document.getElementById('addNames')
const switchBtn = document.getElementById('switchBtn')


btn.addEventListener("click", sort)

addBtn.addEventListener("click" , addNameToList)

switchBtn.addEventListener("click" , () => {
  try{
    const elements = Array.from(document.getElementsByTagName("li")).filter(elem => elem.style.fontWeight == 700)
    if(!elements.length) throw new Error('No names to switch')
    const names = elements.map(elem => elem.textContent)

    sorteesArr = sorteesArr.map(person => names.includes(person.name) ? {...person , hasBeenGood : !person.hasBeenGood} : person)
    sort()
  }catch(err){
    window.alert(err.message)
  }
})


let sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]



function sort(){
    niceList.textContent = ""
    naughtyList.textContent = ""
    sorteesArr.map(person => {
        const li = document.createElement('li')
        li.textContent = person.name
        if(person.hasBeenGood) niceList.appendChild(li)
        else naughtyList.appendChild(li)
    })

    addEventListenersToLIelems()
    
}

function addEventListenersToLIelems(){
  const elements = Array.from(document.getElementsByTagName("li"))
    elements.forEach((elem, index , arr) => elem.addEventListener("click" , () => {
     changeFontWeight(elem)
    
    }))

}



function changeFontWeight(elem){
  if(elem.style.fontWeight == 700){
    elem.style.fontWeight = 500
    elem.style.color = "white"
  }
  else{
    elem.style.fontWeight = 700
    elem.style.color = "black"
  }
}

function addNameToList(){
  try{
    if(!addName.value) throw new Error('Enter person name')

    const behavior = Array.from(document.getElementsByName("naughty-nice")).find( r => r.checked) || "false"

    const person = { name : addName.value , hasBeenGood : behavior.value === "true" ? true : false }

    window.alert(`${addName.value} added to list`)

    sorteesArr.push(person)

    addName.value = ""
   } 
    catch(err){
      window.alert(err.message)
    }

}


