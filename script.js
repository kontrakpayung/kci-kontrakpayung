const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const icon = hamburgerMenu.querySelector('i'); // Ambil ikon dalam tombol hamburger

hamburgerMenu.addEventListener('click', displayMenu);
window.addEventListener('resize', handleResize);

function displayMenu() {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('absolute', 'top-20', 'w-full', 'left-0', 'bg-white', 'divide-gray-900', 'divide-y-2');
        
        // Ubah ikon hamburger menjadi X
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('absolute', 'top-20', 'w-full', 'left-0', 'bg-white', 'divide-gray-900', 'divide-y-2');
        
        // Kembalikan ikon menjadi hamburger
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}

function handleResize() {
    if (window.innerWidth >= 768) {
        // Pastikan menu tersembunyi pada layar besar
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('absolute', 'top-20', 'w-full', 'left-0', 'bg-white', 'divide-gray-900', 'divide-y-2');
        
        // Reset ikon menjadi hamburger
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}
