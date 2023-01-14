
    $(function () {
        function toggleSidebar() {
            $(".button").toggleClass("active");
            $(".sidebar").toggleClass("move-to-left");
            $(".sidebar-item").toggleClass("active");
        }
        $(".button").on("click tap", function () {
            toggleSidebar();
        });
        $(document).keyup(function (e) {
            if (e.keyCode === 27) {
                toggleSidebar();
            }
        });
    });

    $(function () {
        $(Window).scroll(function(){
            var headerTOP =  $(this).scrollTop();
            var fontTOP = $('.font').offset().top;

            if( headerTOP > fontTOP ){
                $('header').addClass('addbgc');
            }else{
                $('header').removeClass('addbgc');
            }

        });
    });


    jQuery(document).ready(function(){jQuery(".ecommerce-gallery").lightSlider({gallery:true,item:1,loop:true,thumbItem:4,thumbMargin:10,});});
   

