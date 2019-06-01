define(['query'], () => {
    function fn() {
        function Myserver() {
            this.imgBox = $('.imgBoxp');
            this.prev = $('.imgshow span').eq(0);
            this.next = $('.imgshow span').eq(1);
            this.distance = $('.imgBoxp .imgBox').width();
            this.show = $('.imgshow');
            this.count = 0;
            this.timer = null;
            this.init();
        }
        Myserver.prototype = {
            init: function () {
                //克隆第一张放在最后
                $('.imgBoxp img').first().clone().appendTo($('.imgBoxp'));
                //计算imgBox宽度
                this.imgBox.css('width', this.distance * $('.imgBoxp .imgBox').length)
                this.img = $('.imgBoxp img');
                this.eventBind();
            },
            imgBoxMove: function () {
                this.imgBox.stop(true).animate({
                    left: -this.distance * this.count
                }, 500)
            },
            prevImg: function () {
                if (this.count <= 0) {
                    this.imgBox.css('left', -this.distance * (this.img.length - 1));
                    this.count = this.img.length - 2;
                } else {
                    this.count--;
                }
                this.imgBoxMove();
            },
            nextImg: function () {
                if (this.count >= this.img.length - 1) {
                    this.imgBox.css('left', 0);
                    this.count = 1;
                } else {
                    this.count++;
                }
                this.imgBoxMove();
            },
            eventBind: function () {
                var _this = this;
                this.prev.click(function () {
                    _this.prevImg();
                })
                this.next.click(function () {
                    _this.nextImg();
                })
                this.show.mouseover(function () {
                    clearInterval(_this.timer);
                })
            }
        }
        new Myserver();
    }
    return {
        init: fn
    }
})