    const burgerBtn = document.querySelector(".burger-btn")
    const closebtn = document.querySelector(".flow-bar__close")
    const flowbar = document.querySelector(".flow-bar")



    burgerBtn.addEventListener("click", function() {
        burgerBtn.classList.add("hidden")
        closebtn.classList.remove("hidden")
        flowbar.classList.remove("flow-bar__remove")
        flowbar.classList.add("flow-bar__add")
    })
    closebtn.addEventListener("click", function() {
        burgerBtn.classList.remove("hidden")
        closebtn.classList.add("hidden")
        flowbar.classList.add("flow-bar__remove")
        flowbar.classList.remove("flow-bar__add")
    })