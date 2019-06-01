require.config({
    baseUrl : '../js/',
    paths : {
        //配置得各个模块
        'query' : 'lib/jquery-1.11.3.min',
        'car' : 'js/car',
        'changetitle' : 'js/changetitle',
        'content' : 'js/content',
        'header' : 'js/header',
        'myserver' : 'js/myserver',
        'closenews' : 'js/closenews',
        'asideRight' : 'js/asideRight',
        'GlassImg' : 'js/GlassImg'
    }
    //非AMD规范得模块
    //shim:{}
})

require(['car','changetitle','content','header',
    'myserver','closenews','asideRight','GlassImg'],(a,b,c,d,e,f,g,h) => {
    a.init();
    b.init();
    c.init();
    d.init();
    e.init();
    f.init();
    g.init();
    h.init()
})