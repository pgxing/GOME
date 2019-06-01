define(['query'], () => {
    function fn() {
        function Banner() {
            this.bannerBox = $('.bannerBox');
            this.imgBox = $('.bannerImgs');
            this.img = $('.bannerShow img');
            this.prev = $('.bannerShow span').eq(0);
            this.next = $('.bannerShow span').eq(1);
            this.radiusBox = $('.radiusBox');
            this.show = $('.bannerShow');
            this.count = 0;
            this.timer = null;
            this.init();
        }
        Banner.prototype = {
            init: function () {
                this.autoPlay();
                this.addradius();
                this.eventBind();
            },
            imgshow: function () {
                this.img.eq(this.count).addClass('toshow').siblings().removeClass('toshow')
            },
            prevImg: function () {
                if (this.count <= 0) {
                    this.count = this.img.length - 1;
                } else {
                    this.count--;
                }
                this.changecolor();
                this.imgshow();
                this.changestyle();

            },
            nextImg: function () {
                if (this.count >= this.img.length - 1) {
                    this.count = 0;
                } else {
                    this.count++;
                }
                this.changecolor();
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
                for (var i = 0; i < this.img.length; i++) {
                    var creatli = $('<li></li>')
                    this.radiusBox.append(creatli);
                }
                //给第一个添加样式
                $('.radiusBox li:first').addClass('active');
            },
            changestyle: function () {
                $('.radiusBox li').eq(this.count).addClass('active').siblings().removeClass('active')
            },
            changeRadius: function (index) {
                $('.radiusBox li').eq(index).addClass('active').siblings().removeClass('active')
            },
            changecolor: function () {
                switch (this.count) {
                    case 1:
                        this.bannerBox.css('background', '#fcc1b3');
                        break;
                    case 2:
                        this.bannerBox.css('background', '#ed6593');
                        break;
                    case 3:
                        this.bannerBox.css('background', '#061340');
                        break;
                    case 4:
                        this.bannerBox.css('background', '#a13533');
                        break;
                    case 5:
                        this.bannerBox.css('background', '#80f0fb');
                        break;
                    case 6:
                        this.bannerBox.css('background', '#5e23bd');
                        break;
                    case 7:
                        this.bannerBox.css('background', '#2f422c');
                        break;
                    default:
                        this.bannerBox.css('background', '#072237')
                }
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
                $('.radiusBox li').mouseover(function () {
                    var index = $(this).index()
                    _this.changeRadius(index)
                    _this.count = index;
                    _this.imgshow();
                    _this.changecolor()
                })
            }
        }
        new Banner();
    }
    return {
        init: fn
    }
})