define(() => {
    function fn() {
        function GlassImg() {
            this.top = document.querySelector('.detailsL .top');
            this.showImg = document.querySelector('.detailsL .top>img');
            this.glass = document.querySelector('.detailsL .glass');
            this.glassImg = document.querySelector('.detailsL .glass img');
            this.shade = document.querySelector('.detailsL .shade');
            this.bottom = document.querySelector('.detailsL .bottom');
            this.imgBox = document.querySelector('.detailsL .imgBox');
            this.Oli = document.querySelectorAll('.detailsL .imgBox li');
            this.Ospan = document.querySelectorAll('.detailsL span');
            this.distence = this.Oli[0].offsetWidth + 25;
            this.count = 0;
            this.timer = null;
            this.init();
        }
        GlassImg.prototype = {
            init: function () {
                //整合功能
                //动态设置图片盒子(imgBox)宽度
                this.imgBox.style.width = this.distence * this.Oli.length + 'px';
                this.bindEvent();
            },
            //图片移动
            moveImg: function () {
                move(this.imgBox, { 'left': -this.count * this.distence })
            },
            nextImg: function () {
                if (this.count >= this.Oli.length - 5) {
                    this.count = this.Oli.length - 5;
                } else {
                    this.count++;
                }
                this.moveImg();
            },
            preImg: function () {
                if (this.count <= 0) {
                    this.count = 0;
                } else {
                    this.count--;
                }
                this.moveImg();
            },
            //改变显示的大图的路径
            changeSrc: function (imgSrc) {
                this.showImg.src = imgSrc;
                this.glassImg.src = imgSrc;
            },
            //设置遮罩跟随鼠标移动
            shadeMove: function (e) {
              
                //获取鼠标位置计算遮罩位置
                this.l = e.clientX - this.top.offsetLeft - this.shade.offsetWidth / 2;
                this.t = e.pageY - this.top.offsetTop - this.shade.offsetHeight / 2;
                //设置范围
                this.l = this.l < 0 ? 0 : (this.l >= 250 ? 250 : this.l)
                this.t = this.t < 0 ? 0 : (this.t >= 250 ? 250 : this.t)
                //设置位置
                this.shade.style.left = this.l + 'px';
                this.shade.style.top = this.t + 'px';
                //放大图
                this.glassMove();
            },
            //放大图移动
            glassMove: function () {
                this.glassImg.style.left = -this.l * 1.4 + 'px';
                this.glassImg.style.top = -this.t * 1.4 + 'px';
            },
            show: function () {
                this.shade.style.display = 'block';
                this.glass.style.display = 'block';
            },
            hide: function () {
                this.shade.style.display = 'none';
                this.glass.style.display = 'none';
            },
            bindEvent: function () {
                //保存this,因为事件里面this指向发生改变,指向该事件，不再指向实例化对象
                var _this = this;
                //点击右边按钮下一张图片
                this.Ospan[1].onclick = function () {
                    _this.nextImg();
                }
                //点击左按钮向左翻转
                this.Ospan[0].onclick = function () {
                    _this.preImg();
                }
                for (var i = 0; i <= this.Oli.length - 1; i++) {
                    this.Oli[i].onmouseover = function () {
                        var imgSrc = this.firstElementChild.getAttribute('data_src');
                        _this.changeSrc(imgSrc);
                    }
                }
                //鼠标移动事件
                this.top.onmousemove = function (e) {
                    e = e || window.event;
                    _this.shadeMove(e);
                }
                //鼠标移上显示遮罩和放大图
                this.top.onmouseover = function () {
                    _this.show();
                }
                //隐藏
                this.top.onmouseout = function () {
                    _this.hide();
                }
            }

        }
        //实例化
        new GlassImg();
    }
    return {
        init: fn
    }
})