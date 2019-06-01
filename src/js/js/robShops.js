define(['query'], () => {
    function fn() {
        function Robshops() {
            this.robTime = $('.robTime time');
            this.robBom = $('.robBomc');
            this.robspa = $('.robspa');
            this.count = 1;
            this.timer = null;
            this.init()
        }
        Robshops.prototype = {
            init: function () {
                this.countdown()
                this.bindEvent()
                this.getData()
            },
            countdown: function () {
                var _this = this
                setInterval(() => {
                    var nowdate = new Date();
                    var futureDate = new Date("2019-10-1 00:00:00");
                    var ms = futureDate.getTime() - nowdate.getTime();
                    var
                        hours = parseInt(ms % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
                        minitues = parseInt(ms % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60)),
                        seconds = parseInt(ms % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000);
                    _this.robTime.html(`
                        <span>${_this.zerofill(hours)}</span>
                        <i>:</i>
                        <span>${_this.zerofill(minitues)}</span>
                        <i>:</i>
                        <span>${_this.zerofill(seconds)}</span>`
                    )
                    // 到时停止
                    if (ms < 0) {
                        clearInterval(_this.timer)
                    }
                },1000)

            },
            //补零
            zerofill : function(num){
                return num < 10 ? "0" + num : num ;
            },
            getData : function(){
                var _this  = this;
                axios({
                    method : 'post',
                    url : 'http://localhost/GOME/src/json/robShops.json',
                    data : {}
                }).then((data) => {
                    
                    var product = data.product;
                    //线渲染初始页面
                    _this.changeinfo(product)
                    _this.robspa.eq(0).on('click',function(){
                        if(_this.count <= 1){
                            _this.count = 2;
                        }else{
                            _this.count--;
                        }
                        _this.changeinfo(product)
                    })
                    _this.robspa.eq(1).on('click',function(){
                        if(_this.count >= product.length / 4){
                            _this.count = 1;
                        }else{
                            _this.count++;
                        }
                        _this.changeinfo(product)
                    })

                }).catch((info) => {
                    console.log(info)
                })
            },
            changeinfo : function(product){
                //四个一批
                var str = ""
                for(var i = (this.count - 1) * 4 ;i < Math.min(product.length,this.count * 4) ; i++){
                    str += `
                    <div>
                        <img src="${product[i].img}" alt="">
                        <div>
                            <span>${product[i].nowprice}</span>
                            <span>${product[i].oldprice}</span>
                        </div>
                        <h3>${product[i].title}</h3>
                    </div>
                    `
                }
                this.robBom.html(str);
            },
            bindEvent : function(){
                
            }
        }
        new Robshops()
    }
    return {
        init: fn
    }
})