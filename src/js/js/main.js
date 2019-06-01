require.config({
    baseUrl : 'js/',
    paths : {
        //配置得各个模块
        'query' : 'lib/jquery-1.11.3.min',
        'banner' : 'js/banner',
        'car' : 'js/car',
        'changetitle' : 'js/changetitle',
        'content' : 'js/content',
        'header' : 'js/header',
        'myserver' : 'js/myserver',
        'closenews' : 'js/closenews',
        'product' : 'js/product',
        'robShops' : 'js/robShops',
        'mounting' : 'js/mounting',
        'prosBomr' : 'js/prosBomr',
        'cterBanner' : 'js/cterBanner',
        'phBanner' : 'js/phBanner',
        'homeBanner' : 'js/homeBanner',
        'superBanner' : 'js/superBanner',
        'carbanner' : 'js/carbanner',
        'asideRight' : 'js/asideRight',
        'asideLeft' : 'js/asideLeft',
        'data' : 'js/data',
        'setcookie' : 'js/setcookie'
    }
    //非AMD规范得模块
    //shim:{}
})

require(['banner','car','changetitle','content','header',
    'myserver','product','robShops','mounting','closenews',
    'prosBomr','cterBanner','phBanner','homeBanner','superBanner',
    'carbanner','asideRight','asideLeft','data','setcookie'],(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) => {
    a.init();
    b.init();
    c.init();
    d.init();
    e.init();
    f.init();
    g.init();
    h.init();
    i.init();
    j.init();
    k.init();
    l.init();
    m.init();
    n.init();
    o.init();
    p.init();
    q.init();
    r.init();
    s.init();
    t.init();
})