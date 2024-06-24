/////// PAGES TO DISPLAY AND MOBILE MENU FUNCTIONS

jQuery(document).ready(function(){

    // Click event for navigation links
    $('.link-to-page').each(function() {
        $(this).click(function(e) {
            e.preventDefault();
            var page = $(this).attr('page_route');
            $('#main_content_container').fadeOut(400, function() {
                // Fade out the content, then load the new content from the corresponding folder
                $(this).load(page + '/' + page + '.html', function() {
                    // Fade in the new content after loading
                    $(this).fadeIn(400);
                });
            }); // You can uncomment this line once you've defined fadeOutAndLoadContent
        });
    });
    
});

/////// END
