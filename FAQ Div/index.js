const togglebtn = document.querySelector(".toggle")
const ans = document.querySelector(".answer")

togglebtn.addEventListener('click', function(e){
    if(ans.style.display == 'block'){
        togglebtn.innerHTML = '+'
        togglebtn.style.fontSize = '1.6rem'
        ans.style.display = 'none'
    }
    else{
        togglebtn.innerHTML = 'X'
        togglebtn.style.fontSize = '1rem'
        ans.style.display = 'block'
    }
    console.log(e)
})