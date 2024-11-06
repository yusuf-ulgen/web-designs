fetch('data/project.json')
    .then(response => response.json())
    .then(data => {
        data.projects.forEach(project => {
            const projectBox = document.getElementById(project.id);
            const descriptionElement = projectBox.querySelector('.hidden-text');
            descriptionElement.textContent = project.description;
        });
    });

// Tüm başlıklar için tıklama olayını dinle
document.querySelectorAll('.info-box .clickable-title').forEach(function(title) {
    title.addEventListener('click', function() {
        const infoBox = this.parentElement;
        const currentlyActive = document.querySelector('.info-box.active');

        // Önceden aktif olan kutunun başlığını ve metnini başlangıç haline döndür
        if (currentlyActive && currentlyActive !== infoBox) {
            currentlyActive.classList.remove('active');
            currentlyActive.querySelector('.clickable-title').style.display = 'block';
        }

        // Şu anki kutunun başlığını ve metnini güncelle
        if (!infoBox.classList.contains('active')) {
            infoBox.classList.add('active');

            setTimeout(() => {
                this.style.display = 'none';
            }, 500);
        } else {
            infoBox.classList.remove('active');
            this.style.display = 'block';
        }
    });
});
