var count = document.getElementById('count')
var countIncrease = document.querySelectorAll('.add-count')
var reset = document.getElementById('reset')

loadLocalStorage()
Array.from(countIncrease).forEach(button => {
    button.addEventListener("click", e => {
        increaseBy = e.target.innerHTML
        countValue = count.innerHTML
        newValue = +countValue + +increaseBy
        count.innerHTML = newValue
        setCountInLS(newValue)


    })
    
})

reset.addEventListener("click", e => {
    count.innerHTML = 0
    setCountInLS(0)
})





function setCountInLS(count){
    localStorage.setItem('count', count)
}


function loadLocalStorage(){
    count.innerHTML = localStorage.getItem('count')
}
