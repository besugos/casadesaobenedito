document.addEventListener('DOMContentLoaded', function() {

    $('.nav-link').removeClass('active');

    let currentPage = window.location.pathname;

    if (currentPage.includes('health')) {
        $('#nav-health').addClass('active');
    } else if (currentPage.includes('posts')) {
        $('#nav-posts').addClass('active');
    } else if (currentPage.includes('cabala')) {
        $('#nav-cabala').addClass('active');
    } else if (currentPage.includes('buzios')) {
        $('#nav-buzios').addClass('active');
    } else {
        $('#nav-home').addClass('active');
    }

});