function Cardrawing() {
    this.content = $('.content');
    this.init()
}
Cardrawing.prototype = {
    init: function () {
        this.getbrowerCookie()
        this.bindEvent()
    },
    //获取json信息
    gata: function () {
        var _this = this;
        axios({
            method: 'post',
            url: 'http://localhost/GOME/src/json/data.json',
            data: {}
        }).then(function (data) {
            var data = data.data1
            _this.drawing(data)

        }).catch(function (info) {
            console.log(info)
        })
    },
    getbrowerCookie: function () {
        //获取当前浏览器中的cookie
        var productstr = getCookie('pro');
        //如果有cookie就根据cookie传递的信息渲染页面
        if(productstr){
            //将json字符串转换为json对象
            this.productsInfo = JSON.parse(productstr);
        }else{
            this.productsInfo = {};   
        }
    },
    drawing : function(data){
        var str = ''
        for(key in this.productsInfo){
            for(var i = 0 ; i < data.length ; i++){
                if(key == data[i].id){
                    str += `
                        <div class="carsPro">
                            <div class="carsProL">
                                <div class="carsProLL"><input type="checkBox"></div>
                                <div class="carsProLC">
                                    <img src="${data[i].src}" alt="">
                                </div>
                                <div class="carsProLR"><a href="">${data[i].title}</a></div>
                            </div>
                            <div class="carsProR">
                                <div class="carProRl">${data[i].price}</div>
                                <div class="carProRC" data-id = "${data[i].id}">
                                    <span class="spa1">-</span>
                                    <span class="spa2">${this.productsInfo[key]}</span>
                                    <span class="spa3">+</span>
                                </div>
                                <div class="carProRR">¥ 158.00</div>
                                <div class="carProLast">
                                    <a href="##" class="delet" data-id = "${data[i].id}">删除</a>
                                    <a href="">移入收藏夹</a>
                                </div>
                            </div>
                        </div>
                    `
                }
            }
        }
        this.content.html(str)
    },
    bindEvent : function() {
            this.gata()
        }
    }
new Cardrawing()