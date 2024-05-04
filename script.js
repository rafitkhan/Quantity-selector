let remove = document.querySelector('.remove')
let number = document.querySelector('.number')
let add    = document.querySelector('.add')
let i      = 1

number.innerHTML = 1

add.addEventListener('click',()=>{
    i++
    number.innerHTML = i
})
remove.addEventListener('click',()=>{
    i--
    number.innerHTML = i
})