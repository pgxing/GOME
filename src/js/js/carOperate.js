function Caroperate(){
    //全选按钮
    this.prosMenuCk = $('.prosMenu input');
    //内容区域所有选择框
    this.contentCk = $('.content input');
    //添加或减少商品数量按钮
    this.spans = $('.carProRC span');
    console.log(this.spans)
    this.init()
}
Caroperate.prototype = {
    init : function(){
        this.bindEvent()
    },
    checkbox : function(ele){
        if(ele.prop('checked')){
            //查找.content下面的所有的复选框
            $(".content :checkbox").prop("checked", true);
        }else{
            $(".content :checkbox").prop("checked", false);
        }
    },
    reduce : function(ele){
        let num = ele.next().text()
        if(num > 0){
            num--;
            ele.next().text(num)
        }
    },
    add : function(ele){
        let num = ele.prev().text()
        num++;
        ele.prev().text(num)
    },
    setcookie : function(id,val){
        //获取当前浏览器中的cookie
        var productstr = getCookie('pro');
        //如果有cookie就根据cookie传递的信息渲染页面
        //将json字符串转换为json对象
        this.productsInfo = JSON.parse(productstr);
        //对cookie进行设置
        this.productsInfo[id] = val;
        //转换为字符串
        this.productsinfoStr = JSON.stringify(this.productsInfo);
        setCookie('pro',this.productsinfoStr,10)
    },
    reduceCookie : function(id){
         //获取当前浏览器中的cookie
         var productstr = getCookie('pro');
         //如果有cookie就根据cookie传递的信息渲染页面
         //将json字符串转换为json对象
         this.productsInfo = JSON.parse(productstr);
         //对cookie进行设置
         delete this.productsInfo[id]
         //转换为字符串
         this.productsinfoStr = JSON.stringify(this.productsInfo);
         setCookie('pro',this.productsinfoStr,10)
    },
    bindEvent : function(){
        var _this = this
        this.prosMenuCk.on('click',function(){
            _this.checkbox($(this))
        })
        $(document).on('click','.carProRC .spa1',function(){
            _this.reduce($(this))
            //获取当前商品的id 
            let id = $(this).parent().attr('data-id')
            let val = $(this).next().text()
            _this.setcookie(id,val)
        })
        $(document).on('click','.carProRC .spa3',function(){
            _this.add($(this))
            //获取当前商品的id 
            let id = $(this).parent().attr('data-id')
            let val = $(this).prev().text()
            _this.setcookie(id,val)
        })
        $(document).on('click','.delet',function(){
            console.log($(this).parents('.carsPro'))
            $(this).parents('.carsPro').remove()
            let id = $(this).attr('data-id')
            _this.reduceCookie(id)


        })

    }
}
new Caroperate()