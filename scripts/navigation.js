/**
 * navigation.js - Handles mobile menu and active page highlighting 
 * Created to meet UX requirements for consistent navigation
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
   // Get hamburger menu and navigation menu elements
   const hamburger = document.getElementById('hamburger');
   const navMenu = document.getElementById('nav-menu');

   // Mobile menu toggle functionality
   if (hamburger && navMenu) {
    // Add click event to hamburger icon
    hamburger.addEventListener('click', () => {
    // Toggle active class for animation
    hamburger.classList.toggle('active');
    // Show/hide mobile menu
    navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
   }

   // Set active page in navigation 
//    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
//    const navLinks = document.querySelectorAll('.nav-link');

    let currentPage = window.location.pathname.split('/').pop();

    if (!currentPage || currentPage === '' || currentPage === 'index.html') {
        currentPage = 'index.html';
    }

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

   // Loop through all navigation links
   navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      // If this link matches current page, add active class
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
   });
});