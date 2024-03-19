jQuery(document).ready(function(){

    // Define the loadContent function
    function loadContent(page) {
        $('#main_content_container').fadeOut(400, function() {
            // Fade out the content, then load the new content from the corresponding folder
            $(this).load(page + '/' + page + '.html', function() {
                // Fade in the new content after loading
                $(this).fadeIn(400);
            });
        });
    }

    // Function to handle pages to display
    function handlePagesToDisplay() {

        // Initial load
        loadContent('home');

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
            $('#main_content_container').fadeOut(400, function() {
                // Fade out the content, then load the new content from the corresponding folder
                $(this).load(page + '/' + page + '.html', function() {
                    // Fade in the new content after loading
                    $(this).fadeIn(400);
                });
            });
        }
    }

    // Call the function to handle pages to display
    handlePagesToDisplay();



    

    function handleMobileMenu() {
        const mobileHamburger = $('.mobile_hamburguer');
        const navMenu = $('.nav_list');

        mobileHamburger.on('click', () => {
            mobileHamburger.toggleClass('active');
            navMenu.toggleClass('active');
        });

        $('.nav_item').each(function() {
            $(this).click(function() {
                mobileHamburger.removeClass('active');
                navMenu.removeClass('active');
            });
        });

    }

    handleMobileMenu();
    
});

