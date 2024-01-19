let passContent = document.querySelector(`#copy`)
let btn = document.querySelector(`#gener`)
let mdpL = document.querySelector(`#mdpLength`)
let upperCase = document.querySelector(`#upperCase`)
let lowerCase = document.querySelector(`#lowerCase`)
let number = document.querySelector(`#number`)
let symbole = document.querySelector(`#symbole`)
let i = document.querySelector(`#i`)

let tabL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let tabU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let tabN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tabS = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}', '[', ']', '|', ';', ':', ',', '.', '/', '?'];


let tabF = []
let random = ()=>{
    if (upperCase.checked == true) {
        tabU.forEach(element => {
            tabF.push(element)
        });
        
    }
    if (lowerCase.checked == true) {
        tabL.forEach(element => {
            tabF.push(element)
        });
    }
    if (number.checked == true) {
        tabN.forEach(element => {
            tabF.push(element)
        });
    }
    if (symbole.checked == true) {
        tabS.forEach(element => {
            tabF.push(element)
        });
    }
}


let tabMDP = []
let a 
let b
btn.addEventListener(`click`, ()=>{
    random()
for (let index = 0; index < mdpL.value; index++) {
    a = Math.floor(Math.random() *tabF.length)
    b = tabF[a]
    tabMDP.push(b)
    
}
tabMDP.forEach(element => {
    passContent.value += element
});

})




i.addEventListener(`click`, ()=>{
    
     navigator.clipboard.writeText(passContent.value)
       }
      
)