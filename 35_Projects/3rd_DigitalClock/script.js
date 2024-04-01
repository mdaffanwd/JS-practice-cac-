const clock = document.querySelector('.clock')

setInterval(() => {
    const time = new Date().toLocaleTimeString()
    clock.innerText = `${time}`
}, 1000);