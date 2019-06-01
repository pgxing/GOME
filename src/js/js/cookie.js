//设置cookie
function setCookie(cName,cVal,expires){
    //获取当前时间
    var d = new Date();
    //设置过期时间
    d.setDate(d.getDate() + expires);
    document.cookie = cName + "=" + cVal + ";path=/;" + "expires=" + d.toGMTString();//path:/设置成根目录下的cookie;
}

//读取cookie
function getCookie(cName){
    //查询所有cookie
    var str = document.cookie;
    //把字符串转换成数组
    var arr = str.split("; ");
    //遍历数组
    for(var i = 0 , k = arr.length ; i < k ; i++){
        //将拿出的字符串再分割成数组
        var itmes = arr[i].split("=");
        if(itmes[0] == cName){
            return itmes[1];
        }
    }
}

//删除cookie
function delCookie(cName){
    setCookie(cName,null,-1);
}