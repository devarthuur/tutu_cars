const items = document.querySelectorAll('.item');
const indicators = document.querySelectorAll('.indicators ul li');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Função para atualizar o slider
function updateSlider(index) {
    // Remove a classe "active" de todos os itens e indicadores
    items.forEach((item, i) => {
        item.classList.remove('active');
        indicators[i].classList.remove('active');
    });

    // Adiciona a classe "active" ao item e indicador atual
    items[index].classList.add('active');
    indicators[index].classList.add('active');

    // Atualiza o número do indicador
    document.querySelector('.indicators .number').textContent = `0${index + 1}`;
}

// Função para ir para o próximo item
function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlider(currentIndex);
}

// Função para ir para o item anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlider(currentIndex);
}

// Adiciona eventos aos botões
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Adiciona eventos aos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});
