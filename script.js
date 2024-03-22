/////// PAGES TO DISPLAY AND MOBILE MENU FUNCTIONS

jQuery(document).ready(function(){

    // Function to handle pages to display
    function handlePagesToDisplay() {

        // Click event for navigation links
        $('.nav_item').each(function() {
            $(this).click(function(e) {
                e.preventDefault();
                var page = $(this).attr('id');
                fadeOutAndLoadContent(page); // You can uncomment this line once you've defined fadeOutAndLoadContent
            });
        });

        // Function to load content into the main div with fade effect
        function fadeOutAndLoadContent(page) {
            if(page === 'home') {
                location.reload();
            } else {
                $('#main_content_container').fadeOut(400, function() {
                    // Fade out the content, then load the new content from the corresponding folder
                    $(this).load(page + '/' + page + '.html', function() {
                        // Fade in the new content after loading
                        $(this).fadeIn(400);
                    });
                });
            }
        }
    }

    // Call the function to handle pages to display
    handlePagesToDisplay();
    

    // Function to handle mobile menu interactions
    function handleMobileMenu() {

        // Selecting mobile hamburger button and navigation menu
        const mobileHamburger = $('.mobile_hamburguer');
        const navMenu = $('.nav_list');

        // Toggle mobile hamburger and navigation menu when hamburger button is clicked
        mobileHamburger.on('click', () => {

            // Toggle active class on hamburger button
            mobileHamburger.toggleClass('active');

            // Toggle active class on navigation menu
            navMenu.toggleClass('active');
        });

        // Handling click events for each navigation item
        $('.nav_item').each(function() {

            $(this).click(function() {
                // Remove active class from hamburger button
                mobileHamburger.removeClass('active');

                // Remove active class from navigation menu
                navMenu.removeClass('active');
            });
        });

    }

    // Call handleMobileMenu function to initialize mobile menu functionality
    handleMobileMenu(); 
    
});

/////// END



/////// HOME PAGE FUNCTIONS

jQuery(document).ready(function(){
    function initializeBannerSlider() {
        // Get the banner container and all banner sections
        const bannerSections = $(".banner_container .banner");
    
        // Set initial index
        let currentIndex = 0;
    
        // Function to update the transform property based on the current index
        function updateTransform() {
            const transformValue = -currentIndex * 100 + "%";
            bannerSections.each(function (index, section) {
                $(section).css("transform", "translateX(" + transformValue + ")");
            });
        }
    
        // Event listener for the next button
        $(".next_button").on("click", function () {
            currentIndex = (currentIndex + 1) % bannerSections.length;
            updateTransform();
        });
    
        // Event listener for the previous button
        $(".prev_button").on("click", function () {
            currentIndex = (currentIndex - 1 + bannerSections.length) % bannerSections.length;
            updateTransform();
        });
    }
    
    // Call the function to initialize the banner slider
    initializeBannerSlider();


    // Function to add slick slider to the home page carousel
    function institutoCarousel() {
        $('.carousel').slick({
            autoplay: false,
            autoplaySpeed: 2000, // Adjust the speed as needed
            dots: true, // Display navigation dots
            arrows: true // Display navigation arrows
        });
    }

    // Call the function
    institutoCarousel();

});

/////// END