define(['query'], () => {
    function fn() {
        function Product() {
            this.imgs = $('.prodsBom img');
            this.init();
        }
        Product.prototype = {
            init: function () {
                this.bindEvent();
            },
            bindEvent: function () {
               this.imgs.on('mouseover',function(){
                $(this).stop(true).animate({
                           opacity : '0.7'
                       },500).animate({
                           opacity : '1'
                       },500)
               })
            }
        }
        new Product();
    }
    return {
        init: fn
    }
})