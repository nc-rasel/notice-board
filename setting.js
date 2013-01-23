/*!  NoticeBoard script

MenuAutoActive
---------------------------------------------*/
(function($) {

    $.fn.NoticeBoard = function() {


        // Set a timeout
        var timeOut = setTimeout(nextNotice, 5000);

        // pause on hover
        $('.noticeboard').hover(

        function() {
            clearTimeout(timeOut);
        }, function() {
            timeOut = setTimeout(nextNotice, 5000);
        });

        // Next notice function called on timeout or click
        //set a flag that use to be an oberver to listen when the fadeIn done
        var flag = true;
        function nextNotice(event) {
            if(!flag){
                return false;
            }
            clearTimeout(timeOut);
            
            flag = false;
            timeOut = setTimeout(nextNotice, 5000);

            if ($('.noticeboard span:visible').is('.noticeboard span:last-child')) {
                $('.noticeboard span:visible').fadeOut(300);
                $('.noticeboard span:first-child').fadeIn("slow",function(){
                    flag = true;
                });
            }
            else {
                $('.noticeboard span:visible').fadeOut(300).next().fadeIn("slow",function(){
                    flag = true;
                });
            }
            return false;
        }

        $('#notice-next').click(nextNotice);
        $('#notice-prev').click(function(event) {
            
            if(!flag){
                return false;
            }
            clearTimeout(timeOut);
            
            flag = false;
            timeOut = setTimeout(nextNotice, 5000);


            if ($('.noticeboard span:visible').is('.noticeboard span:first-child')) {
                $('.noticeboard span:visible').fadeOut(300);
                $('.noticeboard span:last-child').fadeIn("slow",function(){
                    flag = true;
                });
            }
            else {
                 $('.noticeboard span:visible').fadeOut(300).prev().fadeIn("slow",function(){
                    flag = true;
                });
            }
            return false;

        });

    };

/*!  
---------------------------------------------*/

})(jQuery);

/*!  OnLoad
---------------------------------------------*/
$(document).ready(function() {

    $('.noticeboard span').hide();
    $('.noticeboard span:first').show();
    $('.noticeboard').NoticeBoard();

});
