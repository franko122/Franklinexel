const  startCode = function allset() { 
    let goto = document.getElementById("goto");
    let down1 = document.getElementById("down1");
    let one2 = document.getElementById("one2") 
    let lopi = document.getElementById("lopi") 
    let nano = document.getElementById("nano") 
    let swap = document.getElementById("swap") 
    let cryptos = document.getElementById("cryptos") 
    swap.style.padding="1px"
    goto.addEventListener("click",()=>{
        down1.style.height="0vh"
        down1.style.transition="1s"
    })
    one2.addEventListener("click",()=>{
        down1.style.height="100vh"
        down1.style.transition="1s"
    }) 
    setTimeout(() => {
        lopi.style.visibility="hidden"
        lopi.style.display="none" 
    }, 500); 
    setTimeout(() => {
        nano.style.visibility="visible"
    }, 500); 
    setTimeout(() => {
        swap.style.visibility="visible"
    }, 1000); 
    setTimeout(() => {
        cryptos.style. width="80%"
        cryptos.style.transition="1s"
        cryptos.style.padding="20px"
    }, 1500); 
}
startCode()