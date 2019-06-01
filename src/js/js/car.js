define(['query'], () => {
    function fn() {
        function Car() {
            this.cars = $('.cars');
            this.init();
        }
        Car.prototype = {
            init: function () {
                this.bindEvent();
            },
            bindEvent: function () {
                this.cars.on({
                    'mouseover': function () {
                        $(this).children('.hidecar').addClass('show')
                        $(this).find('b').html('▲')
                        $(this).children('span').css('box-shadow', '0px -8px 20px -13px #707070')

                    },
                    'mouseout': function () {
                        $(this).children('.hidecar').removeClass('show')
                        $(this).find('b').html('▼')
                        $(this).children('span').css('box-shadow', 'none')

                    }
                })
            }
        }
        new Car();
    }
    return {
        init: fn
    }
})