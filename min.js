const btn=document.getElementById('btn')
const loader=document.getElementById('loader')

btn.addEventListener('click',()=>{
    if(btn.innerHTML === 'play'){
        btn.innerHTML='pause'
        loader.style.setProperty("--running","paused")
    }
    else if(btn.innerHTML === 'pause'){
        btn.innerHTML='play'
        loader.style.setProperty("--running","play")
    }
})