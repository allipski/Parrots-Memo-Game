let cartas;
let resto;

while (resto != 0 || cartas < 1 || cartas > 14) {
    cartas = prompt("Com quantas cartas quer jogar?");
    resto = cartas % 2;
}

const loop = cartas / 2;

let fileira1 = document.querySelector(".cardfront :nth-child(1)");
let fileira2 = document.querySelector(".cardfront :nth-child(2)");

let imagens = [`<div><img src="images/bobrossparrot.gif" /></div>`, `<div><img src="images/explodyparrot.gif" /></div>`, `<div><img src="images/fiestaparrot.gif" /></div>`, `<div><img src="images/metalparrot.gif" /></div>`, `<div><img src="images/revertitparrot.gif" /></div>`, `<div><img src="images/tripletsparrot.gif" /></div>`, `<div><img src="images/unicornparrot.gif" /></div>`];

let gameSet = [];

for (let i = 0; i < loop; i++) {
    gameSet.push(imagens[i]);
}

for (let i = 0; i < loop; i++) {
    gameSet.push(imagens[i]);
}

function comparador() { 
	return Math.random() - 0.5; 
}

let gameSetRandom = gameSet.sort(comparador);

for (i = 0; i < loop; i++) {
    fileira1.innerHTML += 
    `<div class="flip-card">
        <div class="flip-card-inner" data-identifier="card" onClick = "viracarta(this)" >
            <div class="flip-card-front" data-identifier="back-face">
                <img src="images/front.png" />
            </div>
            <div class="flip-card-back" data-identifier="front-face">
                ${gameSetRandom[i]}
            </div>
        </div>
    </div> `;
    fileira2.innerHTML += 
    `<div class="flip-card">
        <div class="flip-card-inner" data-identifier="card" onClick = "viracarta(this)" >
            <div class="flip-card-front" data-identifier="back-face">
                <img src="images/front.png" />
            </div>
            <div class="flip-card-back" data-identifier="front-face">
                ${gameSetRandom[i + loop]}
            </div>
        </div>
    </div> `;
}

let contador = 0;

function viracarta(elemento) {
    if (document.querySelectorAll(".transforma").length < 2) {
        document.querySelector("antispam").classList.add("aparece");
        setTimeout(fimAntispam, 2000);
        elemento.classList.add("transforma");
        contador++;
    }
    setTimeout(verificarPonto, 2000);
}

function verificarPonto() {  
    if (document.querySelectorAll(".transforma").length === 2) {
        // let par1 = document.querySelector(".transforma:nth-of-type(1) .flip-card-back").innerHTML;
        // let par2 = document.querySelector(".transforma:nth-of-type(2) .flip-card-back").innerHTML;
        let pares = document.querySelectorAll(".transforma");
        if (pares[0].innerHTML === pares[1].innerHTML  ) {
            pares[0].classList.remove("transforma");
            pares[1].classList.remove("transforma");
            pares[0].classList.add("ponto");
            pares[1].classList.add("ponto");
        } else {
            let remover1 = document.querySelector(".transforma");
            remover1.classList.remove("transforma");
            let remover2 = document.querySelector(".transforma");
            remover2.classList.remove("transforma");
        }
        vitoria();
    }
}

function vitoria() {
    if (document.querySelectorAll(".ponto").length == cartas) {
        alert (`Você ganhou em ${contador} jogadas!`);
    }  
}

function fimAntispam() {
    document.querySelector("antispam").classList.remove("aparece");
}