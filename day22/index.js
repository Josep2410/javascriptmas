// people arr exists? if not, store/create people arr in localStorage
if(!localStorage.getItem("list")){
    let people = JSON.stringify([])
    localStorage.setItem("list" , people)
}

let people = JSON.parse(localStorage.getItem("list"))

document.addEventListener("DOMContentLoaded" , (e) => {
    if(people.length) renderList(people)
})

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const peopleListEl = document.getElementById("people-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    if (inputValue) {
        people.push(inputValue)

        localStorage.setItem("list" , JSON.stringify(people))

        clearInputFieldEl()
        
        renderList(people)
    }
})

function renderList(array) {
    clearPeopleListEl()
    
    for (let i = 0; i < array.length; i++) {
        let currentPerson = array[i]
        
        appendPersonToPeopleListEl(currentPerson)
    }
}

function clearPeopleListEl() {
    peopleListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendPersonToPeopleListEl(person) {
    
    let newEl = document.createElement("li")
    
    newEl.textContent = person
    
    newEl.addEventListener("dblclick", function() {
        let index = people.indexOf(person)

        people.splice(index, 1)
        
        localStorage.setItem("list" , JSON.stringify(people))

        renderList(people)
    })
    
    peopleListEl.append(newEl)
}

