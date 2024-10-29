// Mobile menu

mobile = document.querySelector(".mobile-menu")
mobile.onclick = function () {
    navbar = document.querySelector("nav")
    navbar.classList.toggle("active")
}

/* 
Armazena o mobile menu (classe que contem as "Linhas")
Quando o mobile menu receber o click a funcao no bloco sera executada
Armazena a "nav" em uma variavel
Adiciona a funcao classlist toggle à variavel navbar (obs.: Classlist neste caso serve para alterar a classe como um interruptor)
*/

//Select Menu
const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

/* 
Armazena as classes em suas respectivas variaveis
*/

//show & hide options list
select.addEventListener("click", () => {
    options_list.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

/* 
Adiciona um evento de CLICK na variavel SELECT e segue com um FUNCAO ANONIMA
Aplica a variavel OPTIONS-LIST a propriedade TOGGLE com ativacao na classe active
Realiza uma busca da classe .FA-ANGLE-DOWN na classe/variavel "pai" SELECT e muda para FA-ANGLE-UP quando evento de click é acionado
*/

//select option
options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((option) => { option.classList.remove('selected') });
        select.querySelector("span").innerHTML = option.innerHTML;
        option.classList.add("selected");
        options_list.classList.toggle("active");
        select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
    });
});

/* 
Informa que a funcao anonima a seguir deve ser aplicada em cada elemento da classe OPTION, ou seja, cada elemento com esta classe terá alteracoes.
Adiciona como parametro cada OPTION que poderia ser qualquer nome, serve para representar cada option singularmente
Adiciona evento de click para OPTION e cria uma funcao anonima para executar
Remove SELECTED que é uma meta classe CSS. isso ocorre para que o efeito de ser selecionado fique somente na linha que realmente foi selecionada
Realiza um QuerySelector na classe SELECT buscando por SPAN e altera o texto presente para o texto da option, que é a opcao selecionada
adiciona a classe selected para o OPTION que foi selecionada, passando o efeito para ela
Adiciona a propriedade TOGGLE na classe OPTIONS-LIST que armazena o container geral com todas as options
Altera a seta para cima
*/


// Função para ocultar os cartões ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const hiddenCards = document.querySelectorAll('.hidden-cards');
    hiddenCards.forEach(card => {
        card.classList.add('hidden');
    });
});

/* 
Adiciona um evento ao documento para quando a pagina é carregada e cria uma funcao anônima
Armazena a classe hiddenCards em uma variavel
Seleciona cada cartao com a classe HIDDENCARDS individualmente
Adiciona a classe HIDDEN em cada CARD
*/

// Alterna a visibilidade dos cartões ao clicar no botão
document.getElementById('toggle-cards-btn').addEventListener('click', function () {
    const hiddenCards = document.querySelectorAll('.hidden-cards');
    const toggleBtn = document.getElementById('toggle-cards-btn');

    hiddenCards.forEach(card => {
        card.classList.toggle('hidden');
    });

    toggleBtn.classList.toggle('active');

    const anyHidden = Array.from(hiddenCards).some(card => card.classList.contains('hidden'));

    if (anyHidden) {
        this.innerText = "Conheça mais sobre nossos serviços";

    } else {
        this.innerText = "Ocultar serviços";
    }
});

/* 
Busca o ID TOGGLE-CARDS-BTN e adiciona um evento de click com uma funcao anonima, 
cria a variavel HIDDENCARDS e armazena sua respectiva classe 
cria a variavel toggleButton e armazena sua respectiva classe

Seleciona individualmente cada cartao com a classe hiddencards e troca para a classe HIDDEN
troca a classe do TOGGLEBTN para ACTIVE

converte HIDDENCARDS que é uma nodelist em um array para que possa ser usado o metodo SOME que é do array
caso algum CARD desta CLASSLIST conter a classe HIDDEN ativa. armazena o resultado na variavel ANYHIDDEN
*/


//second try

const box = document.querySelector('.row');
const imagens = document.querySelectorAll('.row img');

// Duplicando as imagens para criar um loop
box.innerHTML += box.innerHTML;

let contador = 0;

function slider() {
    contador++;

    if (contador > imagens.length) {
        // Reinicia o contador e a posição do slider para a primeira imagem
        contador = 1;
        box.style.transition = 'none'; // Remove a transição para reiniciar de forma suave
        box.style.transform = `translateX(0px)`;
        setTimeout(() => {
            box.style.transition = 'transform 0.5s ease'; // Restaura a transição após o reset
        }, 20);
    }

    box.style.transform = `translateX(${-contador * 150}px)`;
}

setInterval(slider, 800);


//Redirecinamento por selecao de opcao - main

var selectedOption = "";  //Armazena opcao selecionada pelo usuario


document.querySelectorAll('.option').forEach(function (option) {
    option.addEventListener('click', function () {
        // Armazena o texto da opção clicada
        selectedOption = option.innerHTML;
        console.log(selectedOption)
    });
});


document.querySelector('.button-submit').addEventListener('click', function () {
    switch (selectedOption) {
        case "Seguro de Automovel":
        case "Seguro Residencial":
        case "Seguro de Vida Individual":
        case "Seguro de vida Empresarial":
        case "Seguro Acidentes Pessoais":
        case "Seguro Condomínio":
        case "Seguro Aluguel":
        case "Seguro de Bike":
        case "Seguro Viagem":
        case "Seguro Empresarial":
            window.location.href = "https://lojacorr.aggilizador.com.br/mazzolaseguros?ref=6075";
            break
        case "Seguro Saúde":
            window.location.href = "https://wa.me/5511999147320?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20seguro%20de%20saude%20.%20Poderia%20me%20auxiliar?"
            break
        case "Seguro de Responsabilidade Civil Geral":
            window.location.href = "https://wa.me/5511999147320?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Responsabilidade%20Civil%20Geral%20.%20Poderia%20me%20auxiliar?"
            break
        case "Seguro de Responsabilidade Civil Profissional":
            window.location.href = "https://wa.me/5511999147320?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Responsabilidade%20Civil%20Profissional%20.%20Poderia%20me%20auxiliar?"
            break
        case "Seguro de Previdência Privada":
            window.location.href = "https://wa.me/5511999147320?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Previdencia%20Privada%20.%20Poderia%20me%20auxiliar?"
            break
        case "Seguro de Proteção Financeira":
            window.location.href = "https://wa.me/5511999147320?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Protecao%20Financeira%20.%20Poderia%20me%20auxiliar?"
            break
        case "Seguro de Equipamentos":
            window.location.href = "https://wa.me/5511999147320?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Equipamentos%20.%20Poderia%20me%20auxiliar?"
            break
        case "Seguro de Celular":
            window.location.href = "https://wa.me/5511999147320?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Celular%20.%20Poderia%20me%20auxiliar?"
            break
        case "Seguro de Transporte":
            window.location.href = "https://wa.me/5511999147320?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Seguro%20de%20Transporte%20.%20Poderia%20me%20auxiliar?"
            break
        case "Consórcio Diversos":
            window.location.href = "https://wa.me/5511999147320?text=Olá%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20Consorcio%20Diversos%20.%20Poderia%20me%20auxiliar?"
            break

        default:
            alert("Opção inválida ou não selecionada. Favor, selecionar opcao.");
    }
});

