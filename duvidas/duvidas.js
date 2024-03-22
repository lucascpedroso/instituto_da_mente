jQuery(document).ready(function() {

    // Function to handle the displaying of the FAQ answers
    function toggleAccordion() {
        
        // Targets all FAQs div
        $('.faq').each(function() {
            
            // Stores the current this in a variable
            const $this = $(this);

            // Adds click event listener for each question 
            $this.on('click', function() {

                // Toggles the active class in the current FAQ div to change the border
                $this.toggleClass('active');

                // Toggles the active class in the current accordion button to change the BG
                $this.find('.accordion').toggleClass('active');

                // Toggles the rotate class in the current arrow button to change the rotation
                $this.find('.accordion i').toggleClass('rotate');


                // Gets the pannel div (ANSWER DIV)
                let pannel = $this.find('.pannel');

                // Toggles the active class in the current FAQ div to show/hide the answer
                pannel.toggleClass('active');

                // Adds a slide up or down effect to the answer div
                if (pannel.hasClass('active')) {
                    pannel.slideDown();
                } else {
                    pannel.slideUp();
                }
            });
        });
    }
    
    // calls the function
    toggleAccordion();
});
