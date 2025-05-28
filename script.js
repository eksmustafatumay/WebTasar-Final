// Mobil menü işlevselliği
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Scroll olduğunda navbar'ı sabitle
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
    }
});

// Kampanya slider'ı için otomatik kaydırma
const campaignSlider = document.querySelector('.campaign-slider');
let isDown = false;
let startX;
let scrollLeft;

campaignSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    campaignSlider.style.cursor = 'grabbing';
    startX = e.pageX - campaignSlider.offsetLeft;
    scrollLeft = campaignSlider.scrollLeft;
});

campaignSlider.addEventListener('mouseleave', () => {
    isDown = false;
    campaignSlider.style.cursor = 'grab';
});

campaignSlider.addEventListener('mouseup', () => {
    isDown = false;
    campaignSlider.style.cursor = 'grab';
});

campaignSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - campaignSlider.offsetLeft;
    const walk = (x - startX) * 2;
    campaignSlider.scrollLeft = scrollLeft - walk;
});

// Form gönderimi
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Form verilerini al
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Burada form verilerini işleyebilir veya bir API'ye gönderebilirsiniz
    console.log('Form verileri:', data);
    
    // Formu temizle
    contactForm.reset();
    
    // Kullanıcıya geri bildirim
    alert('Mesajınız başarıyla gönderildi!');
});

// Sayfa yüklendiğinde animasyonlar
document.addEventListener('DOMContentLoaded', () => {
    // Hero section animasyonu
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
    
    // Hizmet kartları animasyonu
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });
});

// SSS Bölümü İşlevselliği
document.querySelectorAll('.sss-item').forEach(item => {
    const soru = item.querySelector('.sss-soru');
    soru.addEventListener('click', () => {
        const aktif = document.querySelector('.sss-item.active');
        if (aktif && aktif !== item) {
            aktif.classList.remove('active');
        }
        item.classList.toggle('active');
    });
});

// Numara Taşıma Formu
const numaraTasimaForm = document.querySelector('.numara-tasima-form');
if (numaraTasimaForm) {
    numaraTasimaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const numara = this.querySelector('input[type="tel"]').value;
        const tcKimlik = this.querySelector('input[type="text"]').value;
        
        // Form verilerini konsola yazdır
        console.log('Numara:', numara);
        console.log('TC Kimlik:', tcKimlik);
        
        // Form verilerini sıfırla
        this.reset();
        
        // Kullanıcıya bilgi ver
        alert('Numara taşıma talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.');
    });
} 