define(['query'], () => {
    function fn() {
        function Header() {
            this.oLi = $('header li');
            this.init();
        }
        Header.prototype = {
            init: function () {
                this.bindEvent()
            },
            bindEvent: function () {
                this.oLi.on({
                    'mouseover': function () {
                        $(this).find('.finds').addClass('show');
                        $(this).has('div').css({
                            'background': '#fff',
                            'border-color': '#bcbcbc',
                        })
                        $(this).children('a').find('b').html('∧')
                    },
                    'mouseout': function () {
                        $(this).find('.finds').removeClass('show')
                        $(this).has('div').css({
                            'background': '#f8f8f8',
                            'border-color': '#f8f8f8'
                        })
                        $(this).children('a').children('b').html('∨')
                    },
                })
            }
        }

        new Header();
    }
    return {
        init: fn
    }
})