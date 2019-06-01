define(['query'], () => {
    function fn() {
        //点击切换搜索项目
        function Changetitle() {
            this.produ = $('.produ');
            this.spans = $('.hideprodu span');
            this.init()
        }
        Changetitle.prototype = {
            init: function () {
                this.bindEvent()
            },
            bindEvent: function () {
                //鼠标滑过出现
                this.produ.mouseover(function () {
                    $(this).find('.hideprodu').css('display', 'block')
                })
                //鼠标滑出隐藏
                this.produ.mouseout(function () {
                    $(this).find('.hideprodu').css('display', 'none')
                })
                this.spans.click(function () {
                    $(this).parent().parent().children('span').html($(this).html() + '∨')
                })
            }
        }
        new Changetitle()
    }
    return {
        init: fn
    }
})