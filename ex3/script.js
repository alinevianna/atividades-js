function criarItem() {
    const itemDigitado = document.querySelector("#item").value
    const lista = document.querySelector("#lista");
    lista.innerHTML += `<li>${itemDigitado}</li>`;
}