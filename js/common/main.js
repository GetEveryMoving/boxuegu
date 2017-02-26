/**
 * Created by 熊旭文 on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',
    paths:{
        //第三方的路径配置
        jquery:'lib/jquery/jquery.min',
        bootstrap:'lib/bootstrap/js/bootstrap',
        //自己配置的路径
        userList:'js/user/list',
        userProfile:'js/user/profile',
        common:'js/common/common'
    },

    shim:{
        bootstrap:{
            deps:["jquery"]
        }
    }
});
require(['jquery','bootstrap','common']);

(function(window){
    var pathname=window.location.pathname;
    switch(pathname){
        case "/html/user/list.html":
            require(['userList']);
            break;
        case "/html/user/profile.html":
            require(['userProfile']);
            break;
    }
})(window);

