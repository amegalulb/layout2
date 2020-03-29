$(document).ready(function(){
    

    $('.nav__link').on('click', function(e){
        e.preventDefault();

        const href = $(this).attr('href'),
              offset = $(href).offset().top;
        

        $('body,html').animate({
            scrollTop: offset,
        }, 700);

        
    });

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.btn_right',
            prevEl: '.btn_left',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            1300: {
                slidesPerView: 3,
            },
            800: {
                slidesPerView: 2,
            },
        },
        
      });
      
    $('.btn').click(function(){
        $('.modal-window').fadeIn(400, function() {
            $('html,body').css('overflow-y','hidden');
        });
    });

    $('.modal-window').click(function(e){
        if (e.target === this){
            $(this).fadeOut(400, function() {
                $('html,body').css('overflow-y','visible');
            });
        }
     });
    
    $('.modal-window__close').click(function() {
        $('.modal-window').fadeOut(400, function() {
            $('html,body').css('overflow-y','visible');
        });
    });

    $(window).resize(function() {
        if ($(window).width() < 1024) {

            $('.burger-menu').click(function() {
                $('.header__nav').fadeIn(400, function() {
                    $('.burger-menu').addClass('opened')
                })
            });
        
            $(document).on('click', '.opened', function() {
                $('.header__nav').fadeOut(400, function() {
                    $('.burger-menu').removeClass('opened')
                })
            });
        
            $('.nav__link').click(function(e) {
                if (e.target === this){
                    $('.header__nav').fadeOut(400, function() {
                        $('.burger-menu').removeClass('opened')
                    });
                }
            });

        }
    });

    $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99"});
    
    $('form').each(function () {
        $(this).validate({
            errorPlacement(error, element) {
                return true;
            },
            focusInvalid: false,
            rules: {
                Телефон: {
                    required: true,
                },
                Имя: {
                    required: true,
                }
            },
            submitHandler(form) {
                let th = $(form);

            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: th.serialize(),
            }).done(() => {

                th.trigger('reset');
            });

            return false;
        }
    });
    });
});

