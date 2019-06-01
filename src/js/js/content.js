define(['query'], () => {
    function fn() {
        function Content() {
            this.Contents = $('.contents')
            this.Oli = this.Contents.children('li')
            this.oA = this.Oli.find('a')
            this.init()
        }
        Content.prototype = {
            init: function () {
                this.bindEvent();
            },
            //ele是当前鼠标指向的li的下标
            changestyle: function (ele) {
                //让鼠标指上的li的子元素显示出来
                //this.Oli.eq(ele)当前指向的元素
                this.Oli.eq(ele).children('div').css('display', 'block');
                //让所有li中不包含鼠标指向元素的其他元素隐藏
                this.Oli.not(this.Oli.eq(ele)).children('div').css('display', 'none')
            },
            backstyle: function (ele) {
                this.Oli.children('div').css('display', 'none')
            },
            bindEvent: function () {
                var _this = this;
                this.Oli.on({
                    'mouseover': function () {
                        _this.changestyle($(this).index())
                    },
                    'mouseout': function () {
                        _this.backstyle($(this))
                    }
                })
            }
        }

        new Content();
    }
    return {
        init: fn
    }
})