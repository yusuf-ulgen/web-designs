// Modal ve profil resmi seçimi
const modal = document.getElementById("myModal");
const img = document.getElementById("profilePic");
const modalImg = document.getElementById("img01");
const closeModal = document.querySelector(".close");

// Profil resmine tıklandığında modal'ı göster
img.addEventListener("click", () => {
    modal.style.display = "flex"; 
    modalImg.src = img.src; 
});

// Modal kapanışı
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// ESC tuşuna basıldığında modal'ı kapat
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});

// İletişim bilgilerini JSON dosyasından yükle
document.addEventListener("DOMContentLoaded", function () {
    fetch('data/contact.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("name").textContent = data.name;
            document.getElementById("title").textContent = data.title;
            document.getElementById("email").textContent = `Contact: ${data.email}`;
            document.getElementById("phone").textContent = data.phone;
            
            // Sosyal medya ikonlarının linklerini güncelleme
            document.getElementById("instagram").href = data.social.instagram;
            document.getElementById("linkedin").href = data.social.linkedin;
            document.getElementById("github").href = data.social.github;
        })
        .catch(error => console.error("JSON veri yüklenemedi:", error));
});
