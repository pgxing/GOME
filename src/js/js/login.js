function Login() {
    this.loginheadl = $('.loginheadl')
    this.loginheadr = $('.loginheadr')
    this.figure = $('.loginFir')
    this.form = $('.loginSec')
    //姓名
    this.uname = $('.unameBox input')
    //mim
    this.pwd = $('.pwdBox input')
    //登录
    this.ubtn = $('.ubtnBox')
    this.init();
}
Login.prototype = {
    init: function () {
        this.bindEvent();
    },
    leftChosed : function(ele){
        ele.children('a').css('color','#f70a0a')
        this.loginheadr.children('a').css('color','#5e5e5e')
        this.figure.css('display','block')
        this.form.css('display','none')
    },
    rightChosed : function(ele){
        ele.children('a').css('color','#f70a0a')
        this.loginheadl.children('a').css('color','#5e5e5e')
        this.figure.css('display','none')
        this.form.css('display','block')
    },
    //从数据库获取信息
    getData : function(){
        var 
            uname = this.uname.val(),
            pwd = this.pwd.val()
        axios({
            method : 'post',
            url : 'http://localhost/GOME/src/php/login.php',
            data : {
                uname : uname,
                pwd : pwd
            }
        }).then(function(data){
            console.log(data)
            if(data.state == '1'){
                alert(data.info)
                location.href = 'http://localhost/GOME/src/index.html'
            }else if(data.state == '2'){
                alert(data.info + '，请重新输入')
            }else{
                alert(data.info + '，点击跳转到注册页面')
                location.href = 'http://localhost/GOME/src/html/register.html'
            }
        }).catch(function(info){
            console.log(info)
        })
    },
    bindEvent: function () {
        var _this = this;
        this.loginheadl.on('click',function(){
           _this.leftChosed($(this))
        })
        this.loginheadr.on('click',function(){
           _this.rightChosed($(this))
        })
        //点击登录
        this.ubtn.on('click',function(){
            _this.getData()
        })
    }
}
new Login();