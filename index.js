
import Dog from "./Dog.js";
import dogsData from "./data.js";
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
document.getElementById("accept-button").addEventListener(`click`, yes)
document.getElementById("reject-button").addEventListener('click', no)
render()

function render() {
    document.getElementById(`card`).innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex+=1
    if(currentDogIndex == 3){ 
        currentDogIndex = 0
    }
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
}


function yes() {

    setTimeout(()=>{document.getElementById("reject-button").disabled=true},500)
     currentDog.setMatchStatus(true)

       document.getElementById("nope-stamp").style.display="none"
     document.getElementById("like-stamp").style.display="block"
     setTimeout(()=>{
         document.getElementById("like-stamp").style.display="none"
         document.getElementById("reject-button").disabled=false
         getNewDog()
         },1500)
}

function no() {
    
     setTimeout(()=>{document.getElementById("accept-button").disabled=true},500)
    currentDog.setMatchStatus(false)
      document.getElementById("nope-stamp").style.display="block"
      document.getElementById("like-stamp").style.display="none"
     setTimeout(()=>{
         document.getElementById("nope-stamp").style.display="none"
          document.getElementById("accept-button").disabled=false
         getNewDog()},1500)
}



