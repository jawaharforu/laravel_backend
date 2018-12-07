$('#content_section p').eq(0).addClass("goback");
// $('#content_section p').addClass('goback');

            $('.costumModal22').click(function(){
                //$('#costumModals').show('slide',{direction:'right'},1000);
                //$('#costumModals').toggleClass( "costumModals" );
                $('#costumModals').css('transition', '1s');
                $('#costumModals').css('right', '0');
           });
            $('.button-id-close').click(function(){
                $('#costumModals').css('transition', '1s');
                $('#costumModals').css('right', '-300px');
           });