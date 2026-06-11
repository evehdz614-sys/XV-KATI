const fechaEvento = new Date("July 25, 2026 16:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60))
        / 1000
    );

    document.getElementById("countdown").innerHTML =
`
<div>${dias}</div>
<div>${horas}</div>
<div>${minutos}</div>
<div>${segundos}</div>
`;

}, 1000);


// MÚSICA

const btnMusica = document.getElementById("btnMusica");
const musica = document.getElementById("musica");

btnMusica.addEventListener("click", () => {

    if (musica.paused) {
        musica.play();
        btnMusica.innerHTML = "⏸ Pausar música";
    } else {
        musica.pause();
        btnMusica.innerHTML = "🎵 Reproducir música";
    }

});