define(['query'], () => {
    function fn() {
        function AsideLeft() {
            this.asideLeft = $('.asideLeft');
            this.olis = $('.asideLeft li');
            this.span = $('.asideLeft span')
            this.init();
        }
        AsideLeft.prototype = {
            init: function () {
                this.bindEvent();
            },
            toFocusP : function(scrollTop,focus){
                if(scrollTop >= focus){
                    var timer = setInterval(() => {
                        scrollTop -= 60;
                        document.documentElement.scrollTop = document.body.scroll = scrollTop;
                        if (scrollTop <= focus) {
                            clearInterval(timer)
                        }
                    }, 5)
                }else{
                    var timer = setInterval(() => {
                        scrollTop += 60;
                        document.documentElement.scrollTop = document.body.scroll = scrollTop;
                        if (scrollTop >= focus) {
                            clearInterval(timer)
                        }
                    }, 5)
                }
            },
            //获取滚动条高度
            getTop: function () {
                this.scrollTop = document.documentElement.scrollTop || document.body.scroll;
                if (this.scrollTop >= 1700 && this.scrollTop <= 5100) {
                    //返回顶部按钮显示
                    this.asideLeft.css('display','block')
                } else {
                    this.asideLeft.css('display','none')
                }
            },
            setback : function(scrollTop){
                if(scrollTop >= 1820 && scrollTop <= 2420){
                    this.olis.eq(0).addClass('focus').siblings().removeClass('focus')
                }else if(scrollTop > 2420 && scrollTop <= 2700){
                    this.olis.eq(1).addClass('focus').siblings().removeClass('focus')
                }else if(scrollTop > 2700 && scrollTop <= 3520){
                    this.olis.eq(2).addClass('focus').siblings().removeClass('focus')
                }else if(scrollTop > 3520 && scrollTop <= 4200){
                    this.olis.eq(3).addClass('focus').siblings().removeClass('focus')
                }else if(scrollTop > 4200 && scrollTop <= 4720){
                    this.olis.eq(4).addClass('focus').siblings().removeClass('focus')
                }
            },
            bindEvent: function () {
                var _this = this;
                $(window).on('scroll', function () {
                    let scrollTop = document.documentElement.scrollTop || document.body.scroll;
                    _this.setback(scrollTop)
                    _this.getTop()
                })
                //点击回到顶部
                this.span.eq(0).on('click',function(){
                    // _this.toTop()
                    let scrollTop = document.documentElement.scrollTop || document.body.scroll;
                    _this.toFocusP(scrollTop,0)
                })
                //点击返回到底部
                this.span.eq(1).on('click',function(){
                    // _this.toFoot()
                    let scrollTop = document.documentElement.scrollTop || document.body.scroll;
                    _this.toFocusP(scrollTop,5300)
                })
                //点击1到1位置,并添加类名
                this.olis.eq(0).on('click',function(){
                    let scrollTop = document.documentElement.scrollTop || document.body.scroll;
                    _this.toFocusP(scrollTop,1820)
                    // setTimeout(function(){
                    //     $(this).addClass('focus').siblings().removeClass('focus')
                    //     console.log(1)
                    // },5000)
                   
                })
                //点击2到2位置
                this.olis.eq(1).on('click',function(){
                    let scrollTop = document.documentElement.scrollTop || document.body.scroll;
                    _this.toFocusP(scrollTop,2520)
                    // $(this).addClass('focus').siblings().removeClass('focus')
                })
                //点击3到3位置
                this.olis.eq(2).on('click',function(){
                    let scrollTop = document.documentElement.scrollTop || document.body.scroll;
                    _this.toFocusP(scrollTop,2800)
                    // $(this).addClass('focus').siblings().removeClass('focus')
                })
                //点击4到4位置
                this.olis.eq(3).on('click',function(){
                    let scrollTop = document.documentElement.scrollTop || document.body.scroll;
                    _this.toFocusP(scrollTop,3720)
                    // $(this).addClass('focus').siblings().removeClass('focus')
                })
                //点击5到5位置
                this.olis.eq(4).on('click',function(){
                    let scrollTop = document.documentElement.scrollTop || document.body.scroll;
                    _this.toFocusP(scrollTop,4300)
                    // $(this).addClass('focus').siblings().removeClass('focus')
                })

            }
        }
        new AsideLeft();
    }
    return {
        init: fn
    }
})