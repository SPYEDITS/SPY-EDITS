document.addEventListener("DOMContentLoaded", function () {
    const clientsButton = document.querySelector(".cta2");
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.containerr');
    const loadingScreen = document.getElementById('loading-screen');
    const sidebarToggle = document.getElementById("sidebar-toggle");

   

    // Function to toggle sidebar (open/close)
    function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        if (sidebar.style.width === "250px") {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    // Event listener for clicking on the clients button
    clientsButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default anchor link behavior
        toggleSidebar();
    });

    // Event listener for changing header background on scroll
    document.addEventListener('scroll', () => {
        if (window.matchMedia('(min-width: 768px)').matches) {  
        var scroll_position = window.scrollY;
        if (scroll_position > 250) {
            header.style.backgroundColor = '#29323c';
        } else {
            header.style.backgroundColor = 'transparent';
        }
}
else{
    header.style.backgroundColor = '#29323c';
}
});

    // Event listeners for menu items to close the mobile menu
    menu_item.forEach((item) => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
    });

    // Event listener for the page to be fully loaded
    window.addEventListener('load', function () {
        // Hide the loading screen
        loadingScreen.style.display = 'none';

        // Start your site functions here
        // For example, you can call a function or perform any necessary actions to start your website's features.
    });

    // Event listener for toggling the sidebar
    sidebarToggle.addEventListener("click", toggleSidebar);
});