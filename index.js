
const countToDate = new Date().setHours( new Date().getHours() + 24)

setInterval(()=>{

let currentDate = new Date()
timesBetweenDate = Math.ceil((countToDate - currentDate)/1000)

flipAllCards(timesBetweenDate)

},1000)

function  flipAllCards(time){

    let hoursModulo = ( time % 3600 ) 
    let minutesModulo = ( time % 3600 ) % 60 
    
    const seconds = minutesModulo
    const  minutes = Math.trunc(( hoursModulo  / 60 ) )
    const hours = Math.trunc( time / 3600 ) 

    console.log(hours , minutes , seconds)

    flip(document.querySelector("[data-hours-tens]") , ".flip-card[data-hours-tens] " ,  Math.trunc( hours / 10 ) )
    flip(document.querySelector("[data-hours-ones]") ,".flip-card[data-hours-ones] " , hours % 10 )
    flip(document.querySelector("[data-minutes-tens]") ,".flip-card[data-minutes-tens] " ,  Math.trunc( minutes / 10 ) )
    flip(document.querySelector("[data-minutes-ones]") ,".flip-card[data-minutes-ones] " , minutes % 10 )
    flip(document.querySelector("[data-seconds-tens]") ,".flip-card[data-seconds-tens] " , Math.trunc( seconds / 10 ) )
    flip(document.querySelector("[data-seconds-ones]") , ".flip-card[data-seconds-ones] ", seconds % 10 )
    
}

function flip(flipCard , flippingColumn ,  newNumber){
    
    const topHalf = document.querySelector(flippingColumn + ".top")
    const startNumber = parseInt(topHalf.textContent)
   
    if(newNumber === startNumber) return ;
    
    const bottomHalf = document.querySelector(flippingColumn + ".bottom")

    const topFlip = document.createElement("div")
    topFlip.classList.add("top-flip")
    const bottomFlip = document.createElement("div")
    bottomFlip.classList.add("bottom-flip")
    
   
    
    bottomHalf.textContent = startNumber
    topFlip.textContent = startNumber
    bottomFlip.textContent = newNumber 
     
    topFlip.addEventListener("animationstart", e =>{
        topHalf.textContent = newNumber
    })
    topFlip.addEventListener("animationend", e =>{
        topFlip.remove()
    })
    bottomFlip.addEventListener("animationend", e =>{
        bottomHalf.textContent = newNumber;
        bottomFlip.remove()
        
    })

    flipCard.append(topFlip,bottomFlip);

}


