function Verification() {
    //获取节点
    this.span = document.querySelector(".sec span"),
        this.p = document.querySelector(".sec p"),
        this.sec = document.querySelector(".sec"),
        this.box1 = document.querySelector(".sec .box1");
        this.init()
}
Verification.prototype = {
    init: function () {
        this.bindEvent()
    },
    onmousemove: function (e,x) {
        var _this = this;
        e = e || window.event;
        //获取鼠标位置让span跟着移动
        var l = e.clientX - x - this.span.parentNode.offsetLeft - 180;
        //span边界条件
        l = l < 0 ? 0 : (l > 260 ? 260 : l);
        this.span.style.left = l + "px";
        this.box1.style.width = this.span.offsetLeft + "px";
        if (l >= 250) {
            this.box1.innerHTML = "通过验证";
            this.span.onmousedown = null;
        }
        //松开弹回去
        document.onmouseup = function () {
            _this.onmouseup(l)
        }
    },
    onmouseup: function (l) {
        document.onmousemove = null;
        if (l < 250) {
            var _this = this
            var timer = setInterval(function () {
                l--;
                _this.span.style.left = l + "px";
                _this.box1.style.width = _this.span.offsetLeft + "px";
                if (l <= 0) {
                    clearInterval(timer)
                }
            }, 5)

        }
    },
    bindEvent: function () {
        var _this = this;
        //鼠标点击span,onmousedown(前提条件)
        this.span.onmousedown = function (e) {
            e = e || window.event;
            var x = e.offsetX;
            document.onmousemove = function (e) {
                e = e || window.event;
                _this.onmousemove(e,x)
            }
        }
    }
}

new Verification()
