const btn = document.getElementById('btn');
const debounce = (func) => {
    let timer;
    return (...args) => {
        if(!timer){
            func.apply(this, args)
        }
        clearTimeout(timer)
        timer = setTimeout(()=>{
            timer = null
        }, 1000)
    }
}

const btnAction = () => {
    console.log('Hello')
}

btn.addEventListener('click', debounce(btnAction))

