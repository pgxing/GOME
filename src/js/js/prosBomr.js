define(['query'], () => {
    function fn() {
        function ProsBomr() {
            this.images = $('.prosRight img');
            //分别对li获取，一起获取的话，无法准确选中某个li，因为它们不再同一个元素之下
            this.oliOne = $('.liOne li');
            this.oliTwo = $('.liTwo li');
            this.oliThree = $('.liThree li');
            this.oliFour = $('.liFour li');
            this.oliFive = $('.liFive li');
            this.prosChose = $('.prosChose');
            this.count = 0;
            this.timer = null;
            this.init();
        }
        ProsBomr.prototype = {
            init: function () {
                this.eventBind();
            },
            prosChosed : function(ele,index){
                //需求：鼠标滑过第一块时，显示第一块窗口，鼠标滑过后几个li时，显示第二个人窗口，第二个窗口时用来渲染的窗口
                //如果下标>1就让它为一，如果是0，就让他是0
                
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
                this.images.on('mouseover',function(){
                    $(this).stop(true).animate({
                               opacity : '0.7'
                           },500).animate({
                               opacity : '1'
                           },500)
                })
                this.oliOne.on('mouseover',function(){
                    let index = $(this).index()
                    index = index >= 1 ? 1 : index;
                    _this.prosChosed($(this),index)
                })
                this.oliTwo.on('mouseover',function(){
                    let index = $(this).index()
                    index = index >= 1 ? 3 : 2;
                    _this.prosChosed($(this),index)
                })
                this.oliThree.on('mouseover',function(){
                    let index = $(this).index()
                    index = index >= 1 ? 5 : 4;
                    _this.prosChosed($(this),index)
                })
                this.oliFour.on('mouseover',function(){
                    let index = $(this).index()
                    index = index >= 1 ? 7 : 6;
                    _this.prosChosed($(this),index)
                })
                this.oliFive.on('mouseover',function(){
                    let index = $(this).index()
                    index = index >= 1 ? 9 : 8;
                    _this.prosChosed($(this),index)
                })
            }
        }
        new ProsBomr();
    }
    return {
        init: fn
    }
})