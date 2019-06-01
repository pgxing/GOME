define(['query'], () => {
    function fn() {
        function Setcookie() {
            this.choseData = $('.choseData');
            this.init();
        }
        Setcookie.prototype = {
            init: function () {
                this.bindEvent();
            },
            bindEvent: function () {
                //点击商品查看商品详情
                //给未来元素a设置单击事件
                $(document).on('click', '.choseData a', function () {
                    //获取当前点击元素的data的id 值
                    var id = $(this).attr('data_id')
                    console.log(id)
                    //当点击后，给浏览器设置一个临时cookie
                    setCookie('temporary',id)
                    //跳转到详情页面：需求：点击加入购物车，设置另一个cookie
                })
            }
        }
        new Setcookie();
    }
    return {
        init: fn
    }
})