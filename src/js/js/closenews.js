define(['query'], () => {
    function fn() {
        function CloseNew() {
            this.init()
        }
        CloseNew.prototype = {
            init: function () {
                this.bindEvent();
            },
            bindEvent: function () {
                //点击关闭顶部新闻
                $('.closenew').on('click', function () {
                    $('.headernews').remove()
                })
            }
        }
        new CloseNew()
    }




    
    return {
        init: fn
    }
})