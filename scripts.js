let cartas;
let resto;

while (resto != 0 || cartas < 1 || cartas > 14) {
    cartas = prompt("Com quantas cartas quer jogar?");
    resto = cartas % 2;
}

const loop = cartas / 2;

let front = '<div><img src="images/front.png" /></div>';
let fileiras = document.querySelectorAll(".cardfront > div");

for (let i = 0; i < loop; i++) {
    fileiras[0].innerHTML += front;
    fileiras[1].innerHTML += front;
}

let fileira1 = [];
let fileira2 = [];

let imagens = [`div><img src="images/bobrossparrot.gif" /></div>`, `div><img src="images/explodyparrot.gif" /></div>`, `div><img src="images/fiestaparrot.gif" /></div>`, `div><img src="images/metalparrot.gif" /></div>`, `div><img src="images/revertitparrot.gif" /></div>`, `div><img src="images/tripletsparrot.gif" /></div>`, `div><img src="images/unicornparrot.gif" /></div>`];