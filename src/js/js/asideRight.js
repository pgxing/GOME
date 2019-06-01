define(['query'], () => {
    function fn() {
        function asideRight() {
            this.allLi = $('.asideRight li');
            this.img = $('.asideBom img');
            this.goTop = $('.goTop')
            this.flag = true;
            // this.timer = null;
            this.init();
        }
        asideRight.prototype = {
            init: function () {
                this.autoShow()
                this.bindEvent();
            },
            //获取滚动条高度
            toTop: function () {
                // var _this = this;
                //获取当前滚动条高度
                var scrollTop = document.documentElement.scrollTop || document.body.scroll;
                //设置滚动条减小
                var timer = setInterval(() => {
                    //每段时间让scrollTop递减
                    scrollTop -= 30;
                    //设置滚动条高度
                    document.documentElement.scrollTop = document.body.scroll = scrollTop;
                    //关闭定时器
                    if (scrollTop <= 0) {
                        clearInterval(timer)
                    }
                }, 10)
            },
            autoShow: function () {
                var _this = this;
                
                clearInterval(this.timer)
                this.timer = setInterval(function(){
                    if (_this.flag){
                        _this.img.stop(true).animate({
                            'left' : '-142px'
                        })
                        _this.flag = false;
                    }else{
                        _this.img.stop(true).animate({
                            'left' : '0'
                        })
                        _this.flag = true;
                    }
                },3000)
                //console.log(_this,22222)
                // console.log(this.timer)
            },
            bindEvent: function () {
                var _this = this;
                this.allLi.on({
                    'mouseover': function () {
                        $(this).find('p').stop(true).animate({
                            'left': '-78'
                        })
                        $(this).find('img').stop(true).animate({
                            'left': '-142'
                        })
                        
                    },
                    'mouseout': function () {
                        $(this).find('p').stop(true).animate({
                            'left': '0'
                        })
                        $(this).find('img').stop(true).animate({
                            'left': '0'
                        })
                    },
                })
                this.goTop.on('click', function () {
                    _this.toTop();
                })
                //console.log(_this.timer)
                this.img.on({
                    'mouseover': function(){
                        clearInterval(_this.timer)
                        //console.log(11111);
                    },
                    'mouseout' : function(){
                        _this.autoShow()
                    }
                })

            }
        }
        new asideRight();
    }
    return {
        init: fn
    }
})