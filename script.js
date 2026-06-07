const boton = document.getElementById("btnLove");

boton.addEventListener("click", () => {

    for(let i = 0; i < 25; i++){

        const corazon = document.createElement("div");

        corazon.classList.add("corazon");

        corazon.innerHTML = "❤️";

        corazon.style.left =
        Math.random() * window.innerWidth + "px";

        corazon.style.top =
        window.innerHeight - 100 + "px";

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 3000);

    }

});