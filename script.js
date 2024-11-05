// Mobile menu
const mobile = document.querySelector(".mobile-menu");
mobile.onclick = function () {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("active");
};

// Select Menu
const select = document.querySelector(".select");
const optionsList = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

// Show & hide options list
select.addEventListener("click", () => {
    optionsList.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

// Select option
options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((opt) => opt.classList.remove('selected'));
        select.querySelector("span").innerHTML = option.innerHTML;
        option.classList.add("selected");
        optionsList.classList.remove("active");
        select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
    });
});

// Function to hide cards on page load
document.addEventListener('DOMContentLoaded', function () {
    const hiddenCards = document.querySelectorAll('.hidden-cards');
    hiddenCards.forEach(card => card.classList.add('hidden'));
});

// Toggle visibility of cards on button click
document.getElementById('toggle-cards-btn').addEventListener('click', function () {
    const hiddenCards = document.querySelectorAll('.hidden-cards');
    hiddenCards.forEach(card => card.classList.toggle('hidden'));

    const toggleBtn = this;
    toggleBtn.classList.toggle('active');

    const anyHidden = Array.from(hiddenCards).some(card => card.classList.contains('hidden'));

    toggleBtn.innerText = anyHidden ? "Conheça mais sobre nossos serviços" : "Ocultar serviços";
});

// Slider 
const box = document.querySelector('.row');
const imagens = document.querySelectorAll('.row img');

// Duplicating images to create a loop
box.innerHTML += box.innerHTML;
let contador = 0;

function slider() {
    contador++;

    if (contador > imagens.length) {
        contador = 1;
        box.style.transition = 'none'; // Remove transition to reset smoothly
        box.style.transform = `translateX(0px)`;
        setTimeout(() => {
            box.style.transition = 'transform 0.5s ease'; // Restore transition after reset
        }, 20);
    }

    box.style.transform = `translateX(${-contador * 150}px)`;
}

setInterval(slider, 800);


let selectedOption = ""; 

document.querySelectorAll('.option').forEach(function (option) {
    option.addEventListener('click', function () {
        selectedOption = option.innerHTML;
        console.log(selectedOption);
    });
});

const optionLinks = {
    "Seguro de Automóvel": "https://lojacorr.aggilizador.com.br/mazzolaseguros?ref=6075",
    "Seguro Residencial": "https://lojacorr.aggilizador.com.br/mazzolaseguros?ref=6075",
    "Seguro de Vida Individual": "https://lojacorr.aggilizador.com.br/mazzolaseguros?ref=6075",
    "Seguro de vida Empresarial": "https://lojacorr.aggilizador.com.br/mazzolaseguros?ref=6075",
    "Seguro Acidentes Pessoais": "https://lojacorr.aggilizador.com.br/mazzolaseguros?ref=6075",
    "Seguro Condomínio": "https://lojacorr.aggilizador.com.br/mazzolaseguros?ref=6075",
    "Seguro Aluguel": "https://lojacorr.aggilizador.com.br/mazzolaseguros?ref=6075",
    "Seguro de Bike": "https://lojacorr.aggilizador.com.br/mazzolaseguros?ref=6075",
    "Seguro Viagem": "https://lojacorr.aggilizador.com.br/mazzolaseguros?ref=6075",
    "Seguro Empresarial": "https://lojacorr.aggilizador.com.br/mazzolaseguros?ref=6075",
    "Seguro Saúde": "https://wa.me/5511997731524?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20seguro%20de%20saude%20.%20Poderia%20me%20auxiliar?",
    "Seguro de Responsabilidade Civil Geral": "https://wa.me/5511997731524?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Responsabilidade%20Civil%20Geral%20.%20Poderia%20me%20auxiliar?",
    "Seguro de Responsabilidade Civil Profissional": "https://wa.me/5511997731524?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Responsabilidade%20Civil%20Profissional%20.%20Poderia%20me%20auxiliar?",
    "Seguro de Previdência Privada": "https://wa.me/5511997731524?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Previdencia%20Privada%20.%20Poderia%20me%20auxiliar?",
    "Seguro de Proteção Financeira": "https://wa.me/5511997731524?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Protecao%20Financeira%20.%20Poderia%20me%20auxiliar?",
    "Seguro de Equipamentos": "https://wa.me/5511997731524?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Equipamentos%20.%20Poderia%20me%20auxiliar?",
    "Seguro de Celular": "https://wa.me/5511997731524?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Celular%20.%20Poderia%20me%20auxiliar?",
    "Seguro de Transporte": "https://wa.me/5511997731524?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Transporte%20.%20Poderia%20me%20auxiliar?",
    "Consórcio Diversos": "https://wa.me/5511997731524?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20Consorcio%20Diversos%20.%20Poderia%20me%20auxiliar?"
};

document.querySelector('.button-submit').addEventListener('click', function () {
    if (selectedOption && optionLinks[selectedOption]) {
        window.location.href = optionLinks[selectedOption];
    } else {
        alert("Opção inválida ou não selecionada. Favor, selecionar opcao.");
    }
});
