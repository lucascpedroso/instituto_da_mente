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

