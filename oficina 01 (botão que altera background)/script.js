function gerarCorAleatoria() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const botao = document.getElementById('mc');
const corAtual = document.getElementById('cor-atual');

botao.addEventListener('click', function() {
    const novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
    corAtual.textContent = 'Cor atual: ' + novaCor;
});

