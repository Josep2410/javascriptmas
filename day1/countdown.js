const remainingDays = document.getElementById('days')
const timer = document.getElementById('timer')
const goal = new Date("May-25-24")



document.addEventListener("DOMContentLoaded", function(){

  const myInterval = setInterval(()=> {
    const today = new Date()

    let millisecRemaining = getMillsRemaining(goal , today)
    let daysLeft = roundUp(covertMillToDays(millisecRemaining))
    remainingDays.textContent = daysLeft
    updateTimerContent(millisecRemaining)
  } , 1000)
  
});


function updateTimerContent(milliseconds){
  let x = milliseconds / (1000 * 60 * 60)
  let hoursRemain = Math.floor(x)
  let minutesRemain = Math.floor((x % hoursRemain) * 60)
  let secondsRemain = Math.floor((((x % hoursRemain) * 60) % minutesRemain) * 60)
  timer.textContent =`${format(hoursRemain)} hrs  ${format(minutesRemain)} mins  ${format(secondsRemain)} sec`

}

function format(num){
  const str = num.toString()
  return str.length <= 1 ? `0${str}` : str
}

function getMillsRemaining(a,b){
  return Math.abs(a.getTime() - b.getTime())
}

function covertMillToDays(num){
  return num / (1000 * 60 * 60 * 24)
}

function roundUp(num){
  return Math.ceil(num)
}


