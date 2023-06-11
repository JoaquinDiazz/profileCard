const btnColor = document.querySelectorAll(".btnColor")

btnColor.forEach(btn => {
    btn.addEventListener("click", cambiarColor)
})

function cambiarColor(e) {

    btnColor.forEach(btn => {
        btn.classList.remove("active")
    })

    e.target.classList.add("active")

    localStorage.setItem("color", e.target.id)
    let colorLS = localStorage.getItem("color")
    console.log(colorLS)
    let root = document.documentElement;
    root.style.setProperty("--main-color", colorLS);
}