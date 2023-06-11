const btnColor = document.querySelectorAll(".btnColor")

btnColor.forEach(btn => {
    btn.addEventListener("click", cambiarColor)
})

function cambiarColor(e) {

    btnColor.forEach(btn => {
        btn.classList.remove("active")
    })

    let boton = e.target
    boton.classList.add("active")
    
    let root = document.documentElement
    let id = boton.id
    root.style.setProperty("--main-color", id);
}