define(['query'], () => {
    function fn() {
        function Data() {
            this.choseData = $('.choseData');
            this.oliOne = $('.liOne li');
            this.oliTwo = $('.liTwo li');
            this.oliThree = $('.liThree li');
            this.oliFour = $('.liFour li');
            this.oliFive = $('.liFive li');
            this.init();
        }
        Data.prototype = {
            init: function () {
                this.bindEvent();
                // console.log(this.choseData)
            },
            //从data.json获取数据
            getData : function(){
                var _this = this;
                axios({
                    method : 'post',
                    url : 'http://localhost/GOME/src/json/data.json',
                    data : {}
                }).then(function(data){
                    //手机
                    var data1 = data.data1
                    _this.oliOne.on('mouseover',function(){
                        if($(this).index() != 0){
                            _this.drawing($(this).index(),data1)
                        }
                    })
                    //电脑
                    var data2 = data.data2
                    _this.oliTwo.on('mouseover',function(){
                        console.log($(this).index())
                        if($(this).index() != 0){
                            _this.drawing($(this).index(),data2)
                        }
                    })
                }).catch(function(info){
                    console.log(info)
                })
            },
            //根据传入的编号渲染页面
            drawing : function(n,data1){
                var str = ''
                for(var i = (10 * (n - 1)) ; i < Math.min(data1.length,10 * n) ; i++){
                    str += `
                        <a href="${'http://localhost/GOME/src/html/details.html'}" data_id = "${data1[i].id}">
                            <img src="${data1[i].src}" alt="">
                            <h3>${data1[i].title}</h3>
                            <p>${data1[i].price}</p>
                        </a>
                    `
                }
                this.choseData.html(str)
            },
            bindEvent: function () {
                this.getData()
            }
        }
        new Data();
    }
    return {
        init: fn
    }
})