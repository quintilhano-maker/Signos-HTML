document.addEventListener('DOMContentLoaded', () => {
    // Adiciona estrelas fixas de tamanhos variados
    for (let i = 0; i < 100; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        document.querySelector('.background-animation').appendChild(star);
    }

    // Adiciona estrelas cadentes
    setInterval(() => {
        let shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.width = '3px';
        shootingStar.style.height = '3px';
        shootingStar.style.top = `${Math.random() * 50}%`;
        shootingStar.style.left = `${Math.random() * 50}%`;
        document.querySelector('.background-animation').appendChild(shootingStar);

        // Remove a estrela cadente após a animação
        setTimeout(() => {
            shootingStar.remove();
        }, 1000);
    }, 1000); // Intervalo de 1 segundo para novas estrelas cadentes
});