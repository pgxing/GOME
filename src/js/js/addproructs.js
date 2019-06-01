function Addproducts() {
    //获取button节点
    this.inCar = $('.tocar .inCar');
    this.init();
}
Addproducts.prototype = {
    init: function () {
        this.bindEvent();
    },
    getbrowerCookie: function () {
        //获取当前浏览器中的cookie
        //如果有就用，没有就设置一个空的对象，用来存放用户点击的信息
        var productstr = getCookie('pro');
        //如果没有
        if (!productstr) {
            this.productsInfo = {}
        } else {
            //将json字符串转换为json对象
            this.productsInfo = JSON.parse(productstr);
        }

    },
    bindEvent: function () {
        var _this = this;
        //调用getcookie的方法
        this.getbrowerCookie();
        this.inCar.on('click', function () {
            //获取当前的cookie
            var id = getCookie('temporary')
            //添加计数器。记录点击的次数
            var count = _this.productsInfo[id];
            if (!count) {
                count = 1;
            } else {
                count++;
            }
            _this.productsInfo[id] = count;
            //设置储存所有商品信息的cookie
            //将对象转为json字符串
            var productsinfoStr = JSON.stringify(_this.productsInfo);
            //设置cookie
            setCookie('pro', productsinfoStr, 10);
        })
    }
}

new Addproducts();