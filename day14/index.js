const elf = document.getElementById("elf")
const btn = document.getElementById("btn")

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
  elf.textContent+="🧝"
  console.log(elf.textContent.length , "🧝".length )
  disableBtn()
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/
}

function disableBtn(){
  if(elf.textContent.length >= 60){
    btn.setAttribute("disabled" , true)
  }
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 30.
**/