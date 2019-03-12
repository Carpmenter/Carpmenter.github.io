$(document).ready(function () {

    $("nav li a").on('click', function(event){

        event.preventDefault();
    
        const link = $(this).attr("href");
        console.log(link);
        // Eventually remove this logic and and a color background for each project
        if (link === 'projects.html'){
            $('body').addClass('p-page');
        } else{
            $('body').removeClass('p-page');
        }
    
        window.history.pushState(null, null, link);
    
        $("nav li a").removeClass('active');
        $(this).addClass('active');
    
        $.ajax({
            url: link,
            success: function(data) {
                $('main').fadeOut(250, function() {
                    var page = $(data).filter('main').html();
                    
                    $('main').html(page);
                    $('main').fadeIn(250); 
                });
            }
            
        });
    });

});
