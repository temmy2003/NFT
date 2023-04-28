const btnHam = document.querySelector(".hambuger")
const closeBtn = document.querySelector(".fa-circle-xmark")
const sideBar = document.querySelector(".nft")
const btnRight = document.querySelector('.pic-ham')
const rightSide = document.querySelector('.left-sec')
const rightClose = document.querySelector('.fa-arrow-left')
const users = document.querySelector('.user1')
const creators = document.querySelector('.creator')
const change = document.querySelector('.top')

btnHam.addEventListener('click', ()=>{
    // console.log('ball')
    if(sideBar.classList.contains('translate')){
        sideBar.classList.remove('translate')
    }else{
        sideBar.classList.add('translate')
    }
})

closeBtn.addEventListener('click', ()=>{
    // console.log('gall')
    sideBar.classList.remove('translate')
})

btnRight.addEventListener('click', ()=>{
    if(rightSide.classList.contains('translate')){
        rightSide.classList.remove('translate')
    }else{
        rightSide.classList.add('translate')
    }
})

rightClose.addEventListener('click', ()=>{
    rightSide.classList.remove('translate')
})


users.addEventListener('click' , function(){
    if(users.classList.contains('active')){
        users.classList.add('active')
    }else{
        users.classList.add('active')
        creators.classList.remove('active')
        change.innerHTML = 'Top User'
    }
})
creators.addEventListener('click' , function (){
    if(creators.classList.contains('active')){
        creators.classList.add('active')
    }else{
        creators.classList.add('active')
        users.classList.remove('active')
        change.innerHTML = 'Top Creators'
    }
})

window.addEventListener('click' ,function() {
    users.classList.add('active')
})
