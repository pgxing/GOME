function Register(){
    this.uname = $('.registerBox .uname');
    this.upwd = $('.registerBox .upwd');
    this.btn = $('.registerBox .registerBtn');
    
    this.init()
}
Register.prototype = {
    init : function(){
        this.bindEvent();
    },
    getData : function(){
        var 
            uname = this.uname.val(),
            upwd = this.upwd.val()
        console.log(this.uname.val())
        axios({
            method : 'get',
            url : 'http://localhost/GOME/src/php/register.php',
            data : {
                uname : uname,
                upwd : upwd
            }
        }).then(function(data){
            if(data.state == '1'){
                alert(data.info + '点击跳转登录页面')
                location.href = 'http://localhost/GOME/src/html/login.html'
            }else{
                alert(data.info + '请重新输入或登录')
            }
        }).catch(function(info){
            console.log(info)
        })
    },
    bindEvent : function(){
        var _this = this;
        this.btn.on('click',function(){
            _this.getData()
        })
    }
}
new Register()