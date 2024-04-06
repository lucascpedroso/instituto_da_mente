jQuery(document).ready(function($) {

    function closeFormSentPopUp() {
        $('.close_popup').on('click', () => {
            $('#form_sent_popup_wrapper').fadeOut();
        })
    }

    closeFormSentPopUp();


    // Function to check if all fields are filled
    function checkFields() {
        var allFilled = true;
        $('input[type="text"], input[type="email"], input[type="tel"], textarea').each(function() {
            if ($(this).val().trim().length === 0) {
                allFilled = false;
                return false; // exit the loop if any field is empty
            }
        });
        return allFilled;
    }

    function handleSubmitFormButton() {

        // Add event listener to all input fields and textarea
        $('input[type="text"], input[type="email"], input[type="tel"], textarea').on('input', function() {
            if (checkFields()) {
                $('button[type="submit"]').removeAttr("disabled");
            } else {
                $('button[type="submit"]').attr("disabled", "");
            }
        });
    }

    handleSubmitFormButton();




    // Handle form submission
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        if (checkFields()) {
            // Perform AJAX submission
            $.ajax({
                method: 'POST',
                url: 'https://formsubmit.co/ajax/institutodamenterm@gmail.com',
                dataType: 'json',
                accepts: 'application/json',
                data: {
                    name: $('.inputWrapper #name').val(),
                    email: $('.inputWrapper #email').val(),
                    phone: $('.inputWrapper #phone').val(),
                    message: $('.inputWrapper #message').val()
                },
                success: function(response) {
                    console.log('Form submitted successfully:', response);

                    // Opens a popup saying that the mail was sent
                    $('#form_sent_popup_wrapper').css('display', 'flex');

                    // Remove all texts from the inputs and textarea
                    $('input[type="text"], input[type="email"], input[type="tel"], textarea').val('');
                },
                error: function(xhr, status, error) {
                    console.error('Form submission failed:', error);
                }
            });
        }
    });
});