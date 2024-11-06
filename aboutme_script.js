fetch('data/aboutMe.json')
    .then(response => response.json())
    .then(data => {
        // Hakkımda bölümünü doldur
        document.getElementById('hakkimda-title').innerText = data.aboutMe.hakkimda.title;
        document.getElementById('hakkimda-text').innerText = data.aboutMe.hakkimda.text;

        // Hobiler bölümünü doldur
        const hobilerBox = document.querySelector('.about-me .info-box.large-box');
        hobilerBox.querySelector('h2').innerText = data.aboutMe.hobiler.title;
        hobilerBox.querySelector('p').innerText = data.aboutMe.hobiler.text;

        // İlgi Alanları bölümünü doldur
        const ilgiAlanlarimBox = document.querySelector('.about-me .info-box:nth-child(3)');
        ilgiAlanlarimBox.querySelector('h2').innerText = data.aboutMe.ilgiAlanlarim.title;
        ilgiAlanlarimBox.querySelector('p').innerText = data.aboutMe.ilgiAlanlarim.text;
    })
    .catch(error => console.error('Error loading JSON:', error));

// Bilgileri açma/kapama işlevi
document.querySelectorAll('.info-box h2').forEach(function(title) {
    title.addEventListener('click', function() {
        const infoBox = this.parentElement;
        const currentlyActive = document.querySelector('.info-box.active');

        if (currentlyActive && currentlyActive !== infoBox) {
            currentlyActive.classList.remove('active');
            currentlyActive.querySelector('h2').style.display = 'block';
        }

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
