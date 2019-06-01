define(['query'], () => {
    function fn() {
        function Mounting() {
            this.mounting = $('.mounting');
            this.Boxconl = $('.Boxconl');
            this.contents = $('.contents');
            this.mountmenu = $('.mountmenu');
            this.contentsCon = $('.contentCon');
            this.contentsLi = $('.contents li');
            this.init();
        }
        Mounting.prototype = {
            init: function () {
                this.bindEvent()
            },
            //获取滚动条高度
            getscrollTop: function () {
                this.scrollTop = document.documentElement.scrollTop || document.body.scroll;
                if (this.scrollTop >= 750) {
                    this.mounting.css('display', 'block');
                    this.contents.css({
                        'display': 'none',
                        'top': this.scrollTop - 226
                    });
                    this.Boxconl.css({
                        'top' : this.scrollTop - 147,
                        'z-index' : '1000'
                    });

                } else {
                    this.mounting.css('display', 'none');
                    this.contents.css({
                        'display': 'block',
                        'top': 0
                    });
                    this.Boxconl.css({
                        'top': 0,
                        'z-index' : '10'
                    });
                }
            },
            bindEvent: function () {
                var _this = this;
                $(window).scroll(function () {
                    _this.getscrollTop()
                })
                this.mountmenu.on({
                    'mouseover': function () {
                        if (_this.scrollTop >= 750) {
                            _this.contents.css({
                                'display': 'block',
                                'z-index': '990'
                            })
                        }

                    },
                    'mouseout': function () {
                        if (_this.scrollTop >= 750) {
                            _this.contents.css({
                                'display': 'none',
                                'z-index': '0'
                            })
                        }

                    }
                })
                this.contents.on({
                    'mouseover': function () {
                        if (_this.scrollTop >= 750) {
                            _this.contents.css({
                                'display': 'block',
                                'z-index': '990'
                            })
                           
                        }

                    },
                    'mouseout': function () {
                        if (_this.scrollTop >= 750) {
                            _this.contents.css({
                                'display': 'none',
                                'z-index': '500'
                            })
                        }

                    }
                })
                this.contentsLi.on({
                    'mouseover' : function(){
                        $(this).find('.contentCon').css({
                            'display': 'block',
                                'z-index': '990'
                        })
                    }
                })
            }
        }
        new Mounting();
    }
    return {
        init: fn
    }
})