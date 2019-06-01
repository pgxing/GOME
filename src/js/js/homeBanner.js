define(['query'], () => {
    function fn() {
        function HomeBanner() {
            this.img = $('.homebanner img');
            this.prev = $('.homebanner span').eq(0);
            this.next = $('.homebanner span').eq(1);
            this.radiusBox = $('.homeradius');
            this.show = $('.homebanner');
            this.count = 0;
            this.timer = null;
            this.init();
        }
        HomeBanner.prototype = {
            init: function () {
                this.autoPlay();
                this.addradius();
                this.eventBind();
            },
            imgshow: function () {
                this.img.eq(this.count).addClass('toshows').siblings().removeClass('toshows')
            },
            prevImg: function () {
                if (this.count <= 0) {
                    this.count = 1;
                } else {
                    this.count--;
                }
                this.imgshow();
                this.changestyle();

            },
            nextImg: function () {
                if (this.count >= 1) {
                    this.count = 0;
                } else {
                    this.count++;
                }
                this.imgshow();
                this.changestyle();
                // this.changecolor();
            },
            autoPlay: function () {
                var _this = this;
                this.timer = setInterval(function () {
                    _this.nextImg();
                }, 2000)
            },
            addradius: function () {
                for (var i = 0; i < 2; i++) {
                    var creatli = $('<li></li>')
                    this.radiusBox.append(creatli);
                }
                //给第一个添加样式
                $('.homeradius li:first').addClass('active');
            },
            changestyle: function () {
                $('.homeradius li').eq(this.count).addClass('active').siblings().removeClass('active')
            },
            changeRadius: function (index) {
                $('.homeradius li').eq(index).addClass('active').siblings().removeClass('active')
            },
            prosChosed : function(ele,index){
                this.prosChose.eq(index).addClass('proCshow').siblings().removeClass('proCshow')
                //改变li自身颜色
                ele.css({
                    'background' : '#719ef7',
                    'color' : '#fff'
                }).siblings().css({
                    'background' : 'none',
                    'color' : '#5e5e5e'
                })
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
                this.show.mouseout(function () {
                    _this.autoPlay();
                })
                $('.homeradius li').mouseover(function () {
                    var index = $(this).index()
                    _this.changeRadius(index)
                    _this.count = index;
                    _this.imgshow();
                })
            }
        }
        new HomeBanner();
    }
    return {
        init: fn
    }
})